import React from "react";
import { Link } from "react-router-dom";



const SearchPage = (props) => {
    console.log(props.searchResults);
    

    return (
        <><div>
            <h1>
                <p>Results</p>
            </h1>
        </div><div>
            {props.searchResults.map((item)=>{
                return(
                    <div>
                    <Link to={`book/${item.id}/`}>{item.volumeInfo.title}</Link> 
                    <ul> Author(s):{item.volumeInfo.authors}</ul>
                    <ul> Description: {item.volumeInfo.description} </ul>
                    </div>
  
                );
                
         
            })}
        
            </div></>
       
    );

}
export default SearchPage;
