/**
 * Title: base-layout.component.ts
 * Author: James Pinson
 * Date: 8 July 2021
 * Description: This is the base layout of our application.
 */

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  //Here we assign the variable assignment as a string.
  assignment: string;

  //Here we give the assignment variable a value.
  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'GPA Calculator';
   }

  ngOnInit(): void {
  }

  //Here we added a sign out feature.
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

}
