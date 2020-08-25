

module.exports = {
"headerTitle": element(by.tagName('h3')),
"firstInputField": element(by.model('first')),
"secondInputField": element(by.model('second')),

"resultValue": element(by.model('first')),


getHeaderTitle:  function(){
    return  this.headerTitle;
},
getFirstInputField:  function(){
    return  this.firstInputField;
},
setFirstInputField:  function(Str){
    return  this.firstInputField.sendKeys(Str);
},
clickFirstInputField:  function(){
    return  this.firstInputField.click();
},

getSecondInputField:  function(){
    return  this.secondInputField;
},
setSecondInputField:  function(Str){
    return  this.secondInputField.sendKeys(Str);
},
clickSecondInputField:  function(){
    return  this.secondInputField.click();
},

getResultValue:  function(){
    return  this.resultValue;
},
};




