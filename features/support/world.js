const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

var { setWorldConstructor, setDefaultTimeout } = require('cucumber');

setDefaultTimeout(20 * 1000);

function CustomWorld(callback) {
  this.driver = new webdriver.Builder().forBrowser('chrome').build();
}

setWorldConstructor(CustomWorld);