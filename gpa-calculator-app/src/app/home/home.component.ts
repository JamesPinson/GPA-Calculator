/**
 * Title: home.component.ts
 * Author: James Pinson
 * Date: 10 July 2021
 * Description: This is our home component ts file for our home page.
 */

//This is the import statements.
 import { Component, OnInit } from '@angular/core';
 import { ITranscript } from '../transcript.interface';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';

 @Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css']
 })
 export class HomeComponent implements OnInit {
//This contains my grades array, transcript entries, gpa total, and transcript form.
   selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
   transcriptEntries: Array<ITranscript> = [];
   gpaTotal: number = 0;;
   transcriptForm: FormGroup;

   constructor(private fb: FormBuilder) {

   }

   //This contains our form components that must be validated.
   ngOnInit(): void {
     this.transcriptForm = this.fb.group({
       course: ['', Validators.required],
       grade: ['', Validators.required]
     })
   }

   //This is our get form function.
   get form() { return this.transcriptForm.controls; }

   //This is our onSubmit function that pushes the grade to our transcript.
   onSubmit(event) {
     this.transcriptEntries.push({
       course: this.form.course.value,
       grade: this.form.grade.value
     });

     //This resets the form after the push has been done.
     event.currentTarget.reset();
   }

   //This is our calculate gpa function.
   calculateResults() {
     let gpa: number = 0;

     for (let entry of this.transcriptEntries) {
       console.log(entry.grade)
       switch(entry.grade) {
         case 'A':
           console.log('its an a')
           gpa += 4.0;
           break;
         case 'A-':
           gpa += 3.7;
           break;
         case 'B+':
           gpa += 3.33;
           break;
         case 'B':
           gpa += 3.00;
           break;
         case 'B-':
           gpa += 2.70;
           break;
         case 'C+':
           gpa += 2.30;
           break;
         case 'C-':
           gpa += 1.70;
           break;
         case 'D+':
           gpa += 1.30;
           break;
         case 'D':
           gpa += 1.00;
           break;
         case 'D-':
           gpa += 0.70;
           break;
         default:
           gpa += 0.00;
           break;
       }
     }

     //This returns our gpa value.
     console.log(gpa);
     this.gpaTotal = gpa / this.transcriptEntries.length;
     console.log(this.gpaTotal);
   }

   //This is our clear entries function.
   clearEntries() {
     this.transcriptEntries = [];
     this.gpaTotal = 0;
   }
 }
