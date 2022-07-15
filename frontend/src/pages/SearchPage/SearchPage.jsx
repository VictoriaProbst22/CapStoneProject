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
                    <ul>{item.volumeInfo.authors}</ul>
                    <ul> {item.volumeInfo.description} </ul>
                    </div>
  
                );
                
         
            })}
        
            </div></>
       
    );

}
export default SearchPage;
