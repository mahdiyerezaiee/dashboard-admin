import Chart from "react-apexcharts";

const LineChart = () => {
    const series = [
        {
            name: "",
            data: [10,10,8,12, 18,15]
        }
    ];
    const options = {
        chart: {
            toolbar: {
                show: false
            },
            selection: {
                enabled: false
            }

            },
        stroke: {
            curve: "smooth",
        },
        xaxis: {

            categories: ["1396", "1397", "1398", "1399", "1400", "1401"],
            axisBorder: {
                show: false,

            },
            axisTicks: {
                show: false,

            },
            dropShadow: {
                enabled: false,
                top: -10,
                left: 0,
                blur: 8,
                opacity: 0.4,
            },
            crosshairs: {
                show: true,
                width: 50,
                position: 'back',
                opacity: 0.7,
                stroke: {
                    dashArray:0,
                    color: "#FFFFFF00"

                },
                fill: {
                    type: 'gradient',
                    color: '#B1B9C4',
                    gradient: {
                        colorFrom: '#e6f0ff',
                        colorTo: '#b8f8ff',
                        stops: [0,100,0],
                        opacityFrom: 0.5,
                        opacityTo: 0.8,
                    },
                },
                dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 1,
                    opacity: 0.4,
                },
            },
            tooltip: {

                enabled: false,
                enabledOnSeries: false,
                shared: false,
                followCursor: false,
                intersect: false,
                inverseOrder: false,
                custom: undefined,
                fillSeriesColor: false,
                theme: false,
                style: {
                    fontSize: '12px',
                    fontFamily: undefined
                },
                onDatasetHover: {
                    highlightDataSeries: false,
                },
                x: {
                    show: false,
                    format: 'dd MMM',
                    formatter: undefined,
                },
                y: {
                    formatter: undefined,
                    title: {
                        formatter: (seriesName) => seriesName,
                    },
                },
                z: {
                    formatter: undefined,
                    title: 'Size: '
                },
                marker: {
                    show: false,
                },
                items: {
                    display: "flex",
                },
                fixed: {
                    enabled: false,
                    position: 'topRight',
                    offsetX: 0,
                    offsetY: 0,
                },
            },
        },
        yaxis: {
            show: true,
            showAlways: true,
            showForNullSeries: true,
            seriesName: undefined,
            opposite: false,
            reversed: false,
            logarithmic: false,
            logBase: 10,
            tickAmount: 6,
            min: 0,
            max: 30,
            forceNiceScale: false,
            floating: false,
            decimalsInFloat: undefined,
            labels: {
                show: true,
                align: 'right',
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: [],
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-yaxis-label',
                },
                offsetX: -10,
                offsetY: 0,
                rotate: 0,
                formatter: (value) => { return value },
            },

            crosshairs: {
                show: false,
                position: 'back',
                stroke: {
                    color: '#b6b6b6',
                    width: 1,
                    dashArray: 0,
                },
            },
            axisTicks: {
                show: false,
                borderType: 'solid',
                color: '#78909C',
                width: 6,
                offsetX: 0,
                offsetY: 0
            },

        },
        tooltip: {
            enabled: true,
            enabledOnSeries: false,
            shared: false,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: false,

            theme: true,
            style: {

                fontSize: '12px',
                fontFamily: undefined
            },
            fill: {
                type: "solid",
                color:"#fff"
            },
            onDatasetHover: {
                highlightDataSeries: false,
            },
            x: {
                show: false,
                format: 'dd MMM',
                formatter: undefined,
            },
            y: {
                show: false,

                title: {
                    show: false,

                },
            },
            z: {
                formatter: undefined,
                title: 'Size: '
            },
            marker: {
                show: false,
            },
            items: {
                display: "flex",
            },
            fixed: {
                enabled: false,
                position: 'topRight',
                offsetX: 0,
                offsetY: 0,
            },
        },

    }
    return <Chart type="line" series={series} options={options} />;
}
export default LineChart