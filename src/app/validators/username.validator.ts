import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

import { AuthService } from './../services/auth.service';

@Injectable()
export class UsernameValidator {
   
    debouncer: any;

    constructor(private authService: AuthService) { }

    validUsername = (fc: FormControl): any => {
        
        clearTimeout(this.debouncer);
        
        return new Promise(resolve => {
            this.debouncer = setTimeout(() => {
                this.authService.checkUserAvailability(fc.value).subscribe(res => {
                    console.log(res);
                        if (res.ok) {
                            resolve(null);
                        }
                }, err => {
                    resolve({"usernameInUse": true});
                });
            }, 1000);
        });
    }
}