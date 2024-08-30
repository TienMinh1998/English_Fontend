import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDynamicArrayDataExample } from './tabletest.component';

describe('TabletestComponent', () => {
  let component: TableDynamicArrayDataExample;
  let fixture: ComponentFixture<TableDynamicArrayDataExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDynamicArrayDataExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDynamicArrayDataExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
