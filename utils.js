function getCurrentDateAndTime() {
    const options = {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    };

    const currentDate = new Date();
    return currentDate.toLocaleString('en-IN', options);
}

function getClientIP(req) {
    return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
}

function getUserAgent(req) {
    const userAgent = req.get('User-Agent');
    const match = userAgent.match(/\((.*?)\)/); // Match the first set of parentheses and capture the content inside

    if (match && match[1]) {
        return match[1]; // Return the content inside the first set of parentheses
    } else {
        return "Unknown"; // Return a default value if no match is found
    }
}

module.exports = {
    getCurrentDateAndTime,
    getClientIP,
    getUserAgent,
};