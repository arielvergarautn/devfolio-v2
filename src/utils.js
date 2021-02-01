export const sendMessageToSlack = (message) => {
    try {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({ "text": message }),
            mode: 'no-cors'
        };
        fetch(process.env.REACT_APP_SLACK_URL, requestOptions);
    } catch (e) {
        console.log(e)
    }
}