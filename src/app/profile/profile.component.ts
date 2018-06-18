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
        this.getUniqueCourses = this.getUniqueCourses.bind(this);
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

    getUniqueCourses() {
        let i;
        for (i = 0; i < this.sections.length; i++) {
            console.log("adding to courses");
            console.log(this.sections);
            const section = this.sections[i];
            console.log(section.section.courseId);
            this.courseService.findCourseById(section.section.courseId)
                .then(course => {
                    this.courses.push(course);
                    console.log(this.courses);
                })
                .then(() => {
                    this.courses = Array.from(new Set(this.courses));
                    let j;
                    for (j = 0; j < this.courses.length; j++) {
                        const course = this.courses[j];
                        let count = 0;
                        let k;
                        for (k = 0; k < this.courses.length; k++) {
                            if (course.title === this.courses[k].title) {
                                count = count + 1;
                            }
                        }
                        if (count > 1) {
                            this.courses.splice(j, 1);
                        }
                    }
                });
        }
    }

    ngOnInit() {
        this.service
            .profile()
            .then(user =>
                this.username = user.username);

        this.sectionService
            .findSectionsForStudent()
            .then(sections =>
                this.sections = sections)
            .then(this.getUniqueCourses);
    }
}
