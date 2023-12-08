import axios from "axios";
import { action_movie, comedy_movie, popular_movie, main_api } from "../MAIN_API";

export const getVideos = async () => {
  return await axios.get("../videoJson/videos.json")
  .then((resp) => {
    return resp.data;
  });
};

export const getPopular = async () => {
  return await axios.get(popular_movie)
  .then((resp) => {
    return resp.data;
  });
};

export const getComedies = async () =>{
  return await axios.get(comedy_movie)
  .then((resp)=>{
    return resp.data;
  })
}

export const getAction = async () => {
  return await axios.get(action_movie)
  .then((resp) =>{
    return resp.data;
  })
}

export const getTeasers = async () =>{
  return await axios.get("../videoJson/teasers.json")
  .then((resp) =>{
    return resp.data;
  })
}

export const getList = async () => {
  return await axios.get(main_api)
  .then((resp)=>{
    return resp.data;
  })
}
