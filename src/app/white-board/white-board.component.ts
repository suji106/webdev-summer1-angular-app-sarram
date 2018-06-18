import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {CourseServiceClient} from "../services/course.service.client";

@Component({
    selector: 'app-white-board',
    templateUrl: './white-board.component.html',
    styleUrls: ['./white-board.component.css']
})

export class WhiteBoardComponent implements OnInit {

    sections = [];
    username = '';
    courseIds = [];
    courses = [];

    constructor(private router: Router,
                private service: UserServiceClient,
                private sectionService: SectionServiceClient,
                private courseService: CourseServiceClient) {
        console.log("contructor");
        this.getUniqueCourses = this.getUniqueCourses.bind(this);
    }

    logout() {
        this.service
            .logout()
            .then(() =>
                this.router.navigate(['login']));
    }

    getUniqueCourses () {
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
                    for (j = 0; j < this.courses.length; j ++) {
                        const course = this.courses[j];
                        let count = 0;
                        let k;
                        for (k = 0; k < this.courses.length; k ++) {
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
