'use strict';

module.exports = {
    DialogElement: {
        nameField: element(by.css('[placeholder="Name"]')),
        descriptionField: element(by.css('[placeholder="Description"]')),
        createButton: element(by.className('adf-dialog-action-button')),
        newFolderButton: element(by.cssContainingText('mat-icon', 'create_new_folder')),
        dialogElement: element(by.className('mat-dialog-container'))
    },

    create: function(name) {
        var dialog = this.DialogElement;
        var EC = protractor.ExpectedConditions;
        dialog.newFolderButton.click();
      //  dialog.dialogElement.isDisplayed().toBe(true);
        dialog.nameField.sendKeys(name);
        dialog.createButton.click();
        console.log('Created new folder');
    }
};