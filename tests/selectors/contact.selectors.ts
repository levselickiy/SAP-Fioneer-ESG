import { Page } from '@playwright/test'

export const contactSelectors = (page: Page) => ({
    heading: page.getByRole('heading', { name: 'Get in touch with an expert' }),
    emailInput: page.locator('input[name="email"]'),
    emailError: page.getByText(/invalid email/i),
})
