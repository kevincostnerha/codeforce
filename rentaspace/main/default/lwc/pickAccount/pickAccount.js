import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';
import { LightningElement } from 'lwc';

export default class PickAccount extends LightningElement {

    askForList(){
        console.log("reached askForList");
        this.dispatchEvent(new CustomEvent('loadappevent'));
    }
}