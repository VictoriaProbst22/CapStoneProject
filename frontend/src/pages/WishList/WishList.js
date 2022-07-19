import React from "react";
import axios from 'axios'
import useCustomForm from "../../hooks/useCustomForm"
import useAuth from "../../hooks/useAuth"
import DisplayWishList from "./DisplayWishList";




const WishList = () => {
    let initialValues ={
        user: "",
        text: "",
        title:"",
        authors: "",
    };

    const [user, token] = useAuth()
    
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues,  postOtherBook)

    async function postOtherBook(){

            try {
                let response = await axios.post("http://127.0.0.1:8000/wishList/", formData, {
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
        <button> Add Book to Wish List!</button>
        </form>
        <DisplayWishList/>
        </div>
     
    </div> );
}
 
export default WishList;












    
    
   


    