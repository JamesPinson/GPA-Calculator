/**
 * Title: sign-in.component.ts
 * Author: James Pinson
 * Date: 10 July 2021
 * Description: This is the sign in component for our application.
 */

//Here are our import statements.
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  //Here we create our signin form and our error message variables.
  signinForm: FormGroup;
  errorMessage: string;

  //Here we pass in the router, cookieservice, formbuilder and signin service.
  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {
    console.log(this.cookieService.get('session_user'));
   }

  ngOnInit(): void {
    //Here we do the validation of the student id.
    this.signinForm = this.fb.group({
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }

  get form () {return this.signinForm.controls; }

  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    //Here we create our if else statement if valid we take user to home string, if not we display error message.
    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/'])
    } else {
      this.errorMessage = 'The student ID you entered is invalid, please try again. ';
    }
  }
}
