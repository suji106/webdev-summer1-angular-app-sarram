import {Component, OnInit} from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {CourseServiceClient} from "../services/course.service.client";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(private service: UserServiceClient,
                private sectionService: SectionServiceClient,
                private courseService: CourseServiceClient,
                private router: Router) {
        this.addToCourses = this.addToCourses.bind(this);
    }

    user = {};
    username;
    password;
    sections = [];
    courses = [];

    update(user) {
        console.log(user);
    }

    logout() {
        this.service
            .logout()
            .then(() =>
                this.router.navigate(['login']));
    }

    addToCourses() {
        console.log("adding to course ids");
        console.log(this.sections);
        let i;
        for (i = 0; i < this.sections.length; i++) {
            const section = this.sections[i];
            console.log(section.section.courseId);
            this.courses.push(this.courseService.findCourseById(section.section.courseId)
                .then(() => Array.from(new Set(this.courses))));
        }
    }

    ngOnInit() {
        this.service
            .profile()
            .then(user =>
                this.username = user.username);

        this.sectionService
            .findSectionsForStudent()
            .then(sections => this.sections = sections)
            .then(this.addToCourses);
    }
}
