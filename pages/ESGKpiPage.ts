import { BasePage } from './BasePage'
import { esgSelectors } from '../selectors/esg.selectors'

export class ESGKpiPage extends BasePage {
    private s = esgSelectors(this.page)

    async verifyHeadingContains(text: string) {
        const headingText = await this.s.heading.textContent()
        expect(headingText).toContain(text)
    }
}