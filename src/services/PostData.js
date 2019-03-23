export function PostData(type,sponsorData){
let BaseUrl='https://localhost:8080/api/users';
return new Promise((resolve,reject)=>{
fetch(BaseUrl + type,{
    method:'POST',
    body:JSON.stringify(sponsorData)
})
.then((response)=>response.json(sponsorData))
.then((responseJson)=>{
    resolve(responseJson);
})
.catch((error)=>{
    reject(error);
});
});
}