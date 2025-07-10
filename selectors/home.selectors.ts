import { Page } from '@playwright/test'

export const homeSelectors = (page: Page) => ({
    solutionsSection: page.getByText('End-to-end solutions for financial services', { exact: false }),
    productsMenu: page.getByRole('link', { name: 'Products' }),
    financeEsgSubmenu: page.getByText('Finance & ESG'),
    esgKpiLink: page.getByRole('link', { name: 'ESG KPI Engine' }),
    getInTouchBtn: page.locator('//div[@class="col-auto"]/a[@aria-label="Get in touch"]'),
})
