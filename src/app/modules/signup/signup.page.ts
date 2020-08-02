import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../common/services/validation.service';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { UtilityService } from 'src/app/common/services/utility.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {

    signupForm: any;
    isSubmitted: boolean = true;

    constructor(
        private formBuilder: FormBuilder,
        private auth: AuthService,
        private utility: UtilityService,
        private router: Router
    ) { 
        
    }

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email: ['', [Validators.required, ValidationService.emailValidator]],
            password: ['', Validators.required]
        })
    }

    submit() {
        this.isSubmitted = true;
        if (this.signupForm.valid) {
            const navigationExtras: NavigationExtras = {
                queryParams: {
                    email: this.signupForm.value.email,
                    phone: this.signupForm.value.phone_number
                }
            };
            this.auth.validateCust(this.signupForm.value).subscribe(resp => {
                this.utility.showToast(resp.message, 'success');
                this.router.navigate(['otp-verification'], navigationExtras);
            }, err => {
                this.utility.showToast("Unable to submit details", 'error');
            });
        }
    }

    back() {
        this.router.navigate(['']);
    }

}
