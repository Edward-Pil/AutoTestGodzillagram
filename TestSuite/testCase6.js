const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');
const locators = require('../locators');
const chalk = require('chalk');

async function runTestCase6(options) {
    console.log(chalk.green("6 Test Started: Checking 'empty fields' error messages on page login"));
    driver = await new Builder().forBrowser('chrome') .setChromeOptions(options).build();
  
    try {
      await driver.get('https://godzilla-front.vercel.app/auth/login');
      await driver.wait(until.elementLocated(locators.passwordInputLog), 5000);
  
      await driver.findElement(locators.emailInputLog).click();
      await driver.findElement(locators.passwordInputLog).click();
      await driver.findElement(locators.buttonLog).click();
      
        //await driver.sleep(500);
  
      //Проверка на ошибку "пустые поля"
      await driver.wait(until.elementLocated(locators.emailErrorLog), 10000);

      assert.strictEqual(await driver.findElement(locators.emailErrorLog).getText(), 'Enter your email');  
      assert.strictEqual(await driver.findElement(locators.passwordErrorLog).getText(), 'Enter your password'); 
         
      
      console.log(chalk.cyan('Test Passed'));
    } catch (error) {
      console.error(chalk.red('Test Failed:', error.message));
    } finally {
        //await driver.sleep(500);
      await driver.quit();
    }
  };
  
  module.exports = runTestCase6;