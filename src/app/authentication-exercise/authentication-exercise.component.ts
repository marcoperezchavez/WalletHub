import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-exercise',
  templateUrl: './authentication-exercise.component.html',
  styleUrls: ['./authentication-exercise.component.css']
})
export class AuthenticationExerciseComponent implements OnInit {
  userName: string= '';
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  validateUserName() {
    this.authService.setValidateAuthentication(this.userName);
    this.router.navigateByUrl('onlyAuthenticated');
  }
}
