"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../shared/drawer/drawer.page");
var forms_1 = require("@angular/forms");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var reservationmodal_component_1 = require("../reservationmodal/reservationmodal.component");
var page_1 = require("ui/page");
var animation_1 = require("ui/animation");
var couchbase_service_1 = require("../services/couchbase.service");
var ReservationComponent = (function (_super) {
    __extends(ReservationComponent, _super);
    function ReservationComponent(changeDetectorRef, formBuilder, _modalService, vcRef, page, couchbaseService) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.formBuilder = formBuilder;
        _this._modalService = _modalService;
        _this.vcRef = vcRef;
        _this.page = page;
        _this.couchbaseService = couchbaseService;
        _this.submittedNumOfGuests = 3;
        _this.submittedSmokingPref = false;
        _this.submittedDate = (new Date()).toDateString();
        _this.isSubmittedState = false;
        _this.docId = "reservations";
        _this.reservation = _this.formBuilder.group({
            guests: 3,
            smoking: false,
            dateTime: ['', forms_1.Validators.required]
        });
        return _this;
    }
    ReservationComponent.prototype.ngOnInit = function () {
        this.reserveTableGridLayout = this.page.getViewById("reserveTableGridLayout");
        this.reservationDetailsLayout = this.page.getViewById("reservationDetailsLayout");
    };
    ReservationComponent.prototype.onSmokingChecked = function (args) {
        var smokingSwitch = args.object;
        if (smokingSwitch.checked) {
            this.reservation.patchValue({ smoking: true });
        }
        else {
            this.reservation.patchValue({ smoking: false });
        }
    };
    ReservationComponent.prototype.onGuestChange = function (args) {
        var textField = args.object;
        this.reservation.patchValue({ guests: textField.text });
    };
    ReservationComponent.prototype.onDateTimeChange = function (args) {
        var textField = args.object;
        this.reservation.patchValue({ dateTime: textField.text });
    };
    ReservationComponent.prototype.onSubmit = function () {
        this.submittedNumOfGuests = this.reservation.value.guests;
        this.submittedSmokingPref = this.reservation.value.smoking;
        this.submittedDate = this.reservation.value.dateTime;
        var doc = this.couchbaseService.getDocument(this.docId);
        if (doc == null) {
            console.log("This is the first reservation");
            console.log(JSON.stringify(this.reservation.value));
            this.reservations = [];
            this.reservations.push(this.reservation.value);
            this.couchbaseService.createDocument({ "reservations": this.reservations }, this.docId);
        }
        else {
            this.reservations = doc.reservations;
            this.reservations.push(this.reservation.value);
            this.couchbaseService.updateDocument(this.docId, { "reservations": this.reservations });
        }
        console.log(JSON.stringify(doc));
        this.animateReservationFormOut();
    };
    ReservationComponent.prototype.createModalView = function (args) {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            context: args,
            fullscreen: false
        };
        this._modalService.showModal(reservationmodal_component_1.ReservationModalComponent, options)
            .then(function (result) {
            if (args === "guest") {
                _this.reservation.patchValue({ guests: result });
            }
            else if (args === "date-time") {
                _this.reservation.patchValue({ dateTime: result });
            }
        });
    };
    ReservationComponent.prototype.animateReservationFormOut = function () {
        var _this = this;
        var definitions = new Array();
        var a1 = {
            target: this.reserveTableGridLayout,
            scale: { x: 0, y: 0 },
            opacity: 0,
            duration: 500
        };
        definitions.push(a1);
        /*
        By default all the elements will have a scale of x:1 and y:1
        and hence we have to first for the summary layout reduce the scale to (0,0)
        and then in the next animmation we will increase the scale to (1,1)
        */
        var a2 = {
            target: this.reservationDetailsLayout,
            scale: { x: 0, y: 0 },
            opacity: 0,
            duration: 500
        };
        definitions.push(a2);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
            _this.isSubmittedState = true;
            _this.animateDetailsIn();
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    ReservationComponent.prototype.animateDetailsIn = function () {
        var definitions = new Array();
        var a1 = {
            target: this.reservationDetailsLayout,
            scale: { x: 1, y: 1 },
            opacity: 1,
            duration: 500
        };
        definitions.push(a1);
        var animationSet = new animation_1.Animation(definitions);
        animationSet.play().then(function () {
        })
            .catch(function (e) {
            console.log(e.message);
        });
    };
    ReservationComponent = __decorate([
        core_1.Component({
            selector: 'app-reservation',
            moduleId: module.id,
            templateUrl: './reservation.component.html'
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            forms_1.FormBuilder,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            page_1.Page,
            couchbase_service_1.CouchbaseService])
    ], ReservationComponent);
    return ReservationComponent;
}(drawer_page_1.DrawerPage));
exports.ReservationComponent = ReservationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzZXJ2YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVGO0FBQ3ZGLDREQUEwRDtBQUcxRCx3Q0FBb0U7QUFDcEUsa0VBQTJGO0FBQzNGLDZGQUEyRjtBQUMzRixnQ0FBK0I7QUFDL0IsMENBQThEO0FBSzlELG1FQUFpRTtBQU9qRTtJQUEwQyx3Q0FBVTtJQWFoRCw4QkFDWSxpQkFBb0MsRUFDcEMsV0FBd0IsRUFDeEIsYUFBaUMsRUFDakMsS0FBdUIsRUFDdkIsSUFBVSxFQUNWLGdCQUFrQztRQU45QyxZQU9JLGtCQUFNLGlCQUFpQixDQUFDLFNBUzNCO1FBZlcsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFDakMsV0FBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFoQjlDLDBCQUFvQixHQUFXLENBQUMsQ0FBQztRQUNqQywwQkFBb0IsR0FBWSxLQUFLLENBQUM7UUFDdEMsbUJBQWEsR0FBVyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwRCxzQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFLbEMsV0FBSyxHQUFXLGNBQWMsQ0FBQztRQVczQixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3RDLE1BQU0sRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLEtBQUs7WUFDZCxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDdEMsQ0FBQyxDQUFDOztJQUdQLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ks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QyxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUExS1Esb0JBQW9CO1FBTGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7eUNBZWlDLHdCQUFpQjtZQUN2QixtQkFBVztZQUNULGlDQUFrQjtZQUMxQix1QkFBZ0I7WUFDakIsV0FBSTtZQUNRLG9DQUFnQjtPQW5CckMsb0JBQW9CLENBMktoQztJQUFELDJCQUFDO0NBQUEsQUEzS0QsQ0FBMEMsd0JBQVUsR0EyS25EO0FBM0tZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSAnLi4vc2hhcmVkL2RyYXdlci9kcmF3ZXIucGFnZSc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xyXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tICd1aS9zd2l0Y2gnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi9yZXNlcnZhdGlvbm1vZGFsL3Jlc2VydmF0aW9ubW9kYWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24sIEFuaW1hdGlvbkRlZmluaXRpb24gfSBmcm9tIFwidWkvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSwgU3dpcGVEaXJlY3Rpb24gfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb2xvcic7XHJcbmltcG9ydCAqIGFzIGVudW1zIGZyb20gXCJ1aS9lbnVtc1wiO1xyXG5pbXBvcnQgeyBDb3VjaGJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY291Y2hiYXNlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1yZXNlcnZhdGlvbicsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Jlc2VydmF0aW9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzZXJ2YXRpb25Db21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICByZXNlcnZhdGlvbjogRm9ybUdyb3VwO1xyXG4gICAgc3VibWl0dGVkTnVtT2ZHdWVzdHM6IG51bWJlciA9IDM7XHJcbiAgICBzdWJtaXR0ZWRTbW9raW5nUHJlZjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3VibWl0dGVkRGF0ZTogc3RyaW5nID0gKG5ldyBEYXRlKCkpLnRvRGF0ZVN0cmluZygpO1xyXG4gICAgaXNTdWJtaXR0ZWRTdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcmVzZXJ2ZVRhYmxlR3JpZExheW91dDogVmlldztcclxuICAgIHJlc2VydmF0aW9uRGV0YWlsc0xheW91dDogVmlldztcclxuXHJcbiAgICByZXNlcnZhdGlvbnM6IEFycmF5PGFueT47XHJcbiAgICBkb2NJZDogc3RyaW5nID0gXCJyZXNlcnZhdGlvbnNcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgICAgICBwcml2YXRlIGNvdWNoYmFzZVNlcnZpY2U6IENvdWNoYmFzZVNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXJ2YXRpb24gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgZ3Vlc3RzOiAzLFxyXG4gICAgICAgICAgICBzbW9raW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0ZVRpbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucmVzZXJ2ZVRhYmxlR3JpZExheW91dCA9IDxWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZDxWaWV3PihcInJlc2VydmVUYWJsZUdyaWRMYXlvdXRcIik7XHJcbiAgICAgICAgdGhpcy5yZXNlcnZhdGlvbkRldGFpbHNMYXlvdXQgPSA8Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8Vmlldz4oXCJyZXNlcnZhdGlvbkRldGFpbHNMYXlvdXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25TbW9raW5nQ2hlY2tlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHNtb2tpbmdTd2l0Y2ggPSA8U3dpdGNoPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGlmIChzbW9raW5nU3dpdGNoLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHsgc21va2luZzogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXJ2YXRpb24ucGF0Y2hWYWx1ZSh7IHNtb2tpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkd1ZXN0Q2hhbmdlKGFyZ3MpIHtcclxuICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHsgZ3Vlc3RzOiB0ZXh0RmllbGQudGV4dCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRhdGVUaW1lQ2hhbmdlKGFyZ3MpIHtcclxuICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHsgZGF0ZVRpbWU6IHRleHRGaWVsZC50ZXh0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWROdW1PZkd1ZXN0cyA9IHRoaXMucmVzZXJ2YXRpb24udmFsdWUuZ3Vlc3RzO1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkU21va2luZ1ByZWYgPSB0aGlzLnJlc2VydmF0aW9uLnZhbHVlLnNtb2tpbmc7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWREYXRlID0gdGhpcy5yZXNlcnZhdGlvbi52YWx1ZS5kYXRlVGltZTtcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgZG9jID0gdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLmdldERvY3VtZW50KHRoaXMuZG9jSWQpO1xyXG5cclxuICAgICAgICBpZiAoZG9jID09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgZmlyc3QgcmVzZXJ2YXRpb25cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucmVzZXJ2YXRpb24udmFsdWUpKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbnMucHVzaCh0aGlzLnJlc2VydmF0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLmNyZWF0ZURvY3VtZW50KHsgXCJyZXNlcnZhdGlvbnNcIjogdGhpcy5yZXNlcnZhdGlvbnMgfSwgdGhpcy5kb2NJZCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbnMgPSBkb2MucmVzZXJ2YXRpb25zO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2VydmF0aW9ucy5wdXNoKHRoaXMucmVzZXJ2YXRpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNvdWNoYmFzZVNlcnZpY2UudXBkYXRlRG9jdW1lbnQodGhpcy5kb2NJZCwgeyBcInJlc2VydmF0aW9uc1wiOiB0aGlzLnJlc2VydmF0aW9ucyB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRvYykpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZVJlc2VydmF0aW9uRm9ybU91dCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVNb2RhbFZpZXcoYXJncykge1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgICAgICAgICBjb250ZXh0OiBhcmdzLFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5zaG93TW9kYWwoUmVzZXJ2YXRpb25Nb2RhbENvbXBvbmVudCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJncyA9PT0gXCJndWVzdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHsgZ3Vlc3RzOiByZXN1bHQgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhcmdzID09PSBcImRhdGUtdGltZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNlcnZhdGlvbi5wYXRjaFZhbHVlKHsgZGF0ZVRpbWU6IHJlc3VsdCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhbmltYXRlUmVzZXJ2YXRpb25Gb3JtT3V0KCkge1xyXG4gICAgICAgIGxldCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheTxBbmltYXRpb25EZWZpbml0aW9uPigpO1xyXG4gICAgICAgIGxldCBhMTogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnJlc2VydmVUYWJsZUdyaWRMYXlvdXQsXHJcbiAgICAgICAgICAgIHNjYWxlOiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgZHVyYXRpb246IDUwMFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRlZmluaXRpb25zLnB1c2goYTEpO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIEJ5IGRlZmF1bHQgYWxsIHRoZSBlbGVtZW50cyB3aWxsIGhhdmUgYSBzY2FsZSBvZiB4OjEgYW5kIHk6MVxyXG4gICAgICAgIGFuZCBoZW5jZSB3ZSBoYXZlIHRvIGZpcnN0IGZvciB0aGUgc3VtbWFyeSBsYXlvdXQgcmVkdWNlIHRoZSBzY2FsZSB0byAoMCwwKVxyXG4gICAgICAgIGFuZCB0aGVuIGluIHRoZSBuZXh0IGFuaW1tYXRpb24gd2Ugd2lsbCBpbmNyZWFzZSB0aGUgc2NhbGUgdG8gKDEsMSlcclxuICAgICAgICAqL1xyXG4gICAgICAgIGxldCBhMjogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnJlc2VydmF0aW9uRGV0YWlsc0xheW91dCxcclxuICAgICAgICAgICAgc2NhbGU6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwXHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChhMik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGFuaW1hdGlvblNldCA9IG5ldyBBbmltYXRpb24oZGVmaW5pdGlvbnMpO1xyXG5cclxuICAgICAgICBhbmltYXRpb25TZXQucGxheSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzU3VibWl0dGVkU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVEZXRhaWxzSW4oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGVEZXRhaWxzSW4oKSB7XHJcblxyXG4gICAgICAgIGxldCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheTxBbmltYXRpb25EZWZpbml0aW9uPigpO1xyXG4gICAgICAgIGxldCBhMTogQW5pbWF0aW9uRGVmaW5pdGlvbiA9IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnJlc2VydmF0aW9uRGV0YWlsc0xheW91dCxcclxuICAgICAgICAgICAgc2NhbGU6IHsgeDogMSwgeTogMSB9LFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwXHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChhMSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGFuaW1hdGlvblNldCA9IG5ldyBBbmltYXRpb24oZGVmaW5pdGlvbnMpO1xyXG5cclxuICAgICAgICBhbmltYXRpb25TZXQucGxheSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19