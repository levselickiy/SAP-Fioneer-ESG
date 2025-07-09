import { BasePage } from './BasePage'
import { esgSelectors } from '../selectors/esg.selectors'

export class ESGKpiPage extends BasePage {
    private s = esgSelectors(this.page)

    async verifyPageOpened() {
        await this.s.heading.waitFor({ state: 'visible' })
    }
}
