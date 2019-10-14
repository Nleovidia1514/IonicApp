import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { AuthService } from './../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  loading: boolean = false;
  invalidPassEm: boolean = false;

  constructor(
    private auth: AuthService, 
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit = (user) => {
    this.loading = true;
    this.auth.submitLogin(user).subscribe(data => {
      this.loading = false;
      if(data['user'])
        this.router.navigateByUrl('home');
      else
        this.invalidPassEm = true;
        
    });
  }
}
