var cpu = [], cpuCore = [], disk = [];
var dataset;
var totalPoints = 100;
var updateInterval = 5000;
var now = new Date().getTime();

var options = {
    series: {
        lines: {
            lineWidth: 1.2
        },
        bars: {
            align: "center",
            fillColor: { colors: [{ opacity: 1 }, { opacity: 1}] },
            barWidth: 500,
            lineWidth: 1
        }
    },
    xaxis: {
        mode: "time",
        tickSize: [60, "second"],
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
    yaxes: [
        {
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
            axisLabel: "CPU loading",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 6
        }, {
            max: 5120,
            position: "right",
            axisLabel: "Disk",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 6
        }
    ],
    legend: {
        noColumns: 0,
        position:"nw"
    },
    grid: {      
        backgroundColor: { colors: ["#ffffff", "#EDF5FF"] }
    }
};

function initData() {
    for (var i = 0; i < totalPoints; i++) {
        var temp = [now += updateInterval, 0];

        cpu.push(temp);
        cpuCore.push(temp);
        disk.push(temp);
    }
}

function GetData() {
    $.ajaxSetup({ cache: false });

    $.ajax({
        url: "http://www.jqueryflottutorial.com/AjaxUpdateChart.aspx",
        dataType: 'json',
        success: update,
        error: function () {
            setTimeout(GetData, updateInterval);
        }
    });
}

var temp;

function update(_data) {
    cpu.shift();
    cpuCore.shift();
    disk.shift();

    now += updateInterval

    temp = [now, _data.cpu];
    cpu.push(temp);

    temp = [now, _data.core];
    cpuCore.push(temp);

    temp = [now, _data.disk];
    disk.push(temp);

    dataset = [
        { label: "CPU:" + _data.cpu + "%", data: cpu, lines: { fill: true, lineWidth: 1.2 }, color: "#00FF00" },
        { label: "Disk:" + _data.disk + "KB", data: disk, color: "#0044FF", bars: { show: true }, yaxis: 2 },
        { label: "CPU Core:" + _data.core + "%", data: cpuCore, lines: { lineWidth: 1.2}, color: "#FF0000" }        
    ];

    $.plot($("#flot-placeholder1"), dataset, options);
    setTimeout(GetData, updateInterval);
}


$(document).ready(function () {
    initData();

    dataset = [        
        { label: "CPU", data: cpu, lines:{fill:true, lineWidth:1.2}, color: "#00FF00" },
        { label: "Disk:", data: disk, color: "#0044FF", bars: { show: true }, yaxis: 2 },
        { label: "CPU Core", data: cpuCore, lines: { lineWidth: 1.2}, color: "#FF0000" }
    ];

    $.plot($("#flot-placeholder1"), dataset, options);
    setTimeout(GetData, updateInterval);
});
