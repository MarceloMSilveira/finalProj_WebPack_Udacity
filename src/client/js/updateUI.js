async function upDateUI() {
    const response = await fetch ('http://localhost:8051/all');
    try {
        const newData = await response.json()
        console.log(`inside upDateUI: ${newData.agreement}`)
        document.getElementById('results').innerHTML = `Text extract:: ${newData.sentence_list[0].text}`
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${newData.subjectivity}`
        document.getElementById('polarity').innerHTML = `Polarity: ${polarityDecode(newData.score_tag)}`
        return newData
    } catch (error){
        console.log("Error: ", error);
    }
}

const polarityDecode = (dataScore) => {
    let resp = '';
    switch (dataScore) {
      case 'P+':
        resp = 'Positive';
        break;
      case 'P':
        resp = 'Positive';
        break;
      case 'NEU':
        resp = 'Neutral';
        break;
      case 'N':
        resp = 'Negative';
        break;
      case 'N+':
        resp = 'Negative';
        break;
      case 'NONE':
        resp = 'None';
        break;
    }
  
    return resp;
};

export {upDateUI}