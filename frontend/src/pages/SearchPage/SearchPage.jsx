import React from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";



const SearchPage = (props) => {
    console.log(props.searchResults);
    const[isShown, setIsShown] = useState(false);
    const [user, token] = useAuth()

    const handleClick = event => {
        setIsShown(current => !current);
    };

    const addBook= async (bookToAdd)=>{
        let newBook = {
            "text": "Yes",
            "title": bookToAdd.volumeInfo.title,
            "authors": bookToAdd.volumeInfo.authors.join(', '),
        }
        console.log(newBook)
         try {
            let response = await axios.post("http://127.0.0.1:8000/readers/", newBook, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }) 
            console.log(response.data)
        } catch (error) {
            console.log(error.message)
        }

    }
    return (
        <><div>
        </div><div>
            {props.searchResults.map((item, index)=>{
                return(
                    <div>
                    <ul>{index + 1}</ul>
                    <ul>Title: {item.volumeInfo.title}</ul>
                    <ul> Author(s):{item.volumeInfo.authors}</ul>
                   <ul> <button onClick={handleClick}>See More</button></ul>
                    {isShown &&(
                        <ul>Description: {item.volumeInfo.description}</ul>
                       )}
                       {isShown &&(
                        <ul>Genre: {item.volumeInfo.categories}</ul>
                       )}
                    <button onClick={()=> addBook(item)}> Add to Read List</button>
                    
                    </div>

                );
                
         
            })}
        
            </div></>
       
    );

}
export default SearchPage;

