import { LightningElement, api } from 'lwc';
import image from '@salesforce/resourceUrl/image';

export default class Contact extends LightningElement {
    plane = image + '/contactUs.svg';
    family = image + '/family.jpg';
    orange = image + '/size.png';
    
}