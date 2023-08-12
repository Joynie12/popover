const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080');

  await page.click('#popoverButton');

  // Ожидание появления popover'а (замените этот селектор на селектор вашего popover'а)
  await page.waitForSelector('.popover');

  // Проверка текста внутри popover'а
  const popoverText = await page.$eval('.popover', el => el.textContent);
  if (popoverText.includes('This is the popover content')) {
    console.log('Popover contains expected text.');
  } else {
    console.error('Popover does not contain expected text.');
  }

  await browser.close();
})();
