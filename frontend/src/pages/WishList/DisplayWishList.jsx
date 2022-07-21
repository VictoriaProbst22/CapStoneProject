import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
const DisplayWishList = () => {

    const [user, token] = useAuth()
    const [otherBookList, setOtherBookList] = useState([])




    useEffect(() => {
        const getList = async () => {
          try {
            let response = await axios.get("http://127.0.0.1:8000/wishList/", {
              headers: {
                Authorization: "Bearer " + token,
              },
            });
            setOtherBookList(response.data);
          } catch (error) {
            console.log(error.response.data);
          }
        };
        getList();
      }, [token]);

      

      const deleteBook= async (el)=>{
        console.log("el id: ", el.title)
         try {
            let response = await axios.delete(`http://127.0.0.1:8000/wishList/${el.id}/`, {
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
        <h3> This is My Wish List:</h3>
        {otherBookList.map((el, index) => {
            return(
                <div>
                    <ul>{index + 1}</ul>
                    <ul>Title: {el.title}</ul>
                    <ul>Author(s): {el.authors}</ul>
                    <button onClick={()=> deleteBook(el)}>Delete</button>
                </div>
            )
        })}
    </div> );
}
 
export default DisplayWishList;