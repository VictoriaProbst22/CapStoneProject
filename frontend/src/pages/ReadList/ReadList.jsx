import React from "react";

import axios from 'axios'
import useCustomForm from "../../hooks/useCustomForm"
import useAuth from "../../hooks/useAuth"
import DisplayReadList from "./DisplayReadList";



let initialValues ={
    user: "",
    text: "",
    title:"",
    authors: "",
    genres: "",
};


const ReadList = () => {
    
    const [user, token] = useAuth()
    
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues,  postNewBook)
   


    async function postNewBook(){
    
        try {
            let response = await axios.post("http://127.0.0.1:8000/readers/", formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }) 
            console.log(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }



    return ( <div>
        
        <div className="container">
        <form className="form" onSubmit={handleSubmit}> 
        <label>
            Title:{" "}
            <input 
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange} />
        </label>
        <label> Author: {" "}
        <input 
        type="text"
        name="authors"
        value={formData.authors}
        onChange={handleInputChange} />
        </label>
        <label> Genre: {" "}
        <input 
        type="text"
        name="text"
        value={formData.genres}
        onChange={handleInputChange} />
        </label>
        <label>
            Review: {" "}
            <input
            type="text"
            name="genres"
            value={formData.text}
            onChange={handleInputChange} />
        </label>
        <button> Add Book to Read List!</button>
        </form>
        </div>
        
        <DisplayReadList />
        
    </div> 
    
    );
}
 
export default ReadList;

