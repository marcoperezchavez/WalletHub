import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
