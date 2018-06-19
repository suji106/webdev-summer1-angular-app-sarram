import {Component, OnInit} from '@angular/core';
import {Course} from "../models/coruse.model.client";
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";
import {CourseServiceClient} from "../services/course.service.client";

@Component({
    selector: 'app-user-admin',
    templateUrl: './user-admin.component.html',
    styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
    constructor(private courseService: CourseServiceClient,
                private userService: UserServiceClient,
                private router: Router) {
    }

    courses: Course[] = [];
    course: Course;

    changeContentType(courseId, contentType) {
        this.courseService.findCourseById(courseId)
            .then(course => this.course = course)
            .then(() => {
                this.course.contentType = contentType;
                this.courseService.updateCourse(this.course)
                    .then(course =>
                        this.course = course);
            })
            .then(() => location.reload());
    }

    logout() {
        this.userService
            .logout()
            .then(() =>
                this.router.navigate(['login']));
    }

    ngOnInit() {
        this.courseService.findAllCourses()
            .then(courses => this.courses = courses)
            .then(() => console.log(this.courses));
    }
}
