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
        plotOptions: {
            pie:   {
                expandOnClick: false,
                donut: {
            labels: {
                show: true,
                    total: {
                    show: true,
                        label: 'جمع دارایی (ریال)',
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
            <Chart options={options} series={series} type="donut"  width="400 "/>
        </div>
    );
}
export default DonutChart