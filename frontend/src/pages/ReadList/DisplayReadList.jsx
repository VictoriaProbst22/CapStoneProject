import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
const DisplayReadList = () => {

    const [user, token] = useAuth()
    const [bookList, setBookList] = useState([])

 const getReaderList = async () =>{
    try {
        let response = await axios.get("http://127.0.0.1:8000/readers/",{
            headers: {
                Authorization: "Bearer " + token,
            }
        });
        console.log(response.data)
        setBookList(response.data.items);
    } catch (error) {
        console.log(error.response.data)
    }
 }
    getReaderList();
    return ( <div>
        <h3> Read List:</h3>
    </div> );
}
 
export default DisplayReadList;