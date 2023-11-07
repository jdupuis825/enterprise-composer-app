// Name: Jocelyn Dupuis
// File: app.components.ts
// Date: 11/07/2023
// Description: app component TS file for Exercise 4.2

// import statements
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// exports
export class AppComponent {
  // updated for new assignment
  assignment: string = 'Assignment 4.4 - Async Pipe';
}
