import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Dish } from '../../shared/dish';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  commentForm: FormGroup;
  dish: Dish;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private formbuilder: FormBuilder) {

    this.dish = navParams.get('dish');

    this.commentForm = this.formbuilder.group({
      author: ['', Validators.required],
      rating: 5,
      comment: ['', Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    console.log(this.commentForm.value);
    this.dish.comments.push({
      'author': this.commentForm.value.author,
      'date': new Date().toISOString(),
      'comment': this.commentForm.value.comment,
      'rating': this.commentForm.value.rating

    })
    this.viewCtrl.dismiss();
  }

}
