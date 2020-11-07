function pageTransition() {

    var timeline = gsap.timeline();

    timeline.to('ul.transition li', {
        duration: .5,
        scaleY: 1,
        transformOrigin: 'bottom left',
        stagger: .2
    });

    timeline.to('ul.transition li', {
        duration: .25,
        scaleY: 0,
        transformOrigin: 'bottom left',
        stagger: .1,
        delay: .2,
    });
}

function contentAnimation() {

    var timeline = gsap.timeline();

    timeline.from('.left', {
        duration: 1.5,
        translateY: 50,
        opacity: 0
    });

    timeline.to('img', {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
    });
}

