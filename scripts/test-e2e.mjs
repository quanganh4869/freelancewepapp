import { preview } from 'vite';
import http from 'http';

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
  '/assets/hero-developer.png',
  '/assets/about-developer.png',
  '/assets/contact-developer.png',
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
  console.log(`Starting programmatic Vite preview on port ${PORT}...`);
  const previewServer = await preview({
    preview: {
      port: PORT,
      strictPort: true,
    },
  });

  console.log(`Preview server running at ${previewServer.resolvedUrls.local[0]}`);

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

  console.log('\n--- 2. Testing Static Project Assets & 3D Character Images ---');
  for (const asset of assetsToTest) {
    try {
      const res = await fetchUrl(asset);
      const isOk = res.statusCode === 200 && (res.headers['content-type']?.includes('image') || Number(res.headers['content-length']) > 1000);
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
    const scriptMatch = html.match(/src="(\/assets\/[^"]+\.js)"/);
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
        { label: 'Hero 3D Developer Image: /assets/hero-developer.png', pattern: '/assets/hero-developer.png' },
        { label: 'About 3D Developer Image: /assets/about-developer.png', pattern: '/assets/about-developer.png' },
        { label: 'Contact 3D Developer Image: /assets/contact-developer.png', pattern: '/assets/contact-developer.png' },
        { label: 'Phone: 0935 989 872', pattern: '0935 989 872' },
        { label: 'Email: quanganhqb04@gmail.com', pattern: 'quanganhqb04@gmail.com' },
        { label: 'Commitment: Trực tiếp 1-1', pattern: 'Trực tiếp 1-1' },
        { label: 'Commitment: 100% mã nguồn', pattern: '100% mã nguồn' },
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
  previewServer.httpServer.close();

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
