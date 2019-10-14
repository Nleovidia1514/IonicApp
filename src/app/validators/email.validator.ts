import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

import { AuthService } from './../services/auth.service';

@Injectable()
export class EmailValidator {
   
    debouncer: any;

    constructor(private authService: AuthService) { }

    validEmail = (fc: FormControl): any => {
        
        clearTimeout(this.debouncer);
        
        return new Promise(resolve => {
            this.debouncer = setTimeout(() => {
                this.authService.checkEmailAvailability(fc.value).subscribe(res => {
                    console.log(res);
                        if (res.ok) {
                            resolve(null);
                        }
                }, err => {
                    resolve({"emailInUse": true});
                });
            }, 1000);
        });
    }
}