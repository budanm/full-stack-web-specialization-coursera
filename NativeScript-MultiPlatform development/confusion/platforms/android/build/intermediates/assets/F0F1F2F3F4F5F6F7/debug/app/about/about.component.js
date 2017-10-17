"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var leader_service_1 = require("../services/leader.service");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var AboutComponent = (function (_super) {
    __extends(AboutComponent, _super);
    function AboutComponent(leaderservice, changeDetectorRef, BaseURL) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.leaderservice = leaderservice;
        _this.changeDetectorRef = changeDetectorRef;
        _this.BaseURL = BaseURL;
        return _this;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderservice.getLeaders().subscribe(function (leaders) { return _this.leaders = leaders; }, function (errmess) { return _this.leaderErrMess = errmess; });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            moduleId: module.id,
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
        }),
        __param(2, core_1.Inject('BaseURL')),
        __metadata("design:paramtypes", [leader_service_1.LeaderService,
            core_1.ChangeDetectorRef, Object])
    ], AboutComponent);
    return AboutComponent;
}(drawer_page_1.DrawerPage));
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZFO0FBRzdFLDZEQUEyRDtBQUMzRCw0REFBMEQ7QUFRMUQ7SUFBb0Msa0NBQVU7SUFNMUMsd0JBQ1ksYUFBNEIsRUFDNUIsaUJBQW9DLEVBQ2pCLE9BQU87UUFIdEMsWUFJSSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUMzQjtRQUpXLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDakIsYUFBTyxHQUFQLE9BQU8sQ0FBQTs7SUFFdEMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFPQztRQUxHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUNyQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixFQUNqQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLEdBQVEsT0FBTyxFQUFqQyxDQUFpQyxDQUUvQyxDQUFBO0lBQ0wsQ0FBQztJQXBCUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO1FBVU8sV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBRkssOEJBQWE7WUFDVCx3QkFBaUI7T0FSdkMsY0FBYyxDQXNCMUI7SUFBRCxxQkFBQztDQUFBLEFBdEJELENBQW9DLHdCQUFVLEdBc0I3QztBQXRCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBMZWFkZXIgfSBmcm9tICcuLi9zaGFyZWQvbGVhZGVyJztcclxuaW1wb3J0IHsgTGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xlYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gJy4uL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLnBhZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1hYm91dCcsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Fib3V0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Fib3V0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblxyXG4gICAgbGVhZGVyczogTGVhZGVyW107XHJcbiAgICBsZWFkZXJFcnJNZXNzOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsZWFkZXJzZXJ2aWNlOiBMZWFkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIEBJbmplY3QoJ0Jhc2VVUkwnKSBwcml2YXRlIEJhc2VVUkwpIHtcclxuICAgICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubGVhZGVyc2VydmljZS5nZXRMZWFkZXJzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBsZWFkZXJzID0+IHRoaXMubGVhZGVycyA9IGxlYWRlcnMsXHJcbiAgICAgICAgICAgIGVycm1lc3MgPT4gdGhpcy5sZWFkZXJFcnJNZXNzID0gPGFueT5lcnJtZXNzXHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXX0=