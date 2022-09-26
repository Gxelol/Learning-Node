const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController')
const contactController = require('./controllers/contactController')

//Home routes
route.get('/', homeController.homePage);
route.post('/', homeController.postTreat);

//Contact routes
route.get('/contact', contactController.homePage);

module.exports = route;