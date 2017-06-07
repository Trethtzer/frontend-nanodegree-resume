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
		"github" : "https://www.github.com/Trethtzer",
		"location" : "Málaga, Spain",
		"mobile" : "(+34) 619 38 80 53",
		"linkedin" : "https://www.linkedin.com/in/guillermosilesbonilla/"
	},
	"picture URL" : "images/fry.jpg",
	"welcome message" : "Software Developer with over 4+ years of experience in Java. Possess a Degree in Computer Science. Main areas are Android development, robotics and computer vision."
};


var skills = {
	"languages" : [
		{
			"name" : "Spanish",
			"level" : "Native speaker"
		},
		{
			"name" : "English",
			"level" : "B2 Cambridge, 88 TOEFL"
		},
		{
			"name" : "Korean",
			"level" : "A2"
		}
	],
	"computer_languages" : ["Java","Android","JavaScript","html5","Css","C#","C","SQL","Haskell","Latex","Matlab","C++","Python","R"],
	"others" : ["Eclipse","AndroidStudio","Github","Linux","OpenCV","Excel"]
};


var work = {};
work.position = "Software developer";
work.company = "ViewNext";
work.years_worked = "0";

var education = [
	{
		"name" : "Computer science degree",
		"school" : "University of Malaga",
		"start_date" : "September 2012",
		"end_date" : "December 2016"
	},
	{
		"name" : "Development of applications for Android devices, in collaboration with Samsung",
		"school" : "University of Malaga",
		"start_date" : "2016",
		"end_date" : "2016"
	},
	{
		"name" : "Android developer nanodegree",
		"school" : "Udacity",
		"start_date" : "November 2016",
		"end_date" : "June 2016"
	}
];

var project = [
	{
		"name" : "Automatic recording of a game of Go through computer vision",
		"start_date" : "June 2016",
		"end_date" : "February 2017",
		"notes" : [
					"Android app that automatically identifies and record moves played during a go game.",
					"Developed using a variety of computer vision techniques.",
					"App can record an entire Go game between two players lasting 1 – 2 hours, depending on the battery quality; Received final mark: 9.3 / 10."
				]
	},
	{
		"name" : "Go Tournament held in Malaga",
		"start_date" : "2012",
		"end_date" : "2012",
		"notes" : [
			"Managed Spanish Go Tournament in Málaga.",
			"Helped all participants to solve their problems and organized activities in the city of Málaga.",
			"Received positives reviews from participants."
		]
	}
];

$("#main").append(work.position);
$("#main").append(education.last_school);











// FUNCIONES

function formatName(nombre){
	initialLetter = nombre.slice(0,1).toUpperCase();
	resto = nombre.slice(1).toLowerCase();
	composed = initialLetter + resto;
	return composed;
}