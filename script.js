function page2Animation() {
    let rightElements = document.querySelectorAll('.right-element');
    // console.log(rightElements);
    rightElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            gsap.to(element.childNodes[5], {
                opacity: 1,
                scale: 1,
            })
        })
        element.addEventListener('mouseleave', () => {
            gsap.to(element.childNodes[5], {
                opacity: 0,
                scale: 0
            })
        })
        element.addEventListener('mousemove', (dets) => {
            gsap.to(element.childNodes[5], {
                x: `${dets.x - element.getBoundingClientRect().x - 34}px`,
                y: `${dets.y - element.getBoundingClientRect().y - 60}px`,
            })

        })
    })
}
page2Animation();

// page3
function page3Animation() {
    let page3 = document.querySelector("#page3");
    let video1 = document.querySelector('.video1');
    let videoIcon = document.querySelector('.play-icon');

    video1.addEventListener('mouseleave', () => {
        gsap.to(videoIcon, {
            opacity: 0,
            scale: 0
        })
    })
    video1.addEventListener('mouseenter', () => {
        gsap.to(videoIcon, {
            opacity: 1,
            scale: 1
        })
    })
    video1.addEventListener('mousemove', (dets) => {
        gsap.to(videoIcon, {
            x: `${dets.x - video1.getBoundingClientRect().x - 34}px`,
            y: `${dets.y - video1.getBoundingClientRect().y - 60}px`,
        })
    })
    video1.addEventListener('click', () => {
        if (video1.muted) {
            video1.muted = false;
            console.log('unmuted');
            gsap.to(page3, {
                padding: "0px",
                width: "100%",
                height: "100vh",
            })
            gsap.to(video1, {
                zIndex: 1000,
                position: "fixed", // Change the position property
                top: 0,         // Example additional property
                left: 0,
                width: "100%",
                borderRadius: 0,
                height: "100vh"
            })
        }
        else if (!video1.muted) {
            video1.muted = true;
            console.log('muted');
            gsap.to(page3, {
                css: {
                    padding: "30px 100px" // Set double padding
                },

                width: "84%",
            })
            gsap.to(video1, {
                zIndex: 0,
                width: "100%",
                height: "90vh",
                position: "static",
                borderRadius: "20px",
                objectFit: "cover"
            })
        }
    })
}
page3Animation();
// page4
function page4Animation() {
    let imageParent = document.querySelectorAll('.right-bottom');
    imageParent.forEach((image) => {
        image.addEventListener('mouseenter', () => {
            image.children[1].style.opacity = "1";
            image.children[1].play();
        })
        image.addEventListener('mouseleave', () => {
            image.children[1].style.opacity = "0";
            image.children[1].currentTime = "0";
            image.children[1].pause();
        })
    })
}
page4Animation();

// page5
function page6Animation() {

    gsap.from('.page6-bottom-section>p', {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".page6-bottom-2",
            scrub: 2,
            start: "top 70%",
            scroller: "body",
            end: "top 7%",
            // markers: true
        }
    })
}
page6Animation();

// loadingAnimation

// GSAP animation for page1
let tl = gsap.timeline();
tl.from("#page1", {
    opacity : 0,
    duration : 0.2
})
tl.from("#page1", {
    duration: 2, // Animation duration in seconds
    ease: "expo.out", // Easing function for a smooth effect
    transform: "scaleX(0.5) scaleY(0.2)",
    borderRadius: "100px",
});
tl.from("nav", {
    opacity : 0,
})

tl.from("#page1 h1", {
    opacity: 0,
    duration: 0.5,
});
tl.from("#page1 p", {
    opacity: 0,
    duration: 0.5,
}, "-=0.3");





