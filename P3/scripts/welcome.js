var today = new Date();
var thisHour = today.getHours();
var thisDay = today.getDay();
var greeting;

function setGreetingWeekdays(){
  if (5 <= thisHour && thisHour < 12) {
    greeting = "Good morning! <br /> Lofoten Fresh also works as lunch <br /> We welcome you at 15:00!"
  }
  else if (12 <= thisHour && thisHour < 15) {
    greeting = "What a wonderfull day to eat <br /> We're opening our doors at 15:00"
  }
  else if (15 <= thisHour && thisHour < 21) {
    greeting = "We are open and ready to serve!"
  }
  else if (21 <= thisHour && thisHour< 22) {
    greeting = "You just missed us <br /> see you to morrow?"
  }
  else {
    greeting = "Zzz we open at 15:00, have you tried MIX?"
  }
  return greeting;
}

function setGreetingWeekends(){
  if (5 <= thisHour && thisHour < 12) {
    greeting = "Good morning! <br /> Lofoten Fresh also works as lunch <br /> We welcome you at 15:00!"
  }
  else if (12 <= thisHour && thisHour < 15) {
    greeting = "What a wonderfull day to eat <br /> We're opening our doors at 15:00"
  }
  else if (15 <= thisHour && thisHour < 23) {
    greeting = "We are open and ready to serve!"
  }
  else if (23 <= thisHour && thisHour < 24) {
    greeting = "You just missed us <br /> see you to morrow?"
  }
  else {
    greeting = "Zzz we open at 15:00, have you tried MIX?"
  }
  return greeting;
}


if (1 <= thisDay && thisDay <= 4) {
  document.getElementById("welcomeMessage").innerHTML = setGreetingWeekdays();
}
else {
  document.getElementById("welcomeMessage").innerHTML = setGreetingWeekends();
}
