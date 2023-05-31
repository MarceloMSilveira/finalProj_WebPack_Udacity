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

export {upDateUI}