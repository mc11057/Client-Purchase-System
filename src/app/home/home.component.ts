import { Component } from '@angular/core';

import { ApplicationUser } from '../_models/applicationuser';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    users: ApplicationUser[];

    constructor() { }

    ngOnInit() {
    }
}