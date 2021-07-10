/**
 * Title: grade-summary.component.ts
 * Author: James Pinson
 * Date: 4 July 2021
 * Description: This is our grade-summary component ts file.
 */

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  //Here we set up the input directives to input the grade and course data from grade entry.
  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
