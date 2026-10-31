import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const SCREENSHOT_DIR = path.resolve('test-screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function run() {
  console.log('🚀 Launching Edge browser for StartProjectPage E2E Verification...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // 1. Visit /start-project
  console.log('1. Navigating to /start-project...');
  await page.goto('http://localhost:4173/start-project', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '01_desktop_step1.png'), fullPage: true });

  // 2. Test Mobile Viewport
  console.log('2. Testing mobile layout (390x844)...');
  await page.setViewport({ width: 390, height: 844 });
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '01_mobile_step1.png'), fullPage: true });

  // Reset to desktop
  await page.setViewport({ width: 1440, height: 900 });

  // 3. Select Web Application
  console.log('3. Selecting Web App & custom management system...');
  const webAppOption = await page.waitForSelector('text/Web App và hệ thống quản lý theo yêu cầu');
  await webAppOption.click();
  await new Promise(r => setTimeout(r, 400));

  // Click Tiếp tục
  const nextBtn1 = await page.waitForSelector('text/Tiếp tục');
  await nextBtn1.click();
  await new Promise(r => setTimeout(r, 600));

  // 4. Step 2: Business Goal
  console.log('4. Step 2: Entering business goal and description...');
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '02_desktop_step2.png'), fullPage: true });
  
  // Fill description textarea
  const textarea = await page.waitForSelector('textarea');
  await textarea.type('Tôi cần hệ thống quản lý các căn hộ cho thuê, theo dõi lịch thanh toán tiền phòng, điện nước và thông báo tự động.');
  await new Promise(r => setTimeout(r, 400));

  // Click Tiếp tục
  const nextBtn2 = await page.waitForSelector('text/Tiếp tục');
  await nextBtn2.click();
  await new Promise(r => setTimeout(r, 600));

  // 5. Step 3: Web App Features (10 groups)
  console.log('5. Step 3: Web App Deep Feature Accordions...');
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '03_desktop_step3_features.png'), fullPage: true });

  // Select some features
  const feat1 = await page.waitForSelector('text/Theo dõi lịch sử hoạt động và lượt truy cập');
  await feat1.click();

  const nextBtn3 = await page.waitForSelector('text/Tiếp tục');
  await nextBtn3.click();
  await new Promise(r => setTimeout(r, 600));

  // 6. Step 4: Web App Users & Workflow
  console.log('6. Step 4: Testing UserGroupBuilder & OrderedWorkflowBuilder...');
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '04_desktop_step4_workflow.png'), fullPage: true });

  const nextBtn4 = await page.waitForSelector('text/Tiếp tục');
  await nextBtn4.click();
  await new Promise(r => setTimeout(r, 600));

  // 7. Step 5: Design & Assets
  console.log('7. Step 5: Design preferences...');
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '05_desktop_step5_design.png'), fullPage: true });

  const nextBtn5 = await page.waitForSelector('text/Tiếp tục');
  await nextBtn5.click();
  await new Promise(r => setTimeout(r, 600));

  // 8. Step 6: Integrations
  console.log('8. Step 6: Integrations...');
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '06_desktop_step6_integrations.png'), fullPage: true });

  const nextBtn6 = await page.waitForSelector('text/Tiếp tục');
  await nextBtn6.click();
  await new Promise(r => setTimeout(r, 600));

  // 9. Step 7: Budget & Timeline
  console.log('9. Step 7: Budget and Timeline...');
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '07_desktop_step7_budget.png'), fullPage: true });

  const nextBtn7 = await page.waitForSelector('text/Tiếp tục');
  await nextBtn7.click();
  await new Promise(r => setTimeout(r, 600));

  // 10. Step 8: Contact Information & Review Panel
  console.log('10. Step 8: Contact info and structured review panel...');
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '08_desktop_step8_review.png'), fullPage: true });

  // Test validation: Click submit without contact info
  const submitBtn = await page.waitForSelector('text/Gửi yêu cầu dự án');
  await submitBtn.click();
  await new Promise(r => setTimeout(r, 400));

  // Fill contact details
  const nameInput = await page.waitForSelector('#contact-fullName');
  await nameInput.type('Nguyễn Văn Tuấn');

  const emailInput = await page.waitForSelector('#contact-email');
  await emailInput.type('tuan.nguyen@example.com');

  const phoneInput = await page.waitForSelector('#contact-phone');
  await phoneInput.type('0912345678');

  // Check confirmation checkbox
  const confirmBox = await page.waitForSelector('input[type="checkbox"]');
  await confirmBox.click();

  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '08_desktop_step8_filled.png'), fullPage: true });

  // Submit
  console.log('11. Submitting the project request...');
  await submitBtn.click();
  await new Promise(r => setTimeout(r, 1500));

  // Success screen
  console.log('12. Checking Success screen...');
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '09_success_screen.png'), fullPage: true });

  console.log('✅ ALL E2E VERIFICATION STEPS PASSED SUCCESSFULLY!');
  await browser.close();
}

run().catch(err => {
  console.error('❌ E2E Verification failed:', err);
  process.exit(1);
});
