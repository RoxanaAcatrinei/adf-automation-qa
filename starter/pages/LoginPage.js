'use strict';

module.exports = {
    LoginPage: {
        usernameInput: element(by.xpath('//input[@id=\'username\']')),
        passwordInput: element(by.xpath('//input[@id=\'password\']')),
        loginButton: element(by.xpath('//button[@id=\'login-button\']'))
    },

    login: function (username, password) {
        var login = this.LoginPage;
        login.usernameInput.sendKeys(username);
        login.passwordInput.sendKeys(password);
        login.loginButton.click();
    }

};