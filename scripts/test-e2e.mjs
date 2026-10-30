import http from 'http';
import { spawn } from 'child_process';
import path from 'path';

const PORT = 5199;
const BASE_URL = `http://localhost:${PORT}`;

const routesToTest = [
  '/',
  '/about',
  '/projects',
  '/projects/ielts-learning',
  '/projects/rentflow',
  '/projects/loi-ru',
  '/services',
  '/services/landing-page',
  '/services/business-web',
  '/services/personal-portfolio',
  '/services/custom-webapp',
  '/pricing',
  '/start-project',
  '/contact',
];

const assetsToTest = [
  '/images/avatar.jpg',
  '/images/projects/ielts-learning/overview.png',
  '/images/projects/ielts-learning/reading-practice.jpg',
  '/images/projects/ielts-learning/listening-practice.jpg',
  '/images/projects/rentflow/room-management.png',
  '/images/projects/rentflow/meter-reading.png',
  '/images/projects/rentflow/invoice.png',
  '/images/projects/loi-ru/overview.png',
];

function fetchUrl(urlPath) {
  return new Promise((resolve, reject) => {
    http.get(`${BASE_URL}${urlPath}`, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data,
        });
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log(`Starting vite preview on port ${PORT}...`);
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    shell: true,
  });

  await new Promise((resolve) => {
    server.stdout.on('data', (d) => {
      const str = d.toString();
      // console.log(`[vite preview] ${str}`);
      if (str.includes('Local:')) {
        resolve();
      }
    });
    server.stderr.on('data', (d) => {
      console.error(`[vite preview err] ${d}`);
    });
    // Fallback timer
    setTimeout(resolve, 5000);
  });

  let failedCount = 0;

  console.log('\n--- 1. Testing Route Responses ---');
  for (const route of routesToTest) {
    try {
      const res = await fetchUrl(route);
      if (res.statusCode === 200 && res.data.includes('<div id="root">')) {
        console.log(`✓ [200 OK] Route: ${route}`);
      } else {
        console.error(`✗ [FAIL] Route: ${route} (status: ${res.statusCode})`);
        failedCount++;
      }
    } catch (err) {
      console.error(`✗ [ERROR] Route: ${route} - ${err.message}`);
      failedCount++;
    }
  }

  console.log('\n--- 2. Testing Static Project Assets ---');
  for (const asset of assetsToTest) {
    try {
      const res = await fetchUrl(asset);
      const isOk = res.statusCode === 200 && (res.headers['content-type']?.includes('image') || res.headers['content-length'] > 1000);
      if (isOk) {
        console.log(`✓ [200 OK] Asset: ${asset} (${res.headers['content-length']} bytes)`);
      } else {
        console.error(`✗ [FAIL] Asset: ${asset} (status: ${res.statusCode}, content-type: ${res.headers['content-type']})`);
        failedCount++;
      }
    } catch (err) {
      console.error(`✗ [ERROR] Asset: ${asset} - ${err.message}`);
      failedCount++;
    }
  }

  console.log('\n--- 3. Testing Key Content Elements on Home Page ---');
  try {
    const res = await fetchUrl('/');
    const html = res.data;

    // Check bundle JS referenced
    const scriptMatch = html.match(/src="(\/assets\/[^"]+)"/);
    if (scriptMatch) {
      const bundleUrl = scriptMatch[1];
      const bundleRes = await fetchUrl(bundleUrl);
      console.log(`✓ [200 OK] Main JS Bundle loaded: ${bundleUrl} (${bundleRes.headers['content-length']} bytes)`);

      const js = bundleRes.data;
      const checks = [
        { label: 'Studio Identity: Quang Anh Studio', pattern: 'Quang Anh Studio' },
        { label: 'Role: Personal Web Developer', pattern: 'Personal Web Developer' },
        { label: 'Experience: PICON TECHNOLOGY', pattern: 'PICON TECHNOLOGY' },
        { label: 'Education: Việt - Hàn (VKU)', pattern: 'Việt - Hàn' },
        { label: 'Featured Project: Interview AI', pattern: 'Interview AI' },
        { label: 'Project 1: IELTS Learning Platform', pattern: 'IELTS Learning Platform' },
        { label: 'Project 2: RentFlow', pattern: 'RentFlow' },
        { label: 'Project 3: Lời Ru Của Ác Mộng', pattern: 'Lời Ru Của Ác Mộng' },
        { label: 'Phone: 0935 989 872', pattern: '0935 989 872' },
        { label: 'Email: quanganhqb04@gmail.com', pattern: 'quanganhqb04@gmail.com' },
        { label: 'Commitment: Trực tiếp 1-1', pattern: 'Trực tiếp 1-1' },
        { label: 'Commitment: 100% mã nguồn', pattern: '100% mã nguồn' },
        { label: 'Service: Landing Page', pattern: 'Landing Page' },
        { label: 'Service: Website Doanh Nghiệp', pattern: 'Website Doanh Nghiệp' },
      ];

      for (const check of checks) {
        if (js.includes(check.pattern)) {
          console.log(`✓ [VERIFIED] ${check.label}`);
        } else {
          console.error(`✗ [MISSING] ${check.label}`);
          failedCount++;
        }
      }
    } else {
      console.error('✗ [FAIL] Could not find script bundle in HTML');
      failedCount++;
    }
  } catch (err) {
    console.error(`✗ [ERROR] ${err.message}`);
    failedCount++;
  }

  // Teardown server
  server.kill('SIGINT');
  if (process.platform === 'win32') {
    spawn('taskkill', ['/pid', String(server.pid), '/f', '/t'], { stdio: 'ignore' });
  }

  console.log(`\n========================================`);
  if (failedCount === 0) {
    console.log(`ALL TESTS PASSED WITH 0 FAILURES!`);
    process.exit(0);
  } else {
    console.error(`FAILED WITH ${failedCount} FAILURES!`);
    process.exit(1);
  }
}

run();
