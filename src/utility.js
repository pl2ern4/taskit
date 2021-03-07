export const getName = params => {
    if (!params) {
        return;
    }
    return (`${params[0]} ${(params.split(" ")[1] && params.split(" ")[1][0]) || ``}`).toUpperCase();
}

export const validateNewUserForm = ({isAccessUser, isDuplicate, ...params}) => {
    const errorJson = {}
    const regex = new RegExp("^[a-zA-Z0-9\\-\\s]+$");
    if (isAccessUser) {
        errorJson.name = 'You can create only 10 users';
    }
    if (isDuplicate(params.name)) {
        errorJson.name = 'Name should be unique.';
    }
    if (!regex.test(params.name)) {
        errorJson.name = 'Name should have Alphabets, number & space.';
    }
    if (params.name && params.name.length < 3) {
        errorJson.name = 'Name should be of length greater than 0.';
    }
    if (!params.name) {
        errorJson.name = 'Name is required';
    }
    return errorJson;
}

export const validateCreateTaskForm = params=>{
    const errorJson = {};
    return errorJson;
}