var signupPage = require('../pageobjects/testPageObjects');
var signupPageModules = require('../modules/testPageModules');
describe("Angular Enterprise Boilerplate", function() {
        it('should have a title', function() {
            browser.get("https://juliemr.github.io/protractor-demo/");       
            expect(signupPage.getHeaderTitle().getText()).toBe("Super Calculator");
            signupPageModules.addValues(1,1,2);
          });
      });
