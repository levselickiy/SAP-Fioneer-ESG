import { Page, Locator, expect } from '@playwright/test'

export class BasePage {
    constructor(protected page: Page) {}

    protected async click(locator: Locator) {
        await locator.waitFor({ state: 'visible' })
        await locator.click()
    }

    protected async fill(locator: Locator, value: string) {
        await locator.waitFor({ state: 'visible' })
        await locator.fill(value)
    }

    protected async expectText(text: string | RegExp) {
        await this.page.getByText(text).waitFor({ state: 'visible' })
    }

    protected async expectUrlContains(partial: string) {
        await this.page.waitForURL(new RegExp(partial))
    }

    protected async scrollToElement(locator: Locator) {
        await locator.scrollIntoViewIfNeeded()
        await this.page.waitForTimeout(300)
    }

    async clickByText(text: string) {
        const locator = this.page.getByText(text, { exact: true }).first()
        await this.click(locator)
    }
}
