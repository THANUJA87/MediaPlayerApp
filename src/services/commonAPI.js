import axios from "axios"
const commonAPI = async (httpMethod,url,reqBody)=>{
    const regConfig ={
        method: httpMethod,
        url,
        data :reqBody
    }
    return await axios(regConfig).then(res =>{
        return res
    }). catch(err =>{
        return err
    })

}
export default commonAPI