import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsDetailComponent } from './programs-detail.component';

describe('ProgramsDetailComponent', () => {
  let component: ProgramsDetailComponent;
  let fixture: ComponentFixture<ProgramsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
