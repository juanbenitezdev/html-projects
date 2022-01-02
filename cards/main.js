const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', function(e) {
        removeActiveClasses();
        this.classList.toggle('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

const directionButton = document.getElementById('btn-direction');
const container = document.querySelector('.container');
gsap.registerPlugin(Flip);

directionButton.addEventListener('click', function(e) {
    const state = Flip.getState(".container, .panel");
    
    container.classList.toggle('vertical');

    Flip.from(state, {
        absolute: true, // uses position: absolute during the flip to work around flexbox challenges
        duration: 0.5, 
        stagger: 0.1,
       
        // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc. 
      });
})




