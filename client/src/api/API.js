const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload) =>
    fetch(`${api}/users/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const doSignUp = (payload) =>
    fetch(`${api}/users/signup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const setProfile = (payload) =>
    fetch(`${api}/users/setprofile`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getProfile = (payload) =>
    fetch(`${api}/users/getprofile`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const updateName = (payload) =>
    fetch(`${api}/users/updatename`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const updatePhone = (payload) =>
    fetch(`${api}/users/updatephone`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const updateSkills = (payload) =>
    fetch(`${api}/users/updateskills`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const updateAbout = (payload) =>
    fetch(`${api}/users/updateabout`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res =>{
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });
