const puppeteer = require('puppeteer');

// (async () => {
// 	const browser = await puppeteer.launch();
// 	const page = await browser.newPage();
// 	// await page.goto('https://www.google.com/search?q=linkedin');
// 	await page.goto('https://example.com');
// 	await page.screenshot({ path: 'example.png' });

// 	await browser.close();
// })();

// (async () => {
// 	const browser = await puppeteer.launch();
// 	const page = await browser.newPage();
// 	await page.goto('https://example.com');
// 	const hrefElement = await page.$('h1');
// 	await hrefElement.screenshot({ path: 'h1.png' });
// 	await browser.close();
// })();

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://www.google.com/search?q=https://www.linkedin.com/in/karellahmy/');
	const hrefElement = await page.$('.g');
	await hrefElement.screenshot({ path: 'firstprofile.png' });
	await browser.close();
})();
