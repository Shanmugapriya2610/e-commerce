const EndPoints = {
    login:'/login',
    dashboard:'/dashboard',
    getAllBookings:'/getAllBookings',
    getBookingDetailsById:'/getBookingDetailsById',
    changePassword:'/changePassword',
    createUserType:'/createUserType',
    getAllUserTypes:'/getAllUserTypes',
    deleteUserType:'/deleteUserType',

    createUser:'/createUser',
    getAllUsers:'/getAllUsers',
    deleteUserById:'/deleteUserById',
}

const ApiMethods = {
    POST : 'POST',
    GET : 'GET',
    PUT :'PUT',
    DELETE : 'DELETE',
    PATCH : 'PATCH'
}

let endpoints = {
    EndPoints,
    ApiMethods
}


export default endpoints;