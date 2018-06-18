import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Section} from "../models/section.model.client";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
    selector: 'app-section-viewer',
    templateUrl: './section-viewer.component.html',
    styleUrls: ['./section-viewer.component.css']
})

export class SectionViewerComponent implements OnInit {

    constructor(private service: SectionServiceClient,
                private router: Router,
                private route: ActivatedRoute) {
        this.route.params.subscribe(params => this.loadSections(params['courseId']));
    }

    sectionName = '';
    maxSeats = "";
    seats = '';
    courseId = '';
    sections = [];
    selectedSection: Section;

    loadSections(courseId) {
        this.courseId = courseId;
        this
            .service
            .findSectionsForCourse(courseId)
            .then(sections => this.sections = sections).then(() => {
            this.sectionName = "";
            this.maxSeats = "";
        });
    }

    deleteSection(sectionId) {
        this
            .service
            .deleteSection(sectionId)
            .then(() => {
                this.loadSections(this.courseId);
            }).then(() => {
            this.sectionName = "";
            this.maxSeats = "";
        });
    }

    updateSection(newName, newSeats) {
        const newRem = newSeats - this.selectedSection.maxSeats + this.selectedSection.seats;
        this
            .service
            .updateSection(this.selectedSection._id, newName, newSeats, newRem)
            .then(() => {
                this.loadSections(this.courseId);
            }).then(() => {
            this.sectionName = "";
            this.maxSeats = "";
            this.seats = "";
        });
    }

    createSection(sectionName, maxSeats) {
        this
            .service
            .createSection(this.courseId, sectionName, maxSeats)
            .then(() => {
                this.loadSections(this.courseId);
            });
    }

    editSection(section) {
        this.sectionName = section.name;
        this.maxSeats = section.maxSeats;
        this.seats = section.seats;
        this.selectedSection = section;
    }

    ngOnInit() {
    }

}