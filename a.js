// © Connor Ahern 2021
// Licensed under Mozilla Public License 2.0

var SlackImprover = {
  "alreadyInit": false,
  "init": function(force) {
    if(this.alreadyInit == true && !(force)) {
      return console.error("SlackImprover Error - Already initalized.");
    } else if (this.alreadyInit == true && force) {
      console.warn("SlackImprover is initializing again, even though it already has this session.");
    }
    
    $(".p-top_nav__sidebar").innerHTML = "SlackImprover Alpha V1.0 " + $(".p-top_nav__sidebar").innerHTML;
    
    this.alreadyInit = true;
  }
}

// Start everything!
SlackImprover.init(false);
