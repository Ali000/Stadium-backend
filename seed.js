require("./config/database")
require("dotenv").config();
const Team = require("./models/Team");
const Stadium = require("./models/Stadium");
const axios = require('axios');

let teamsArray = [];
let playerArray = [];
let stadiumArray = [];

const getTeams = async () => {
  const options = {
    method: 'GET',
    url: 'https://sportscore1.p.rapidapi.com/sports/1/teams',
    params: {page: '1'},
    headers: {
      'X-RapidAPI-Key': '88f3eb3bc6mshba57060941c3f81p1d3c70jsn360ca0898ab0',
      'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    }
  };

  try {
    
    const response = await axios.request(options);
    for(let i = 0; i < 20; i++) {
      teamsArray.push(
        {
          name: response.data.data[i].name_full,
          sport: "Soccer"
        }
      );
    }
    await Team.create(teamsArray);
  } catch (error) {
    console.error(error);
  }
}

// getTeams();

const getStadiums = async () => {

  const options = {
    method: 'GET',
    url: 'https://sportscore1.p.rapidapi.com/venues',
    params: {page: '1'},
    headers: {
      'X-RapidAPI-Key': '88f3eb3bc6mshba57060941c3f81p1d3c70jsn360ca0898ab0',
      'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data.data);

    for(let i = 0; i < 20; i++) {
      stadiumArray.push(
        {
          name: response.data.data[i].stadium.en,
          seats: response.data.data[i].stadium_capacity,
          location: response.data.data[i].city.en,
          sport: "Soccer"
        }
      )
    }
    await Stadium.create(stadiumArray);
  } catch (error) {
    console.error(error);
  }
}

getStadiums();