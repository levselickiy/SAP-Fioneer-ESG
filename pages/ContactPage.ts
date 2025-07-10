import { BasePage } from './BasePage'
import { contactSelectors } from '../selectors/contact.selectors'

export class ContactPage extends BasePage {
    private s = contactSelectors(this.page)

    async enterEmail(emailText: string) {
        await this.fill(this.s.emailInput, emailText)
    }

    async verifyEmailValidationMessage() {
        await this.s.emailError.waitFor({ state: 'visible' })
    }
}

