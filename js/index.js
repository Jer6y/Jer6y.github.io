//
$(function () {
    var data = [
        {
            "YearMonth": "Nov-24",
            "WINDSPEED": 51390.97222,
            "PREPOWER": 39651.15639,
            "WINDDIRECTION": 240.5034722,
            "TEMPERATURE": -3.302951389,
            "HUMIDITY": 35.94513889,
            "PRESSURE": 41.1361111,
            "ROUND(A.WS,1)": 3.725347222,
            "ROUND(A.POWER,0)": 32816.51424,
            "YD15": 30668.22339
        },
        {
            "YearMonth": "Dec-24",
            "WINDSPEED": 90572.72422,
            "PREPOWER": 56660.94629,
            "WINDDIRECTION": 222.3866308,
            "TEMPERATURE": -7.452233792,
            "HUMIDITY": 48.43936849,
            "PRESSURE": 41.7017131,
            "ROUND(A.WS,1)": 5.041010855,
            "ROUND(A.POWER,0)": 56795.33752,
            "YD15": 54020.91981
        },
        {
            "YearMonth": "Jan-24",
            "WINDSPEED": 50869.28763,
            "PREPOWER": 31179.98806,
            "WINDDIRECTION": 179.6838038,
            "TEMPERATURE": -6.883501344,
            "HUMIDITY": 43.84375,
            "PRESSURE": 36.1461694,
            "ROUND(A.WS,1)": 3.466229839,
            "ROUND(A.POWER,0)": 28228.37735,
            "YD15": 25841.26815
        },
        {
            "YearMonth": "Feb-24",
            "WINDSPEED": 62914.0625,
            "PREPOWER": 58197.37258,
            "WINDDIRECTION": 179.1160714,
            "TEMPERATURE": -6.037723214,
            "HUMIDITY": 33.59449405,
            "PRESSURE": 37.3258929,
            "ROUND(A.WS,1)": 4.744940476,
            "ROUND(A.POWER,0)": 45257.70722,
            "YD15": 42610.15253
        },
        {
            "YearMonth": "Mar-24",
            "WINDSPEED": 61934.47581,
            "PREPOWER": 60023.72621,
            "WINDDIRECTION": 182.719422,
            "TEMPERATURE": 5.612331989,
            "HUMIDITY": 30.77251344,
            "PRESSURE": 32.8269489,
            "ROUND(A.WS,1)": 5.112735215,
            "ROUND(A.POWER,0)": 57110.69691,
            "YD15": 55128.82036
        },
        {
            "YearMonth": "Apr-24",
            "WINDSPEED": 62078.66379,
            "PREPOWER": 64349.38906,
            "WINDDIRECTION": 186.8042385,
            "TEMPERATURE": 11.09091236,
            "HUMIDITY": 18.0625,
            "PRESSURE": 36.2600575,
            "ROUND(A.WS,1)": 5.093534483,
            "ROUND(A.POWER,0)": 54772.55316,
            "YD15": 52751.80136
        },
        {
            "YearMonth": "May-24",
            "WINDSPEED": 89005.71045,
            "PREPOWER": 91464.13453,
            "WINDDIRECTION": 134.9512932,
            "TEMPERATURE": 18.97850185,
            "HUMIDITY": 19.27947598,
            "PRESSURE": 31.5529056,
            "ROUND(A.WS,1)": 7.477158213,
            "ROUND(A.POWER,0)": 57116.29795,
            "YD15": 55419.88306
        },
        {
            "YearMonth": "Jun-24",
            "WINDSPEED": 69486.11111,
            "PREPOWER": 67952.48276,
            "WINDDIRECTION": 135.76875,
            "TEMPERATURE": 23.92329861,
            "HUMIDITY": 20.73020833,
            "PRESSURE": 28.9767361,
            "ROUND(A.WS,1)": 5.730448384,
            "ROUND(A.POWER,0)": 63665.9635,
            "YD15": 60894.75339
        }
    ]

    echart_1(data);
    echart_2(data);
    echart_3(data);


    function echart_1(data) {
        var myChart = echarts.init(document.getElementById('chart_1'));

        var option = {
            legend: {
                show: true,
                left: "center",
                data: ['WINDSPEED', 'WINDDIRECTION', 'PREPOWER'],
                y: "5%",
                itemWidth: 18,
                itemHeight: 12,
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                },
            },
            toolbox: {
                orient: 'vertical',
                right: '1%',
                top: '20%',
                iconStyle: {
                    color: '#fff',
                    borderColor: '#fff',
                    borderWidth: 1,
                },
                feature: {
                    saveAsImage: {},
                    magicType: {
                        type: ['line', 'bar', 'stack', 'tiled']
                    }
                }
            },
            color: ["#036BC8", "#5EBEFC", "#2EF7F3"],
            grid: {
                left: '2%',
                top: "12%",
                bottom: "5%",
                right: "5%",
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    }
                },
                axisTick: {
                    show: false
                },
                data: data.map(item => item.YearMonth),
            },
            yAxis: [{
                type: 'value',
                name: 'Speed & Power',
                position: 'left',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    }
                },
                splitLine: {
                    show: false
                }
            }, {
                type: 'value',
                name: 'Direction',
                position: 'right',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    }
                },
                splitLine: {
                    show: false
                }
            }],
            series: [
                {
                    name: 'WINDSPEED *10000',
                    type: 'line',
                    data: data.map(item => item.WINDSPEED)
                },
                {
                    name: 'WINDDIRECTION',
                    type: 'line',
                    yAxisIndex: 1,
                    data: data.map(item => item.WINDDIRECTION)
                },
                {
                    name: 'PREPOWER',
                    type: 'line',
                    data: data.map(item => item.PREPOWER)
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echart_2(data) {
        var myChart = echarts.init(document.getElementById('chart_2'));

        // 计算每个月电力数据总和
        var totalPower = data.reduce((sum, item) => sum + item.PREPOWER, 0);

        // 生成扇形图数据
        var pieData = data.map(item => ({
            value: item.PREPOWER,
            name: item.YearMonth
        }));

        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['Power'],
                left: '27%',
                textStyle: {
                    color: '#fff'
                }
            },
            grid: {
                left: '1%',
                right: '60%',
                top: '10%',
                bottom: '10%',
                containLabel: true,
            },
            xAxis: {
                type: 'value',
                position: 'top',
                splitLine: { show: false },
                boundaryGap: [0, 0.01],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
            },
            yAxis: {
                type: 'category',
                data: data.map(item => item.YearMonth),
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
            },
            series: [
                {
                    name: 'Power',
                    type: 'bar',
                    data: data.map(item => item.PREPOWER),
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = [
                                    '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                                    '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                                    '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                                ];
                                return colorList[params.dataIndex]
                            },
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                },
                {
                    type: 'pie',
                    radius: [30, '80%'],
                    center: ['75%', '50%'],
                    roseType: 'radius',
                    data: pieData,
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: 14
                            },
                            formatter: function (param) {
                                return param.name + ':\n' + Math.round(param.percent) + '%';
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 2
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 30,
                            shadowColor: 'rgba(0, 0, 0, 0.4)'
                        }
                    },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echart_3(data) {
        var myChart = echarts.init(document.getElementById('chart_3'));

        var option = {
            color: ["#FF6F61", "#6B8E23", "#4682B4"],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['TEMPERATURE', 'HUMIDITY', 'PRESSURE'],
                left: 'center',
                textStyle: {
                    color: '#ffd285',
                    fontSize: 14
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                data: data.map(item => item.YearMonth)
            },
            yAxis: [
                {
                    type: 'value',
                    name: 'Temperature (°C)',
                    position: 'left',
                    axisLine: {
                        lineStyle: {
                            color: '#FF6F61'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#FF6F61'
                        }
                    },
                    splitLine: {
                        show: false
                    }
                },
                {
                    type: 'value',
                    name: 'Humidity (%)',
                    position: 'right',
                    offset: 50,
                    axisLine: {
                        lineStyle: {
                            color: '#6B8E23'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#6B8E23'
                        }
                    },
                    splitLine: {
                        show: false
                    }
                },
                {
                    type: 'value',
                    name: '+800 Pressure (hPa)',
                    position: 'right',
                    axisLine: {
                        lineStyle: {
                            color: '#4682B4'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#4682B4'
                        }
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: 'TEMPERATURE',
                    type: 'line',
                    data: data.map(item => item.TEMPERATURE),
                    smooth: true,
                    symbolSize: 8,
                    yAxisIndex: 0,
                    itemStyle: {
                        color: '#FF6F61'
                    }
                },
                {
                    name: 'HUMIDITY',
                    type: 'line',
                    data: data.map(item => item.HUMIDITY),
                    smooth: true,
                    symbolSize: 8,
                    yAxisIndex: 1,
                    itemStyle: {
                        color: '#6B8E23'
                    }
                },
                {
                    name: 'PRESSURE',
                    type: 'line',
                    data: data.map(item => item.PRESSURE),
                    smooth: true,
                    symbolSize: 8,
                    yAxisIndex: 2,
                    itemStyle: {
                        color: '#4682B4'
                    }
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

                    });
