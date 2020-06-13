import { Page, BrowserContext } from 'puppeteer'
import { join, basename } from 'path'
import { pathExists, writeJSON } from 'fs-extra'
import { downloadImage } from './download-image'

const DOWNLOAD_PATH = join(__dirname, '..', '..', 'cards')
const sectionSize = 40

export async function downloadCard(browser: BrowserContext, page: Page, index: number) {
  let $alist = await page.$$(`.ksfKYw`)
    , $a = $alist[index - 1]
  if (!$a) throw `${index}th card not found!`
  let aUrl = await $a.evaluate(node => node.getAttribute('href'))
  if (!aUrl) throw 'empty url'
  let cardName = basename(aUrl)
    , jsonPath = join(DOWNLOAD_PATH, `${cardName}.json`)
  if (await pathExists(jsonPath)) return
  console.log(`downloading ${index}th card: ${cardName}`)
  await $a.click()
  await $a.focus()
  await page.waitFor('.iBjkqs')
  await page.waitFor('.CardDetail .CardImage')
  //@ts-ignore
  let imageSrc = await page.evaluate(() => $('.CardDetail .CardImage').attr('src'))
  let imageName = await downloadImage(browser, imageSrc, DOWNLOAD_PATH, cardName)
  let jsonObj = await page.evaluate(() => {
    return {
      //@ts-ignore
      title: $('.bwAgtA').text(),
      //@ts-ignore
      desc: $('.ijEQkD').text(),
      //@ts-ignore
      triggers: $('.fNQbVa').toArray().map(x => $(x).text()),
      //@ts-ignore
      attrs: $('.exPYBL li').toArray().map(x => $(x).text()),
    }
  })
  await writeJSON(jsonPath, {
    ...jsonObj,
    image: imageName,
  })
  await page.click('.iBjkqs')
}