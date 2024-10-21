const addUserBtn = document.getElementById('addUserBtn');
const doubleMoneyBtn = document.getElementById('doubleMoneyBtn');
const showMillionaireBtn = document.getElementById('showMillionaireBtn');
const sortByRichestBtn = document.getElementById('sortByRichestBtn');
const calculateTotalWealthBtn = document.getElementById('calculateTotalWealthBtn');
const usersContainer = document.getElementById('users');
const totalWealthEl = document.getElementById('totalWealth');

let users = [];

// random user and add money
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };

    addUser(newUser);
}

// array
function addUser(user) {
    users.push(user);
    updateDOM();
}

// Double money
function doubleMoney() {
    users = users.map(user => {
        return { ...user, money: user.money * 2 };
    });
    updateDOM();
}

// Show millionaires
function showMillionaire() {
    users = users.filter(user => user.money > 1000000);
    updateDOM();
}

// Sort by richest
function sortByRichest() {
    users.sort((a, b) => b.money - a.money);
    updateDOM();
}

// Calculate total wealth
function calculateTotalWealth() {
    const totalWealth = users.reduce((acc, user) => acc + user.money, 0);
    totalWealthEl.innerHTML = `<h3>Total Wealth: ${formatMoney(totalWealth)}</h3>`;
}

// Update DOM
function updateDOM(providedData = users) {
    usersContainer.innerHTML = '';
    providedData.forEach(user => {
        const userEl = document.createElement('div');
        userEl.classList.add('user');
        userEl.innerHTML = `<strong>${user.name}</strong> ${formatMoney(user.money)}`;
        usersContainer.appendChild(userEl);
    });
}

// Format number as money
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleMoneyBtn.addEventListener('click', doubleMoney);
showMillionaireBtn.addEventListener('click', showMillionaire);
sortByRichestBtn.addEventListener('click', sortByRichest);
calculateTotalWealthBtn.addEventListener('click', calculateTotalWealth);

// Initial users
getRandomUser();
getRandomUser();
getRandomUser();
