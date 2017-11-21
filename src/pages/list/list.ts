import {Component, ViewChild} from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';
import {TimerComponent} from "../../components/timer/timer";
import {ItemDetailsPage} from "../item-details/item-details";

@Component({
    selector: 'page-list',
    templateUrl: 'list.html',
})
export class ListPage {

    // @ViewChild(TimerComponent) timer: TimerComponent;

    order = {
        user: "username",
        sectors: [{
            name: "First Sector",
            timeOut: false,
            orderId: 1
        },{
            name: "Second Sector",
            timeOut: false,
            orderId: 2
        },{
            name: "Third Sector",
            timeOut: false,
            orderId: 3
        }]
    };

    constructor(public navCtrl: NavController, public navParams: NavParams, private events : Events) {
        this.events.subscribe("timer:finished", ( value, id ) => {
            console.log("ListPage Event [timer:finished]: ", value, id);
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListPage');
    }

    ngOnInit() {
        // setTimeout(() => {
        //     this.timer.startTimer();
        // }, 1000)
    }

    itemTapped(event, sector,user) {
        this.navCtrl.push(ItemDetailsPage, { sector: sector, user: user });
    }
}
