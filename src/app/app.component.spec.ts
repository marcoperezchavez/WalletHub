import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ResponsivePageComponent } from './responsive-page/responsive-page.component';
import { MenuComponent } from './menu/menu.component';
import { ChildMenuComponent } from './menu/child-menu/child-menu.component';
import { OnlyAuthenticatedComponent } from './only-authenticated/only-authenticated.component';
import { DontAccessComponent } from './dont-access/dont-access.component';
import { AuthenticationExerciseComponent } from './authentication-exercise/authentication-exercise.component';
import { PassDataExerciseComponent } from './pass-data-exercise/pass-data-exercise.component';
import { ShowInformationComponent } from './show-information/show-information.component';
import { EmailValidationComponent } from './email-validation/email-validation.component';
import { NgContentExampleComponent } from './ng-content-example/ng-content-example.component';
import { FooterComponent } from './footer/footer.component';

import { NgxMaskModule } from 'ngx-mask';
import { MaskExerciseComponent } from './mask-exercise/mask-exercise.component';
import { TransictionExerciseComponent } from './transiction-exercise/transiction-exercise.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsiveExerciseAdobeComponent } from './responsive-exercise-adobe/responsive-exercise-adobe.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        NgxMaskModule.forRoot(),
        RouterModule,
        NgbModule
      ],
      declarations: [
        AppComponent,
        ResponsivePageComponent,
        ResponsivePageComponent,
        MenuComponent,
        ChildMenuComponent,
        OnlyAuthenticatedComponent,
        DontAccessComponent,
        AuthenticationExerciseComponent,
        PassDataExerciseComponent,
        ShowInformationComponent,
        EmailValidationComponent,
        NgContentExampleComponent,
        FooterComponent,
        MaskExerciseComponent,
        TransictionExerciseComponent,
        ResponsiveExerciseAdobeComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
