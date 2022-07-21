import React from "react";
import { Chart } from "react-google-charts"

export const options = {
  title: "My Frequent Genres: ",
};
 





const genreCharts = ({bookListProps}) => {

 
    console.log("Book List Props: ", bookListProps)

      //MAP Books by Genre
      let filteredGenres = bookListProps.map(book=>{
        return book.genres
      });
      console.log("Filtered Genres: ", filteredGenres)

      //Remove duplicates
      let distinctGenres = [...new Set(filteredGenres)]
      console.log("Distinct Genres: ", distinctGenres)
      




      let genreArrays = distinctGenres.map(genre=>{
        let allGenresOfBooks = bookListProps.filter(book=>book.genres=== genre);
        console.log("All Genres of Books: ", allGenresOfBooks)

        return [genre, allGenresOfBooks]
      });
      console.log("Genre Arrays: ", genreArrays)
    


      
      function displayGenres(){
        const data = [
          ["Genres", "# of Books"],
           ...genreArrays
         ];
         console.log("Data: ", data);
        return data;

      }
      
    return ( <div>
        <Chart
      chartType="PieChart"
      data={displayGenres()}
      options={options}
      width={"100%"}
      height={"600px"}
    />
       
    </div> );
}
 
export default genreCharts;