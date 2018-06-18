import {Component, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username;
    password;

    constructor(private router: Router,
                private service: UserServiceClient) {
        let login_check = '';
        service.profile().then(response => {
                login_check = response._id;
                console.log(login_check);
                return login_check;
            }
        ).then(profileId => {
            if (profileId !== null) {
                this.router.navigate(['profile']);
            }
        });
    }

    login(username, password) {
        console.log([username, password]);
        this.service
            .login(username, password)
            .then(() => {
                this.router.navigate(['profile']);
            });
    }

    ngOnInit() {
    }

}
