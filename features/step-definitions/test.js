let {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
    Given(/^I navigate to Google$/, () => {
      browser.url('http://www.google.com')
    }); 

    When(/^I search for \"([^\"]*)\"$/, (text) => {
      browser.setValue('#lst-ib', text);
      browser.pause(5000);
    });

    When(/^I search for another new result \"([^\"]*)\"$/, (text) => {
      browser.setValue('#lst-ib', text);
      browser.pause(5000);
      expect(1).to.equal(2)
    });

});