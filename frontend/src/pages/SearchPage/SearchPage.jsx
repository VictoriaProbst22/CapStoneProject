import React from "react";




const SearchPage = (props) => {
    console.log(props.searchResults);
    

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
                    <button type="submit"> Add to Read List</button>
                    </div>
  
                );
                
         
            })}
        
            </div></>
       
    );

}
export default SearchPage;
