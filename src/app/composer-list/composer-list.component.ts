// Name: Jocelyn Dupuis
// File: composer-list.components.ts
// Date: 11/07/2023
// Description: composer list component file for list of composers

// import statements
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';


// component
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
// exports class
export class ComposerListComponent implements OnInit {

  // observable stream of IComposer
  composers: Observable<IComposer[]>;

  // field for form control
  txtSearchControl = new FormControl('');

  // components constructor
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

    // subscribe method that listens for valuesChanges and calls the filerComposers function
    // add debounceTime of 500
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
  }

  ngOnInit(): void {
  }

  // function to alert name of current values text field
  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }

}
