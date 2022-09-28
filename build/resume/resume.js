// Buttons
const workBtn = document.getElementById('workBtn');
const publicationsBtn = document.getElementById('publicationsBtn');
const boardBtn = document.getElementById('boardBtn');
const educationBtn = document.getElementById('educationBtn');
const contactBtn = document.getElementById('contactBtn');
const removeBtn = document.getElementById('removeBtn');
const closeButton = document.querySelectorAll('.closeBtn')

// Content Divs
const workList = document.getElementById('workList');
const workExperience = document.getElementById('workExperience');
const publications = document.getElementById('publications');
const board = document.getElementById('board');
const education = document.getElementById('education');
const contactMe = document.getElementById('contactMe');
const head = document.getElementById('head');

// Functions 
function resetDisplays() {
    document.getElementById("workList").className = "workList hide";
    // workExperience.style.display = 'none';
    document.getElementById("publications").className = "publications hide";
    document.getElementById("board").className = "board hide";
    document.getElementById("education").className = "education hide";
    document.getElementById("contactMe").className = "contactMe hide";
};

function displayWorkList() {
    workList.style.display = 'flex';
};

function displayWorkExperience() {
    workExperience.style.display = 'flex';
};

function displayPublications() {
    publications.style.display = 'flex';
};

function displayBoard() {
    board.style.display = 'flex';
};

function displayEducation() {
    education.style.display = 'flex';
};

function displayContactMe() {
    contactMe.style.display = 'flex';
};

function hideHead() {
    head.style.display = 'none';
}

function showHead() {
    head.style.display = 'flex';
}

// Event Listeners
workBtn.addEventListener('click', () => {
    if(document.getElementById("workList").className == "workList hide"){
        resetDisplays();
        hideHead();
        document.getElementById("workList").className = "workList show";
    } else {
        document.getElementById("workList").className = "workList hide";}
    });

publicationsBtn.addEventListener('click', () => {
    if(document.getElementById("publications").className == "publications hide"){
        resetDisplays();
        hideHead();
        document.getElementById("publications").className = "publications show";
    } else {
        document.getElementById("publications").className = "publications hide";}
    })

boardBtn.addEventListener('click', () => {
    if(document.getElementById("board").className == "board hide"){
        resetDisplays();
        hideHead();
        document.getElementById("board").className = "board show";
    } else {
        document.getElementById("board").className = "board hide";}
})

educationBtn.addEventListener('click', () => {
    if(document.getElementById("education").className == "education hide"){
        resetDisplays();
        hideHead();
        document.getElementById("education").className = "education show";
    }else{
        document.getElementById("education").className = "education hide";}
})

contactBtn.addEventListener('click', () => {
    if(document.getElementById("contactMe").className == "contactMe hide"){
        resetDisplays();
        hideHead();
        document.getElementById("contactMe").className = "contactMe show";
    }else {
        document.getElementById("contactMe").className = "contactMe hide";}
})

// Close popup button

closeButton.forEach(button => {
    button.addEventListener('click', () => {
        resetDisplays();
        showHead();
    })
})