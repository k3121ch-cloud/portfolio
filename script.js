// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Load projects from JSON
async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const data = await response.json();
        const projectsGrid = document.getElementById('projectsGrid');
        
        projectsGrid.innerHTML = '';
        
        data.projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            // Create SVG based on index for variety
            let svgContent = '';
            if (index === 0) {
                svgContent = `
                    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                        <rect width="300" height="200" fill="${project.imageColor}" opacity="0.2"/>
                        <circle cx="150" cy="100" r="40" fill="${project.imageColor}" opacity="0.4"/>
                    </svg>
                `;
            } else {
                svgContent = `
                    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                        <rect width="300" height="200" fill="${project.imageColor}" opacity="0.2"/>
                        <polygon points="150,60 200,140 100,140" fill="${project.imageColor}" opacity="0.4"/>
                    </svg>
                `;
            }
            
            const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <div class="project-image-placeholder">
                        ${svgContent}
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${tagsHTML}
                    </div>
                    <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">${project.link}</a>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
        
        // Re-observe project cards for animations
        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.animationDelay = `${index * 0.1}s`;
            observer.observe(card);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
        const projectsGrid = document.getElementById('projectsGrid');
        projectsGrid.innerHTML = '<p>프로젝트를 불러오는 중 오류가 발생했습니다.</p>';
    }
}

// Load projects when page loads
loadProjects();

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('모든 필드를 입력해주세요.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('올바른 이메일 주소를 입력해주세요.');
        return;
    }
    
    // Create mailto link
    const subject = encodeURIComponent(`포트폴리오 문의: ${name}님으로부터`);
    const body = encodeURIComponent(`이름: ${name}\n이메일: ${email}\n\n메시지:\n${message}`);
    const mailtoLink = `mailto:k3121ch@naver.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form after a short delay
    setTimeout(() => {
        contactForm.reset();
        alert('이메일 클라이언트가 열렸습니다. 메시지를 확인하고 전송해주세요.');
    }, 500);
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards (will be called after projects are loaded)
// This is now handled in loadProjects() function

// Observe hero section
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);
}

// Observe contact form
const contactFormElement = document.querySelector('.contact-form');
if (contactFormElement) {
    contactFormElement.style.opacity = '0';
    contactFormElement.style.transform = 'translateY(30px)';
    contactFormElement.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(contactFormElement);
}

