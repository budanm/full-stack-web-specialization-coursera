import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ContactType, Feedback } from '../shared/feedback'
import { flyInOut, expand } from '../animations/app.animation';
import { Observable } from 'rxjs/Observable';

import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  postedfeedback: Feedback;
  contactType = ContactType;
  submitting = false;
  hideForm = false;
  errMessage: string;

  constructor(private feedbackservice: FeedbackService, private fb: FormBuilder, @Inject('BaseURL') private BaseURL) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {

    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: ['', [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required': 'First Name is required.',
      'minlength': 'First Name must be at least 2 characters long.',
      'maxlength': 'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required': 'Last Name is required.',
      'minlength': 'Last Name must be at least 2 characters long.',
      'maxlength': 'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required': 'Tel. number is required.',
      'pattern': 'Tel. number must contain only numbers.'
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Email not in valid format.'
    },
  };


  onValueChanged(data?: any) {

    if (!this.feedbackForm) {

      return;
    }

    const form = this.feedbackForm;
    for (const field in this.formErrors) {

      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }

  }

  /**
   * reset form values and hide other intermediate divs
   * using observable timer
   * @param timer 
   */
  reset(timer: number) {

    Observable.timer(timer).subscribe(() => {
      this.feedbackForm.reset({
        firstname: '',
        lastname: '',
        telnum: '',
        email: '',
        agree: false,
        contacttype: 'None',
        message: ''
      });
      this.postedfeedback = null;
      this.hideForm = false;

    });
  }

  /**
   * Once submission process starts, do the following:
   * a) set the binding value submitting to true and enable the " Submitting form spinner"
   * b) set the binding value hideForm to true such that the form is hidden
   * 
   * On completion, do the following :
   * a) set the binding value postedfeedback such that the div showing the details of the postedfeedback is visible
   * b) set the submitting to false such that spinner goes away
   * c) call reset to reset the form values and hide the postedfeedback details div.
   *    -> for success the time is 5 sec and for failure its 0 sec
   */
  onSubmit() {

    this.submitting = true;
    this.hideForm = true;
    this.feedbackservice.submitFeedback(this.feedbackForm.value).subscribe(
      feedback => {
        this.postedfeedback = feedback;
        this.submitting = false;
        this.reset(5000);
      },
      errmess => {
        this.errMessage = <any>errmess;
        this.submitting = false;
        this.reset(0);
      }
    );


  }

}
