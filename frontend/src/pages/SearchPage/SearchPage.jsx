import React from "react";
import { useState } from "react";



const SearchPage = (props) => {
    console.log(props.searchResults);
    const[isShown, setIsShown] = useState(false);
    
    const handleClick = event => {
        setIsShown(current => !current);
    };

    return (
        <><div>
            <h1>
                <p>Results</p>
            </h1>
        </div><div>
            {props.searchResults.map((item, index)=>{
                return(
                    <div>
                    <ul>{index + 1}</ul>
                    <ul>Title: {item.volumeInfo.title}</ul>
                    <ul> Author(s):{item.volumeInfo.authors}</ul>
                    <button onClick={handleClick}>See More</button>
                    {isShown &&(
                        <ul>Description: {item.volumeInfo.description}</ul>
                       )}
                       {isShown &&(
                        <ul>Genre: {item.volumeInfo.categories}</ul>
                       )}
                    <button type="submit"> Add to Read List</button>
                    </div>
  
                );
                
         
            })}
        
            </div></>
       
    );

}
export default SearchPage;
