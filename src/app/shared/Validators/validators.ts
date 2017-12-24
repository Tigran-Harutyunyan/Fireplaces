/*
  Custom validators to use everywhere.
*/
import { FormGroup , FormControl } from '@angular/forms';
// SINGLE FIELD VALIDATORS
export function emailValidator(control: FormControl): {[key: string]: any} {
  var emailRegexp =/^[_\.0-9a-z-]+@([0-9a-z][0-9a-z.-]+\.)+[a-z]{2,4}$/i ; //^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$ 
  // /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  if (control.value && !emailRegexp.test(control.value)) {
    return { invalidEmail: true };
  }
}

// FORM GROUP VALIDATORS
export function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  return (group: FormGroup): {[key: string]: any} => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];
    
    if (password.value !== confirmPassword.value) {
      return {
        mismatchedPasswords: true
      };
    }
  }
}

export function  mustBeChecked(control: FormControl): {[key: string]: string} {
    if (!control.value) { 
      return {mustBeCheckedError: 'Must be checked'};
    } else {
      return null;
    }
  }