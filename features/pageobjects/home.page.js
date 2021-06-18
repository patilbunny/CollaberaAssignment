const Page = require('./page');

class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearch () { return $('//input[@id="twotabsearchtextbox"]')}
    get imgItem () { return $('//img[@alt="New Apple iPhone 12 Mini (128GB) - Blue"]')}
    get btnAdToCart () { return $('//input[@id="add-to-cart-button"]')}

    async search (item) {
    
        await (await this.inputSearch).click();
        await browser.pause(2000)
        await (await this.inputSearch).setValue(item);
        await browser.pause(2000)
        await browser.keys('Enter')
        await browser.pause(2000)
        var parentWindow = await browser.getWindowHandle()
        await (await this.imgItem).click();
        await browser.pause(3000)
        var ID = await browser.getWindowHandles();
        for(var i = 0; i< ID.length; i++){
            if( ID[i]!= parentWindow){
                await browser.switchToWindow(ID[i])
                break;
            }
        }
        await browser.pause(3000)
        await (await this.btnAdToCart).scrollIntoView();
        await browser.pause(3000)
        await (await this.btnAdToCart).click();
        await browser.pause(5000)
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    // open () {
    //     return super.open('login');
    // }
}

module.exports = new HomePage();
