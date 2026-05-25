
AOS.init({ duration: 500, once: true });
    
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 800,

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  }
});


/*=================== Contact Page ==================*/
 const form = document.getElementById("contactForm");
        const successMessage = document.getElementById("successMessage");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            successMessage.style.display = "block";

            form.reset();

            setTimeout(() => {
                successMessage.style.display = "none";
            }, 4000);
        });


/*=============== ABOUT US PAGE  ===============*/
// Counter Animation

        const counters = document.querySelectorAll('.counter');

        counters.forEach(counter => {

            counter.innerText = '0';

            const updateCounter = () => {

                const target = +counter.getAttribute('data-target');
                const current = +counter.innerText;

                const increment = target / 100;

                if (current < target) {

                    counter.innerText = `${Math.ceil(current + increment)}`;

                    setTimeout(updateCounter, 20);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

        });
