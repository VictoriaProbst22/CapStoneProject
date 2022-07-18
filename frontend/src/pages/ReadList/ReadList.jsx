import React from "react";

import axios from 'axios'
import useCustomForm from "../../hooks/useCustomForm"
import useAuth from "../../hooks/useAuth"

let initialValues ={
    user: "",
    text: "",
    title:"",
    authors: "",
};


const ReadList = () => {
    const [user, token] = useAuth()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues,postNewBook)
   

    async function postNewBook(){
        try {
            let response = await axios.post("http://127.0.0.1:8000/readers/", formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            console.log(response)
        } catch (error) {
            console.log(error.message)
        }
    }



    return ( <div>
        <h2>Read List: </h2>
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
        <label> Review: {" "}
        <input 
        type="text"
        name="text"
        value={formData.text}
        onChange={handleInputChange} />
        </label>
        <button> Add Book to List!</button>
        </form>
        </div>
    </div> 
    
    );
}
 
export default ReadList;