import React from "react";
import { Chart } from "react-google-charts"

export const data = [
    [
      "Element",
      "Density",
      { role: "style" },
      {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
      },
    ],
    ["Copper", 8.94, "#b87333", null],
    ["Silver", 10.49, "silver", null],
    ["Gold", 19.3, "gold", null],
    ["Platinum", 21.45, "color: #e5e4e2", null],
  ];
  
  export const options = {
    title: "Genres Most Frequently and Less Frequently Read by User",
    width: 600,
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };
  




const genreCharts = () => {





    return ( <div>
        <h5> Insert Chart here</h5>

        <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
        />
    </div> );
}
 
export default genreCharts;