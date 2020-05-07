'use strict';

module.exports = {
    DialogElement: {
        nameField: element(by.xpath("//input[@id='adf-folder-name-input']")),
        descriptionField: element(by.xpath('//textarea[@id=\'adf-folder-description-input\']')),
        createButton: element(by.xpath('//button//span[normalize-space()=\'Create\']')),
        newFolderButton: element(by.xpath('//span[contains(@class,\'mat-button\')]//mat-icon[text()=\'create_new_folder\']')),
        dialogElement: element(by.xpath("//mat-dialog-container[contains(@class,'mat-dialog-container')]"))
    },

    create: function (name) {
        var dialog = this.DialogElement;
        dialog.newFolderButton.click();
        expect(dialog.dialogElement.isPresent()).toBe(true);
        dialog.nameField.sendKeys(name);
        dialog.createButton.click();
    }
};