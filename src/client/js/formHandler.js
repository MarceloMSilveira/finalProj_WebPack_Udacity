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
      console.log(newData.userResp);
      return newData;
    }catch(error) {
        console.log("error", error);
    }
};


function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let res = postData('/postData',{'userResp':formText})
    .then(document.getElementById('results').innerHTML = res.userResp)
    .catch(error=> console.log("error", error))
}

export { handleSubmit }
