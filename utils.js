export default function getCurrentDateAndTime() {
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