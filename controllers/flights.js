const { response } = require('express')
const FlightsModel = require('../models/flight')


module.exports = {
  index,
  new: newFlight,
  create,
  show
}

async function show(request, response) {
  const flight = await FlightsModel.findById(request.params.id);
  response.render('flights/show', { title: 'Flight Detail', flight });
}

async function index(request, response) {

  // then we want to send a ejs page with all the flights to the browser
  try {
    const flightsDocumentsFromTheDB = await FlightsModel.find({})
    console.log(flightsDocumentsFromTheDB)
    // then we want to send a ejs page with all the flights to the browser
    // flight/index is looking in the views folder for the ejs page
    response.render('flights/index', { flightsDocs: flightsDocumentsFromTheDB })
    // flightsDocs is now a variables inside of views/flights/index.ejs 
  } catch (err) {
    console.log(err)
    response.redirect('/')
  }
}



function newFlight(request, response) {

  response.render('flights/new')
}


async function create(request, response) {
  console.log(request.body, " <- is the contents of our form!")


  try {
    // await 
    // atlas 
    // ONLY USE AWAIT ON YOUR MODEL QUERY!
    const createdFlightsDoc = await FlightsModel.create(request.body);
    console.log(createdFlightsDoc)
    //redirect to new page
    response.redirect('/flights/new')
  } catch (err) {
    console.log(err)
    response.redirect('/flights/new')
  }
}
// async function show(request, response) {
//   const flight = await flightsModel.findById(request.params.id);
//   response.render('flights/show', { title: 'Flight Detail', flight });
// }
