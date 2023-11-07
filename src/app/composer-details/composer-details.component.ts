// Name: Jocelyn Dupuis
// File: composer-details.components.ts
// Date: 11/07/2023
// Description: composer details component file for list of composers

// import statements
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})

// exports
export class ComposerDetailsComponent implements OnInit {

  // variables added
  composerId: number;
  composer: IComposer;

  // constructor to use activated route and private composer service
  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);
    // composer service function
    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
