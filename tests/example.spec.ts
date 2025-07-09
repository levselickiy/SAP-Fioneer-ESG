
import { test } from '@playwright/test'
import { HomePage } from './pages/HomePage'
import { ESGKpiPage } from './pages/ESGKpiPage'
import { ContactPage } from './pages/ContactPage'

test.only('Test 1 — verify solutions section', async ({ page }) => {
  const home = new HomePage(page)
  await home.goto()

  await home.scrollToSolutionsSection()
  await page.pause()
  await home.verifySolutionBlockContent({
    link: 'https://www.sapfioneer.com/banking/',
    title: 'Banking',
    description: 'Reach more customers and build trust with real-time financial insights and risk control. Join the 800 banks globally who have chosen our platform.'
  })
})

test('Test 2 — verify ESG KPI page', async ({ page }) => {
  const home = new HomePage(page)
  const esg = new ESGKpiPage(page)

  await home.goto()
  await home.openEsgKpiEngine()
  await esg.verifyPageOpened()
})

test('Test 3 — verify email validation on contact form', async ({ page }) => {
  const home = new HomePage(page)
  const contact = new ContactPage(page)

  await home.goto()
  await home.clickGetInTouch()
  await contact.verifyPageOpened()
  await contact.enterInvalidEmail()
  await contact.verifyEmailValidationMessage()
})
