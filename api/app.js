const puppeteer = require('puppeteer');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

async function getData(query) {
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
	const ss = await getData(query);
	res.send(ss);
});

app.listen(8000, () => console.log('listening on 8000'));
