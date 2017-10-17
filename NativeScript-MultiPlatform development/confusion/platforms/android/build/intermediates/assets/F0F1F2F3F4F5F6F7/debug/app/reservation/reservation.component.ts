import { Component, OnInit, ChangeDetectorRef, ViewContainerRef } from '@angular/core';
import { DrawerPage } from '../shared/drawer/drawer.page';
import { TextField } from 'ui/text-field';
import { Switch } from 'ui/switch';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ReservationModalComponent } from "../reservationmodal/reservationmodal.component";
import { Page } from "ui/page";
import { Animation, AnimationDefinition } from "ui/animation";
import { View } from "ui/core/view";
import { SwipeGestureEventData, SwipeDirection } from "ui/gestures";
import { Color } from 'color';
import * as enums from "ui/enums";
import { CouchbaseService } from '../services/couchbase.service';

@Component({
    selector: 'app-reservation',
    moduleId: module.id,
    templateUrl: './reservation.component.html'
})
export class ReservationComponent extends DrawerPage implements OnInit {

    reservation: FormGroup;
    submittedNumOfGuests: number = 3;
    submittedSmokingPref: boolean = false;
    submittedDate: string = (new Date()).toDateString();
    isSubmittedState: boolean = false;
    reserveTableGridLayout: View;
    reservationDetailsLayout: View;

    reservations: Array<any>;
    docId: string = "reservations";

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private formBuilder: FormBuilder,
        private _modalService: ModalDialogService,
        private vcRef: ViewContainerRef,
        private page: Page,
        private couchbaseService: CouchbaseService) {
        super(changeDetectorRef);

        this.reservation = this.formBuilder.group({
            guests: 3,
            smoking: false,
            dateTime: ['', Validators.required]
        });


    }

    ngOnInit() {
        this.reserveTableGridLayout = <View>this.page.getViewById<View>("reserveTableGridLayout");
        this.reservationDetailsLayout = <View>this.page.getViewById<View>("reservationDetailsLayout");
    }

    onSmokingChecked(args) {
        let smokingSwitch = <Switch>args.object;
        if (smokingSwitch.checked) {
            this.reservation.patchValue({ smoking: true });
        }
        else {
            this.reservation.patchValue({ smoking: false });
        }
    }

    onGuestChange(args) {
        let textField = <TextField>args.object;

        this.reservation.patchValue({ guests: textField.text });
    }

    onDateTimeChange(args) {
        let textField = <TextField>args.object;

        this.reservation.patchValue({ dateTime: textField.text });
    }

    onSubmit() {


        this.submittedNumOfGuests = this.reservation.value.guests;
        this.submittedSmokingPref = this.reservation.value.smoking;
        this.submittedDate = this.reservation.value.dateTime;



        let doc = this.couchbaseService.getDocument(this.docId);

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

    }

    createModalView(args) {

        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: args,
            fullscreen: false
        };

        this._modalService.showModal(ReservationModalComponent, options)
            .then((result: any) => {
                if (args === "guest") {
                    this.reservation.patchValue({ guests: result });
                }
                else if (args === "date-time") {
                    this.reservation.patchValue({ dateTime: result });
                }
            });

    }


    animateReservationFormOut() {
        let definitions = new Array<AnimationDefinition>();
        let a1: AnimationDefinition = {
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
        let a2: AnimationDefinition = {
            target: this.reservationDetailsLayout,
            scale: { x: 0, y: 0 },
            opacity: 0,
            duration: 500

        };
        definitions.push(a2);



        let animationSet = new Animation(definitions);

        animationSet.play().then(() => {
            this.isSubmittedState = true;
            this.animateDetailsIn();
        })
            .catch((e) => {
                console.log(e.message);
            });
    }

    animateDetailsIn() {

        let definitions = new Array<AnimationDefinition>();
        let a1: AnimationDefinition = {
            target: this.reservationDetailsLayout,
            scale: { x: 1, y: 1 },
            opacity: 1,
            duration: 500

        };
        definitions.push(a1);



        let animationSet = new Animation(definitions);

        animationSet.play().then(() => {
            
        })
            .catch((e) => {
                console.log(e.message);
            });
    }
}