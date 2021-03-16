const puppeteer = require('puppeteer');
const express = require('express');
const corse = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(corse());

async function getStuff(query) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(`https://www.google.com/search?q=${query}`);
	const hrefElement = await page.$('.g');
	const screenshot = await hrefElement.screenshot({
		encoding: 'base64'
	});
	await browser.close();
	return screenshot;
}

app.post('/search', async (req, res) => {
	const { query } = req.body;
	const ss = await getStuff(query);
	res.send(ss);
});

app.listen(8000, () => console.log('listening on 3000'));
