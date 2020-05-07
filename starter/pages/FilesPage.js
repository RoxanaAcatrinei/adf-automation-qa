'use strict';

module.exports = {
    buttons: {
        newFolderButton: element(by.xpath('//mat-icon[contains(text(),\'create_new_folder\')]')),
        deleteButton: element(by.xpath("//button[@aria-label='Delete']"))
    },

    isCreated: function (folderName) {
        return expect(element(by.xpath("//adf-datatable-row//span[text()='" + folderName + "']")).isPresent());

    },
    delete: function (name) {
        var btn = this.buttons;
        var folder = element(by.xpath("//adf-datatable-row[@aria-label='" + name + "']//button[@title='Content actions']//mat-icon"));
        folder.click();
        btn.deleteButton.click();
    }
};