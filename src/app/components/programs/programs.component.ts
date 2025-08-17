// src/app/programs/programs.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProgramService } from '../../services/programs.service';
import { ProgramItem } from '../../data/programs-data';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [
    CommonModule,  // For ngIf, ngFor, ngClass, ngStyle, etc.
    RouterModule   // For routerLink in template
  ],
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  programs: ProgramItem[] = [];
  filteredPrograms: ProgramItem[] = [];
  activeCategory: string = 'all';

  constructor(private programService: ProgramService) {}

  ngOnInit(): void {
    this.programService.getPrograms().subscribe(programs => {
      this.programs = programs;
      this.filteredPrograms = programs;
    });
  }

  filterByCategory(category: string): void {
    this.activeCategory = category;
    if (category === 'all') {
      this.filteredPrograms = this.programs;
    } else {
      this.filteredPrograms = this.programs.filter(p => p.categories.includes(category));
    }
  }
}






//   causes: Cause[] = causesData;
//   activeFilter: string = '*';

//   get filteredCauses(): Cause[] {
//     if (this.activeFilter === '*' || !this.activeFilter) {
//       return this.causes;
//     }
//     return this.causes.filter(c => c.categoryClass === this.activeFilter);
//   }

//   setFilter(filter: string) {
//     this.activeFilter = filter;
//   }
// }
