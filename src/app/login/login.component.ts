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
    loginStatus = false;

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

    login() {
        this.service
            .findUsername(this.username)
            .then((user) => {
                if (user === null) {
                    if (this.username.replace(/^\s*/, "").replace(/\s*$/, "") === '') {
                        alert("User name can't be empty!");
                    }
                    else
                        alert("User does not exist!");
                }
                else {
                    this.service.findUsernameAndPassword(this.username, this.password)
                        .then(newUser => {
                            if (newUser !== null) {
                                this.loginStatus = true;
                                console.log([this.username, this.password]);
                                this.service
                                    .login(this.username, this.password)
                                    .then(() => {
                                        this.router.navigate(['profile']);
                                    });
                            }
                            else {
                                alert("Entered password is wrong");
                            }
                        });
                }
            });
    }

    ngOnInit() {
    }
}
