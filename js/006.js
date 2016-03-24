console.log('006.js loaded');

$(document).ready(function () {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
        var c;
        var j=3;
        for(var x=25; x<800; x+=80) {
            for(var y=25; y<800; y+=80) {
            c = Shape.Circle(x, y, 30);
                //alert(j);
                if(j == 3){
                    //alert("j = " +j);
                    c.fillColor = 'green';
                    
                }else if(j==6){
                    //alert("j = " +j);
                    c.fillColor = 'red';
                    
                }else if(j==9){
                    //alert("j = " +j);
                    c.fillColor = 'blue';
                    j=0;
                }
                j+=3;
            }
        }
    paper.view.draw();
});