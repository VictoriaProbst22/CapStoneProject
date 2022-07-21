import React from "react";
import axios from 'axios'
import useCustomForm from "../../hooks/useCustomForm"
import useAuth from "../../hooks/useAuth"
import DisplayRecommendedList from "./DisplayRecommendedList";
import { Link } from "react-router-dom";



const RecommendedList = () => {
    let initialValues ={
        user: "",
        text: "",
        title:"",
        authors: "",
    };

    const [user, token] = useAuth()
    
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues,  postAnotherBook)

    async function postAnotherBook(){

            try {
                let response = await axios.post("http://127.0.0.1:8000/recommendedList/", formData, {
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
    <div>
        <h1>Recommended Books Page</h1>
        <Link to="/addBook"> To Read List</Link>
        <div></div>
        <Link to="/WishList"> To WishList</Link>
        <div></div>
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
        <button>Add Recommend List!</button>
        </form>
        <DisplayRecommendedList/>
        </div>
     
    </div> );
}
 
export default RecommendedList;

