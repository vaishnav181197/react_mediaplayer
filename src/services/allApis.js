import { BASE_URL } from "./baseUrl";
import commonRequest from "./commonRequest";

//add video
export const addvideos=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/videos`,body)
}
//get videos
export const getvideos=async()=>{
    return await commonRequest("GET",`${BASE_URL}/videos`,"")
}
//delete video
export const delvideos=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/videos/${id}`,{})
}
//add categoey
export const addcategory=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/categories`,body)
}

//list all category

export const getcategories=async()=>{
    return await commonRequest("GET",`${BASE_URL}/categories`,'')
}

//delete category
export const delcategory=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/categories/${id}`,{})
}

//addhistory

export const addhistory=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/watchhistory`,body)
}

//viewhistory

export const viewhistory=async()=>{
    return await commonRequest("GET",`${BASE_URL}/watchhistory`,'')
}

//specificVideo Retrieval
export const getSpecififcVideos=async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/videos/${id}`,"")
}

//addvideo to category/update category
export const updatecategory=async(id,body)=>{
    return await commonRequest("PUT",`${BASE_URL}/categories/${id}`,body)
}