"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var menu_component_1 = require("./menu/menu.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var dishdetail_component_1 = require("./dishdetail/dishdetail.component");
var favorites_component_1 = require("./favorites/favorites.component");
var reservationmodal_component_1 = require("./reservationmodal/reservationmodal.component");
var reservation_component_1 = require("./reservation/reservation.component");
var comment_component_1 = require("./comment/comment.component");
var userauth_component_1 = require("./userauth/userauth.component");
var dish_service_1 = require("./services/dish.service");
var process_httpmsg_service_1 = require("./services/process-httpmsg.service");
var baseurl_1 = require("./shared/baseurl");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var angular_2 = require("nativescript-telerik-ui/listview/angular");
var forms_1 = require("nativescript-angular/forms");
var forms_2 = require("@angular/forms");
var drawer_component_1 = require("./shared/drawer/drawer.component");
var promotion_service_1 = require("./services/promotion.service");
var leader_service_1 = require("./services/leader.service");
var favorite_service_1 = require("./services/favorite.service");
var couchbase_service_1 = require("./services/couchbase.service");
var platform_service_1 = require("./services/platform.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                http_1.NativeScriptHttpModule,
                angular_1.NativeScriptUISideDrawerModule,
                angular_2.NativeScriptUIListViewModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './fonts/font-awesome.min.css'
                }),
                forms_1.NativeScriptFormsModule,
                forms_2.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                menu_component_1.MenuComponent,
                contact_component_1.ContactComponent,
                dishdetail_component_1.DishdetailComponent,
                drawer_component_1.DrawerComponent,
                favorites_component_1.FavoritesComponent,
                reservation_component_1.ReservationComponent,
                reservationmodal_component_1.ReservationModalComponent,
                comment_component_1.CommentModalComponent,
                userauth_component_1.UserAuthComponent
            ],
            entryComponents: [
                reservationmodal_component_1.ReservationModalComponent,
                comment_component_1.CommentModalComponent
            ],
            providers: [
                { provide: 'BaseURL', useValue: baseurl_1.baseURL },
                dish_service_1.DishService,
                process_httpmsg_service_1.ProcessHTTPMsgService,
                promotion_service_1.PromotionService,
                leader_service_1.LeaderService,
                favorite_service_1.FavoriteService,
                couchbase_service_1.CouchbaseService,
                platform_service_1.PlatformService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBQy9DLHdEQUFzRDtBQUN0RCx3REFBc0Q7QUFDdEQsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCwwRUFBd0U7QUFDeEUsdUVBQXFFO0FBQ3JFLDRGQUEwRjtBQUMxRiw2RUFBMkU7QUFDM0UsaUVBQW9FO0FBQ3BFLG9FQUFrRTtBQUdsRSx3REFBc0Q7QUFDdEQsOEVBQTJFO0FBRTNFLDRDQUEyQztBQUUzQyxzRUFBNEY7QUFDNUYsb0VBQXdGO0FBQ3hGLG9EQUFxRTtBQUNyRSx3Q0FBcUQ7QUFFckQscUVBQW1FO0FBQ25FLGtFQUFnRTtBQUNoRSw0REFBMEQ7QUFDMUQsZ0VBQThEO0FBQzlELGtFQUFnRTtBQUNoRSxnRUFBOEQ7QUFFOUQsdUVBQThEO0FBc0Q5RDtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFuRHJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2dCQUNoQiw2QkFBc0I7Z0JBQ3RCLHdDQUE4QjtnQkFDOUIsc0NBQTRCO2dCQUM1Qiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7b0JBQ3RCLElBQUksRUFBRSw4QkFBOEI7aUJBQ3ZDLENBQUM7Z0JBQ0YsK0JBQXVCO2dCQUN2QiwyQkFBbUI7YUFDdEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsZ0NBQWM7Z0JBQ2QsOEJBQWE7Z0JBQ2Isb0NBQWdCO2dCQUNoQiwwQ0FBbUI7Z0JBQ25CLGtDQUFlO2dCQUNmLHdDQUFrQjtnQkFDbEIsNENBQW9CO2dCQUNwQixzREFBeUI7Z0JBQ3pCLHlDQUFxQjtnQkFDckIsc0NBQWlCO2FBQ3BCO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLHNEQUF5QjtnQkFDekIseUNBQXFCO2FBQ3hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsaUJBQU8sRUFBRTtnQkFDekMsMEJBQVc7Z0JBQ1gsK0NBQXFCO2dCQUNyQixvQ0FBZ0I7Z0JBQ2hCLDhCQUFhO2dCQUNiLGtDQUFlO2dCQUNmLG9DQUFnQjtnQkFDaEIsa0NBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51L21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IERpc2hkZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2Rpc2hkZXRhaWwvZGlzaGRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmF2b3JpdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNlcnZhdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVzZXJ2YXRpb25tb2RhbC9yZXNlcnZhdGlvbm1vZGFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVzZXJ2YXRpb25Db21wb25lbnQgfSBmcm9tICcuL3Jlc2VydmF0aW9uL3Jlc2VydmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tZW50TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlckF1dGhDb21wb25lbnQgfSBmcm9tICcuL3VzZXJhdXRoL3VzZXJhdXRoLmNvbXBvbmVudCc7XG5cblxuaW1wb3J0IHsgRGlzaFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Rpc2guc2VydmljZSc7XG5pbXBvcnQgeyBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Byb2Nlc3MtaHR0cG1zZy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4vc2hhcmVkL2Jhc2V1cmwnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zaGFyZWQvZHJhd2VyL2RyYXdlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Byb21vdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExlYWRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xlYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhdm9yaXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZmF2b3JpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBDb3VjaGJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb3VjaGJhc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3BsYXRmb3JtLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICAnZmEnOiAnLi9mb250cy9mb250LWF3ZXNvbWUubWluLmNzcydcbiAgICAgICAgfSksXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBBYm91dENvbXBvbmVudCxcbiAgICAgICAgTWVudUNvbXBvbmVudCxcbiAgICAgICAgQ29udGFjdENvbXBvbmVudCxcbiAgICAgICAgRGlzaGRldGFpbENvbXBvbmVudCxcbiAgICAgICAgRHJhd2VyQ29tcG9uZW50LFxuICAgICAgICBGYXZvcml0ZXNDb21wb25lbnQsXG4gICAgICAgIFJlc2VydmF0aW9uQ29tcG9uZW50LFxuICAgICAgICBSZXNlcnZhdGlvbk1vZGFsQ29tcG9uZW50LFxuICAgICAgICBDb21tZW50TW9kYWxDb21wb25lbnQsXG4gICAgICAgIFVzZXJBdXRoQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCxcbiAgICAgICAgQ29tbWVudE1vZGFsQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiAnQmFzZVVSTCcsIHVzZVZhbHVlOiBiYXNlVVJMIH0sXG4gICAgICAgIERpc2hTZXJ2aWNlLFxuICAgICAgICBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UsXG4gICAgICAgIFByb21vdGlvblNlcnZpY2UsXG4gICAgICAgIExlYWRlclNlcnZpY2UsXG4gICAgICAgIEZhdm9yaXRlU2VydmljZSxcbiAgICAgICAgQ291Y2hiYXNlU2VydmljZSxcbiAgICAgICAgUGxhdGZvcm1TZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19