
import axios from "axios"


const getAllCommits = async(state)=>{

  const request = await axios.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=1996c6f8bed5d198afa59705491619cf&hash=2cb3d41f48eda3326873c334d2e6a6bb');
  // console.log(request.data.data.results);
  state(request.data.data.results);
}

const getOnlyComic = async(state, idComic)=>{
  const request = await axios.get(`https://gateway.marvel.com:443/v1/public/comics/${idComic}?ts=1&apikey=1996c6f8bed5d198afa59705491619cf&hash=2cb3d41f48eda3326873c334d2e6a6bb`);
  // console.log(request.data.data.results[0]);
  state(request.data.data.results[0]);
}



export{
  getAllCommits,
  getOnlyComic
}
