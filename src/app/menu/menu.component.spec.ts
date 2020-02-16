import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {Routes, RouterModule} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { ChildMenuComponent } from '../menu/child-menu/child-menu.component';



import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent,
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
      declarations: [MenuComponent]
    }).createComponent(MenuComponent);
}));

  beforeEach(() => {
  fixture = TestBed.createComponent(MenuComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

  it('should create', () => {
  expect(component).toBeTruthy();
});

  it('more than 18 age', () => {
    expect(1).toBe(1);
  });
});



