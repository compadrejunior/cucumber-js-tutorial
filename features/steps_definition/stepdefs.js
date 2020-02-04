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
  return this.driver.findElement(By.name('q')).sendKeys('OAT Solutions');
});
When('pressionar enter', function () {
  return this.driver.findElement(By.name('q')).sendKeys(Key.ENTER);
});

Then('o site da OAT deverá ser exibido na lista de resultados', function () {
  return expect(this.driver.findElement(By.xpath('/html/body/div[7]/div[3]/div[9]/div[1]/div[2]/div/div[2]/div[2]/div/div/div[1]/div/div/div/div/div[1]/a')).getAttribute('href'))
    .to.eventually.contain('http://www.oatsolutions.com.br/');
});

When('digitar o valor oatinside', function () {
  return this.driver.findElement(By.name('q')).sendKeys('oatinside');
});

Then('o link para o site OAT Inside deve ser exibido na lista de resultados', function () {
  expect(this.driver.wait(until.elementLocated(By.linkText('OAT Inside')))
    .then(() => { return true })
    .catch(() => { return false })).to.be.true;
});

When('digitar o valor atlassian', function () {
  return this.driver.findElement(By.name('q')).sendKeys('atlassian');
});

Then('o link para o site Atlassian deve ser exibido na lista de resultados', function () {
  return expect(this.driver.wait(until.elementLocated(By.linkText('Atlassian')))
    .then(() => { return true })
    .catch(() => { return false })).to.be.true;
});
