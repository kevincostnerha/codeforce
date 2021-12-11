import { LightningElement, wire, api } from 'lwc';
import getStorageUnits from '@salesforce/apex/getStorageUnitDataController.getStorageUnits'
import StorageImages from '@salesforce/resourceUrl/StorageImages';	

export default class DisplayPictures extends LightningElement {
    fivebyfive = StorageImages + '/StorageImages/5x5.jpg';

    _storage;

    @wire(getStorageUnits) wiredStorage;

    @api
    get storage() {
        return this._storage;
    }

    set storage(value) {
        this._storage = value;
        this.name = value.name;
    }

    OnClick() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'rentaspace__Storage_Unit__c',
                actionName: 'home'
            }
        });
    }
}