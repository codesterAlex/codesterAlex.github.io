
function myFunction(){
var q1 = document.getElementById("quest1");
var q1_val = q1.options[q1.selectedIndex].value;

var q2 = document.getElementById("quest2");
var q2_val = q1.options[q2.selectedIndex].value;

var q3 = document.getElementById("quest3");
var q3_val = q3.options[q3.selectedIndex].value;

var q4 = document.getElementById("quest4");
var q4_val = q4.options[q1.selectedIndex].value;

var q5 = document.getElementById("quest1");
var q5_val = q5.options[q5.selectedIndex].value;

var q6 = document.getElementById("quest1");
var q6_val = q6.options[q6.selectedIndex].value;

var q7 = document.getElementById("quest1");
var q7_val = q7.options[q1.selectedIndex].value;


var profess = [q1_val, q2_val,q3_val,q4_val,q5_val,q6_val,q7_val];


	function mostCommon(list) {
  	var keyCounts = {};
  	var topCount = 0;
  	var topKey = {};
  	list.forEach(function(item, val) {
    	keyCounts[item] = keyCounts[item] + 1 || 1;
    	if (keyCounts[item] > topCount) {
      	topKey = item;
      	topCount = keyCounts[item];
    	}
  	});

  	return topKey;
	};

result = mostCommon(profess)
	
document.getElementById("myText").innerHTML = "You are the "+result;
}