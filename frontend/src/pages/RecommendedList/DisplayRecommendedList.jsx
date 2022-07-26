import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";

const DisplayRecommendedList = () => {

    const [user, token] = useAuth()
    const [suggestBookList, setSuggestBookList] = useState([])




    useEffect(() => {
        const getList = async () => {
          try {
            let response = await axios.get("http://127.0.0.1:8000/recommendedList/", {
              headers: {
                Authorization: "Bearer " + token,
              },
            });
            setSuggestBookList(response.data);
          } catch (error) {
            console.log(error.response.data);
          }
        };
        getList();
      }, [token]);

      

      const deleteBook= async (el)=>{
        console.log("el id: ", el.title)
         try {
            let response = await axios.delete(`http://127.0.0.1:8000/recommendedList/${el.id}/`, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }) 
            
            console.log(response.data)
        } catch (error) {
            console.log(error.message)
        }

    }
    return ( <div className="frontPage">
        <h3 className="frontPage"> This is My Recommended List:</h3>
        {suggestBookList.map((el, index) => {
            return(
                <div>
                    <ul>{index + 1}</ul>
                    <ul>Title: {el.title}</ul>
                    <ul>Author(s): {el.authors}</ul>
                    <button className="deleteButton" onClick={()=> deleteBook(el)}>Delete</button>
                    <p>
                      <hr></hr>
                    </p>
                </div>
            )
        })}
    </div> );
}
 
export default DisplayRecommendedList;