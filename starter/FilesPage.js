'use strict';

module.exports = {
    buttons: {
        newFolderButton: element(by.cssContainingText('mat-icon', 'create_new_folder')),
        deleteButton:  element(by.xpath("//div[@class='cdk-overlay-container']//button[5]"))
    },

    delete:  function(name) {
        var btn = this.buttons;
        var folder = element(by.xpath("//adf-datatable-row[@aria-label='"+name+"']//button[@class='mat-icon-button']"));
         folder.click();
        btn.deleteButton.click();
    }
};