"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var forms_1 = require("@angular/forms");
var CommentModalComponent = (function () {
    function CommentModalComponent(params, formBuilder, page) {
        this.params = params;
        this.formBuilder = formBuilder;
        this.page = page;
        this.commentForm = this.formBuilder.group({
            author: ['', forms_1.Validators.required],
            rating: 5,
            comment: ['', forms_1.Validators.required],
        });
    }
    CommentModalComponent.prototype.ngOnInit = function () {
    };
    CommentModalComponent.prototype.onSliderValueChange = function (args) {
        var slider = args.object;
        this.commentForm.patchValue({ rating: slider.value });
    };
    CommentModalComponent.prototype.onAuthorChange = function (args) {
        var textField = args.object;
        this.commentForm.patchValue({ author: textField.text });
    };
    CommentModalComponent.prototype.onCommentChange = function (args) {
        var textField = args.object;
        this.commentForm.patchValue({ comment: textField.text });
    };
    CommentModalComponent.prototype.submit = function () {
        var currentdateISO = (new Date()).toISOString();
        this.commentForm.value.date = currentdateISO;
        this.params.closeCallback(this.commentForm.value);
        console.log(JSON.stringify(this.commentForm.value));
    };
    CommentModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './comment.component.html'
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
            forms_1.FormBuilder,
            page_1.Page])
    ], CommentModalComponent);
    return CommentModalComponent;
}());
exports.CommentModalComponent = CommentModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxrRUFBc0U7QUFFdEUsZ0NBQStCO0FBRS9CLHdDQUFvRTtBQU9wRTtJQUlJLCtCQUNZLE1BQXlCLEVBQ3pCLFdBQXdCLEVBQ3hCLElBQVU7UUFGVixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBR2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdEMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2pDLE1BQU0sRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFHRCx3Q0FBUSxHQUFSO0lBR0EsQ0FBQztJQUdELG1EQUFtQixHQUFuQixVQUFvQixJQUFJO1FBQ3BCLElBQUksTUFBTSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFFMUQsQ0FBQztJQUVELDhDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsK0NBQWUsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVNLHNDQUFNLEdBQWI7UUFFSSxJQUFJLGNBQWMsR0FBVyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUV4RCxDQUFDO0lBaERRLHFCQUFxQjtRQUxqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7U0FDMUMsQ0FBQzt5Q0FPc0IsZ0NBQWlCO1lBQ1osbUJBQVc7WUFDbEIsV0FBSTtPQVBiLHFCQUFxQixDQWlEakM7SUFBRCw0QkFBQztDQUFBLEFBakRELElBaURDO0FBakRZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcclxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSBcInVpL3NsaWRlclwiO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbW1lbnQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbWVudE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb21tZW50Rm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcyxcclxuICAgICAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2VcclxuICAgICkge1xyXG5cclxuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIGF1dGhvcjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgcmF0aW5nOiA1LFxyXG4gICAgICAgICAgICBjb21tZW50OiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25TbGlkZXJWYWx1ZUNoYW5nZShhcmdzKSB7XHJcbiAgICAgICAgbGV0IHNsaWRlciA9IDxTbGlkZXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgdGhpcy5jb21tZW50Rm9ybS5wYXRjaFZhbHVlKHsgcmF0aW5nOiBzbGlkZXIudmFsdWUgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25BdXRob3JDaGFuZ2UoYXJncykge1xyXG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHRoaXMuY29tbWVudEZvcm0ucGF0Y2hWYWx1ZSh7IGF1dGhvcjogdGV4dEZpZWxkLnRleHQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tZW50Q2hhbmdlKGFyZ3MpIHtcclxuICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtLnBhdGNoVmFsdWUoeyBjb21tZW50OiB0ZXh0RmllbGQudGV4dCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3VibWl0KCkge1xyXG5cclxuICAgICAgICBsZXQgY3VycmVudGRhdGVJU086IHN0cmluZyA9IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudEZvcm0udmFsdWUuZGF0ZSA9IGN1cnJlbnRkYXRlSVNPO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2sodGhpcy5jb21tZW50Rm9ybS52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5jb21tZW50Rm9ybS52YWx1ZSkpO1xyXG5cclxuICAgIH1cclxufSJdfQ==