import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private router: Router,
                private service: UserServiceClient) {
    }

    username;
    password;
    password2;
    loginStatus = false;

    register(username, password, password2) {
        if (password === password2) {
            this.service
                .findUsername(username)
                .then((user) => {
                    if (user !== null) {
                        alert("username is already taken");
                    }
                    else {
                        this.loginStatus = true;
                        this.service
                            .createUser(username, password)
                            .then(() =>
                                this.router.navigate(['profile']));
                    }
                });
        }
        else {
            alert("Passwords do not match!");
        }
    }

    ngOnInit() {
    }

}
