/**
 * Title: sign-in.service.ts
 * Author: James Pinson
 * Date: 8 July 2021
 * Description: This is the sign in service ts file.
 */

//This is our import statement.
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  //Here we set up the studentIds variable.
  studentIds: Array<number>;

  //Here we include the valid IDs in the array.
  constructor() {
    this.studentIds= [1007, 1008, 1009, 1010, 1011, 1012];
   }

   //Here we validate the ids.
   validate(studentId: number) {
     return this.studentIds.some(id => id === studentId);
   }
}
