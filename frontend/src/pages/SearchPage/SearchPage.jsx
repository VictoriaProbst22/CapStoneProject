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
            "genres": bookToAdd.volumeInfo.categories[0],
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
    const addToList= async (bookToAdd)=>{
        let otherBook = {
            "text": "Yes",
            "title": bookToAdd.volumeInfo.title,
            "authors": bookToAdd.volumeInfo.authors.join(', '),
            
        }
        console.log(otherBook)
         try {
            let response = await axios.post("http://127.0.0.1:8000/wishList/", otherBook, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }) 
            console.log(response.data)
        } catch (error) {
            console.log(error.message)
        }



        
    }

    const addToNextList= async (bookToAdd)=>{
            let nextBook = {
                "text": "Yes",
                "title": bookToAdd.volumeInfo.title,
                "authors": bookToAdd.volumeInfo.authors.join(', '),
                
            }
            console.log(nextBook)
             try {
                let response = await axios.post("http://127.0.0.1:8000/recommendedList/", nextBook, {
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
        <><div className="frontPage">
            {props.searchResults.map((item, index)=>{
                return(
                    <div>
                    <ul>{index + 1}</ul>
                    <ul>Title: {item.volumeInfo.title}</ul>
                    <ul> Author(s):{item.volumeInfo.authors}</ul>
                   <ul> <button className="recommendButton" onClick={handleClick}>See More</button></ul>
                   <div>  {isShown &&(
                        <ul>Description: {item.volumeInfo.description}</ul>
                       )}
                       {isShown &&(
                        <ul>Genre: {item.volumeInfo.categories}</ul>
                       )}
                       </div>
                    <button className="recommendButton" onClick={()=> addBook(item)}> + Read List</button>
                    <div></div>
                    <button className="recommendButton" onClick={()=> addToList(item)}> + Wish List</button>
                    <div></div>
                    <button className="recommendButton" onClick={()=> addToNextList(item)}>+ Recommend List</button>
                    <p>
                        <hr></hr>
                    </p>
                    
                    </div>

                );
                
         
            })}
        
            </div></>
       
    );

}
export default SearchPage;

