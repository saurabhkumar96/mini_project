const {By, Builder, Browser} = require("selenium-webdriver")
const assert =  require("assert")

async function firstTest(){
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build()
        await driver.get("https://www.pexels.com/")
        let title  = await driver.getTitle()
        await driver.manage().window().cookies()
        
    } catch (error) {
        
    }

    
}

firstTest()