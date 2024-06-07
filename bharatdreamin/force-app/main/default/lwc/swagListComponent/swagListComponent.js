import { LightningElement,wire } from 'lwc';
import getSwag from '@salesforce/apex/SwagHandler.getSwag';
export default class SwagListComponent extends LightningElement {
    
    swagList;

    @wire(getSwag)
    swags({data,error}){
        if(data){
            console.log('data:', data);
            this.swagList = data;
        }

        if(error){
            console.log('error:', error);
        }
    }
}