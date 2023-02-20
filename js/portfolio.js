// typing animation

var typed = new Typed('.typing', {
    strings: ['', 'FullStack Developer', 'Web Developer', 'Angular/React Developer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// sidebar navigation

const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
const totalSections = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const anchor = navList[i].querySelector("a");
    
    anchor.addEventListener("click", function () {

        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSelectedSection(this);
    });
}

function showSelectedSection(element) {

    for (let i = 0; i < totalSections; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split('#')[1];

    document.querySelector(`#${target}`).classList.add("active");

}