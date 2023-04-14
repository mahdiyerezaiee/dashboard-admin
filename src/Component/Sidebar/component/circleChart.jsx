import Chart from "react-apexcharts";

const CircleChart = () => {
    const series = [80];
    const options = {

        colors: ["red"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "60%",
                    background: "none"
                },

                dataLabels: {

                    value: {
                        color: "red",
                        show: false
                    }
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                gradientToColors: ["red"],
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["80%"]
    };
    return <Chart type="radialBar" series={series} options={options} width={144}/>;
}
export default CircleChart
