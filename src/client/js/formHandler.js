
function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const url = 'http://localhost:8051/dataPost'
    Client.postData(url,{userResp:formText})
    .then ( () =>  Client.upDateUI() )
}

export { handleSubmit }
