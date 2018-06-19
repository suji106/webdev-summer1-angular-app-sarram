export class CourseServiceClient {
    COURSE_URL = 'http://s-arram.herokuapp.com/api/course';

    findAllCourses() {
        return fetch(this.COURSE_URL)
            .then(response => response.json());
    }

    findCourseById(courseId) {
        return fetch(this.COURSE_URL + '/' + courseId)
            .then(response => {
                const resp_json = response.json();
                console.log(resp_json);
                return resp_json;
            });
    }

    updateCourse(course) {
        console.log(course);
        return fetch(this.COURSE_URL, {
            method: 'post',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => {
            return response.json();
        });
    }
}
