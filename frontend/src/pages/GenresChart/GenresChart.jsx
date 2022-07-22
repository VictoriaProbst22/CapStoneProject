import React from "react";
import { Chart } from "react-google-charts"

export const options = {
  title: "My Frequent Genres: ",
  backgroundColor: 'transparent',
  
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
       
        
        let genresOfBooks = 0;
        

        for (let i = 0; i < bookListProps.length; i++) {
          if (bookListProps[i].genres === genre) {
            genresOfBooks ++ 
          }
          
        }
        
        return [genre, genresOfBooks]
      });
      console.log("Genre Arrays: ", genreArrays)
  
      
      function displayGenres(){
        const data = [
          ["Genres", "Frequency"],
          ...genreArrays
         ]
  
         console.log("Data: ", data);
        return data;

      }
      
    return ( <div >
         <Chart 
      chartType="PieChart"
      data={displayGenres()}
      options={options}
      width={"100%"}
      height={"300px"}
    
    />
       
    </div> );
}
 
export default genreCharts;