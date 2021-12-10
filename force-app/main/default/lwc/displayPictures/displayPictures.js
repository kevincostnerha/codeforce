import { LightningElement, wire } from 'lwc';
import getStorageUnits from '@salesforce/apex/getStorageUnitDataController.getStorageUnits'
import StorageImages from '@salesforce/resourceUrl/StorageImages';	

export default class DisplayPictures extends LightningElement {
    fivebyfive = StorageImages + '/StorageImages/5x5.jpg';

    @wire(getStorageUnits) wiredStorage;
}