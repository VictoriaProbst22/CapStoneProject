import React from "react";


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
                    <ul>
                    <li> {item.volumeInfo.title}</li>
                    </ul>
  
                );
                
         
            })}
        
            </div></>
       
    );

}
export default SearchPage;
