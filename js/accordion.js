jQuery(document).ready(function($){
    $("#my-accordion").accordionjs({
        // Allow self close.(data-close-able)
        closeAble   : true,

        // Close other sections.(data-close-other)
        closeOther  : false,

        // Animation Speed.(data-slide-speed)
        slideSpeed  : 400,

        // The section open on first init. A number from 1 to X or false.(data-active-index)
        activeIndex : false,

        // Callback when a section is open
        openSection: function( section ){
        },

        // Callback before a section is open
        beforeOpenSection: function( section ){
            $(section[0].childNodes[1]).addClass('accordion__title-active');
        },

        beforeCloseSection: function(section) {
            $(section[0].childNodes[1]).removeClass('accordion__title-active');
        }
    });
});