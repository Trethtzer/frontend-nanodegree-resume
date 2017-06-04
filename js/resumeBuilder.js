/*
This is empty on purpose! Your code to build the resume will go here.
 */


var formattedName = HTMLheaderName.replace("%data%","Guillermo Siles Bonilla");
var formattedRole = HTMLheaderRole.replace("%data%","Software Developer");

$("#header").append(formattedName);
$("#header").append(formattedRole);


var biography = {
	"name" : "Guillermo Siles Bonilla",
	"role" : "Software Developer",
	"contact info" : {
		"email" : "gsilesbonilla@gmail.com",
		"github" : "trethzer",
		"location" : "Malaga",
		"mobile" : "619388053"
	},
	"picture URL" : "images/fry.jpg",
	"welcome message" : "Bienvenido a mi pagina web",
	"skills" : ["JavaScript", "Robotics", "RPA", "BluePrism"]
};

var work = {};
work.position = "unemployed";
work.years_worked = "0";
work.status = "Currently looking for a job";

var education = {
	"schools" : [
		{
			"name": "University of Malaga",
			"city": "Malaga",
			"degree": "Computer Science",
			"years": 5
		}
	]
}

$("#main").append(work.position);
$("#main").append(education.last_school);











// FUNCIONES

function formatName(nombre){
	initialLetter = nombre.slice(0,1).toUpperCase();
	resto = nombre.slice(1).toLowerCase();
	composed = initialLetter + resto;
	return composed;
}