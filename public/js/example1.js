/*
var running = false;  
var array;  
var xscale = 100;   
  

//this function does the plotting   
function draw() {  


    

    for (var i = 1; i <= 6; i++) {
        //shift the values to left  
        for (var j = 0; j < this.xscale - 1; j++) {  
            this.array[j] = [j,this.array[j + 1][1]];  // (x,y)  
                
        } 

        //add the new coming value to the last postion  
        this.array[this.xscale - 1] = [this.xscale - 1, Math.random() + i * 10];
    }



    
    // loop through all the graph id            
    for (var i = 1; i <= 6; i++) {
        $.plot($("#graphdiv"+i), [  
            {  
                label: "Y vs X",  
                data: this.array,  
                lines: { show: true, fill: true, fillColor: "rgba(249, 28, 61,0.3)",lineWidth: 3.5 },  
                color:"rgba(249, 28, 61,1)"  
            }  
        ],  
            {  
                xaxis: {  
                   
                    mode: "time",
                    tickSize: [2, "second"],

                    tickFormatter: function (v, axis) {
                        var date = new Date(v);

                        if (date.getSeconds() % 20 == 0) {
                            var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                            var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                            var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

                            return hours + ":" + minutes + ":" + seconds;

                        } else {
                            return "";
                        }
                    },
                    
                    axisLabel: "Time",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 10


                      
  
                },  
                yaxis: {  
                    min: 0,
                    max: 100,
                    tickFormatter: function(v, axis) {
                        if (v % 10 == 0) {
                            return v + "%";
                        }else {
                            return "";
                        }
                    },
                    
                    axisLabel: "CPU loading", 
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 10
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
  
*/



var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];
var data5 = [];
var data6 = [];
var dataset1;
var dataset2;
var dataset3;
var dataset4;
var dataset5;
var dataset6;
var totalPoints = 100;
var updateInterval = 1000;
var now = new Date().getTime();


function GetData() {
    data.shift();

    while (data.length < totalPoints) {     
        var y = Math.random() * 100;
        var temp = [now += updateInterval, y];

        data.push(temp);
    }
}


$(document).ready(function () {
        GetData();

        dataset = [
            { label: "CPU", data: data, color: "#00FF00" }
        ];

        $.plot($("#graphdiv1"), dataset, options);

        function update() {
            GetData();
            $.plot($("#graphdiv1"), dataset, options)
            setTimeout(update, updateInterval);
        }

        update();
});



function GetData() {
    data2.shift();

    while (data2.length < totalPoints) {     
        var y = Math.random() * 0.5 * 100;
        var temp = [now += updateInterval, y];

        data2.push(temp);
    }
}



$(document).ready(function () {
        GetData();

        dataset = [
            { label: "CPU", data: data2, color: "#00FF00" }
        ];

        $.plot($("#graphdiv2"), dataset, options);

        function update() {
            GetData();
            $.plot($("#graphdiv2"), dataset, options)
            setTimeout(update, updateInterval);
        }

        update();
});






var data = [];
var dataset;
var totalPoints = 100;
var updateInterval = 1000;
var now = new Date().getTime();


function GetData() {
    data.shift();

    while (data.length < totalPoints) {     
        var y = Math.random() * 100;
        var temp = [now += updateInterval, y];

        data.push(temp);
    }
}


$(document).ready(function () {
        GetData();

        dataset = [
            { label: "CPU", data: data, color: "#00FF00" }
        ];

        $.plot($("#graphdiv3"), dataset, options);

        function update() {
            GetData();
            $.plot($("#graphdiv3"), dataset, options)
            setTimeout(update, updateInterval);
        }

        update();
});




var data = [];
var dataset;
var totalPoints = 100;
var updateInterval = 1000;
var now = new Date().getTime();


function GetData() {
    data.shift();

    while (data.length < totalPoints) {     
        var y = Math.random() * 100;
        var temp = [now += updateInterval, y];

        data.push(temp);
    }
}


$(document).ready(function () {
        GetData();

        dataset = [
            { label: "CPU", data: data, color: "#00FF00" }
        ];

        $.plot($("#graphdiv4"), dataset, options);

        function update() {
            GetData();
            $.plot($("#graphdiv4"), dataset, options)
            setTimeout(update, updateInterval);
        }

        update();
});






var data = [];
var dataset;
var totalPoints = 100;
var updateInterval = 1000;
var now = new Date().getTime();


function GetData() {
    data.shift();

    while (data.length < totalPoints) {     
        var y = Math.random() * 100;
        var temp = [now += updateInterval, y];

        data.push(temp);
    }
}


$(document).ready(function () {
        GetData();

        dataset = [
            { label: "CPU", data: data, color: "#00FF00" }
        ];

        $.plot($("#graphdiv5"), dataset, options);

        function update() {
            GetData();
            $.plot($("#graphdiv5"), dataset, options)
            setTimeout(update, updateInterval);
        }

        update();
});


function GetData() {
    data.shift();

    while (data.length < totalPoints) {     
        var y = Math.random() * 100;
        var temp = [now += updateInterval, y];

        data.push(temp);
    }
}


$(document).ready(function () {
        GetData();

        dataset = [
            { label: "CPU", data: data, color: "#00FF00" }
        ];

        $.plot($("#graphdiv6"), dataset, options);

        function update() {
            GetData();
            $.plot($("#graphdiv6"), dataset, options)
            setTimeout(update, updateInterval);
        }

        update();
});



var options = {
    series: {
        lines: {
            show: true,
            lineWidth: 1.2,
            fill: true
        }
    },
    xaxis: {
        mode: "time",
        tickSize: [2, "second"],
        tickFormatter: function (v, axis) {
            var date = new Date(v);

            if (date.getSeconds() % 20 == 0) {
                var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

                return hours + ":" + minutes + ":" + seconds;
            } else {
                return "";
            }
        },
        axisLabel: "Time",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 10
    },
    yaxis: {
        min: 0,
        max: 100,        
        tickSize: 5,
        tickFormatter: function (v, axis) {
            if (v % 10 == 0) {
                return v + "%";
            } else {
                return "";
            }
        },
        axisLabel: "C",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 6
    },
    legend: {        
        labelBoxBorderColor: "#fff"
    },
    grid: {                
        backgroundColor: "#000000",
        tickColor: "#008040"
    }
};







