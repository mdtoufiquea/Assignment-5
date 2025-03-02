
const today = new Date();
const newDateToday = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
const formatDate = today.toLocaleDateString("en-US", newDateToday);
document.getElementById("Date").innerText = formatDate;
