
const homeButton = document.getElementById("homebutton");
const aboutButton = document.getElementById("aboutbutton");
const socialButton = document.getElementById("socialbutton");
const contactButton = document.getElementById("contactbutton");

function clean(...ids) {
    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.remove('selected', 'tobe');
        }
    });
}

function scrollFunction() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    const sections = [
        { id: "homebutton", scrollLimit: 0 },
        { id: "aboutbutton", scrollLimit: 150 },
        { id: "socialbutton", scrollLimit: 850 },
        { id: "contactbutton", scrollLimit: 1300 }  // Assuming contact is the last section
    ];

    sections.forEach((section, index) => {
        const current = document.getElementById(sections[index].id);
        const next = sections[index + 1] ? sections[index + 1].scrollLimit : Infinity;

        // Check if current scroll position is within this section’s range
        if (scrollTop >= section.scrollLimit && scrollTop < next) {
            current.classList.add("selected");
            current.classList.remove("tobe");
        } else {
            current.classList.add("tobe");
            current.classList.remove("selected");
        }
    });
}




window.addEventListener("scroll", scrollFunction);







const youtubeKey = 'AIzaSyD92hfNbiwM4kZpg4VwUfnTJDMSEisXdgo';
const youtubeUser = 'UCfr1jxvgDly8Sqc9ilVuSrg';
const subCount = document.getElementById('subCount');
const delay = 100000; // 10 min

async function getSubscribers() {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`);
        const data = await response.json();
        subCount.innerHTML = `${data.items[0].statistics.subscriberCount} Subscribers`;
    } catch (error) {
        console.error('Failed to fetch subscriber count', error);
    }
}

getSubscribers();
setInterval(getSubscribers, delay);



const menuButton = document.querySelector('.mobile-menu-button');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.link-holder a');

function toggleMobileMenu() {
    navbar.classList.toggle('active');
}

menuButton.addEventListener('click', toggleMobileMenu);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) {
        video.setAttribute('autoplay', true);
        video.play().catch(err => {
            console.warn('Autoplay blocked:', err);
        });
    }
});