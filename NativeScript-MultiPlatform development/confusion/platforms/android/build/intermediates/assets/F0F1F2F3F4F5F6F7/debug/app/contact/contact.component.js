"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var Email = require("nativescript-email");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUk3RSw0REFBMEQ7QUFDMUQsdUVBQStEO0FBQy9ELDBDQUE0QztBQVE1QztJQUFzQyxvQ0FBVTtJQUU1QywwQkFDWSxpQkFBb0MsRUFDakIsT0FBTyxFQUMxQixRQUE0QjtRQUh4QyxZQUlJLGtCQUFNLGlCQUFpQixDQUFDLFNBRTNCO1FBTFcsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNqQixhQUFPLEdBQVAsT0FBTyxDQUFBO1FBQzFCLGNBQVEsR0FBUixRQUFRLENBQW9COztJQUd4QyxDQUFDO0lBRUQsbUNBQVEsR0FBUjtJQUdBLENBQUM7SUFHRCxvQ0FBUyxHQUFUO1FBRUksS0FBSyxDQUFDLFNBQVMsRUFBRTthQUNaLElBQUksQ0FBQyxVQUFDLEtBQWM7WUFDakIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDUixLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNWLEVBQUUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUMxQixPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixJQUFJLEVBQUUsaUJBQWlCO2lCQUMxQixDQUFDLENBQUM7WUFDUCxDQUFDO1lBQ0QsSUFBSTtnQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUE7SUFFVixDQUFDO0lBL0JRLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDekMsQ0FBQztRQUtPLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQURTLHdCQUFpQixVQUUxQiw4Q0FBa0I7T0FML0IsZ0JBQWdCLENBa0M1QjtJQUFELHVCQUFDO0NBQUEsQUFsQ0QsQ0FBc0Msd0JBQVUsR0FrQy9DO0FBbENZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBMZWFkZXIgfSBmcm9tICcuLi9zaGFyZWQvbGVhZGVyJztcclxuaW1wb3J0IHsgTGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xlYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gJy4uL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLnBhZ2UnO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0ICogYXMgRW1haWwgZnJvbSAnbmF0aXZlc2NyaXB0LWVtYWlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY29udGFjdCcsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbnRhY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY29udGFjdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBASW5qZWN0KCdCYXNlVVJMJykgcHJpdmF0ZSBCYXNlVVJMLFxyXG4gICAgICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHNlbmRFbWFpbCgpIHtcclxuXHJcbiAgICAgICAgRW1haWwuYXZhaWxhYmxlKClcclxuICAgICAgICAgICAgLnRoZW4oKGF2YWlsOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXZhaWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBFbWFpbC5jb21wb3NlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IFsnY29uZnVzaW9uQGZvb2QubmV0J10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICdbQ29uRnVzaW9uXTogUXVlcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiAnRGVhciBTaXIvTWFkYW06J1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBFbWFpbCBDb25maWd1cmVkJyk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=