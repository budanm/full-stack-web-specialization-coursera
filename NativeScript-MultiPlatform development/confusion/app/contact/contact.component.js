"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var Email = require("nativescript-email");
var TNSPhone = require("nativescript-phone");
var ContactComponent = (function (_super) {
    __extends(ContactComponent, _super);
    function ContactComponent(changeDetectorRef, BaseURL, fonticon) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.BaseURL = BaseURL;
        _this.fonticon = fonticon;
        return _this;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.sendEmail = function () {
        Email.available()
            .then(function (avail) {
            if (avail) {
                Email.compose({
                    to: ['confusion@food.net'],
                    subject: '[ConFusion]: Query',
                    body: 'Dear Sir/Madam:'
                });
            }
            else
                console.log('No Email Configured');
        });
    };
    ContactComponent.prototype.callRestaurant = function () {
        TNSPhone.dial('+852 1234 5678', true);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            moduleId: module.id,
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.css']
        }),
        __param(1, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, Object, nativescript_ngx_fonticon_1.TNSFontIconService])
    ], ContactComponent);
    return ContactComponent;
}(drawer_page_1.DrawerPage));
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUk3RSw0REFBMEQ7QUFDMUQsdUVBQStEO0FBQy9ELDBDQUE0QztBQUM1Qyw2Q0FBK0M7QUFRL0M7SUFBc0Msb0NBQVU7SUFFNUMsMEJBQ1ksaUJBQW9DLEVBQ2pCLE9BQU8sRUFDMUIsUUFBNEI7UUFIeEMsWUFJSSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUUzQjtRQUxXLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDakIsYUFBTyxHQUFQLE9BQU8sQ0FBQTtRQUMxQixjQUFRLEdBQVIsUUFBUSxDQUFvQjs7SUFHeEMsQ0FBQztJQUVELG1DQUFRLEdBQVI7SUFHQSxDQUFDO0lBR0Qsb0NBQVMsR0FBVDtRQUVJLEtBQUssQ0FBQyxTQUFTLEVBQUU7YUFDWixJQUFJLENBQUMsVUFBQyxLQUFjO1lBQ2pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDVixFQUFFLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDMUIsT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsSUFBSSxFQUFFLGlCQUFpQjtpQkFDMUIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUNELElBQUk7Z0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFBO0lBRVYsQ0FBQztJQUdELHlDQUFjLEdBQWQ7UUFDSSxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFwQ1EsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDO1FBS08sV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBRFMsd0JBQWlCLFVBRTFCLDhDQUFrQjtPQUwvQixnQkFBZ0IsQ0F1QzVCO0lBQUQsdUJBQUM7Q0FBQSxBQXZDRCxDQUFzQyx3QkFBVSxHQXVDL0M7QUF2Q1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IExlYWRlciB9IGZyb20gJy4uL3NoYXJlZC9sZWFkZXInO1xyXG5pbXBvcnQgeyBMZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGVhZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSAnLi4vc2hhcmVkL2RyYXdlci9kcmF3ZXIucGFnZSc7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgKiBhcyBFbWFpbCBmcm9tICduYXRpdmVzY3JpcHQtZW1haWwnO1xyXG5pbXBvcnQgKiBhcyBUTlNQaG9uZSBmcm9tICduYXRpdmVzY3JpcHQtcGhvbmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jb250YWN0JyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29udGFjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jb250YWN0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIEBJbmplY3QoJ0Jhc2VVUkwnKSBwcml2YXRlIEJhc2VVUkwsXHJcbiAgICAgICAgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgc2VuZEVtYWlsKCkge1xyXG5cclxuICAgICAgICBFbWFpbC5hdmFpbGFibGUoKVxyXG4gICAgICAgICAgICAudGhlbigoYXZhaWw6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhdmFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEVtYWlsLmNvbXBvc2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogWydjb25mdXNpb25AZm9vZC5uZXQnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogJ1tDb25GdXNpb25dOiBRdWVyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6ICdEZWFyIFNpci9NYWRhbTonXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIEVtYWlsIENvbmZpZ3VyZWQnKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNhbGxSZXN0YXVyYW50KCl7XHJcbiAgICAgICAgVE5TUGhvbmUuZGlhbCgnKzg1MiAxMjM0IDU2NzgnLCB0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG59Il19