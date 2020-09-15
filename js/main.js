// Splice screen - https://www.youtube.com/watch?v=xuA83OYTE7I&ab_channel=dcode //
window.addEventListener("load", function () {
    const splice = document.querySelector(".splice");
    splice.className += " hidden";
    setTimeout(() => {
        splice.style.display = "none";
    }, 3000)
});

// Single page application content //


//opening details after clicking on map
//opening details of the place after clicking on arrow up



function goDetails() {
    document.getElementsByClassName("arrow-up").addEventListener("click", function () {
        document.getElementById("details-going-up").setAttribute = ('top', '-40vh');
    });
};

function goMap() {
    document.getElementsByClassName("arrow-back").addEventListener("click", function () {
        document.getElementById("details-going-up").setAttribute = ('top', 'calc(100vh - 100px - 40vh)');

    });
}