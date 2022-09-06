const projectsMid = document.getElementById('projectDivMiddle');
const projects = document.getElementById('projects');
x = 0;

const infoMid = document.getElementById('infoDivMiddle');
const info = document.getElementById('info');
y = 0;

const contactMid = document.getElementById('contactDivMid');
const contact = document.getElementById('contact');
z = 0;

projects.addEventListener('click', () => {
    if (x == 0) {
        infoMid.style.display = "none";
        y = 0;

        contactMid.style.display = "none";
        z = 0;

        projectsMid.style.display = "block";
        projectsMid.style.backgroundColor = "rgba(var(--frontColor), 0.2)";
        x++;
    } else if (x == 1) {
        projectsMid.style.display = "none";
        x--;
    }
});

info.addEventListener('click', () => {
    if (y == 0) {
        projectsMid.style.display = "none";
        x = 0;

        contactMid.style.display = "none";
        z = 0;

        infoMid.style.display = "block";
        infoMid.style.backgroundColor = "rgba(var(--frontColor), 0.2)";
        y++;
    } else if (y == 1) {
        infoMid.style.display = "none";
        y--;
    }
});

contact.addEventListener('click', () => {
    if (z ==0) {
        projectsMid.style.display = "none";
        x = 0;

        infoMid.style.display = "none";
        y = 0;

        contactMid.style.display = "block";
        contactMid.style.backgroundColor = "rgba(var(--frontColor), 0.2)";
        z++;
    } else if (z == 1) {
        contactMid.style.display = "none";
        z--;
    }
});

