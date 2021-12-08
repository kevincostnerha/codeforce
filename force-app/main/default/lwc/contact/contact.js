import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import image from '@salesforce/resourceUrl/image';

export default class Contact extends LightningElement {
    plane = image + '/contactUs.svg';
    family = image + '/family.jpg';
    orange = image + '/size.png';

    handleClick() {
        this[NavigationMixin.Navigate]({
            // Pass in pageReference
            type: 'standard__namedPage',
            attributes: {
                pageName: 'contact'
            }
        });
    }
}
