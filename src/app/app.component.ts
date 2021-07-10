/**
 * Title: app.component.ts
 * Author: James Pinson
 * Date: 4 July 2021
 * Description: This is our app component ts file.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//This contains the title of our application.
export class AppComponent {
  title = 'gpa-calculator-app1';
}
