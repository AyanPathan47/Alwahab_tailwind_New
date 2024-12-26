const Apiurl = import.meta.env.VITE_API_URL;
const Apikey = import.meta.env.VITE_API_TOKEN;

console.log("areree ", Apiurl);


const fetchApi = async () => {
    
    
     const response = await fetch(`${Apiurl}/category`,{
        headers:{
            Authorization: `Bearer ${Apikey}`,
          'Content-Type': 'application/json',
        }
     });

     const data = await response.json()
     console.log(data)
     return data;

}

fetchApi();


