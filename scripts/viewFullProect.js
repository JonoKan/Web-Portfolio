const projectDets = {
    project1: {
        name: "Web Portfolio",
        class: "project-1",
        image: "https://images.unsplash.com/photo-1504892612018-159ffa1d147f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        lang: ["HTML", "CSS", "JavaScript"],
        text: "A responsive web portfolio I made after learning HTML, CSS and JavaScript to test my skills and to be productive during the holidays. Going through and coding the website was extremely fun and was an eye-opener to the numerous online resources that were available to help my achieve my design. The initial layout was designed on Figma with the help of Francis Lee."
    },
    project2: {
        name: "Hangman",
        class: "project-2",
        image: "https://images.unsplash.com/photo-1513152525356-287350f0fcd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        lang: ["Python"],
        text: "I made a playable version of Hangman using OOP. The game starts by randomly selecting a word from a user specified text file with a specified minimum and maximum word length, the game then runs as Hangman is expected to run. This was the first project I made using Python while learning it during summer school."
    },
    project3: {
        name: "Quacker",
        class: "project-3",
        image: "https://images.unsplash.com/photo-1501619757722-90657a99803b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        lang: ["JavaScript", "Chrome API"],
        text: "Ever wanted to be unproductive? This Chrome extension was made during a hackathon with a group of 6 other friends. The extension changes the default cursor into a duck we designed. The initial click on a website deemed productive changes the duck into an angry duck which will grow with each click until the duck covers the screen. On unproductive sites the cursor will change to a happy duck and will grow smaller until the default size. Making this extension was extremely fun and beneficial as it helped me to begin understanding JavaScript and APIs."
    }
}
const renderProject = () => {
    const projectClass = document.querySelector('.all-projects');
    Object.entries(projectDets).forEach(([key, value]) => {
        const button = document.createElement('button');
        const div = document.createElement('div');
        div.className = value.class;
        button.appendChild(div);
        const h3 = document.createElement('h3');
        h3.innerHTML = value.name;
        div.appendChild(h3);
        projectClass.appendChild(button);
        button.onclick = function () {
            showMore(key);
        }
    });
}

const showMore = (project) => {
    const prjImg = document.getElementById('project-image');
    const prjLang = document.getElementById('project-languages');
    const prjDesc = document.getElementById('project-description');
    prjImg.src = projectDets[project].image;
    prjLang.innerHTML = "";
    projectDets[project].lang.forEach(element => {
        const node = document.createElement('li');
        node.appendChild(document.createTextNode(element));
        prjLang.appendChild(node);
    });
    prjDesc.innerHTML = projectDets[project].text;
};

renderProject();