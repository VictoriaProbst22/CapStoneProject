import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import CustomButton from "../CustomButton/CustomButton";
import GenresChart from "../GenresChart/GenresChart"


const DisplayReadList = () => {

    const [user, token] = useAuth()
    const [bookList, setBookList] = useState([])

    


    useEffect(() => {
        const getReaderList = async () => {
          try {
            let response = await axios.get("http://127.0.0.1:8000/readers/", {
              headers: {
                Authorization: "Bearer " + token,
              },
            });
            setBookList(response.data);
          } catch (error) {
            console.log(error.response.data);
          }
        };
        getReaderList();
      }, [token]);
      



      const deleteBook= async (el)=>{
         try {
            let response = await axios.delete(`http://127.0.0.1:8000/readers/${el.id}/`, {
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
      
        <h3 className="otherPages"> Read List:</h3>
        {bookList.map((el, index) => {
            return(
                <div >
                    <ul>{index + 1}</ul>
                    <ul>Title: {el.title}</ul>
                    <ul>Author(s): {el.authors}</ul>
                    <ul>Review: {el.text}</ul>
                    <CustomButton message = "Like" />
                    <CustomButton message = "Dislike"/> 
                    <button onClick={()=> deleteBook(el)}>Delete</button>
          
                </div>
               
            )
        })} 
        <GenresChart bookListProps={bookList}/>
    </div> );
}
 
export default DisplayReadList;

