import { BasePage } from './BasePage'
import { contactSelectors } from '../selectors/contact.selectors'

export class ContactPage extends BasePage {
    private s = contactSelectors(this.page)

    async verifyPageOpened() {
        await this.s.heading.waitFor({ state: 'visible' })
    }

    async enterInvalidEmail() {
        await this.fill(this.s.emailInput, '342323')
    }

    async verifyEmailValidationMessage() {
        await this.s.emailError.waitFor({ state: 'visible' })
    }
}

