import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: '',
    remember: false
  };
  constructor(private dialogRef: MdDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("User:", this.user);
    this.dialogRef.close();
  }
}
