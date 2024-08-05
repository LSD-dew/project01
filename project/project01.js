document.addEventListener("DOMContentLoaded", function() {
    const dates = document.querySelector('.dates');
    const days = document.querySelector('.days');
    const yearMonth = document.querySelector('.year-month');

    let date = new Date(2024, 6); // July 2024

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    let allDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let allMonths = ["January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"];

    yearMonth.innerHTML = `${allMonths[month]}, ${year}`;

    for (let i = 0; i < 7; i++) {
        days.innerHTML += `<span class="col">${allDays[i]}</span>`;
    }

    let startFrom = new Date(year, month, 1).getDay();

    for (let i = 0; i < startFrom; i++) {
        dates.innerHTML += '<span class="col"></span>';
    }

    for (let i = 1; i <= daysInMonth; i++) {
        dates.innerHTML += `<span class="col ${i === day ? 'today' : ''}">${i}</span>`;
    }
});
