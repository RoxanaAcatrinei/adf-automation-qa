'use strict';

module.exports = {
    Dropdown: {
        provider: element.all(by.xpath('//mat-select[@id=\'adf-provider-selector\']')),
        applyButton: element(by.xpath('//button[contains(@class, \'adf-login-button\')]'))

    },

    get: function (url) {
        browser.get(url);
    },

    apply: function (option) {
        var dropdown = this.Dropdown;
        dropdown.provider.click();
        element(by.xpath("//span[@class='mat-option-text'][contains(text(),'" + option + "')]")).click();
        dropdown.applyButton.click();
    }
};