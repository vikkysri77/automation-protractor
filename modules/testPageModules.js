var signupPage = require('../pageobjects/testPageObjects');

module.exports = {

addValues: function(value1,value2,expectedValue){
    signupPage.clickFirstInputField;
    signupPage.setFirstInputField(1);
    browser.sleep(10000);
    signupPage.setSecondInputField(1);
    expect(signupPage.getResultValue().getText()).toBe(expectedValue);
},

};