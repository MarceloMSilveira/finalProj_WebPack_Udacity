
function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:8051/dataPost'
    let user_URL = document.getElementById('user_URL').value
    
    // check what text was put into the form field
    if (checkURL(user_URL)) {
        Client.postData(url,{userResp:user_URL})
        .then ( () =>  Client.upDateUI() )
    } else {
        displayResults(null);
    }    
}

const checkURL = (text) => {
    const regexp = /^(http|https):\/\/[^ "]+$/;
    return regexp.test(text);
};

const displayResults = (data) => {
    if (data) {
      results.innerHTML = `
      <div id="polarity">Polarity: ${describePolarityScore(data.score_tag)}</div>
      <div id="agreement">Agreement: ${data.agreement}</div>
      <div id="subjectivity">Subjectivity: ${data.subjectivity}</div>
      <div id="confidence">Confidence: ${data.confidence}</div>
      <div id="irony">Irony: ${data.irony}</div>
      `;
    } else {
        document.getElementById('results').innerHTML = `I see here that the URL entered is not valid. Please try again..`
    }
};
  
const describePolarityScore = (score) => {
    let polarity = '';
    switch (score) {
      case 'P+':
        polarity = 'Strong Positive';
        break;
      case 'P':
        polarity = 'Positive';
        break;
      case 'NEU':
        polarity = 'Neutral';
        break;
      case 'N':
        polarity = 'Negative';
        break;
      case 'N+':
        polarity = 'Strong Negative';
        break;
      case 'NONE':
        polarity = 'None';
        break;
    }
  
    return polarity;
};

export { handleSubmit }
