import puppeteer from 'puppeteer'
import { waitTime } from './wait-time'
import { downloadCard } from './download-card'
  ;
(async () => {
  const browser = await puppeteer.launch({ headless: true })
  const context = await browser.createIncognitoBrowserContext()
  const page = await context.newPage()
  await page.goto('https://playhearthstone.com/en-us/cards?collectible=1&set=wild')
  await page.waitForSelector('.jsaePD')
  let $jsaepd = await page.$('.jsaePD')
  if (!$jsaepd) throw 'total not found!'
  let total = parseInt(await $jsaepd.evaluate(node => node.innerHTML))
  let showed = 0, downloaded = 0
  await page.waitForSelector('.ksfKYw')
  // @ts-ignore
  showed = await page.evaluate(() => $('.ksfKYw').length)
  // try {
  while (showed < total) {

    while (downloaded < showed) {
      downloaded++
      await downloadCard(context, page, downloaded)
    }
    await waitTime(1000)
    page.evaluate(_ => {
      window.scrollBy(0, window.innerHeight);
      //@ts-ignore
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        //@ts-ignore
        $(window).scrollTo($(document).height() / 2)
      }
    });
    // @ts-ignore
    showed = await page.evaluate(() => $('.ksfKYw').length)
  }
  // } catch (e) {
  //   console.log(e)
  // }
  await page.close()
  await browser.close()
})();