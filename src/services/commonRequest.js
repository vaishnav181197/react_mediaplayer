import axios from "axios";

const commonRequest=async (method,url,body)=>{
    let request={
        method,
        url,
        data:body,
        header:{
            'Content-type':"application/json"
        }
    }
  return await axios(request).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}

export default commonRequest