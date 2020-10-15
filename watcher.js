const puppeteer = require('puppeteer');

(async () => {
    const args = process.argv.slice(2);

    if (args.length < 2) {
        console.log('specify command arguments (url and selector)')
        return
    }

    setTimeout(() => {
        console.log('timed out')
        process.exit(1);
    }, 30000)

    const url = args[0];
    const selector = args[1];

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const element = await page.$(selector);
    const text = await page.evaluate(element => element.textContent, element);
    if (element !== null) {
        console.log(text);
    }
    await page.screenshot({path: 'screenshot.png'});

    await browser.close();
    process.exit(0);
})();
