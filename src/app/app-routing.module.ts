import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponsivePageComponent } from './responsive-page/responsive-page.component';
import { MenuComponent } from './menu/menu.component';
import { OnlyAuthenticatedComponent } from './only-authenticated/only-authenticated.component';
import { AuthGuard } from './auth/auth.guard';
import { DontAccessComponent } from './dont-access/dont-access.component';
import { AuthenticationExerciseComponent } from './authentication-exercise/authentication-exercise.component';
import { PassDataExerciseComponent } from './pass-data-exercise/pass-data-exercise.component';
import { ShowInformationComponent } from './show-information/show-information.component';
import { EmailValidationComponent } from './email-validation/email-validation.component';
import { NgContentExampleComponent } from './ng-content-example/ng-content-example.component';
import { MaskExerciseComponent } from './mask-exercise/mask-exercise.component';
import { TransictionExerciseComponent } from './transiction-exercise/transiction-exercise.component';
import { ResponsiveExerciseAdobeComponent } from './responsive-exercise-adobe/responsive-exercise-adobe.component';



const routes: Routes = [
  {
    path: 'responsive', component: ResponsivePageComponent,
  },
  {
    path: '', component: MenuComponent,
  },
  {
    path: 'onlyAuthenticated', component: OnlyAuthenticatedComponent, canActivate: [AuthGuard]
  },
  {
    path: 'dontAccess', component: DontAccessComponent
  },
  {
    path: 'authenticationExercise', component: AuthenticationExerciseComponent
  },
  {
    path: 'passDataExercise', component: PassDataExerciseComponent
  },
  {
    path: 'showInformation', component: ShowInformationComponent
  },
  {
    path: 'EmailValidation', component: EmailValidationComponent
  },
  {
    path: 'ngContentExample', component: NgContentExampleComponent
  },
  {
    path: 'maskExercise', component: MaskExerciseComponent
  },
  {
    path: 'transictionExercise', component: TransictionExerciseComponent
  },
  {
    path: 'responsiveExerciseAdobe', component: ResponsiveExerciseAdobeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
