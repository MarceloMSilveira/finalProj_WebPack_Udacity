
function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:8051/dataPost'
    let user_URL = document.getElementById('user_URL').value
    
    // check what text was put into the form field
    if (checkURL(user_URL)) {
        Client.postData(url,{userResp:user_URL})
        .then ( () =>  Client.upDateUI() )
    } else {
        document.getElementById('results').innerHTML = `I see here that the URL entered is not valid. Please try again.`;
        document.getElementById('subjectivity').innerHTML = ``
        document.getElementById('polarity').innerHTML = ``
    }    
}

const checkURL = (text) => {
    const regexp = /^(http|https):\/\/[^ "]+$/;
    return regexp.test(text);
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
