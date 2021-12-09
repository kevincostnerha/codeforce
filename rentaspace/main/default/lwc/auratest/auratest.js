import { LightningElement } from 'lwc';

export default class contactpolicy extends LightningElement {
    
    raiseEventFaq(event){
        this.template.querySelector();
        const v = "Flammable or Combustible Items, Toxic Materials, Non-Operating, Unregistered, and Uninsured Vehicles, Stolen Goods, Illegal Drugs, Weapons, Ammunition, Bombs, Perishables, Live Plants, Wet Items, People";
        const textChangeEvent = new CustomEvent('txtChange',{
            detail : {v},
        });

        //Fire Event
        this.dispatchEvent(textChangeEvent);
    }
}