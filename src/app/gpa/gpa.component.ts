/**
 * Title: home.component.ts
 * Author: James Pinson
 * Date: 4 July 2021
 * Description: This is our gpa component ts file.
 */

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  //Here we use the input directive to get our gpa data from the transcript array.
  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
