const { Given, When, Then, Before } = require('cucumber');
const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const until = webdriver.until;
const Key = webdriver.Key;

Given('que o usuário navegue até o site www.google.com', function () {
  return this.driver.get('http://www.google.com');
});
When('o usuário clicar no campo de pesquisa', function () {
  return this.driver.findElement(By.name('q')).click();
});
When('digitar o valor {string}', function (string) {
  return this.driver.findElement(By.name('q')).sendKeys('Nimble Evolution');
});
When('pressionar enter', function () {
  return this.driver.findElement(By.name('q')).sendKeys(Key.ENTER);
});

Then('o site da OAT deverá ser exibido na lista de resultados', function () {
  return expect(
    this.driver.findElement(
      By.xpath(
        '//*[@id="rso"]/div[1]/div/div/div/div/div/div/div/div[1]/div/span/a/h3'
      )
    )
  );
});
