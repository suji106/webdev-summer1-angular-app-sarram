import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTakerComponent } from './quiz-taker.component';

describe('QuizTakerComponent', () => {
  let component: QuizTakerComponent;
  let fixture: ComponentFixture<QuizTakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizTakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
