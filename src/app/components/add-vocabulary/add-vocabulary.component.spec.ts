import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVocabularyComponent } from './add-vocabulary.component';

describe('AddVocabularyComponent', () => {
  let component: AddVocabularyComponent;
  let fixture: ComponentFixture<AddVocabularyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVocabularyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
