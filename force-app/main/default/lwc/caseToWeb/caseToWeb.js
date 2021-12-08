import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import image from '@salesforce/resourceUrl/image';


import CASE_NAME from '@salesforce/schema/Case';
import NAME_FIELD from '@salesforce/schema/Case.SuppliedName';
import EMAIL_FIELD from '@salesforce/schema/Case.SuppliedEmail';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';

export default class CaseToWeb extends LightningElement {
    // need to make variable public using @api decorator
    @api recordId;
    @api objectApiName = CASE_NAME;

    fields = [NAME_FIELD, EMAIL_FIELD, SUBJECT_FIELD, DESCRIPTION_FIELD];
    
    handleSuccess() {
        const toastEvent = new ShowToastEvent({
            title: 'Success',
            message: 'Record saved.',
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }

    plane = image + '/contactUs.svg';
    family = image + '/family.jpg';
    orange = image + '/size.png';
    
}