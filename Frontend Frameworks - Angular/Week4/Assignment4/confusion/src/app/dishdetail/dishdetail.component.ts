import { Component, OnInit, Input, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';

import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { trigger, state, style, animate, transition } from '@angular/animations';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  animations: [
    trigger('visibility', [
      state('shown', style({
        transform: 'scale(1.0)',
        opacity: 1
      })),

      state('hidden', style({
        transform: 'scale(0.5)',
        opacity: 0
      })),

      transition('* => *', animate('0.5s ease-in-out'))
    ])
  ]
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;
  dishfeedbackform: FormGroup;
  dishComment: Comment;
  dishcopy = null;
  visibility = 'shown';
  errMess = null;


  formErrors = {
    'author': '',
    'comment': ''
  };

  validationMessages = {
    'author': {
      'required': 'Author Name is required.',
      'minlength': 'Author Name must be at least 2 characters long.'
    },
    'comment': {
      'required': 'Comment is required.',
    }
  };


  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) {
    this.createForm();
    this.dishComment = new Comment();
  }

  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params
      .switchMap((params: Params) => { this.visibility = 'hidden'; return this.dishservice.getDish(+params['id']); })
      .subscribe(dish => { this.dish = dish; this.dishcopy = dish; this.setPrevNext(dish.id); this.visibility = 'shown'; },
      errmess => { this.dish = null; this.errMess = <any>errmess; });

  }

  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + (index - 1)) % (this.dishIds.length)];
    this.next = this.dishIds[(this.dishIds.length + (index + 1)) % (this.dishIds.length)];

  }

  goBack(): void {
    this.location.back();
  }

  createForm() {

    this.dishfeedbackform = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2)]],
      rating: 5,
      comment: ''
    });

    this.dishfeedbackform.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {

    if (!this.dishfeedbackform) {

      return;
    }

    const form = this.dishfeedbackform;
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

  onSubmit() {

    if (this.dishfeedbackform.value) {

      this.dishComment.author = this.dishfeedbackform.value.author;
      this.dishComment.date = new Date().toISOString();
      this.dishComment.comment = this.dishfeedbackform.value.comment;
      this.dishComment.rating = this.dishfeedbackform.value.rating;

      this.dishcopy.comments.push(this.dishComment);
      this.dishcopy.save().subscribe(
        dish => this.dish = dish
      );

    }



    this.dishfeedbackform.reset({
      author: '',
      rating: 5,
      comment: ''
    });
  }


}
