const middle = document.getElementById('projectDivMiddle');
const projects = document.getElementById('projects');
x = 0;

projects.addEventListener('click', () => {
    console.log('yep');
    if (x == 0) {
        middle.style.display = "block";
        x++;
    } else if (x == 1) {
        middle.style.display = "none";
        x--;
    }
    
})