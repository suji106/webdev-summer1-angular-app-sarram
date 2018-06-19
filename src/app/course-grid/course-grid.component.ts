import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from "../services/course.service.client";
import {Course} from "../models/coruse.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";

@Component({
    selector: 'app-course-grid',
    templateUrl: './course-grid.component.html',
    styleUrls: ['./course-grid.component.css']
})

export class CourseGridComponent implements OnInit {

    login_check = '';
    constructor(private router: Router,
                private service: CourseServiceClient,
                private userService: UserServiceClient) {
        userService.profile().then(response => {
                this.login_check = response._id;
                console.log(this.login_check);
                return this.login_check;
            }
        );
    }

    courses: Course[] = [];

    ngOnInit() {
        this.service.findAllCourses()
            .then(courses => this.courses = courses)
            .then(() => {
                if (this.login_check === '') {
                    this.courses = this.courses
                        .filter(course => course.contentType !== 'private');
                }
            });
    }
}
