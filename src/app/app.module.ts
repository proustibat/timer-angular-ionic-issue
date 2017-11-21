import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Screenshot } from "@ionic-native/screenshot";
import {ListPage} from "../pages/list/list";
import {TimerComponent} from "../components/timer/timer";
import {ItemDetailsPage} from "../pages/item-details/item-details";

@NgModule({
    declarations: [
        MyApp,
        ListPage,
        ItemDetailsPage,
        TimerComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ListPage,
        ItemDetailsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Screenshot,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
