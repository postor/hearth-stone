import { BrowserContext } from 'puppeteer'
import { writeFile, pathExists } from 'fs-extra'
import { extname, join } from 'path'
export async function downloadImage(browser: BrowserContext,
  url: string,
  folder: string,
  cardName: string
) {
  let page = await browser.newPage()
  let imageName = cardName + extname(url)
    , imagePath = join(folder, imageName)
  if (await pathExists(imagePath)) return imageName
  let viewSource = await page.goto(url)
  if (!viewSource) throw `failed opening ${url}`
  await writeFile(imagePath, await viewSource.buffer())
  await page.close()
  return imageName
}