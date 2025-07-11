import { BasePage } from './BasePage'
import { homeSelectors } from '../selectors/home.selectors'
import { expect } from '@playwright/test'

export class HomePage extends BasePage {
    private s = homeSelectors(this.page)

    async goto() {
        await this.page.goto('/')
    }

    async clickGetInTouch() {
        await this.click(this.s.getInTouchBtn)
    }

    async verifySolutionBlockContent(expected: {
        link: string
        title: string
        description: string
    }) {
        const block = this.page.locator(`//div[@class="col-12 col-md-4"]/a[@href="${expected.link}"]`)
        await expect(block).toBeVisible()

        const actualHref = await block.getAttribute('href')
        expect(actualHref).toBe(expected.link)

        const titleLocator = block.locator('h3')
        await expect(titleLocator).toBeVisible()
        expect(await titleLocator.textContent()).toContain(expected.title)

        const descriptionLocator = block.locator('p')
        await expect(descriptionLocator).toBeVisible()
        expect(await descriptionLocator.textContent()).toContain(expected.description)

        const buttonLocator = block.locator('span.btn', { hasText: 'Learn more' })
        await expect(buttonLocator).toBeVisible()
        expect(await buttonLocator.textContent()).toContain('Learn more')
    }

    async scrollToSolutionsSection() {
        await this.scrollToElement(this.s.solutionsSection)
    }
}
