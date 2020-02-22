import axios from 'axios';
/*
const COGNITO = {
  userPoolId: 'us-east-1_6mffuL8B9',
  userPoolClientId: '1bde4o8219a7s66vkp7k01pdb',
  region: 'us-east-1'
}*/
const BASE_URL = 'https://7ty6mx33v4.execute-api-us-east-1.amazonaws.com/ApiCrud'
const OPTIONS = {
  headers:{
    Accept:"*/*",
    Authorization:"eyJraWQiOiJLTzRVMWZs",
    "content-type": "application/json; charset=UTF-8"
  },
  requestContext: {
    authorizer:{
      claims:{
        "cognito:username":"the_username"
      }
    }
  }
}
const Methods = {
  post: async(params)=>{
    const response = axios.post(BASE_URL+'/',params,OPTIONS)
    return response;
  },
  get: async()=>{
    const response = await axios.get(BASE_URL+'/',OPTIONS)
    return response;
  }
}
export default Methods;