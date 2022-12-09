
/*
Name: main js 
Version:1.0

*/


(function ($) {
    'use strict';

    jQuery(document).ready(function ($) {
        
            $('#test')
              .gmap3({
                center: [36.3553, 120.6909],
                zoom: 15,
              })
              .marker([
                {position:[36.3553, 120.6909]},
                {address:"9M4R+493, Jimo, Qingdao, Shandong, China, 266237"},
                {address:"9M4R+493, Jimo, Qingdao, Shandong, China, 266237", icon: "https://maps.google.com/mapfiles/marker_grey.png"}
              ])
              .on('click', function (marker) {
                marker.setIcon('https://maps.google.com/mapfiles/marker_green.png');
              });
            ;
    });



}(jQuery))

