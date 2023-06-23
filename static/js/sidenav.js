let myElement = document.getElementById('page');

// create a simple instance
// by default, it only adds horizontal recognizers
let mc = new Hammer(myElement, { inputClass: Hammer.TouchInput, cssProps: {userSelect: 'auto',}});

let menu = $('#sideNavMenu');
let sideMenu = document.getElementById("sideNavMenu");

function isMobileWidth() {
    return $('#mobile-indicator').is(':visible');
}

// listen to events...
mc.on("swipeleft swiperight", _.debounce(function(ev) {
    if (isMobileWidth()) {
        if (ev.type == "swipeleft") {
            sideMenu.style.left = "-280px";
        }
        else if (ev.type == "swiperight") {
            sideMenu.style.left = "0";
        }
    }
}, 100));


// let menuTimeout = null;

$(window).on('mousemove', mouseMoveHandler);

function mouseMoveHandler(e) {
    if (isMobileWidth()) {
        if (e.pageX < 20 || menu.is(':hover')) {
            // Show the menu if mouse is within 20 pixels
            // from the left or we are hovering over it
            sideMenu.style.left = "0";
        }
        // else if (menuTimeout === null) {
        else {
            // Hide the menu if the mouse is further than 20 pixels
            // from the left and it is not hovering over the menu
            // and we aren't already scheduled to hide it
            sideMenu.style.left = "-280px";
        }
    }
}

function closeSideNav() {
    if (isMobileWidth()) {
        sideMenu.style.left = "-280px";
    }
}

$(window).resize(_.debounce(function(){
        if (!isMobileWidth()){
            //get rid of js styling and let css do its thing
            sideMenu.style.left = null;
        }
    }, 100)
);

$(document).mouseleave(function () {
    if (isMobileWidth()) {
        sideMenu.style.left = "-280px";
    }
});

 // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNavMenu'
  });