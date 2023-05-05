
//.then(document.getElementById('results').innerHTML = res.APIResp)

function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const url = 'http://localhost:8051/dataPost'
    postData(url,{userResp:formText})
    .then ( function (data) {
        console.log(data)
        console.log(data.APIResp)
    })
    .then (function() {upDateUI()})
    
}

const postData = async ( url = '', data = {})=>{
    console.log(data);
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
   // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
  });
  
    try {
      const newData = await response.json();
      console.log(newData.APIResp);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
  };

const upDateUI = async () => {
    const response = await fetch ('http://localhost:8051/all');
    try {
        const newData = await response.json();
        document.getElementById('results').innerHTML = newData.APIResp;
    } catch (error){
        console.log("Error: ", error);
    }
}

export { handleSubmit }


//.then(data => document.getElementById('results').innerHTML = data.APIresponse)