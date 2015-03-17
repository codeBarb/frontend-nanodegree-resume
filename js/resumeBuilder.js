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
        "twitter": "@barbie_t",
        "location": "San Francisco, CA"
    },
    "skills": ["HTML", "Javascript", "CSS", "AWS"],
    "biopic": "https://pbs.twimg.com/profile_images/1120749997/Grad_sml.jpg"
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);
    $("#header").append(formattedbioPic);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(HTMLskillsStart);
    if (bio.skills.length > 0) {
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
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
};


work.display = function () {
    for (job in work.jobs) {
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
};

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
};

//append all the projects

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

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }

    }
};

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
    "onlineCourses": [
        {
            "title": "Front-End Nanodegree",
            "school": "Udacity",
            "date": "08/2015",
            "url": "www.udacity.com"
        }
    ]
};

// Education
education.display = function () {
    for (edu in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[edu].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        var formattedschoolDegree = formattedSchool + formattedDegree;
        $(".education-entry:last").append(formattedschoolDegree);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].graduationYear);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);

        $(".education-entry:last").append(formattedschoolDates);
        $(".education-entry:last").append(formattedschoolLocation);
        $(".education-entry:last").append(formattedMajor);
    }
};


bio.display();
work.display();
projects.display();
education.display();


//Maps function
$("#mapDiv").append(googleMap);


