"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var forms_1 = require("@angular/forms");
var application_settings_1 = require("application-settings");
var router_1 = require("nativescript-angular/router");
var camera = require("nativescript-camera");
var imagepicker = require("nativescript-imagepicker");
var UserAuthComponent = (function () {
    function UserAuthComponent(page, routerExtensions, formBuilder) {
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.formBuilder = formBuilder;
        this.tabSelectedIndex = 0;
        this.loginForm = this.formBuilder.group({
            userName: [application_settings_1.getString('userName', ''), forms_1.Validators.required],
            password: [application_settings_1.getString('password', ''), forms_1.Validators.required]
        });
        this.registerForm = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            userName: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            telnum: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required]
        });
    }
    UserAuthComponent.prototype.ngOnInit = function () {
    };
    UserAuthComponent.prototype.takePicture = function () {
        var _this = this;
        var isAvailable = camera.isAvailable();
        if (isAvailable) {
            camera.requestPermissions();
            var options = { width: 100, height: 100, keepAspectRatio: false, saveToGallery: true };
            camera.takePicture(options)
                .then(function (imageAsset) {
                var image = _this.page.getViewById('myPicture');
                image.src = imageAsset;
            })
                .catch(function (err) { return console.log('Error -> ' + err.message); });
        }
    };
    UserAuthComponent.prototype.getFromLibrary = function () {
        var context = imagepicker.create({
            mode: "single" // use "multiple" for multiple selection
        });
        var image = this.page.getViewById('myPicture');
        context
            .authorize()
            .then(function () {
            return context.present();
        })
            .then(function (selection) {
            selection.forEach(function (selected) {
                image.src = selected;
            });
        }).catch(function (err) { return console.log('Error -> ' + err.message); });
    };
    UserAuthComponent.prototype.register = function () {
        this.tabSelectedIndex = 1;
    };
    UserAuthComponent.prototype.onLoginSubmit = function () {
        console.log(JSON.stringify(this.loginForm.value));
        application_settings_1.setString("userName", this.loginForm.get('userName').value);
        application_settings_1.setString("password", this.loginForm.get('password').value);
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    };
    UserAuthComponent.prototype.onRegisterSubmit = function () {
        console.log(JSON.stringify(this.registerForm.value));
        application_settings_1.setString("userName", this.registerForm.get('userName').value);
        application_settings_1.setString("password", this.registerForm.get('password').value);
        this.loginForm.patchValue({
            'userName': this.registerForm.get('userName').value,
            'password': this.registerForm.get('password').value
        });
        this.tabSelectedIndex = 0;
    };
    UserAuthComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './userauth.component.html'
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            forms_1.FormBuilder])
    ], UserAuthComponent);
    return UserAuthComponent;
}());
exports.UserAuthComponent = UserAuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmF1dGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcmF1dGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQUMvQix3Q0FBb0U7QUFDcEUsNkRBQTREO0FBQzVELHNEQUErRDtBQUMvRCw0Q0FBOEM7QUFFOUMsc0RBQXdEO0FBTXhEO0lBTUksMkJBQW9CLElBQVUsRUFDbEIsZ0JBQWtDLEVBQ2xDLFdBQXdCO1FBRmhCLFNBQUksR0FBSixJQUFJLENBQU07UUFDbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUpwQyxxQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFNekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUMxRCxRQUFRLEVBQUUsQ0FBQyxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUM3RCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUs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QUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRCxnQ0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztZQUN0QixVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSztZQUNuRCxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSztTQUN0RCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUEvRlEsaUJBQWlCO1FBSjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDO3lDQU80QixXQUFJO1lBQ0EseUJBQWdCO1lBQ3JCLG1CQUFXO09BUjNCLGlCQUFpQixDQWlHN0I7SUFBRCx3QkFBQztDQUFBLEFBakdELElBaUdDO0FBakdZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcclxuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcgfSBmcm9tICdhcHBsaWNhdGlvbi1zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSAnbmF0aXZlc2NyaXB0LWNhbWVyYSc7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAndWkvaW1hZ2UnO1xyXG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlcmF1dGguY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XHJcbiAgICByZWdpc3RlckZvcm06IEZvcm1Hcm91cDtcclxuICAgIHRhYlNlbGVjdGVkSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgdXNlck5hbWU6IFtnZXRTdHJpbmcoJ3VzZXJOYW1lJywgJycpLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFtnZXRTdHJpbmcoJ3Bhc3N3b3JkJywgJycpLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICB1c2VyTmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIHRlbG51bTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRha2VQaWN0dXJlKCkge1xyXG4gICAgICAgIGxldCBpc0F2YWlsYWJsZSA9IGNhbWVyYS5pc0F2YWlsYWJsZSgpO1xyXG4gICAgICAgIGlmIChpc0F2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICBjYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCk7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0geyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwga2VlcEFzcGVjdFJhdGlvOiBmYWxzZSwgc2F2ZVRvR2FsbGVyeTogdHJ1ZSB9O1xyXG5cclxuICAgICAgICAgICAgY2FtZXJhLnRha2VQaWN0dXJlKG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoaW1hZ2VBc3NldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZSA9IDxJbWFnZT50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8SW1hZ2U+KCdteVBpY3R1cmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBpbWFnZUFzc2V0O1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZygnRXJyb3IgLT4gJyArIGVyci5tZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0RnJvbUxpYnJhcnkoKSB7XHJcblxyXG4gICAgICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgbW9kZTogXCJzaW5nbGVcIiAvLyB1c2UgXCJtdWx0aXBsZVwiIGZvciBtdWx0aXBsZSBzZWxlY3Rpb25cclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgaW1hZ2UgPSA8SW1hZ2U+dGhpcy5wYWdlLmdldFZpZXdCeUlkPEltYWdlPignbXlQaWN0dXJlJyk7XHJcbiAgICAgICAgY29udGV4dFxyXG4gICAgICAgICAgICAuYXV0aG9yaXplKClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHNlbGVjdGlvbikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBzZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coJ0Vycm9yIC0+ICcgKyBlcnIubWVzc2FnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2dpblN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmxvZ2luRm9ybS52YWx1ZSkpO1xyXG5cclxuICAgICAgICBzZXRTdHJpbmcoXCJ1c2VyTmFtZVwiLCB0aGlzLmxvZ2luRm9ybS5nZXQoJ3VzZXJOYW1lJykudmFsdWUpO1xyXG4gICAgICAgIHNldFN0cmluZyhcInBhc3N3b3JkXCIsIHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblJlZ2lzdGVyU3VibWl0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlKSk7XHJcblxyXG4gICAgICAgIHNldFN0cmluZyhcInVzZXJOYW1lXCIsIHRoaXMucmVnaXN0ZXJGb3JtLmdldCgndXNlck5hbWUnKS52YWx1ZSk7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwicGFzc3dvcmRcIiwgdGhpcy5yZWdpc3RlckZvcm0uZ2V0KCdwYXNzd29yZCcpLnZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpbkZvcm0ucGF0Y2hWYWx1ZSh7XHJcbiAgICAgICAgICAgICd1c2VyTmFtZSc6IHRoaXMucmVnaXN0ZXJGb3JtLmdldCgndXNlck5hbWUnKS52YWx1ZSxcclxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogdGhpcy5yZWdpc3RlckZvcm0uZ2V0KCdwYXNzd29yZCcpLnZhbHVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG59Il19