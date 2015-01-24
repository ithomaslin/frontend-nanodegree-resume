var formattedName = HTMLheaderName.replace("%data%", "Thomas Lin");
var formattedRole = HTMLheaderRole.replace("%data%", "Web/iOS Developer, Data Scientist");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var string = "audacity";
string = string[1].toUpperCase() + string.slice(2);


$("#header").append(string);
