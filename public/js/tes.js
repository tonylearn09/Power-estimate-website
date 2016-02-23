var running = false;  
var array;  
var xscale = 100;   
  
  
//this function does the plotting   
function draw() {  


        //shift the values to left  
        for (var i = 0; i < this.xscale - 1; i++) {  
            this.array[i] = [i,this.array[i + 1][1]];  // (x,y)  
                
        }  
  
        //add the new coming value to the last postion  
        this.array[this.xscale - 1] = [this.xscale - 1,Math.random()];

    
    // loop through all the graph id for (var i = 1; i <= 6; i++) { $.plot($("#graphdiv"+i), [ {  
                label: "Y vs X",  
                data: this.array,  
                lines: { show: true, fill: true, fillColor: "rgba(249, 28, 61,0.3)",lineWidth: 3.5 },  
                color:"rgba(249, 28, 61,1)"  
            }  
        ],  
            {  
                xaxis: {  
                    ticks: generateTicks(),  
                    min: 0  
  
                },  
                yaxis: {  
                    ticks: [0 , 0.2, 0.4, 0.6, 0.8, 1.0, 1.2],  
                    min: 0  
                },  
                      
                //placing a grid  
                grid: {  
                    show: true,  
                    color: '#474747',  
                    tickColor: '#474747',  
                    borderWidth: 1,  
                    autoHighlight: true,  
                    mouseActiveRadius: 2  
                }  
  
  
            } );

    }    
}  
  
  
//This creates the data array with 0.0 inital Y values at the initialization time  
function initialize() {  
    this.array = new Array();  
    for (var i = 0; i < xscale; i++) {  
        this.array[i] = [i, 0.0];  
     }  
}  
  
//This is used to generate ticks for X axis (value 0 will be on the right)  
function generateTicks() {  
    var tickArray = [];  
    var startTick = 20;  
    var i = startTick - 1;  
    var weight = this.xscale / 20;  
    do {  
            var t = (startTick - i) * weight - 1;  
            var v = i * weight; 

            if (v == 0) {  
                    v = "0";  
            }  

            tickArray.push([t, v]);  
                i--;  
        } while (i > -1); 

    return tickArray;  
}  
  
//This function is called once per every 1000ms  
function refreshStat() {  
    if (!running) {  
        running = true;  
        draw();  
        running = false;  
    }  
}  

  
$(document).ready(function () {  
    initialize();  
    refreshStat();  
    setInterval("refreshStat()", 1000);  
});  
  




