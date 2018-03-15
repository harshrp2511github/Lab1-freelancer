export const loginUser = (userinfo) => {
        console.log(userinfo);
        return{
                type: 'LOGIN_USER',
                payload: userinfo
        }
};

export const selectedProject = (projectinfo) => {
    console.log(projectinfo);
    return{
        type: 'SELECTED_PROJECT',
        payload: projectinfo
    }
};

