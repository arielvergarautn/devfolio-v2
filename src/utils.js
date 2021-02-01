export const sendMessageToSlack = (message) => {

    try {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({ "text": message }),
            mode: 'no-cors'
        };
        const url = process.env.REACT_APP_SLACK_URL.substring(0, process.env.REACT_APP_SLACK_URL.length - 1);
        fetch(url, requestOptions);
    } catch (e) {
        console.log(e)
    }
}