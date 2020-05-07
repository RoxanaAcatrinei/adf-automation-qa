// spec.js
var DialogElement = require('./pages/DialogElement.js');
var filesPageElements = require('./pages/FilesPage.js');
var loginPageElements = require('./pages/LoginPage.js');
var settingsPage = require('./pages/SettingsPage.js');

describe('ADF Demo App', function () {

    var errorBar = element(by.xpath("//snack-bar-container//span"));
    var folderName = 'RoxanaAcatrinei';

    afterEach(function () {
        browser.waitForAngular();
    });

    it('should select ECM Provider and click Apply button', function () {
        settingsPage.get('http://qaexercise.envalfresco.com/settings');
        settingsPage.apply('ECM')
    });

    it('should login to guest user', function () {
        loginPageElements.login("guest@example.com", "Password");
    });

    it('should access files page and create new folder', function () {
        element(by.xpath('//span[contains(text(),\'Content Services\')]')).click();
        DialogElement.create(folderName);
        filesPageElements.isCreated(folderName);
    });

    it('should try to create a new folder which already exists', function () {
        DialogElement.create(folderName);
        expect(errorBar.getText()).toEqual("There's already a folder with this name. Try a different name.");
        element(by.xpath('//button[@class=\'mat-button\']/span[normalize-space()=\'Cancel\']')).click();
    });

    it('should delete the folder', function () {
        browser.waitForAngular();
        filesPageElements.delete(folderName);
        expect(element(by.cssContainingText('adf-datatable-row.aria-label', folderName)).isPresent()).toBe(false);
    });
});