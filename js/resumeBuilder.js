
var bio = {
"name":"Ann Witbrock",
"role":"Software Engineer",
"contacts":{
  "twitter":"@annwitbrock",
  "mobile":"+447777777777",
  "email": "annwitbrock@example.com",
  "github": "annwitbrock",
  "location": "Enfield, London, UK"
  },
"welcomeMessage":"A welcome message",
"skills":["Coding", "Dancing"],
"bioPic": "images/fry.jpg"
};
var formatRole = HTMLheaderRole.replace("%data%", bio.role);
var formatName = HTMLheaderName.replace("%data%", bio.name);
var formatPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formatWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formatPic + formatName + formatRole);

if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills){
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
  }
};
for (contact in bio.contacts){
  var formatContact = HTMLcontactGeneric
    .replace("%contact%", contact)
    .replace("%data%", bio.contacts[contact]);
    if ( contact == "twitter"){
    $("#topContacts")
      .prepend(formatContact);
    }
  $("#footerContacts")
    .append(formatContact);
};
$("#header").append(formatWelcome);

function displayWork(){
  var work = {
    "jobs": [
      {
      "employer":"Self employed",
      "title": "Software Engineer",
      "location":"London, UK",
      "dates": "2014",
      "description":"software stuff for people"
      },
      {
      "employer": "AlgoShop",
      "title": "Software Consultant",
      "location": "London, UK",
      "dates": "2013",
      "description": "Amazing Machine Learning and visualisation stuff"
      }
    ]
  };

  for(job in work.jobs){
    $("#workExperience")
      .append(HTMLworkStart);
    $(".work-entry:last")
      .append(
       HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
       + 
       HTMLworkTitle.replace("%data%", work.jobs[job].title));
    $(".work-entry:last")
      .append(
      HTMLworkDates.replace("%data%", work.jobs[job].dates)
      +
      HTMLworkLocation.replace("%data%", work.jobs[job].location));
    $(".work-entry:last")
      .append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
  };
};
displayWork();
 
var education = {
  "schools":[
    {
    "name": "University of Otago",
    "location": "Dunedin, NZ",
    "degree": "MSc",
    "major": ["CompSci"],
    "dates": "1993",
    "url":"http://otago.ac.nz"
    },
    {
    "name": "University of Canterbury",
    "location": "Christchurch, NZ",
    "degree": "BSc",
    "major": ["CompSci"],
    "dates": "1990",
    "url":"http://canterbury.ac.nz"
    }
  ],
  "onlineCourses": [
      {
    "school": "Udacity",
    "dates": "2014",
    "title": "JavaScript Basics",
    "url":"https://www.udacity.com/course/ud804"
    },
    {
    "school": "Coursera",
    "dates": "2014",
    "title": "Data Science",
    "url": "http://coursera.org"
    }
  ]
};

var projects = {
  "projects": [
    {
    "title":"Madeup Project",
    "dates": "2013",
    "description":"Something with a picture",
    "images": ["images/fry.jpg"]
    },
    {
    "title":"Another Madeup Project",
    "dates": "2014",
    "description":"Something with the same picture",
    "images": ["images/fry.jpg","images/fry.jpg"]
    }
  ]
};
projects.display = function(){
  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formatTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formatDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formatDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last")
        .append(formatTitle + formatDates +formatDescription);
    for (image in projects.projects[project].images){
      $(".project-entry:last")
        .append( HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
    };
  };
};
projects.display();


$("#main").prepend(internationalizeButton);

var name = $("#name").html();//bio.name;
function inName(full_name){
  var names = full_name.split(' ');

  names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
  if (names[1]){
  names[1] = names[1].toUpperCase();
  }
  
  return names.join(' ');
};

