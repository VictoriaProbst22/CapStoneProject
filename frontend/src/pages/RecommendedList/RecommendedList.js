
import axios from 'axios'
import useCustomForm from "../../hooks/useCustomForm"
import useAuth from "../../hooks/useAuth"
import DisplayRecommendedList from "./DisplayRecommendedList";




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
    <div className="otherPages">
        <h1 className="fontStyle">Recommended List Page</h1>
        <h2 className="frontPage"> Add Another Book Here: </h2>
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
        
        <button>Add To List!</button>
        </form>
        <DisplayRecommendedList/>
        </div>
     
    </div> );
}
 
export default RecommendedList;

