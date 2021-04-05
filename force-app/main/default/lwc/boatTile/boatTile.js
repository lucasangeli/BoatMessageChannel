import { LightningElement, api } from 'lwc';
const TILE_WRAPPER_SELECTED_CLASS = 'tile-wrapper selected';
const TILE_WRAPPER_UNSELECTED_CLASS = 'tile-wrapper';

export default class BoatTile extends LightningElement {
    @api boat;
    @api selectedBoatId;
    // Getter for dynamically setting the background image for the picture
    get backgroundStyle() { 
        return 'background-image:url(' + this.boat.Picture__c + ')';
    }
    
    // Getter for dynamically setting the tile class based on whether the
    // current boat is selected
    // It must change its own class between tile-wrapper selected and tile-wrapper 
    //using the function tileClass(), depending on the value of selectedBoatId
    get tileClass() {
       if(this.selectedBoatId){
           if(this.selectedBoatId === this.boat.Id){
               return TILE_WRAPPER_SELECTED_CLASS;
           } else {
               return TILE_WRAPPER_UNSELECTED_CLASS;
           }
       }
    }

    selectBoat(){
        const searchEvent = new CustomEvent('boatselect',{
            detail:{
                boatId: this.boat.Id
            }
        });
        this.dispatchEvent(searchEvent);
    }
 
}