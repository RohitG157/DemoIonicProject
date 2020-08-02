import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ValidationService {

    static emailValidator(control: AbstractControl) {
        if (!control)
            return null;

        if (!control.value || control.value == '') {
            return null;
        }
        // Email regex
        if (control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }
}
