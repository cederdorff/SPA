// Splash screen - https://www.youtube.com/watch?v=xuA83OYTE7I&ab_channel=dcode //
window.addEventListener("load", function () {
    const splash = document.querySelector(".splash");
    splash.className += " hidden";
    setTimeout(() => {
        splash.style.display = "none";
    }, 3000)
});


// Single page application content //


//opening details after clicking on map

/* function goDetails() {
    document.getElementsByClassName("arrow-up").addEventListener("click", function () {
        document.getElementById("details-going-up").setAttribute = ('top', '-40vh');
    });
}; */
function bb() {
    document.getElementsByClassName("arrow-up").addEventListener("click", function () {
        document.getElementById("details-going-up").setAttribute = ('top', '-40vh');
    });
}
//opening details of the place after clicking on arrow up
/*
function goMap() {
    document.getElementsByClassName("arrow-back").addEventListener("click", function () {
        document.getElementById("details-going-up").setAttribute = ('top', 'calc(100vh - 100px - 40vh)');

    });
} */
function bm() {
    document.getElementsByClassName("arrow-back").addEventListener("click", function () {
        document.getElementById("details-going-up").setAttribute = ('top', 'calc(100vh - 100px - 40vh)');

    });
}
// Onboarding mechanic

const onBoardingButtons = document.querySelectorAll("#onboarding > div > button.next");
const onBoardingSkip = document.querySelectorAll("#onboarding .top_part .skip");
const onBoardingContainers = document.querySelectorAll("#onboarding > div");


for (let i = 0; i < 4; i++) {
    onBoardingButtons[i].addEventListener('click', () => {
        onBoardingContainers[i].style.display = "none";
    })
}
for (let j = 0; j < 4; j++) {
    onBoardingSkip[j].addEventListener('click', () => {
        for (let i = 0; i < 4; i++) {
            onBoardingContainers[i].style.display = "none";
        }
    })
}
// Single page application content //