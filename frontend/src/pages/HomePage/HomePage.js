import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "../SearchPage/SearchBar";
import SearchPage from "../SearchPage/SearchPage";




const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const[searchResults, setSearchResults] = useState([]);

  


  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);


  const runSearch = async (userInput) => {
    try {
      let response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${userInput}`);
      console.log(response.data)
      setSearchResults(response.data.items);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div  className="frontPage" >
      <h1>Home Page for {user.username}!</h1>
      <SearchBar searchBookProp={runSearch} />
      <SearchPage searchResults={searchResults} />
      
      
    </div>
  );
};

export default HomePage;
