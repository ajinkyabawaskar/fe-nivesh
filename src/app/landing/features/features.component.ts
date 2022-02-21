import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'landing-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
    phoneNumberControl = new FormControl('', [Validators.required, Validators.pattern(/[6-9]\d{9}$/)]);
    timeSlotControl = new FormControl('', [Validators.required]);
    matcher = new MyErrorStateMatcher();
}
