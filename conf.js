exports.config = {
    framework: "jasmine",
    // seleniumAddress: "http://localhost:4444/wd/hub",
    specs: ["./specs/test-spec.js"],
    directConnect : true,
    
    capabilities :{
        browserName: "chrome",
        }
}