const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnSignIn () { return $('//span[contains(text(),"Hello, Sign in")]') }
    get inputUsername () { return $('//input[@name="email"]') }
    get btnContinue () { return $('//span[@id="continue"]') }
    get inputPassword() { return $('//input[@id="ap_password"]')}
    get btnSubmit () { return $('//input[@id="signInSubmit"]') }

    async login (username, password) {
        await browser.maximizeWindow()
        await (await this.btnSignIn).click();
        await (await this.inputUsername).setValue(username);
        await (await this.btnContinue).click()
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
