import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ReservationModalComponent } from "./reservationmodal/reservationmodal.component";
import { ReservationComponent } from './reservation/reservation.component';
import { CommentModalComponent } from './comment/comment.component';
import { UserAuthComponent } from './userauth/userauth.component';


import { DishService } from './services/dish.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';

import { baseURL } from './shared/baseurl';

import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui/listview/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { DrawerComponent } from "./shared/drawer/drawer.component";
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { FavoriteService } from './services/favorite.service';
import { CouchbaseService } from './services/couchbase.service';

import { TNSFontIconModule } from 'nativescript-ngx-fonticon';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        TNSFontIconModule.forRoot({
            'fa': './fonts/font-awesome.min.css'
        }),
        NativeScriptFormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        MenuComponent,
        ContactComponent,
        DishdetailComponent,
        DrawerComponent,
        FavoritesComponent,
        ReservationComponent,
        ReservationModalComponent,
        CommentModalComponent,
        UserAuthComponent
    ],
    entryComponents: [
        ReservationModalComponent,
        CommentModalComponent
    ],
    providers: [
        { provide: 'BaseURL', useValue: baseURL },
        DishService,
        ProcessHTTPMsgService,
        PromotionService,
        LeaderService,
        FavoriteService,
        CouchbaseService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
