import { Component, OnInit } from '@angular/core';
import { UserApi } from '../user-api';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formError: string;
  submitting = false;

  constructor(private userApi: UserApi, private router: Router) { }

  onSubmit(signInForm: NgForm){    
    if(signInForm.valid){
      this.submitting = true;
      this.formError = null;

      this.userApi.singIn(
        signInForm.value.username, 
        signInForm.value.password,
        signInForm.value.rememberMe
      ).subscribe( data => {
        this.router.navigate(['/authenticated'])
      }, err => {
        this.submitting = false;
        this.formError = err;
      })
    }
  }

  ngOnInit() {
  }

}
