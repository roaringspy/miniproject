// Smooth scroll to section when dock button is clicked
$(function() {
    $('#contact').click(function() {
      $('#contactForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
      var container = $("#contactForm");
  
      if (!container.is(e.target)
          && container.has(e.target).length === 0)
      {
          container.fadeOut();
      }
    });
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const dockButtons = document.querySelectorAll('.dock-btn');

    dockButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Highlight the active button
                dockButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
            }
        });
    });
    

    // Highlight active button based on scroll position
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section');
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                const targetId = section.getAttribute('id');
                const activeButton = document.querySelector(`.dock-btn[data-target="${targetId}"]`);

                if (activeButton) {
                    dockButtons.forEach(btn => {
                        btn.classList.remove('active');
                    });
                    activeButton.classList.add('active');
                }
            }
        });
    });
});
