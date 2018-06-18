import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
    selector: 'app-white-board',
    templateUrl: './white-board.component.html',
    styleUrls: ['./white-board.component.css']
})

export class WhiteBoardComponent implements OnInit {

    sections = [];
    username = '';

    constructor(private router: Router,
                private service: UserServiceClient,
                private sectionService: SectionServiceClient) {
    }

    logout() {
        this.service
            .logout()
            .then(() =>
                this.router.navigate(['login']));
    }

    ngOnInit() {
        this.service
            .profile()
            .then(user =>
                this.username = user.username);
        this.sectionService
            .findSectionsForStudent()
            .then(sections => this.sections = sections);
    }

}
