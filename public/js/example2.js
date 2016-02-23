        var rawData_1 = [[1582.3, 0], [28.95, 1],[1603, 2],[774, 3],[1245, 4], [85, 5]];
        var dataSet_bar_1 = [{ label: "RRrider and sorce data", data: rawData_1, color: "#E8E800" }];

        var rawData_2 = [[1698.3, 0], [44.95, 1],[1947, 2],[733, 3],[1000, 4], [100, 5]];
        var dataSet_bar_2 = [{ label: "RRrider and sorce data", data: rawData_2, color: "#E8E800" }];

        var rawData_3 = [[1783, 0], [11.22, 1],[639.2, 2],[289.4, 3],[1344, 4], [893, 5]];
        var dataSet_bar_3 = [{ label: "RRrider and sorce data", data: rawData_3, color: "#E8E800" }];

        var ticks = [[0, "GM_Power"], [1, "GM_Voltage"], [2, "GM_Current"], [3, "Sorce_Power"], [4, "Source_Voltage"], [5, "Sorce_Current"]];
 
        var options_bar = {
            series: {
                bars: {
                    show: true
                }
            },
            bars: {
                align: "center",
                barWidth: 0.5,
                horizontal: true,
                fillColor: { colors: [{ opacity: 0.5 }, { opacity: 1}] },
                lineWidth: 1
            },
            xaxis: {
                axisLabel: "energy",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 30,
                max: 2000,
                tickColor: "#5E5E5E",
                tickFormatter: function (v, axis) {
                    return $.formatNumber(v, { format: "#,###", locale: "us" });
                },
                color: "black"
            },
            yaxis: {
                axisLabel: "measure data",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 90,
                tickColor: "#5E5E5E",
                ticks: ticks,
                color: "black"
            },
            legend: {
                noColumns: 0,
                labelBoxBorderColor: "#858585",
                position: "ne"
            },
            grid: {
                hoverable: true,
                borderWidth: 2,
                backgroundColor: { colors: ["#171717", "#4F4F4F"] }
            }
        };
 
        $(document).ready(function () {

            $(function version2 () {
                $.plot($("#flot-placeholder-1"), dataSet_bar_1, options_bar);
                $("#flot-placeholder-1").UseTooltip();
            });

            $(function version2 () {
                $.plot($("#flot-placeholder-2"), dataSet_bar_2, options_bar);
                $("#flot-placeholder-2").UseTooltip();
            });
            $(function version3 () {
                $.plot($("#flot-placeholder-3"), dataSet_bar_3, options_bar);
                $("#flot-placeholder-3").UseTooltip();
            });
        });
 
        var previousPoint = null, previousLabel = null;
 
        $.fn.UseTooltip = function () {
            $(this).bind("plothover", function (event, pos, item) {
                if (item) {
                    if ((previousLabel != item.series.label) ||
                 (previousPoint != item.dataIndex)) {
                        previousPoint = item.dataIndex;
                        previousLabel = item.series.label;
                        $("#tooltip").remove();
 
                        var x = item.datapoint[0];
                        var y = item.datapoint[1];
 
                        var color = item.series.color;
                        //alert(color)
                        //console.log(item.series.xaxis.ticks[x].label);                
 
                        showTooltip(item.pageX,
                        item.pageY,
                        color,
                        "<strong>" + item.series.label + "</strong><br>" + item.series.yaxis.ticks[y].label +
                        " : <strong>" + $.formatNumber(x, { format: "#,###", locale: "us" }) + "</strong> joul");
                    }
                } else {
                    $("#tooltip").remove();
                    previousPoint = null;
                }
            });
        };
 
        function showTooltip(x, y, color, contents) {
            $('<div id="tooltip">' + contents + '</div>').css({
                position: 'absolute',
                display: 'none',
                top: y - 10,
                left: x + 10,
                border: '2px solid ' + color,
                padding: '3px',
                'font-size': '9px',
                'border-radius': '5px',
                'background-color': '#fff',
                'font-family': 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
                opacity: 0.9
            }).appendTo("body").fadeIn(200);
        }