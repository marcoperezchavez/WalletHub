import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskExerciseComponent } from './mask-exercise.component';
import {Routes, RouterModule} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('MaskExerciseComponent', () => {
  let component: MaskExerciseComponent;
  let fixture: ComponentFixture<MaskExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
MaskExerciseComponent
      ],
      providers: [],
      imports: [
        RouterModule,
        RouterTestingModule
      ]
    }).compileComponents();

    TestBed.configureTestingModule({
      declarations: [MaskExerciseComponent]
    }).createComponent(MaskExerciseComponent);
}));

  beforeEach(() => {
  fixture = TestBed.createComponent(MaskExerciseComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test correct mask', () => {
    let maskValueFormated = component.convertCurrency('1234');
    expect(maskValueFormated).toBe('$1,234.00');
  });

  it('Test Incorrect mask', () => {
    let maskValueFormated = component.convertCurrency('1234');
    expect(maskValueFormated !== '$1,234.00').toBeFalsy();
  });
  // it('Test incorrect mask', () => {
  //   (<HTMLInputElement>document.getElementById('inputCantidad')).value = '1234';
  //   var valueInTheInput = document.getElementById('inputCantidad');
  //   expect(valueInTheInput).toEqual('@$1,234');
  // });
});
