export const sendMessageToSlack = (message) => {
    try {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({ "text": message }),
        };
        fetch(process.env.REACT_APP_SLACK_URL, requestOptions);
    } catch (e) {
        console.log(e)
    }
}