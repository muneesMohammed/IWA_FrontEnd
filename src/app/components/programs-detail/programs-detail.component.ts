import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PROGRAM_DETAILS, ProgramDetail } from '../../data/program-details-data';

@Component({
  selector: 'app-programs-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programs-detail.component.html',
  styleUrl: './programs-detail.component.scss'
})
export class ProgramsDetailComponent implements OnInit {

  private route = inject(ActivatedRoute);

  program: ProgramDetail | undefined;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.program = PROGRAM_DETAILS.find(p => p.programId === id);
    }
  }
}
