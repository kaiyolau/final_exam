//Base URL that we are going to send the requests to (the API server)
const baseURL = "http://localhost:3000/api/v1";

//========Item========>
export const Auction = {
    //Fetch all the items from server
    index(){
        return fetch(`${baseURL}/items`)
        .then(response => {
            console.log(response);
            return response.json()
        })
    },
    create(params){
        return fetch(`${baseURL}/items`, {
            method: 'POST',
            credentials: 'include', //need this for cookies
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then((res) => res.json());
    },
    show(id){
        return fetch(`${baseURL}/items/${id}`)
        .then(res => res.json());
    },
    destroy(id) {
        return fetch(`${baseURL}/items/${id}`, {
          method: 'DELETE',
          credentials: 'include',
        })
    }
}

//Sign In AJAX Helper
export const Session = {
    create(params){
        return fetch(`${baseURL}/session`, {
            method: 'POST',
            credentials: 'include', //need for cookies to be allowed to be sent cross-origin
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    destroy(){
        return fetch(`${baseURL}/session`, {
            method: 'DELETE',
            credentials: 'include' //need for cookies to be allowed to be sent cross-origin
        }).then(res => res.json());
    }
}

export const User = {
    current(){
        return fetch(`${baseURL}/users/current`, {
            credentials: 'include', //need for cookies to be allowed to be sent cross-origin
        }).then(res => {
            console.log(res.json());
            return res.json()
        });
    },
    create(params){
        return fetch(`${baseURL}/users`, {
            method: 'POST',
            credentials: 'include', //need for cookies to be allowed to be sent cross-origin
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    }
}

