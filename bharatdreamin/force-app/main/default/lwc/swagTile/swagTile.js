import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class SwagTile extends LightningElement {
    @api swag;
   
    handleClick(event){
        
        let message = 'your '+this.refs.myPoints.value+' is redeemd';
        const evt = new ShowToastEvent({
            title: 'Point  Redeem',
            message: message,
    
            variant: 'success',
          });
          this.dispatchEvent(evt);
    }
}