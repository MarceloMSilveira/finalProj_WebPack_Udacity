
//.then(document.getElementById('results').innerHTML = res.APIResp)

function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const url = 'http://localhost:8051/dataPost'
    Client.postData(url,{userResp:formText})
    .then ( () =>  upDateUI() )
}

async function upDateUI() {
    const response = await fetch ('http://localhost:8051/all');
    try {
        const newData = await response.json()
        console.log(`inside upDateUI: ${newData.agreement}`)
        document.getElementById('results').innerHTML = `Text: ${newData.sentence_list[0].text}`
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${newData.subjectivity}`
        return response
    } catch (error){
        console.log("Error: ", error);
    }
}

export { handleSubmit }


//.then(data => document.getElementById('results').innerHTML = data.APIresponse)