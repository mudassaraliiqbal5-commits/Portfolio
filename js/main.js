// Mudassar Ali - Portfolio JavaScript Main Logic

// --- Configuration ---
// Register for a free account at Formspree (https://formspree.io)
// Create a new form, copy the Form ID, and paste it here to make your contact form fully functional.
const FORMSPREE_FORM_ID = "https://formspree.io/f/xnjyyzer"; 

// --- Projects Data ---
const projectsData = {
    vtol_drone: {
        title: "Tricopter Tilt-Rotor VTOL UAV",
        category: "Final Year Project / UAV",
        timeline: "Sep 2025 - May 2026",
        description: [
            "Designed and developed a custom tricopter tilt-rotor VTOL (Vertical Takeoff and Landing) drone with mechanical tilt mechanisms.",
            "Integrated an onboard open-source AI vision system utilizing a Raspberry Pi and camera to detect survivors during mass flood scenarios.",
            "Engineered the aircraft to cover entire regions, facilitating optimized search and rescue operations by automatically mapping and locating survivors.",
            "Explored AI application workloads for security intercept and target tracking use cases."
        ],
        tech: ["SolidWorks", "Rapid Prototyping", "C++", "Python", "Embedded Systems", "AI Computer Vision"],
        media: [
            { type: "video", src: "assets/images/projects/vtol_drone/video_1.mp4" },
            { type: "image", src: "assets/images/projects/vtol_drone/image_3.png" },
            { type: "image", src: "assets/images/projects/vtol_drone/image_1.jpeg" },
            { type: "image", src: "assets/images/projects/vtol_drone/image_2.jpeg" }
        ]
    },
    skyscraper: {
        title: "Skyscraper Window Cleaning Robot",
        category: "Team Lead / Robotics",
        timeline: "Apr 2024 - Present",
        description: [
            "Served as Team Lead for the design and manufacturing of an automated robotic alternative to high-risk manual window cleaning labor.",
            "Developed a smart wire-grip movement platform designed to navigate vertical glass facades safely.",
            "Implemented active tilt-correction algorithms and ultrasonic obstacle detection to ensure operational safety and alignment.",
            "Created a scalable prototype that eliminates reliance on conventional, hazardous open lifts.",
            "Recognized with a regional startup pitch placement demonstrating market viability."
        ],
        tech: ["SolidWorks", "ANSYS FEA", "Ultrasonic Sensors", "Arduino C++", "Rapid Prototyping", "Mechatronics"],
        media: [
            { type: "video", src: "assets/images/projects/skyscraper/video_1.mp4" },
            { type: "image", src: "assets/images/projects/skyscraper/image_1.jpeg" },
            { type: "image", src: "assets/images/projects/skyscraper/image_2.jpeg" }
        ]
    },
    robodog: {
        title: "Quadrupedal Robodog Development",
        category: "NCRA Internship Project",
        timeline: "Jun 2025 - Jul 2025",
        description: [
            "Contributed to the development of the biomimetic quadrupedal 'Robodog' project at the National Centre of Robotics and Automation (NCRA).",
            "Focused heavily on biomechanical gait integration, joint alignment, and mechanical stability.",
            "Accelerated prototyping iterations using high-precision 3D printing and laser cutting.",
            "Performed structural analysis in ANSYS and modeled complex 4-bar linkage kinematics in SolidWorks to optimize actuator load profiles."
        ],
        tech: ["SolidWorks", "ANSYS FEA", "Biomimetic Kinematics", "3D Printing (FDM/SLA)", "Laser Cutting"],
        media: [
            { type: "image", src: "assets/images/projects/robodog/image_1.png" },
            { type: "image", src: "assets/images/projects/robodog/image_2.png" },
            { type: "image", src: "assets/images/projects/robodog/image_3.jpeg" },
            { type: "image", src: "assets/images/projects/robodog/image_4.jpeg" }
        ]
    },
    hydraulic_bench: {
        title: "Hydraulic Workbench & CAD Design",
        category: "Research and Development",
        timeline: "Oct 2024 - Apr 2025",
        description: [
            "Conducted design and optimization of a laboratory hydraulic workbench for flow testing at NUST R&D Center (RDC).",
            "Ensured structural load-bearing reliability, ergonomic efficiency, and flow measurement accuracy.",
            "Drafted comprehensive, manufacture-ready 2D and 3D CAD engineering drawings for a custom electric bike chassis.",
            "Minimized production floor fabrication errors through high-precision tolerances and clear technical documentation."
        ],
        tech: ["SolidWorks CAD", "Hydraulics", "Fluid Flow Design", "Manufacturing Documentation", "GD&T"],
        media: [
            { type: "image", src: "assets/images/projects/hydraulic_bench/image_1.jpeg" },
            { type: "image", src: "assets/images/projects/hydraulic_bench/image_2.jpeg" },
            { type: "image", src: "assets/images/projects/hydraulic_bench/image_3.jpeg" },
            { type: "image", src: "assets/images/projects/hydraulic_bench/image_4.jpeg" },
            { type: "image", src: "assets/images/projects/hydraulic_bench/image_5.jpeg" }
        ]
    },
    ehpvc: {
        title: "Electric Human-Powered Vehicle (EHPVC)",
        category: "Team Lead / Competition",
        timeline: "Feb 2024 - May 2025",
        description: [
            "Led a 10-member engineering team in the structural design, FEA engineering, and fabrication of a hybrid recumbent vehicle.",
            "Engineered the aerodynamic fairing and structural spaceframe chassis to compete in Pakistan's inaugural EHPV Competition.",
            "Performed chassis roll-cage crash simulations in ANSYS to ensure structural integrity and driver safety.",
            "Integrated hybrid electric assistance systems and optimized chain-drive transmission linkages."
        ],
        tech: ["ANSYS FEA", "SolidWorks", "Chassis Fabrication", "TIG Welding Coordination", "Vehicle Dynamics"],
        media: [
            { type: "image", src: "assets/images/projects/ehpvc/image_1.jpeg" },
            { type: "image", src: "assets/images/projects/ehpvc/image_2.jpeg" },
            { type: "image", src: "assets/images/projects/ehpvc/image_3.jpeg" },
            { type: "image", src: "assets/images/projects/ehpvc/image_4.jpeg" }
        ]
    }
};

// --- Navigation Scroll Effect ---
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- Mobile Navigation Menu Drawer ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileCloseBtn = document.getElementById('mobile-close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    document.body.classList.add('modal-open');
}

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('modal-open');
}

mobileMenuBtn.addEventListener('click', openMobileMenu);
mobileCloseBtn.addEventListener('click', closeMobileMenu);
mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

// --- Project Modal & Media Slider Logic ---
let activeProject = null;
let currentSlideIndex = 0;

const modal = document.getElementById('project-modal');
const slidesContainer = document.getElementById('modal-slides-container');
const prevBtn = document.getElementById('slide-prev');
const nextBtn = document.getElementById('slide-next');
const indicator = document.getElementById('media-indicator');

const modalCategory = document.getElementById('modal-category');
const modalTitle = document.getElementById('modal-title');
const modalTimeline = document.getElementById('modal-timeline');
const modalDescription = document.getElementById('modal-description');
const modalTech = document.getElementById('modal-tech');

function openProjectModal(projectId) {
    activeProject = projectsData[projectId];
    if (!activeProject) return;

    currentSlideIndex = 0;
    
    // Fill textual content
    modalCategory.innerText = activeProject.category;
    modalTitle.innerText = activeProject.title;
    modalTimeline.innerText = `Project Timeline: ${activeProject.timeline}`;
    
    // Fill description bullet points
    modalDescription.innerHTML = '';
    activeProject.description.forEach(bullet => {
        const p = document.createElement('p');
        p.className = 'relative pl-5 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full';
        p.innerText = bullet;
        modalDescription.appendChild(p);
    });

    // Fill tech badges (Light theme colors)
    modalTech.innerHTML = '';
    activeProject.tech.forEach(techName => {
        const span = document.createElement('span');
        span.className = 'px-2.5 py-1 rounded bg-zinc-100 border border-zinc-200 text-zinc-600';
        span.innerText = techName;
        modalTech.appendChild(span);
    });

    // Update Media Slider
    renderSlide();

    // Show Modal
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
}

function closeProjectModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    // Stop any playing video
    slidesContainer.innerHTML = '';
    activeProject = null;
}

function renderSlide() {
    if (!activeProject || !activeProject.media.length) {
        slidesContainer.innerHTML = '<div class="text-zinc-500 font-mono text-xs">No media available</div>';
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
        indicator.classList.add('hidden');
        return;
    }

    const currentMedia = activeProject.media[currentSlideIndex];
    slidesContainer.innerHTML = '';

    if (currentMedia.type === 'video') {
        const video = document.createElement('video');
        video.src = currentMedia.src;
        video.controls = true;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.className = 'w-full h-full max-h-[400px] md:max-h-none object-contain';
        slidesContainer.appendChild(video);
    } else {
        const img = document.createElement('img');
        img.src = currentMedia.src;
        img.alt = activeProject.title;
        img.className = 'w-full h-full max-h-[400px] md:max-h-none object-contain transition-all duration-300';
        slidesContainer.appendChild(img);
    }

    // Toggle Arrows
    if (activeProject.media.length > 1) {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
        indicator.classList.remove('hidden');
        indicator.innerText = `${currentSlideIndex + 1} / ${activeProject.media.length}`;
    } else {
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
        indicator.classList.add('hidden');
    }
}

// Navigation arrows listeners
prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!activeProject) return;
    currentSlideIndex = (currentSlideIndex - 1 + activeProject.media.length) % activeProject.media.length;
    renderSlide();
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!activeProject) return;
    currentSlideIndex = (currentSlideIndex + 1) % activeProject.media.length;
    renderSlide();
});

// Bind Click events to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project-id');
        openProjectModal(projectId);
    });
});

// Close modal on Escape Key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
        closeMobileMenu();
    }
});

// --- Contact Form Handling (Formspree Integration) ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.disabled = true;
        submitBtn.innerText = 'Sending...';

        const nameVal = document.getElementById('name').value;
        const emailVal = document.getElementById('email').value;
        const subjectVal = document.getElementById('subject').value;
        const messageVal = document.getElementById('message').value;

        // Perform actual fetch to Formspree if ID is configured
        if (FORMSPREE_FORM_ID && FORMSPREE_FORM_ID !== "YOUR_FORMSPREE_FORM_ID" && FORMSPREE_FORM_ID.trim() !== "") {
            fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: nameVal,
                    email: emailVal,
                    subject: subjectVal,
                    message: messageVal
                })
            })
            .then(response => {
                if (response.ok) {
                    showSuccess(false);
                } else {
                    showError("Form submission failed. Please verify your Formspree ID is configured correctly.");
                }
            })
            .catch(error => {
                showError("A connection error occurred. Please check your internet connection.");
            });
        } else {
            // Log a configuration warning and fall back to demo display
            console.warn("Contact form submitted in Demo Mode. To receive actual emails, configure FORMSPREE_FORM_ID in js/main.js.");
            setTimeout(() => {
                showSuccess(true);
            }, 1000);
        }

        function showSuccess(isDemo) {
            submitBtn.classList.remove('bg-zinc-900', 'hover:bg-accent');
            submitBtn.classList.add('bg-accent', 'text-white', 'border-accent');
            
            if (isDemo) {
                submitBtn.innerText = 'Message Simulating...';
                alert("Demo Submission Successful!\n\nName: " + nameVal + "\nEmail: " + emailVal + "\n\nNote: To receive actual emails, please go to Formspree.io, create a free form, get your Form ID, and update the FORMSPREE_FORM_ID variable at the top of js/main.js.");
                submitBtn.innerText = 'Demo Submitted!';
            } else {
                submitBtn.innerText = 'Message Sent Successfully!';
            }

            setTimeout(() => {
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.classList.remove('bg-accent', 'text-white', 'border-accent');
                submitBtn.classList.add('bg-zinc-900', 'hover:bg-accent');
                submitBtn.innerText = originalText;
            }, 4000);
        }

        function showError(errorMessage) {
            submitBtn.classList.remove('bg-zinc-900', 'hover:bg-accent');
            submitBtn.classList.add('bg-red-600', 'text-white', 'border-red-600');
            submitBtn.innerText = 'Failed to Send';
            alert(errorMessage);

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.classList.remove('bg-red-600', 'text-white', 'border-red-600');
                submitBtn.classList.add('bg-zinc-900', 'hover:bg-accent');
                submitBtn.innerText = originalText;
            }, 3000);
        }
    });
}
