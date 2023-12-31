//import fetch from 'node-fetch';

async function postData ( url = '', data = {}) {
    console.log(data);
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
   // Body data type must match "Content-Type" header        
    body: JSON.stringify(data) 
  })
  
    try {
      const newData = await response.json();
      console.log(newData.agreement);
      return newData;
    }catch(error) {
      console.log("error", error);
    }
  }

  export {postData}