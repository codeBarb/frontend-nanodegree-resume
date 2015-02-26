

// JSON Data objects follow for the 4 sections of the resume
// JSON = JavaScript Object Notation

var bio = {
    "name": "Barbara Tassa",
    "role": "Budding Web Developer",
    "welcomeMessage": "Building the next big thing",
    "contacts": {
        "mobile": "415.111.2222",
        "email": "hello@passportedu.com",
        "github": "codeBarb",
        "twitter": "@barbie_t" ,
        "location": "San Francisco, CA"
    },
    "skills": ["HTML", "Javascript", "CSS", "AWS"],
    "biopic": "https://pbs.twimg.com/profile_images/1120749997/Grad_sml.jpg"
    //"display": function(),
};

var work = {
    "jobs": [
        {
            "employer": 'JNJ',
            "title": "Field Sales Rep",
            "location": "Toronto, Canada",
            "dates": "2010-2012",
            "description": "Providing product support in clinical IR & IC environment. \n Introducing new products to customers. Exceeding sales quota."
        },
        {
            "employer": 'MRG',
            "title": "Consulting Manager",
            "location": "Toronto, Canada",
            "dates": "2005-2010",
            "description": "Building custom engagement proposals, project valuation, project oversight."
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "PassportEDU",
            "dates": "Jan 2014 - Jan 2015",
            "description": "Created a leading software platform to increase international student yield at US colleges",
            "images": [
                "https://d1qb2nb5cznatu.cloudfront.net/startups/i/299547-4f092dd160546a55b43ae58f418b803f-medium_jpg.jpg?buster=1412116237",
                "http://i.ytimg.com/vi/YavgiVRVcTQ/hqdefault.jpg"
            ]
        }
    ]
}

var education = {
    "schools": [
        {
            "name": "University of Toronto",
            "location": "Toronto, Canada",
            "degree": "BSc",
            "major": ["Developmental Biology", " Political Science"],
            "graduationYear": "2005",
            "schoolURL": "www.utoronto.ca"
        },
        {
            "name": "University of Toronto, Rotman School of Management",
            "location": "Toronto, Canada",
            "degree": "MBA",
            "major": ["Finance", " Entrepreneurship"],
            "graduationYear": "2010",
            "schoolURL": "www.rotman.utoronto.ca"
        }
    ],
    "onlineCourses":[
        {
            "title": "Front-End Nanodegree",
            "school": "Udacity",
            "date": "08/2015",
            "url": "www.udacity.com"
        }
    ]
} // this doesn't need a semicolon at the end like normal JS.

//var role = "Web Developer";
//var resumeName = "Barbara Tassa";
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
var HTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);

var HTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
var HTMLWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(HTMLmobile);
$("#topContacts").append(HTMLemail);
$("#topContacts").append(HTMLtwitter);
$("#topContacts").append(HTMLgithub);
$("#topContacts").append(HTMLlocation);
$("#footerContacts").append(HTMLmobile);
$("#footerContacts").append(HTMLemail);
$("#footerContacts").append(HTMLtwitter);
$("#footerContacts").append(HTMLgithub);
$("#footerContacts").append(HTMLlocation);

$("#header").append(HTMLbioPic);
$("#header").append(HTMLWelcomeMsg);

// Check to see if skills are present
// try with loop:
$("#header").append(HTMLskillsStart);
if (bio.skills.length>0) {
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};
// same code to show skills, but written out
//if (bio.skills.length>0){
//    $("#header").append(HTMLskillsStart);
//    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
//    $("#skills").append(formattedSkill);
//    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
//    $("#skills").append(formattedSkill);
//};
//


 var displayWork = function (){

     for (job in work.jobs){
         $("#workExperience").append(HTMLworkStart);
         var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
         var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
         var formattedEmployerTitle = formattedEmployer + formattedTitle;
         $(".work-entry:last").append(formattedEmployerTitle);
         var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
         var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
         var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
         $(".work-entry:last").append(formattedDates);
         $(".work-entry:last").append(formattedLocation);
         $(".work-entry:last").append(formattedDescription);
     }
 }
displayWork();



var inName = function (parameter){
    var bothNames = parameter.split(" ");
    var lastnameCap = bothNames.pop().toUpperCase();
    var firstName = bothNames[0].slice(0,1).toUpperCase()+bothNames[0].slice(1).toLowerCase();
    return firstName + " " + lastnameCap;
};
inName (bio.name);


$("#main").append(internationalizeButton);

//append all the projets

projects.display = function () {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        $("#projects").append(HTMLprojectStart);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);

        $("#projects").append(HTMLprojectStart);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[project].images.length>0) {
            for (image in projects.projects[project].images){
               var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
              $(".project-entry:last").append(formattedProjectImage);
            }
        }

//        $("#projects").append(HTMLprojectStart);
//        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
//        $(".project-entry:last").append(formattedProjectImage);
//        var formattedProjectImage2 = HTMLprojectImage.replace("%data%", projects.projects[project].images[1]);
//        $(".project-entry:last").append(formattedProjectImage2);

    }
};

projects.display();

// Education

var displayEducation = function () {

    for (edu in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[edu].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        var formattedschoolDegree = formattedSchool + formattedDegree;
        $(".education-entry:last").append(formattedschoolDegree);

        //$(".education-entry:last").append(formattedSchool);
        //$(".education-entry:last").append(formattedDegree);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].graduationYear);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);

        $(".education-entry:last").append(formattedschoolDates);
        $(".education-entry:last").append(formattedschoolLocation);
        $(".education-entry:last").append(formattedMajor);
    }
}
displayEducation();


//Maps function

$("#mapDiv").append(googleMap);


