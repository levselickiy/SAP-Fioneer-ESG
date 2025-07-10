import { Page } from '@playwright/test'

export const esgSelectors = (page: Page) => ({
    heading: page.getByText('Stay audit-ready with the ESG KPI Engine | SAP Fioneer'),
})

