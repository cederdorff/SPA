// Splice screen - https://www.youtube.com/watch?v=xuA83OYTE7I&ab_channel=dcode //
window.addEventListener("load", function () {
    const splice = document.querySelector(".splice");
    splice.className += " hidden";
    setTimeout(() => {
        splice.style.display = "none";
    }, 3000)
});



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