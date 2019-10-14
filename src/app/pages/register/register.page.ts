import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UsernameValidator } from './../../validators/username.validator';
import { PasswordValidator } from './../../validators/password.validator';
import { EmailValidator } from './../../validators/email.validator';
import { AuthService } from './../../services/auth.service';
import { User } from './../../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerFormGroup: FormGroup;
  matchingPasswordsGroup: FormGroup;
  loading: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private authService: AuthService,
    private usernameValidator: UsernameValidator,
    private emailValidator: EmailValidator,
    private router: Router
    ) { }

  ngOnInit() {
    this.matchingPasswordsGroup = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirmPassword: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });

    this.registerFormGroup = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]), (formControl: FormControl) => {
        return this.usernameValidator.validUsername(formControl);
      }),
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ]), (formControl: FormControl) => {
        return this.emailValidator.validEmail(formControl);
      }),
      matchingPasswords: this.matchingPasswordsGroup,
      terms: new FormControl(true, Validators.pattern('true'))
    });
  }

  validationMessages = {
    "username": [
      { type: 'required', message: 'Username is required.'},
      { type: 'minlength', message: 'Username must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
      { type: 'usernameInUse', message: 'Your username has already been taken.' }
    ],
    "name": [
      { type: 'required', message: 'Name is required.' }
    ],
    "lastname": [
      { type: 'required', message: 'Last name is required.' }
    ],
    "email": [ 
      { type: 'required', message: 'e-mail is required.' },
      { type: 'email', message: 'Please enter a valid e-mail.'}
    ],
    "password": [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    "confirmPassword": [
      { type: 'required', message: 'Confirm password is required.' }
    ],
    "matchingPasswords": [
      { type: 'areEqual', message: 'Password mismatch.' }
    ],
    "terms": [
      { type: 'pattern', message: 'You must accept terms and conditions.' }
    ],
  }

  onSubmit = (values) => {
    this.loading = true;
    values.birthdate = "05/27/1999";
    values.password = values.matchingPasswords.password;
    delete values.matchingPasswords;
    delete values.terms;
    this.authService.submitRegister(values).subscribe( (user: User) => {
      this.loading = false;
      this.router.navigate(['login']); 
    })
  }

}
