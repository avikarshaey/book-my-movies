const user = {
    id : "",
    name: " Abc",
    password: "  ",
    role: "admin/default",

}
const movie = {
    id : "",
    name : "",
    releaseYear : "",
    rating : "",
    genre : "",
}

const multiplex = {
    id : "",
    name : "",
    location : "",
    movies : {
        movie1 : {
            startDate : "",
            endDate : "",
            slots : {
                "9 AM": {id:"",seats: 200, price:250},
                "1 PM": {id:"",seats: 100, price:200},
                "3 PM": {id:"",seats: 250, price:300},
            }
        }
    }
}

const booking = {
    bookingId : "",
    userId : "",
    bookingDate : "",
    multiplexId : "",
    slotId : "",
    numberOfSeats:4,
}