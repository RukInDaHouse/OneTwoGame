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

