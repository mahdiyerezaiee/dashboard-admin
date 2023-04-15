import Chart from "react-apexcharts";

const DonutChart = () => {
    const options = {
        colors:["#FF895D" , "#586DFF", "#3AE5B2" , "#AB72FE"],
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        }
        ,

        crosshairs: {
            show: false,
            position: 'back',
            stroke: {
                color: '#b6b6b6',
                width: 1,
                dashArray: 0,
            },
        },
        plotOptions: {
            pie:   {
                expandOnClick: false,
                donut: {
            labels: {
                show: true,





                    total: {
                    show: true,
                        showAlways: true,
                        label: 'جمع دارایی (ریال)',
                        fontSize:"80%",
                        formatter: () => "280,54"

                }
            }
        }
    }
        },
        states: {
            hover: {

                filter: {
                    type: 'none',
                    value: 0,
                }
            },
        },
        tooltip: {
            enabled:false
        }
    }
    const series = [4, 2, 6, 9]; //our data

    return (
        <div className="donut">
            <Chart options={options} series={series} type="donut"  width="100%"/>
        </div>
    );
}
export default DonutChart