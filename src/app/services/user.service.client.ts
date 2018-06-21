export class UserServiceClient {

    // findUserById(userId) {
    //     return fetch('http://s-arram-angular.herokuapp.com/api/user/' + userId)
    //         .then(response => response.json());
    // }

    login(username, password) {
        const credentials = {
            username: username,
            password: password
        };
        return fetch('http://s-arram-angular.herokuapp.com/api/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            mode: 'cors'
        });
    }

    logout() {
        return fetch('http://s-arram-angular.herokuapp.com/api/logout', {
            method: 'post',
            credentials: 'include',
            mode: 'cors'
        });
    }

    profile() {
        return fetch('http://s-arram-angular.herokuapp.com/api/profile',
            {
                credentials: 'include', // include, same-origin, *omit
                mode: 'cors'
            })
            .then(response => response.json());
    }

    findUsername(username) {
        return fetch('http://s-arram-angular.herokuapp.com/api/user/' + username + "/username", {mode: 'cors'})
            .then(response => response.json());
    }

    findUsernameAndPassword(username, password) {
        return fetch('http://s-arram-angular.herokuapp.com/api/user/' + username + "/username", {
            method: 'post',
            body: JSON.stringify({password}),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            mode: 'cors'
        })
            .then(response => response.json());
    }

    update(user) {
        return fetch('http://s-arram-angular.herokuapp.com/api/user', {
            method: 'put',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            mode: 'cors'
        });
    }

    createUser(username, password) {
        const user = {
            username: username,
            password: password
        };
        return fetch('http://s-arram-angular.herokuapp.com/api/user', {
            body: JSON.stringify(user),
            credentials: 'include', // include, same-origin, *omit
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            mode: 'cors'
        });
    }
}
