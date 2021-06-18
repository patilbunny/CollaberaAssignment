const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}
Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    await browser.pause(5000)
});
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
    await browser.pause(5000)
});
Then(/^I should search and add (.*)$/, async (item) => {
    await HomePage.search(item)
    await browser.pause(5000)
});
// When(/^I should logged in with (.+) and (.+) $/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I can click on login button and would be landing on home page (.*)$/, async (HomePage) => {
//     // await expect(SecurePage.flashAlert).toBeExisting();
//     // await expect(SecurePage.flashAlert).toHaveTextContaining(HomePage);
// });
// Then(/^I can search item as (.*) and add it to cart$/, async (Item) => {
    
// });
// Then(/^I can sign out and landed on signout pagee (.*)$/, async (SignoutPage) => {
   
// });
