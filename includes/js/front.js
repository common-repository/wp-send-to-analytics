// 

function Utils() {
}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = jQuery(window).scrollTop();
        var pageBottom = pageTop + jQuery(window).height();
        var elementTop = jQuery(element).offset().top;
        var elementBottom = elementTop + jQuery(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();

function sendToAnalytics(input){
    counter = input;
    if (wp2saLabels.tracker != '') {wp2saLabels.tracker = wp2saLabels.tracker+'.'} ;
    if (toLookFor == '#wps2a-after_content') {
        ga(wp2saLabels.tracker+'send','event', wp2saLabels.category, wp2saLabels.action, wp2saLabels.label, counter );
    } else {
        ga(wp2saLabels.tracker+'send','event', wp2saLabels.category, wp2saLabels.action, toLookFor );
    }
	
}




