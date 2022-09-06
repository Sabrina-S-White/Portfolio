const projectsMid = document.getElementById('projectDivMiddle');
const projects = document.getElementById('projects');
x = 0;

const infoMid = document.getElementById('infoDivMiddle');
const info = document.getElementById('info');
y = 0;

projects.addEventListener('click', () => {
    if (x == 0) {
        projectsMid.style.display = "block";
        projectsMid.style.backgroundColor = "rgba(var(--frontColor), 0.2)"
        x++;
    } else if (x == 1) {
        projectsMid.style.display = "none";
        x--;
    }
});

info.addEventListener('click', () => {
    if (y == 0) {
        infoMid.style.display = "block";
        infoMid.style.backgroundColor = "rgba(var(--frontColor), 0.2)"
        y++;
    } else if (y == 1) {
        infoMid.style.display = "none";
        y--;
    }
})

