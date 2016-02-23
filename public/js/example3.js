var data = [];

var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];
var data5 = [];
var data6 = [];

var dataset_1;
var dataset_2;
var dataset_3;
var dataset_4;
var dataset_5;
var dataset_6;

var totalPoints = 100;
var updateInterval = 1000;
var now = new Date().getTime();


function initData() {
    for (var i = 0; i < totalPoints; i++) {
        var temp = [now += updateInterval, 0];
        data.push(temp);
        data1.push(temp);
        data2.push(temp);
        data3.push(temp);
        data4.push(temp);
        data5.push(temp);
        data6.push(temp);
    }
}



function GetData_1() {
    data1.shift();
    while (data1.length < totalPoints) {     
        var y = Math.random() * 100;
        var temp = [now += updateInterval, y];

        data1.push(temp);
    }
    
}

function GetData_2() {
    data.shift();

    while (data.length < totalPoints) {     
        var y = Math.random() * 100;
        var temp = [now += updateInterval, y];

        data.push(temp);
    }
}

function GetData_3() {
    data.shift();

    while (data.length < totalPoints) {     
        var y = Math.random() * 100;
        var temp = [now += updateInterval, y];

        data.push(temp);
    }
}

function GetData_4() {
    data.shift();

    while (data.length < totalPoints) {     
        var y = Math.random() * 100;
        var temp = [now += updateInterval, y];

        data.push(temp);
    }
}

function GetData_5() {
    data.shift();

    while (data.length < totalPoints) {     
        var y = Math.random() * 100;
        var temp = [now += updateInterval, y];

        data.push(temp);
    }
}

function GetData_6() {
    data.shift();

    while (data.length < totalPoints) {     
        var y = Math.random() * 100;
        var temp = [now += updateInterval, y];

        data.push(temp);
    }
}





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
        autoscaleMargin: null,
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
