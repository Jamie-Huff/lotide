const tail = require("../tail")
const assertEqual = require("../assertEqual")



assertEqual(tail(["yo yo", "Lighthouse", "Labs"], ["Lighthouse", "Labs"]));