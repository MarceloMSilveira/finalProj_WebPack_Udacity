
//.then(document.getElementById('results').innerHTML = res.APIResp)

function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    fetch('http://localhost:8051/dataPost',{
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
       // Body data type must match "Content-Type" header        
        body: JSON.stringify({
            userResp:formText}), 
    })
    .then(res => res.json())
    .then(data => document.getElementById('results').innerHTML = data.APIresponse)
    .catch(error=> console.log("error", error))
}

export { handleSubmit }
