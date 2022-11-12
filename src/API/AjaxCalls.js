import axios from "axios";

export async function AjaxGet(url){
    let res= await axios.get(url)
   return res.data
}