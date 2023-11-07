// Name: Jocelyn Dupuis
// File: composer.service.ts
// Date: 11/07/2023
// Description: composer class file - Assignment 4.4 - Async Pipe

// import statements
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

//exports class
export class ComposerService {

  composers: Array<IComposer>;

  // array of composers
  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Frédéric Chopin", genre: "Romantic"
      },
      {
        composerId: 101, fullName: "Johannes Brahms", genre: "Romantic"
      },
      {
        composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Ludwig van Beethoven", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Pyotr IIyich Tchaikovsky", genre: "Romantic"
      }
    ]
  }
  // function to return composers
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }
  // function to search and return composer
  getComposer(composerId: number) {
    for (let composer of this.composers) {
        if (composer.composerId === composerId) {
            return composer;
        }
    }
  }

  // function to filter composers returning an array of Observable IComposers
  filterComposers(name: string): Observable<IComposer[]> {
    // returns array of composers with name parameter of fullName variable
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}
