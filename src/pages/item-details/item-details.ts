import { Component } from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';

@Component({
    selector: 'page-item-details',
    templateUrl: 'item-details.html',
})
export class ItemDetailsPage {

    selectedOrder:any;
    eventsReceived:Array<any> = [];

    constructor(private navCtrl: NavController, public navParams: NavParams, public events: Events) {
        this.selectedOrder = navParams.get('sector');
        // this.events.subscribe("timer:popnav"+this.selectedOrder.orderId,(value,id) => {
        this.events.subscribe("timer:popnav",(value,id) => {
            console.log("ItemDetailsPage Event [timer:popnav]: ", value, id);
            this.eventsReceived.push({
                value,
                id
            });
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ItemDetailsPage');

        console.log("this.selectedOrder: ", this.selectedOrder);
    }

    ionViewWillLeave(){
        // this.events.unsubscribe("timer:popnav"+this.selectedOrder.orderId);
        this.events.unsubscribe("timer:popnav");
    }

}
