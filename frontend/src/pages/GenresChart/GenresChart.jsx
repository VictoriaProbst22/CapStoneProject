import React from "react";
import { Chart } from "react-google-charts"

 
  export const options = {
    title: "Genres Most Frequently and Less Frequently Read by User",
    width: 600,
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };





const genreCharts = ({bookListProps}) => {

  function generateDataForChart(){
    console.log("Book List Props: ", bookListProps)

      //Filter Books by Genre
      //let filteredGenres = bookListProps.filter(book => book. )

    const data = [
        [
          "Genre",
          "# of Books",
          { role: "style" },
          {
            sourceColumn: 0,
            role: "annotation",
            type: "string",
            calc: "stringify",
          },
        ],
        ["Fiction", 8.94, "silver", null],
        ["Silver", 10.49, "silver", null],
        ["Gold", 19.3, "silver", null],
        ["Platinum", 21.45, "silver", null],
      ];
      return data;
  

    }
  
    return ( <div>
        <h5> Insert Chart here</h5>

        <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={generateDataForChart()}
      options={options}
        />
    </div> );
}
 
export default genreCharts;