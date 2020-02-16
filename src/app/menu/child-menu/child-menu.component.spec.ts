// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { ChildMenuComponent } from './child-menu.component';

// describe('ChildMenuComponent', () => {
//   let component: ChildMenuComponent;
//   let fixture: ComponentFixture<ChildMenuComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ChildMenuComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ChildMenuComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildMenuComponent } from './child-menu.component';
import {Routes, RouterModule} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';




describe('ChildMenuComponent', () => {
  let component: ChildMenuComponent;
  let fixture: ComponentFixture<ChildMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChildMenuComponent
      ],
      providers: [],
      imports: [
        RouterModule,
        RouterTestingModule,
        NgbModule,
        BrowserModule,
        FormsModule
      ]
    }).compileComponents();

    TestBed.configureTestingModule({
      declarations: [ChildMenuComponent]
    }).createComponent(ChildMenuComponent);
}));

  beforeEach(() => {
  fixture = TestBed.createComponent(ChildMenuComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

  it('should create', () => {
  expect(component).toBeTruthy();
});

  it('more than 18 age', () => {
    var validation = component.validateAge(19);
    expect(component.validateAge(19)).toBe('you can vote');
  });

  it('less than 18 age', () => {
    var validation = component.validateAge(11);
    expect(validation).toBe('you can not vote');
  });
});



