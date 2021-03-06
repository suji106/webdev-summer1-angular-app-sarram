export class SectionServiceClient {

    SECTION_URL = 'https://s-arram-node.herokuapp.com/api/course/COURSEID/section';

    findSectionsForStudent() {
        const url = 'https://s-arram-node.herokuapp.com/api/student/section';
        return fetch(url, {
            credentials: 'include'
        })
            .then(response => response.json());
    }

    enrollStudentInSection(sectionId) {
        const url = 'https://s-arram-node.herokuapp.com/api/section/' + sectionId + '/enrollment';
        return fetch(url, {
            method: 'post',
            credentials: 'include'
        });
    }

    unrollStudentInSection(sectionId) {
        const url = 'https://s-arram-node.herokuapp.com/api/section/' + sectionId + '/enrollment';
        return fetch(url, {
            method: 'delete',
            credentials: 'include'
        });
    }

    updateSection(sectionId, newName, newMax, newRem) {
        const section = {id: sectionId, newName: newName, newMax: newMax, newRem: newRem};
        console.log(section);
        return fetch('https://s-arram-node.herokuapp.com/api/section' + '/' + sectionId, {
            method: 'put',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    deleteSection(sectionId) {
        return fetch('https://s-arram-node.herokuapp.com/api/section' + '/' + sectionId, {
            method: 'delete'
        });
    }

    findSectionsForCourse(courseId) {
        return fetch(this.SECTION_URL.replace('COURSEID', courseId))
            .then(response => response.json());
    }

    createSection(courseId, name, maxSeats) {
        const seats = maxSeats;
        const section = {courseId, name, maxSeats, seats};
        console.log(section);
        return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
            method: 'post',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }
}
