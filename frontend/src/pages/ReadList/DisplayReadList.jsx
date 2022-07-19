import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import CustomButton from "../CustomButton/CustomButton";
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



    return ( <div>
        <h3> Read List:</h3>
        {bookList.map((el, index) => {
            return(
                <div>
                    <ul>{index + 1}</ul>
                    <ul>Title: {el.title}</ul>
                    <ul>Author(s): {el.authors}</ul>
                    <ul>Review: {el.text}</ul>
                    <CustomButton message = "Like" />
                    <CustomButton message = "Dislike"/>
                </div>
            )
        })}
    </div> );
}
 
export default DisplayReadList;