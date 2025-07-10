import { Page, test} from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { ESGKpiPage } from '../pages/ESGKpiPage'
import { ContactPage } from '../pages/ContactPage'
import { expect } from '@playwright/test'

let home: HomePage
let contact: ContactPage

test.beforeEach(async ({ page }) => {
  home = new HomePage(page)
  contact = new ContactPage(page)
  await home.goto()
})

test('Test 1 — verify solutions section', async ({}) => {
  await home.scrollToSolutionsSection()
  await home.verifySolutionBlockContent({
    link: 'https://www.sapfioneer.com/banking/',
    title: 'Banking',
    description: 'Reach more customers and build trust with real-time financial insights and risk control. Join the 800 banks globally who have chosen our platform.'
  })

  await home.verifySolutionBlockContent({
    link: 'https://www.sapfioneer.com/insurance/',
    title: 'Insurance',
    description: 'Accelerate digital insurance processes to meet customer expectations and create new revenue streams by connecting easily to the ecosystem.'
  })

  await home.verifySolutionBlockContent({
    link: 'https://www.sapfioneer.com/finance-esg/',
    title: 'Finance & ESG',
    description: 'Establish a single source of truth for profitability and turn compliance into your advantage using our integrated finance & ESG platform.'
  })
})

test('Test 2 — verify ESG KPI page', async ({ page }) => {
  await home.clickBySpanText('Products')
  await home.clickBySpanText('Finance & ESG')
  await home.clickByTargetText('ESG KPI Engine')

  const currentUrl = page.url()
  expect(currentUrl).toContain('/esg-kpi-engine')
  await expect(page.getByText(/ESG KPI Engine provides a central solution/i)).toBeVisible()
})

test.only('Test 3 — verify invalid email on contact form', async ({ page }) => {
  await home.clickGetInTouch()

  const currentUrl = page.url()
  expect(currentUrl).toContain('/contact-sales')
  await contact.enterInvalidEmail()
  await contact.verifyEmailValidationMessage()
})
