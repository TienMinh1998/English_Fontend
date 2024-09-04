import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLteComponent } from './admin-lte.component';

describe('AdminLteComponent', () => {
  let component: AdminLteComponent;
  let fixture: ComponentFixture<AdminLteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
