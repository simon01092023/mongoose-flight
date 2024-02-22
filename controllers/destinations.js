
const FlightsModel = require('../models/flight');


module.exports = {
    create
};

async function create(request, response) {
    //find movie
    try {
        // request.params.id comes from the http request from the reviews form on the 
        // flight show page (.id name comes from the routes/destinations route)
        const flightDoc = await FlightsModel.findById(request.params.id)
        // flightDoc is the movie from the database
        flightDoc.destinations.push(request.body);
        // since we're mutating (changing) the flightDoc, we have to tell the database
        await flightDoc.save() // this tells the database we added a destination to the flight we found!
        // then respond to the client
        response.redirect(`/flight/${request.params.id}`)
    } catch (err) {
        console.log(err)
        response.send(err)
    }
}

