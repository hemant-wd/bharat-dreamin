import { LightningElement,wire,api } from 'lwc';
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import TOTAL_POINT from "@salesforce/schema/Contact.Total_Point_Earned__c";
import FNAME from "@salesforce/schema/Contact.FirstName";
import COMPANY from "@salesforce/schema/Contact.Company__c";
import LNAME from "@salesforce/schema/Contact.LastName";
import RANK from "@salesforce/schema/Contact.Rank__c";
import TEAM from "@salesforce/schema/Contact.Team__c";
import AGENDA_ICON from "@salesforce/resourceUrl/agenda"
import QWIZ_ICON from "@salesforce/resourceUrl/qwiz"
import BHARAT_DREANIN_LOGO from "@salesforce/resourceUrl/bharatDreaminLogo"
import AVATAR_ICON from "@salesforce/resourceUrl/avatar"
import SWAG_ICON from "@salesforce/resourceUrl/swag"
import SPEAKER from "@salesforce/resourceUrl/speaker"
import MY_PROFILE from "@salesforce/resourceUrl/myProfile"
import ASTRO from "@salesforce/resourceUrl/astro"
import FONT_FAMILY from "@salesforce/resourceUrl/fontFamily"

import NETWORKING_ICON from "@salesforce/resourceUrl/networking"

export default class SwagHomeTab extends LightningElement {
   logo = BHARAT_DREANIN_LOGO;
   avatar= AVATAR_ICON;
   
   
  speaker = SPEAKER;
  myProfile = MY_PROFILE;
    agenda = AGENDA_ICON;
    qwiz=QWIZ_ICON;
    swag=SWAG_ICON;
    networking=NETWORKING_ICON;
    
    teamlogo = ASTRO;

     contactId = "003dM000001nz8FQAQ";

    @wire(getRecord, {
        recordId: "$contactId",
        fields: [TOTAL_POINT, RANK, TEAM, FNAME, LNAME],
        
      })
      contact;
      

      get points(){
        return getFieldValue(this.contact.data, TOTAL_POINT);
      }
      get rank(){
        return getFieldValue(this.contact.data, RANK);
      }
      get team(){
        return getFieldValue(this.contact.data, TEAM);
      }
      get fname(){
        return getFieldValue(this.contact.data, FNAME);
      }
      get lname(){
        return getFieldValue(this.contact.data, LNAME);
      }
      get company(){
        return getFieldValue(this.contact.data, COMPANY);
      }

      connectedCallback(){
        console.log('this.company:', this.company);
      }
      renderedCallback(){
        console.log('this.company:', this.company);
      }

      handleQuest(){
        console.log('handleQuest')
      }

      handleRedeem(){
        console.log('handleRedeem')
      }

      handlePoint(){
        console.log('handlePoint')
      }

      handleSponsors(){
        console.log('handleSponsors')
      }

      handleSpeakers(){
        console.log('handleSpeakers')
      }

      handleProfile(){
        console.log('handleProfile')
      }

      

      
}