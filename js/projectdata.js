const worksData = [
  {
    id: 1,
    title: 'Bunch Template',
    img: ['img/portfolio/bunch-1.png'],
    github: 'https://desorgui.github.io',
    live: 'https://desorgui.github.io',
    language: 'HTML, CSS, JS',
  },
  {
    id: 2,
    title: 'Wizzy Beauty template',
    img: ['img/portfolio/beauty-1.png', 'img/portfolio/beauty-2.png'],
    github: 'https://desorgui.github.io',
    live: 'https://desorgui.github.io',
    language: 'HTML, CSS, JS',
  },
  {
    id: 3,
    title: 'Wizzy Learn template',
    img: ['img/portfolio/learn-1.png', 'img/portfolio/learn-2.png'],
    github: 'https://desorgui.github.io',
    live: 'https://desorgui.github.io',
    language: 'HTML, CSS, JS',
  },
  {
    id: 4,
    title: 'Wizzy Edu template',
    img: ['img/portfolio/edu-1.png', 'img/portfolio/edu-2.png', 'img/portfolio/edu-3.png', 'img/portfolio/edu-4.png'],
    github: 'https://desorgui.github.io',
    live: 'https://desorgui.github.io',
    language: 'HTML, CSS, JS',
  },
  {
    id: 5,
    title: 'Event Finder react app',
    img: ['img/portfolio/event-finder-1.png'],
    github: 'https://desorgui.github.io',
    live: 'https://desorgui.github.io',
    language: 'HTML, CSS, JS',
  },
  {
    id: 6,
    title: 'Wizzy News template',
    img: ['img/portfolio/news-1.png', 'img/portfolio/news-2.png'],
    github: 'https://desorgui.github.io',
    live: 'https://desorgui.github.io',
    language: 'HTML, CSS, JS',
  },
  {
    id: 7,
    title: 'Bunch Business template',
    img: ['img/portfolio/bunch-1.png', 'img/portfolio/bunch-2.png', 'img/portfolio/bunch-3.png', 'img/portfolio/bunch-4.png'],
    github: 'https://desorgui.github.io',
    live: 'https://desorgui.github.io',
    language: 'HTML, CSS, JS',
  },
  {
    id: 8,
    title: 'Todo list react app',
    img: ['img/portfolio/todo-list.png'],
    github: 'https://desorgui.github.io',
    live: 'https://desorgui.github.io',
    language: 'HTML, CSS, JS',
  },
  {
    id: 9,
    title: 'Project 9',
    img: ['img/portfolio/todo-list.png'],
    github: 'https://desorgui.github.io',
    live: 'https://desorgui.github.io',
    language: 'HTML, CSS, JS',
  },
];

const worksContainer = document.querySelector('#grid-works');
const worksPopup = document.querySelector('#works-popup');


const displayWorks = (works = []) => {
  let displayWorks = works.map((work) => {
    return `
      <li>
        <figure>
            <img src="${work.img[0]}" alt="${work.title}" />
            <div><span>${work.title}</span></div>
        </figure>
      </li>
    `;}).join('');

  let displayPopup = works.map((work) => {
    return `
  <li>
  <figure>
    <!-- Project Details Starts -->
    <figcaption>
        <h3>${work.title}</h3>
        <div class="row open-sans-font">
            <div class="col-6 mb-2">
                <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">${work.title}</span>
            </div>
            <div class="col-6 mb-2">
                <i class="fa fa-user-o pr-2"></i><span class="project-label">Code </span>: <span class="ft-wt-600 uppercase">${work.github}</span>
            </div>
            <div class="col-6 mb-2">
                <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">${work.language}</span>
            </div>
            <div class="col-6 mb-2">
                <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="#" target="_blank">${work.live}</a></span>
            </div>
        </div>
    </figcaption>
    <!-- Project Details Ends -->
    <!-- Main Project Content Starts -->
    <div id="slider${work.id}" class="carousel slide portfolio-slider" data-ride="carousel" data-interval="false">
        <ol class="carousel-indicators">
        ${work.img.map((img, index) => {
          return `
            <li data-target="#slider${work.id}" data-slide-to="${index}" class="${(index ==0)? 'active' : ''}"></li>`
        }).join('')}
        </ol>
        <!-- The slideshow -->
        <div class="carousel-inner">
        ${work.img.map((img, index) => {
          return `
            <div class="carousel-item ${(index ==0)? 'active' : ''}">
              <img src="${img}" alt="slide ${index}">
            </div>
          `
        }).join('')}
        </div>
    </div>
    <!-- Main Project Content Ends -->
    </figure>
    </li>`;
  });
  displayPopup = displayPopup.join('');
  if (works.length < 1) {
    displayPopup = `<h3 class="pst-portfolio-item1-content-title">No Work to display</h3>`;
  }
  worksContainer.innerHTML = displayWorks;
  worksPopup.innerHTML = displayPopup;
};

window.addEventListener('DOMContentLoaded', () => {
  displayWorks(worksData);
});