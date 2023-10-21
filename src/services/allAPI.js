import { serverURL } from "./serverURL";
import { commonApi } from "./commonApi";


export  const uploadVideo = async (reqBody)=>{
    // make post http request to http://localhost:4000/videos to add videos in json server and return response to add componenet 
    return commonApi("POST",`${serverURL}/videos`,reqBody)
}

export  const getAllVideos = async ()=>{
    // make GET http request to http://localhost:4000/videos to all videos in json server and return response to view componenet 
    return commonApi("GET",`${serverURL}/videos`,"")
}

export const getAVideo = async (id)=>{
    // make GET http request to http://localhost:4000/videos to get a videos from json server and return response to VideoCard componenet 
   return commonApi("GET",`${serverURL}/videos/${id}`,"")
}


export const deleteAVideo = async (id) => {
    // Make a DELETE request to delete a video in the json server and return a response to the videoCard component
    return commonApi("DELETE", `${serverURL}/videos/${id}`, {});
}


export const addToHistory = async (videoDetail) =>{
    // make post http request to http://localhost:4000/history to add video history in json server and return response to videoCard componenet 

    return await commonApi("POST", `${serverURL}/history`,videoDetail)
}


export const getAllHistory = async () =>{
 // make get http request to http://localhost:4000/videos to get videos history in json server and return response to watchHistory  componenet 
return await commonApi("GET",`${serverURL}/history`,"")
}


export const addCategory  = async (reqBody)=>{
 // make post http request to http://localhost:4000/history to add  categories  in json server and return response to category componenet
    return await commonApi("POST",`${serverURL}/categories`,reqBody)
}

export const getAllcategory = async () =>{
  // make get http request to http://localhost:4000/videos to get category from json server and return response to category  componenet 
    return  await commonApi("GET",`${serverURL}/categories`,"")
} 


export const deletecategory = async (id) =>{
            // Make a DELETE request to delete a categories from the json server and return a response to the category component
        return await commonApi("DELETE",`${serverURL}/categories/${id}`,{})
}


export const updateCategory = async (id,body)=>{
    return await commonApi("PUT",`${serverURL}/categories/${id}`,body)
}


export const deleteHistory = async (id) =>{
    // to delete watch history
    return await commonApi("DELETE",`${serverURL}/history/${id}`,{})
}





