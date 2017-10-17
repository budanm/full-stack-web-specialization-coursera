"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_service_1 = require("./services/platform.service");
var AppComponent = (function () {
    function AppComponent(platformService) {
        this.platformService = platformService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.platformService.printPlatformInfo();
        this.platformService.startMonitoringNetwork()
            .subscribe(function (message) {
            console.log(message);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.platformService.stopMonitoringNetwork();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [platform_service_1.PlatformService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsZ0VBQThEO0FBUTlEO0lBRUksc0JBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFJLENBQUM7SUFFekQsK0JBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLHNCQUFzQixFQUFFO2FBQ3hDLFNBQVMsQ0FBQyxVQUFDLE9BQWU7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV6QixDQUFDLENBQUMsQ0FBQztJQUdYLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBRUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBRWpELENBQUM7SUFuQlEsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQUl1QyxrQ0FBZTtPQUYzQyxZQUFZLENBcUJ4QjtJQUFELG1CQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBsYXRmb3JtU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcGxhdGZvcm0uc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybVNlcnZpY2UucHJpbnRQbGF0Zm9ybUluZm8oKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybVNlcnZpY2Uuc3RhcnRNb25pdG9yaW5nTmV0d29yaygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChtZXNzYWdlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuXG4gICAgICAgIHRoaXMucGxhdGZvcm1TZXJ2aWNlLnN0b3BNb25pdG9yaW5nTmV0d29yaygpO1xuXG4gICAgfVxuXG59XG4iXX0=