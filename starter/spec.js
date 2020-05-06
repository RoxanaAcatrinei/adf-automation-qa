// spec.js
var DialogElement = require ('./DialogElement.js');
var filesPageElements = require ('./FilesPage.js');

describe('Protractor Demo App', function() {


    var errorBar = element(by.className("mat-snack-bar-container"));

    afterEach(function() {
    //    browser.driver.sleep(1500);
        browser.waitForAngular();
    });

    it('should select ECM Provider and click Apply button', function() {
        browser.get('http://qaexercise.envalfresco.com/settings');
        element(by.className('mat-select-value')).click();
        element.all(by.className("mat-option-text")).get(1).click();
        element(by.id('host-button')).click();
});

    it('should login to guest user', function() {
        element(by.id('username')).sendKeys('guest@example.com');
        element(by.id('password')).sendKeys('Password');
        element(by.id('login-button')).click();
    });

    it('should access files page and create new folder',async function() {
      await  element(by.cssContainingText('span.mat-line', 'Content Services')).click();
      await  DialogElement.create('ratest');
    });

    it('should try to create a new folder which already exists', function(){
        expect(element(by.xpath("//adf-datatable-row//span[text()='ratest']")).isPresent()).toBe(true);
        DialogElement.create('ratest');
        expect( errorBar.getText()).toEqual("There's already a folder with this name. Try a different name.");
        element(by.id('adf-folder-cancel-button')).click();
    });

    it('should delete the folder', function(){
        filesPageElements.delete('ratest');
        expect(element(by.cssContainingText('adf-datatable-row.aria-label', 'ratest')).isPresent()).toBe(false);
    });
});