/* =========================================================
   EZZ NOFAL — PROFESSIONAL PORTFOLIO ENGINE
   ========================================================= */

/* =========================================================
   1. PORTFOLIO CONFIG
   ========================================================= */

const PORTFOLIO_EMAIL = "YOUR-EMAIL@example.com";

/*
   Keep this as your main social/profile URL.
   Change it to your real GitHub URL if you want the
   GitHub section to load repositories.
*/
const GITHUB_URL = "https://www.instagram.com/ezz.nofal";
const GITHUB_USERNAME = "";

/*
   Optional Formspree endpoint.
   Leave empty if you don't use Formspree.
*/
const FORMSPREE_ENDPOINT = "";

/*
   Watch Introduction button.
*/
const INTRO_VIDEO_URL = "https://qr-pro-roan.vercel.app/";

window.PORTFOLIO_CONFIG = {
    githubUrl: GITHUB_URL,
    githubUsername: GITHUB_USERNAME,
    formspreeEndpoint: FORMSPREE_ENDPOINT,
    introVideoUrl: INTRO_VIDEO_URL
};


/* =========================================================
   2. MOBILE NAVIGATION
   ========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        const open = navLinks.classList.toggle("open");

        menuBtn.classList.toggle("open", open);

        menuBtn.setAttribute(
            "aria-expanded",
            String(open)
        );

        menuBtn.setAttribute(
            "aria-label",
            open
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuBtn.classList.remove("open");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });
}


/* =========================================================
   3. SCROLL PROGRESS + ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");
const scrollProgress = document.getElementById("scrollProgress");

function handleScroll() {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
                sectionTop + section.offsetHeight
        ) {
            current = section.id;
        }
    });

    navigationLinks.forEach(link => {

        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );
    });

    if (scrollProgress) {

        const scrollable =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            scrollable > 0
                ? (window.scrollY / scrollable) * 100
                : 0;

        scrollProgress.style.width =
            `${Math.min(100, Math.max(0, percentage))}%`;
    }
}

window.addEventListener(
    "scroll",
    handleScroll,
    { passive: true }
);

handleScroll();


/* =========================================================
   4. REVEAL ANIMATIONS
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );
                }
            });

        },
        {
            threshold: 0.12
        }
    );

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================================================
   5. BACK TO TOP
   ========================================================= */

const topBtn =
    document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener(
        "scroll",
        () => {
            topBtn.classList.toggle(
                "show",
                window.scrollY > 600
            );
        },
        { passive: true }
    );

    topBtn.addEventListener(
        "click",
        () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
}


/* =========================================================
   6. YEAR
   ========================================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}


/* =========================================================
   7. PROJECT DATABASE
   ========================================================= */

const projects = [

    /* =====================================================
       QRLink — FEATURED PROJECT
       ===================================================== */

    {
        title: "QRLink",
        category: "FEATURED",
        icon: "QR",

        description:
            "A professional digital identity and QR profile platform designed to bring important links and contact information into one modern experience.",

        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "Supabase",
            "QR"
        ],

        features: [
            "Unique QR profile",
            "Multiple social links",
            "Modern digital identity",
            "Responsive interface",
            "QR generation",
            "Professional profile presentation",
            "Fast sharing experience",
            "Mobile-first design"
        ],

        problem:
            "People often have their professional and social links scattered across different platforms.",

        solution:
            "QRLink brings important digital links into one centralized profile that can be shared through a single QR code.",

        engineering:
            "Responsive frontend architecture, dynamic profile rendering, QR generation, browser-side interactions and Supabase-backed functionality.",

        quality:
            "Responsive layouts, clear visual hierarchy, mobile usability, focused interactions and iterative interface testing.",

        live:
            "https://qr-pro-roan.vercel.app/",

        github: ""
    },


    /* =====================================================
       CODE Z
       ===================================================== */

    {
        title: "CODE Z",
        category: "EDUCATION",
        icon: "&lt;/&gt;",

        description:
            "A student-led educational platform designed to make programming learning simple, interactive and approachable.",

        tags: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features: [
            "Student-friendly learning interface",
            "Structured lesson navigation",
            "Responsive educational pages",
            "Interactive course experience"
        ],

        problem:
            "Make programming learning easier to approach for students.",

        solution:
            "A structured educational experience with clear navigation and accessible learning content.",

        engineering:
            "Responsive page architecture, reusable UI patterns and interactive browser-side behavior.",

        quality:
            "Responsive layouts, clear hierarchy and iterative usability refinement.",

        live: "",
        github: ""
    },


    /* =====================================================
       LEARNING HUB
       ===================================================== */

    {
        title: "Learning Hub",
        category: "WEB APP",
        icon: "LH",

        description:
            "A centralized learning environment for organizing educational content and resources.",

        tags: [
            "React",
            "Bootstrap",
            "JavaScript"
        ],

        features: [
            "Centralized learning resources",
            "Component-based interface",
            "Responsive layout",
            "Organized content structure"
        ],

        problem:
            "Keep educational resources organized in one accessible place.",

        solution:
            "A centralized interface that groups learning resources into a coherent workflow.",

        engineering:
            "Component-based UI and responsive layout patterns.",

        quality:
            "Consistent spacing, responsive behavior and clear information hierarchy.",

        live: "",
        github: ""
    },


    /* =====================================================
       PASSWORD MANAGER
       ===================================================== */

    {
        title: "Password Manager",
        category: "SECURITY",
        icon: "🔐",

        description:
            "A password-management interface focused on organization, usability and browser-side data handling.",

        tags: [
            "JavaScript",
            "CSS",
            "HTML"
        ],

        features: [
            "Local browser storage",
            "Password visibility controls",
            "Searchable entries",
            "Privacy-oriented interface"
        ],

        problem:
            "Provide a simple interface for organizing credentials locally.",

        solution:
            "A browser-based interface for adding, searching and viewing stored entries.",

        engineering:
            "Client-side state and local persistence with interactive controls.",

        quality:
            "Clear states, focused interactions and responsive presentation.",

        live: "",
        github: ""
    },


    /* =====================================================
       TEACHER SITE
       ===================================================== */

    {
        title: "Teacher Site",
        category: "EDUCATION",
        icon: "ED",

        description:
            "A professional website concept for teachers to present courses and educational resources.",

        tags: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features: [
            "Course presentation",
            "Educational resources",
            "Responsive interface",
            "Clear information hierarchy"
        ],

        problem:
            "Present teaching content in a professional and accessible format.",

        solution:
            "A focused website structure for courses, resources and teacher information.",

        engineering:
            "Semantic sections, responsive layouts and interactive UI elements.",

        quality:
            "Mobile support and readable content hierarchy.",

        live: "",
        github: ""
    },


    /* =====================================================
       BEST MARKET
       ===================================================== */

    {
        title: "Best Market",
        category: "MARKETPLACE",
        icon: "BM",

        description:
            "A modern marketplace interface focused on products, categories and usability.",

        tags: [
            "React",
            "Bootstrap",
            "CSS"
        ],

        features: [
            "Product-focused layout",
            "Category organization",
            "Responsive UI",
            "Reusable interface patterns"
        ],

        problem:
            "Present products and categories in an easy-to-browse interface.",

        solution:
            "A marketplace-style experience with organized product presentation.",

        engineering:
            "Reusable UI patterns and responsive component layouts.",

        quality:
            "Consistent cards, spacing and responsive behavior.",

        live: "",
        github: ""
    },


    /* =====================================================
       STUDY PLANNER
       ===================================================== */

    {
        title: "Study Planner",
        category: "PRODUCTIVITY",
        icon: "SP",

        description:
            "A productivity-focused planner designed to help students organize tasks and study priorities.",

        tags: [
            "React",
            "JavaScript",
            "Bootstrap"
        ],

        features: [
            "Task organization",
            "Student-focused workflow",
            "Responsive design",
            "Productivity-oriented UI"
        ],

        problem:
            "Help students keep study tasks visible and organized.",

        solution:
            "A focused planning interface for tasks, priorities and daily organization.",

        engineering:
            "Interactive state handling and responsive UI patterns.",

        quality:
            "Simple workflows, readable states and mobile-friendly design.",

        live: "",
        github: ""
    },


    /* =====================================================
       TENDER SYSTEM
       ===================================================== */

    {
        title: "Tender System",
        category: "MANAGEMENT",
        icon: "TS",

        description:
            "A dashboard-style system for organizing tender information with a structured UI.",

        tags: [
            "JavaScript",
            "CSS",
            "HTML"
        ],

        features: [
            "Structured tender records",
            "Dashboard statistics",
            "Filtering and organization",
            "Export-ready workflow"
        ],

        problem:
            "Organize tender records and make key information easier to review.",

        solution:
            "A structured dashboard with searchable records and management-oriented views.",

        engineering:
            "Client-side data handling, filters and dashboard interactions.",

        quality:
            "Clear information hierarchy and practical management workflows.",

        live: "",
        github: ""
    },


    /* =====================================================
       ROMANTIC MESSAGE
       ===================================================== */

    {
        title: "Romantic Message",
        category: "CREATIVE",
        icon: "♡",

        description:
            "An animated interactive web experience focused on typography and visual storytelling.",

        tags: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features: [
            "Animated presentation",
            "Interactive storytelling",
            "Typography-focused design",
            "Responsive experience"
        ],

        problem:
            "Turn a simple message into a memorable interactive experience.",

        solution:
            "A visual storytelling page combining animation, typography and interaction.",

        engineering:
            "CSS animation and browser-side interaction logic.",

        quality:
            "Responsive presentation and controlled motion.",

        live: "",
        github: ""
    },


    /* =====================================================
       STUDYFLOW
       ===================================================== */

    {
        title: "StudyFlow",
        category: "PRODUCTIVITY",
        icon: "SF",

        description:
            "A complete student productivity platform for planning, study tracking, goals, streaks, achievements and personal organization.",

        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "PWA"
        ],

        features: [
            "Study dashboard",
            "Schedules and deadlines",
            "Tasks and goals",
            "Study-time tracking",
            "Streaks and achievements",
            "Responsive mobile experience",
            "PWA support",
            "Local persistence"
        ],

        problem:
            "Students need a single workspace for planning study activities, tracking progress and staying consistent.",

        solution:
            "A responsive productivity system that combines planning, tracking, goals and progress feedback in one experience.",

        engineering:
            "Client-side state management, LocalStorage persistence, timers, responsive UI systems and progressive web app capabilities.",

        quality:
            "Mobile-first layouts, explicit UI states, feedback, validation and iterative feature testing.",

        live:
            "https://study-ezz.vercel.app",

        github: ""
    }
];


/* =========================================================
   8. CERTIFICATES
   ========================================================= */

const defaultCertificates = [

    {
        id: "c1",
        title: "JavaScript — Level 3",
        issuer: "TOFAS",
        image: "certificates/certificate-01.jpg",
        date: "",
        link: "",
        description: "JavaScript achievement certificate."
    },

    {
        id: "c2",
        title: "JavaScript — Level 2",
        issuer: "TOFAS",
        image: "certificates/certificate-02.jpg",
        date: "",
        link: "",
        description: "JavaScript achievement certificate."
    },

    {
        id: "c3",
        title: "JavaScript — Level 1",
        issuer: "TOFAS",
        image: "certificates/certificate-03.jpg",
        date: "",
        link: "",
        description: "JavaScript achievement certificate."
    },

    {
        id: "c4",
        title: "Digital Transformation",
        issuer: "Microsoft",
        image: "certificates/certificate-04.jpg",
        date: "2023",
        link: "",
        description: "Microsoft Digital Transformation training certificate."
    },

    {
        id: "c5",
        title: "Digital Egypt Cubs Initiative — Level One",
        issuer: "Udacity",
        image: "certificates/certificate-05.jpg",
        date: "2024",
        link: "",
        description: "Udacity participation certificate."
    },

    {
        id: "c6",
        title: "Digital Egypt Cubs Initiative — Level Two",
        issuer: "Udacity",
        image: "certificates/certificate-06.jpg",
        date: "2025",
        link: "",
        description: "Udacity participation certificate."
    },

    {
        id: "c7",
        title: "Digital Egypt Cubs Initiative — Lite One",
        issuer: "Udacity",
        image: "certificates/certificate-07.jpg",
        date: "2023",
        link: "",
        description: "Udacity participation certificate."
    },

    {
        id: "c8",
        title: "Information Representation & Data Organization",
        issuer: "Huawei ICT Academy",
        image: "certificates/certificate-08.jpg",
        date: "",
        link: "",
        description: "Huawei ICT Academy certificate."
    },

    {
        id: "c9",
        title: "Development & Basic Concepts of Cloud Computing",
        issuer: "Huawei ICT Academy",
        image: "certificates/certificate-09.jpg",
        date: "",
        link: "",
        description: "Huawei ICT Academy certificate."
    },

    {
        id: "c10",
        title: "Python Programming Basics",
        issuer: "Huawei ICT Academy",
        image: "certificates/certificate-10.jpg",
        date: "",
        link: "",
        description: "Huawei ICT Academy certificate."
    },

    {
        id: "c11",
        title: "AI Basic — Overview of AI",
        issuer: "Huawei ICT Academy",
        image: "certificates/certificate-11.jpg",
        date: "",
        link: "",
        description: "Huawei ICT Academy certificate."
    },

    {
        id: "c12",
        title: "Cloud Basics",
        issuer: "Huawei ICT Academy",
        image: "certificates/certificate-12.jpg",
        date: "",
        link: "",
        description: "Huawei ICT Academy certificate."
    },

    {
        id: "c13",
        title: "Data Management & Analytics",
        issuer: "Huawei ICT Academy",
        image: "certificates/certificate-13.jpg",
        date: "",
        link: "",
        description: "Huawei ICT Academy certificate."
    },

    {
        id: "c14",
        title: "Top 50 Programmers — 2026",
        issuer: "Ezz Nofal",
        image: "",
        date: "2026",
        link: "",
        pdf: "my certificate.pdf",
        description:
            "Official 2026 Top 50 programmers certificate and medal achievement."
    }
];


/* =========================================================
   9. LOCAL DATA
   ========================================================= */

const defaultProjects =
    projects.map(
        (project, index) => ({
            ...project,
            id: String(index + 1)
        })
    );

let portfolioProjects =
    JSON.parse(
        localStorage.getItem("portfolioProjects") || "null"
    ) || defaultProjects;

let portfolioCertificates =
    JSON.parse(
        localStorage.getItem("portfolioCertificates") || "null"
    ) || defaultCertificates;


/* =========================================================
   10. HELPERS
   ========================================================= */

function esc(value) {

    return String(value ?? "")
        .replace(
            /[&<>"']/g,
            character => ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }[character])
        );
}


function normalizeCategory(value) {

    return String(value || "")
        .trim()
        .toLowerCase();
}


function getProject(id) {

    return (
        portfolioProjects.find(
            project =>
                String(project.id) === String(id)
        ) ||
        portfolioProjects[Number(id)]
    );
}


/* =========================================================
   11. PROJECT ELEMENTS
   ========================================================= */

const projectGrid =
    document.getElementById("projectsGrid");

const certificateGrid =
    document.getElementById("certificateGrid");

const filterButtons =
    document.querySelectorAll(".filter-btn");


/* =========================================================
   12. PROJECT MODAL ELEMENTS
   ========================================================= */

const projectModal =
    document.getElementById("projectModal");

const projectModalClose =
    document.getElementById("projectModalClose");

const projectModalIcon =
    document.getElementById("projectModalIcon");

const projectModalCategory =
    document.getElementById("projectModalCategory");

const projectModalTitle =
    document.getElementById("projectModalTitle");

const projectModalDescription =
    document.getElementById("projectModalDescription");

const projectModalTags =
    document.getElementById("projectModalTags");

const projectModalFeatures =
    document.getElementById("projectModalFeatures");

const projectModalProblem =
    document.getElementById("projectModalProblem");

const projectModalSolution =
    document.getElementById("projectModalSolution");

const projectModalEngineering =
    document.getElementById("projectModalEngineering");

const projectModalQuality =
    document.getElementById("projectModalQuality");

const projectLiveLink =
    document.getElementById("projectLiveLink");

const projectGithubLink =
    document.getElementById("projectGithubLink");

const projectLinkNote =
    document.getElementById("projectLinkNote");


/* =========================================================
   13. PROJECT LINKS
   ========================================================= */

function setLinkState(element, url) {

    if (!element) return;

    if (url) {

        element.href = url;

        element.classList.remove(
            "disabled"
        );

        element.removeAttribute(
            "aria-disabled"
        );

    } else {

        element.href = "#";

        element.classList.add(
            "disabled"
        );

        element.setAttribute(
            "aria-disabled",
            "true"
        );
    }
}


/* =========================================================
   14. OPEN PROJECT
   ========================================================= */

function openProjectById(id) {

    const project =
        getProject(id);

    if (!project) return;

    if (projectModalIcon)
        projectModalIcon.innerHTML =
            project.icon || "◆";

    if (projectModalCategory)
        projectModalCategory.textContent =
            project.category || "PROJECT";

    if (projectModalTitle)
        projectModalTitle.textContent =
            project.title || "Project";

    if (projectModalDescription)
        projectModalDescription.textContent =
            project.description || "";

    if (projectModalTags)
        projectModalTags.innerHTML =
            (project.tags || [])
                .map(
                    tag =>
                        `<span>${esc(tag)}</span>`
                )
                .join("");

    if (projectModalFeatures)
        projectModalFeatures.innerHTML =
            (project.features || [])
                .map(
                    feature =>
                        `<li>${esc(feature)}</li>`
                )
                .join("");

    if (projectModalProblem)
        projectModalProblem.textContent =
            project.problem ||
            "Project goal and user need.";

    if (projectModalSolution)
        projectModalSolution.textContent =
            project.solution ||
            "A focused solution built around the project requirements.";

    if (projectModalEngineering)
        projectModalEngineering.textContent =
            project.engineering ||
            "Modern frontend development and reusable interaction patterns.";

    if (projectModalQuality)
        projectModalQuality.textContent =
            project.quality ||
            "Responsive behavior, usability and iterative testing.";

    setLinkState(
        projectLiveLink,
        project.live
    );

    setLinkState(
        projectGithubLink,
        project.github
    );

    if (projectLinkNote) {

        const hasLink =
            Boolean(
                project.live ||
                project.github
            );

        projectLinkNote.textContent =
            hasLink
                ? ""
                : "This project does not have a public live/GitHub link configured yet.";

        projectLinkNote.style.display =
            hasLink
                ? "none"
                : "block";
    }

    if (projectModal) {

        projectModal.classList.add("open");

        projectModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );
    }

    if (typeof track === "function") {
        track(
            "projectOpens",
            project.title
        );
    }
}

window.openProjectById =
    openProjectById;


/* =========================================================
   15. CLOSE PROJECT
   ========================================================= */

function closeProject() {

    if (!projectModal) return;

    projectModal.classList.remove(
        "open"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );
}

projectModalClose?.addEventListener(
    "click",
    closeProject
);

projectModal?.addEventListener(
    "click",
    event => {

        if (
            event.target === projectModal
        ) {
            closeProject();
        }
    }
);


/* =========================================================
   16. RENDER PROJECTS
   ========================================================= */

function renderProjects(
    filter = "all"
) {

    if (!projectGrid) return;

    const filtered =
        portfolioProjects.filter(
            project => {

                const category =
                    normalizeCategory(
                        project.category
                    );

                return (
                    filter === "all" ||
                    category === filter
                );
            }
        );

    projectGrid.innerHTML =
        filtered
            .map(
                (project, index) => {

                    const category =
                        normalizeCategory(
                            project.category
                        );

                    const tags =
                        (project.tags || [])
                            .map(
                                tag =>
                                    `<span>${esc(tag)}</span>`
                            )
                            .join("");

                    const live =
                        project.live
                            ? `
                                <a
                                    class="project-live"
                                    href="${esc(project.live)}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project ↗
                                </a>
                              `
                            : "";

                    const featured =
                        project.title === "QRLink"
                            ? "featured-project-card qr-featured"
                            : "";

                    return `
                        <article
                            class="glass project reveal ${featured}"
                            data-category="${esc(category)}"
                            data-project="${esc(project.id || index)}"
                        >

                            <div class="project-preview">
                                <span>
                                    ${esc(project.title)}
                                </span>

                                <small>
                                    ${esc(
                                        String(
                                            project.category ||
                                            "PROJECT"
                                        ).toUpperCase()
                                    )}
                                </small>
                            </div>

                            <div class="project-top">

                                <span>
                                    ${String(
                                        index + 1
                                    ).padStart(2, "0")}
                                </span>

                                <small>
                                    ${esc(
                                        String(
                                            project.category ||
                                            "PROJECT"
                                        ).toUpperCase()
                                    )}
                                </small>

                            </div>

                            <div class="project-icon">
                                ${project.icon || "◆"}
                            </div>

                            <h3>
                                ${esc(project.title)}
                            </h3>

                            <p>
                                ${esc(project.description)}
                            </p>

                            <div class="tags">
                                ${tags}
                            </div>

                            <div class="project-actions">

                                <button
                                    class="project-btn"
                                    type="button"
                                >
                                    View Details ↗
                                </button>

                                ${live}

                            </div>

                        </article>
                    `;
                }
            )
            .join("");

    projectGrid
        .querySelectorAll(".project-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    const card =
                        event.currentTarget.closest(
                            ".project"
                        );

                    if (!card) return;

                    openProjectById(
                        card.dataset.project
                    );
                }
            );
        });

    projectGrid
        .querySelectorAll(".project")
        .forEach(card => {

            revealObserver.observe(card);

            card.addEventListener(
                "click",
                event => {

                    if (
                        event.target.closest(
                            "a,button"
                        )
                    ) return;

                    openProjectById(
                        card.dataset.project
                    );
                }
            );
        });
}


/* =========================================================
   17. FILTERS
   ========================================================= */

filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(
                    btn =>
                        btn.classList.toggle(
                            "active",
                            btn === button
                        )
                );

                renderProjects(
                    button.dataset.filter ||
                    "all"
                );
            }
        );
    }
);


/* =========================================================
   18. CERTIFICATES
   ========================================================= */

function renderCertificates() {

    if (!certificateGrid) return;

    certificateGrid.innerHTML =
        portfolioCertificates
            .map(
                certificate => {

                    return `
                        <article
                            class="glass certificate-card reveal"
                        >

                            <div
                                class="
                                    certificate-image-wrap
                                    ${certificate.image
                                        ? ""
                                        : "certificate-empty-image"}
                                "
                            >

                                ${
                                    certificate.image

                                        ? `
                                            <img
                                                src="${esc(
                                                    certificate.image
                                                )}"
                                                alt="${esc(
                                                    certificate.title
                                                )}"
                                                loading="lazy"
                                                draggable="false"
                                            >
                                          `

                                        : `
                                            <div class="certificate-placeholder">
                                                🏆
                                                <span>
                                                    Certificate + Medal
                                                </span>
                                            </div>
                                          `
                                }

                            </div>

                            <div class="certificate-info">

                                <span>
                                    ${esc(
                                        certificate.issuer ||
                                        "Certificate"
                                    )}

                                    ${
                                        certificate.date
                                            ? ` • ${esc(
                                                certificate.date
                                            )}`
                                            : ""
                                    }
                                </span>

                                <h3>
                                    ${esc(
                                        certificate.title
                                    )}
                                </h3>

                                ${
                                    certificate.description
                                        ? `
                                            <p>
                                                ${esc(
                                                    certificate.description
                                                )}
                                            </p>
                                          `
                                        : ""
                                }

                                ${
                                    certificate.link
                                        ? `
                                            <a
                                                class="text-btn"
                                                href="${esc(
                                                    certificate.link
                                                )}"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Verify ↗
                                            </a>
                                          `
                                        : ""
                                }

                            </div>

                        </article>
                    `;
                }
            )
            .join("");

    certificateGrid
        .querySelectorAll("img")
        .forEach(image => {

            image.addEventListener(
                "contextmenu",
                event =>
                    event.preventDefault()
            );
        });

    certificateGrid
        .querySelectorAll(".reveal")
        .forEach(element =>
            revealObserver.observe(element)
        );

    addPdfButtons();
}


/* =========================================================
   19. CONTACT REMOVAL
   ========================================================= */

/*
   The old Contact navigation and section are removed
   automatically if they exist.

   QRLink becomes the primary connection/sharing
   experience instead.
*/

function removeOldContactUI() {

    document
        .querySelectorAll(
            '.nav-links a[href="#contact"], ' +
            'a[href="#contact"]'
        )
        .forEach(link => {

            const parentItem =
                link.closest("li");

            if (parentItem) {
                parentItem.remove();
            } else {
                link.remove();
            }
        });

    const contactSection =
        document.getElementById("contact");

    if (contactSection) {

        contactSection.classList.add(
            "qr-only-hidden-contact"
        );

        contactSection.style.display =
            "none";
    }
}

removeOldContactUI();


/* =========================================================
   20. CONTACT FORM
   ========================================================= */

/*
   Contact form is disabled because the new portfolio
   uses QRLink as the primary connection method.
*/

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            if (
                FORMSPREE_ENDPOINT
            ) {

                const formData =
                    new FormData(
                        contactForm
                    );

                fetch(
                    FORMSPREE_ENDPOINT,
                    {
                        method: "POST",
                        body: formData,
                        headers: {
                            Accept:
                                "application/json"
                        }
                    }
                )
                    .then(response => {

                        if (!response.ok) {
                            throw new Error(
                                "Form submission failed"
                            );
                        }

                        contactForm.reset();

                    })
                    .catch(error => {

                        console.warn(
                            "Formspree error:",
                            error
                        );
                    });

            }
        }
    );
}


/* =========================================================
   21. GITHUB
   ========================================================= */

const githubLink =
    document.getElementById("githubLink");

if (githubLink) {

    if (GITHUB_URL) {

        githubLink.href =
            GITHUB_URL;

        githubLink.target =
            "_blank";

        githubLink.rel =
            "noopener noreferrer";

    } else {

        githubLink.addEventListener(
            "click",
            event => {
                event.preventDefault();
            }
        );
    }
}


const githubRepos =
    document.getElementById(
        "githubRepos"
    );

const githubDashboardLink =
    document.getElementById(
        "githubDashboardLink"
    );


async function loadGitHub() {

    if (
        !githubRepos ||
        !GITHUB_USERNAME
    ) {
        return;
    }

    if (
        githubDashboardLink &&
        GITHUB_URL
    ) {
        githubDashboardLink.href =
            GITHUB_URL;
    }

    githubRepos.innerHTML =
        `
            <div class="github-loading glass">
                Loading public repositories…
            </div>
        `;

    try {

        const response =
            await fetch(
                `https://api.github.com/users/${encodeURIComponent(
                    GITHUB_USERNAME
                )}/repos?sort=updated&per_page=6`
            );

        if (!response.ok) {
            throw new Error(
                "GitHub request failed"
            );
        }

        const repos =
            await response.json();

        if (!repos.length) {

            githubRepos.innerHTML =
                `
                    <div class="github-empty glass">
                        <h3>
                            No public repositories found
                        </h3>

                        <p>
                            Check the GitHub username
                            in nofaaa.js.
                        </p>
                    </div>
                `;

            return;
        }

        githubRepos.innerHTML =
            repos
                .map(
                    repo => `
                        <article
                            class="glass github-repo reveal"
                        >

                            <div class="repo-top">
                                <span>
                                    ${esc(
                                        repo.language ||
                                        "CODE"
                                    )}
                                </span>

                                <span>
                                    ★
                                    ${Number(
                                        repo.stargazers_count ||
                                        0
                                    )}
                                </span>
                            </div>

                            <h3>
                                ${esc(repo.name)}
                            </h3>

                            <p>
                                ${esc(
                                    repo.description ||
                                    "Public repository by Ezz Nofal."
                                )}
                            </p>

                            <a
                                href="${esc(
                                    repo.html_url
                                )}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-btn"
                            >
                                View repository ↗
                            </a>

                        </article>
                    `
                )
                .join("");

        githubRepos
            .querySelectorAll(".reveal")
            .forEach(
                element =>
                    revealObserver.observe(
                        element
                    )
            );

    } catch (error) {

        console.warn(
            "GitHub loading failed:",
            error
        );

        githubRepos.innerHTML =
            `
                <div class="github-empty glass">

                    <h3>
                        GitHub could not be loaded
                    </h3>

                    <p>
                        Check the username or
                        network connection.
                    </p>

                </div>
            `;
    }
}

loadGitHub();


/* =========================================================
   22. CURSOR EFFECT
   ========================================================= */

const cursorDot =
    document.getElementById(
        "cursorDot"
    );

const cursorRing =
    document.getElementById(
        "cursorRing"
    );

if (
    cursorDot &&
    cursorRing &&
    window.matchMedia(
        "(pointer:fine)"
    ).matches
) {

    window.addEventListener(
        "mousemove",
        event => {

            cursorDot.style.left =
                `${event.clientX}px`;

            cursorDot.style.top =
                `${event.clientY}px`;

            cursorRing.style.left =
                `${event.clientX}px`;

            cursorRing.style.top =
                `${event.clientY}px`;
        }
    );

    document
        .querySelectorAll(
            "a, button, input, textarea, .skill"
        )
        .forEach(element => {

            element.addEventListener(
                "mouseenter",
                () =>
                    cursorRing.classList.add(
                        "hover"
                    )
            );

            element.addEventListener(
                "mouseleave",
                () =>
                    cursorRing.classList.remove(
                        "hover"
                    )
            );
        });
}


/* =========================================================
   23. ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            if (
                projectModal?.classList.contains(
                    "open"
                )
            ) {
                closeProject();
            }

            document
                .querySelectorAll(
                    ".article-modal.open, " +
                    ".video-modal.open, " +
                    ".project-modal.open"
                )
                .forEach(modal =>
                    modal.classList.remove(
                        "open"
                    )
                );

            document.body.classList.remove(
                "modal-open"
            );
        }
    }
);


/* =========================================================
   24. LANGUAGE SYSTEM
   ========================================================= */

(function () {

    const cfg =
        window.PORTFOLIO_CONFIG ||
        {};

    const langBtn =
        document.getElementById(
            "langBtn"
        );

    const dictionary = {

        en: {
            home: "Home",
            about: "About",
            achievements: "Achievements",
            skills: "Skills",
            journey: "Journey",
            dashboard: "Dashboard",
            github: "GitHub",
            featured: "Featured",
            projects: "Projects",
            certificates: "Certificates",
            blog: "Blog",
            process: "Process",
            services: "Services",
            contact: "Connect"
        },

        ar: {
            home: "الرئيسية",
            about: "عني",
            achievements: "الإنجازات",
            skills: "المهارات",
            journey: "المسيرة",
            dashboard: "لوحة المطور",
            github: "جيت هب",
            featured: "المميز",
            projects: "المشاريع",
            certificates: "الشهادات",
            blog: "المقالات",
            process: "طريقة العمل",
            services: "الخدمات",
            contact: "تواصل"
        }
    };

    let lang =
        localStorage.getItem(
            "portfolioLang"
        ) || "en";


    function setLang() {

        document.documentElement.lang =
            lang;

        document.body.dir =
            lang === "ar"
                ? "rtl"
                : "ltr";

        if (langBtn) {

            langBtn.textContent =
                lang === "en"
                    ? "AR"
                    : "EN";
        }

        document
            .querySelectorAll(
                ".nav-links a[data-key]"
            )
            .forEach(link => {

                const key =
                    link.dataset.key;

                if (
                    dictionary[lang][key]
                ) {

                    link.textContent =
                        dictionary[lang][key];
                }
            });

        localStorage.setItem(
            "portfolioLang",
            lang
        );
    }

    langBtn?.addEventListener(
        "click",
        () => {

            lang =
                lang === "en"
                    ? "ar"
                    : "en";

            setLang();
        }
    );

    setLang();


    /* =====================================================
       ARTICLES
       ===================================================== */

    const articles = [

        [
            "FRONTEND",
            "Building responsive interfaces without overcomplicating CSS",
            [
                "Start mobile-first.",
                "Use grid for page composition and flexbox for alignment.",
                "Keep spacing consistent.",
                "Test real content at narrow widths."
            ]
        ],

        [
            "JAVASCRIPT",
            "Small interactions that make a UI feel alive",
            [
                "Use progressive enhancement.",
                "Keep modal state explicit and keyboard-accessible.",
                "Prefer small event handlers.",
                "Respect reduced-motion preferences."
            ]
        ],

        [
            "QUALITY",
            "Testing a project before calling it finished",
            [
                "Check every navigation link.",
                "Test empty, invalid and valid forms.",
                "Resize from phone to desktop.",
                "Test keyboard focus and modal closing.",
                "Check more than one browser."
            ]
        ]
    ];


    const articleModal =
        document.getElementById(
            "articleModal"
        );

    document
        .querySelectorAll(
            ".article-btn"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const article =
                        articles[
                            Number(
                                button.dataset.article
                            )
                        ];

                    if (!article) return;

                    document.getElementById(
                        "articleCategory"
                    ).textContent =
                        article[0];

                    document.getElementById(
                        "articleTitle"
                    ).textContent =
                        article[1];

                    document.getElementById(
                        "articleBody"
                    ).innerHTML =
                        article[2]
                            .map(
                                item =>
                                    `<p>• ${esc(item)}</p>`
                            )
                            .join("");

                    articleModal?.classList.add(
                        "open"
                    );

                    document.body.classList.add(
                        "modal-open"
                    );
                }
            );
        });


    document
        .getElementById(
            "articleModalClose"
        )
        ?.addEventListener(
            "click",
            () => {

                articleModal?.classList.remove(
                    "open"
                );

                document.body.classList.remove(
                    "modal-open"
                );
            }
        );


    articleModal?.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                articleModal
            ) {

                articleModal.classList.remove(
                    "open"
                );

                document.body.classList.remove(
                    "modal-open"
                );
            }
        }
    );


    /* =====================================================
       INTRODUCTION
       ===================================================== */

    const videoModal =
        document.getElementById(
            "videoModal"
        );

    document
        .getElementById(
            "videoOpen"
        )
        ?.addEventListener(
            "click",
            () => {

                const url =
                    cfg.introVideoUrl ||
                    "";

                if (!url) return;

                window.open(
                    url,
                    "_blank",
                    "noopener,noreferrer"
                );
            }
        );


    document
        .getElementById(
            "videoClose"
        )
        ?.addEventListener(
            "click",
            () => {

                videoModal?.classList.remove(
                    "open"
                );

                document.body.classList.remove(
                    "modal-open"
                );
            }
        );


    videoModal?.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                videoModal
            ) {

                videoModal.classList.remove(
                    "open"
                );

                document.body.classList.remove(
                    "modal-open"
                );
            }
        }
    );

})();


/* =========================================================
   25. PORTFOLIO STATS
   ========================================================= */

function updatePortfolioStats() {

    const statProjects =
        document.getElementById(
            "statProjects"
        );

    const statCertificates =
        document.getElementById(
            "statCertificates"
        );

    const dashProjects =
        document.getElementById(
            "dashProjects"
        );

    const dashCertificates =
        document.getElementById(
            "dashCertificates"
        );

    if (statProjects) {

        statProjects.textContent =
            portfolioProjects.length + "+";
    }

    if (statCertificates) {

        statCertificates.textContent =
            portfolioCertificates.length;
    }

    if (dashProjects) {

        dashProjects.textContent =
            portfolioProjects.length + "+";
    }

    if (dashCertificates) {

        dashCertificates.textContent =
            portfolioCertificates.length;
    }
}

updatePortfolioStats();


/* =========================================================
   26. ADMIN MANAGER
   ========================================================= */

(function () {

    const key =
        "portfolioAdminHash";

    const adminTrigger =
        document.getElementById(
            "adminTrigger"
        );

    const adminModal =
        document.getElementById(
            "adminModal"
        );

    const adminClose =
        document.getElementById(
            "adminClose"
        );

    const adminLogin =
        document.getElementById(
            "adminLogin"
        );

    const adminContent =
        document.getElementById(
            "adminContent"
        );

    const adminPassword =
        document.getElementById(
            "adminPassword"
        );

    const adminLoginBtn =
        document.getElementById(
            "adminLoginBtn"
        );

    const adminLoginStatus =
        document.getElementById(
            "adminLoginStatus"
        );

    const projectForm =
        document.getElementById(
            "projectForm"
        );

    const certificateForm =
        document.getElementById(
            "certificateForm"
        );


    const projectFields = {

        id:
            document.getElementById(
                "editProjectId"
            ),

        title:
            document.getElementById(
                "projectTitle"
            ),

        category:
            document.getElementById(
                "projectCategory"
            ),

        icon:
            document.getElementById(
                "projectIcon"
            ),

        live:
            document.getElementById(
                "projectLive"
            ),

        github:
            document.getElementById(
                "projectGithub"
            ),

        tags:
            document.getElementById(
                "projectTags"
            ),

        description:
            document.getElementById(
                "projectDescription"
            ),

        features:
            document.getElementById(
                "projectFeatures"
            ),

        problem:
            document.getElementById(
                "projectProblem"
            ),

        solution:
            document.getElementById(
                "projectSolution"
            ),

        engineering:
            document.getElementById(
                "projectEngineering"
            ),

        quality:
            document.getElementById(
                "projectQuality"
            )
    };


    const certificateFields = {

        id:
            document.getElementById(
                "editCertificateId"
            ),

        title:
            document.getElementById(
                "certificateTitle"
            ),

        issuer:
            document.getElementById(
                "certificateIssuer"
            ),

        image:
            document.getElementById(
                "certificateImage"
            ),

        date:
            document.getElementById(
                "certificateDate"
            ),

        link:
            document.getElementById(
                "certificateLink"
            ),

        description:
            document.getElementById(
                "certificateDescription"
            )
    };


    const projectList =
        document.getElementById(
            "adminProjectList"
        );

    const certificateList =
        document.getElementById(
            "adminCertificateList"
        );


    async function hash(text) {

        const data =
            new TextEncoder().encode(
                text
            );

        const buffer =
            await crypto.subtle.digest(
                "SHA-256",
                data
            );

        return [
            ...new Uint8Array(
                buffer
            )
        ]
            .map(
                byte =>
                    byte
                        .toString(16)
                        .padStart(2, "0")
            )
            .join("");
    }


    function save() {

        localStorage.setItem(
            "portfolioProjects",
            JSON.stringify(
                portfolioProjects
            )
        );

        localStorage.setItem(
            "portfolioCertificates",
            JSON.stringify(
                portfolioCertificates
            )
        );

        renderProjects(
            document.querySelector(
                ".filter-btn.active"
            )?.dataset.filter ||
            "all"
        );

        renderCertificates();

        updatePortfolioStats();

        updateFeaturedLink();
    }


    function resetProject() {

        projectForm?.reset();

        if (
            projectFields.id
        ) {
            projectFields.id.value =
                "";
        }
    }


    function resetCertificate() {

        certificateForm?.reset();

        if (
            certificateFields.id
        ) {
            certificateFields.id.value =
                "";
        }
    }


    function updateFeaturedLink() {

        const featuredProject =
            portfolioProjects.find(
                project =>
                    project.title.toLowerCase() ===
                    "qrlink"
            );

        const link =
            document.getElementById(
                "featuredViewProject"
            );

        if (!link) return;

        link.onclick =
            event => {

                event.preventDefault();

                if (
                    featuredProject
                ) {

                    openProjectById(
                        featuredProject.id
                    );

                } else {

                    document
                        .getElementById(
                            "projects"
                        )
                        ?.scrollIntoView({
                            behavior:
                                "smooth"
                        });
                }
            };
    }


    function renderAdminProjects() {

        if (!projectList) return;

        projectList.innerHTML =
            portfolioProjects
                .map(
                    project => `
                        <div class="admin-item">

                            <div>

                                <strong>
                                    ${esc(
                                        project.title
                                    )}
                                </strong>

                                <span>
                                    ${esc(
                                        project.category ||
                                        "PROJECT"
                                    )}
                                </span>

                            </div>

                            <div>

                                <button
                                    type="button"
                                    class="admin-edit"
                                    data-project-edit="${esc(
                                        project.id
                                    )}"
                                >
                                    Edit
                                </button>

                                <button
                                    type="button"
                                    class="admin-delete"
                                    data-project-delete="${esc(
                                        project.id
                                    )}"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>
                    `
                )
                .join("");


        projectList
            .querySelectorAll(
                "[data-project-edit]"
            )
            .forEach(button => {

                button.onclick =
                    () => {

                        const project =
                            getProject(
                                button.dataset
                                    .projectEdit
                            );

                        if (!project) return;

                        Object.keys(
                            projectFields
                        )
                            .forEach(key => {

                                const field =
                                    projectFields[
                                        key
                                    ];

                                if (!field)
                                    return;

                                field.value =
                                    Array.isArray(
                                        project[key]
                                    )
                                        ? project[key].join(
                                            ","
                                        )
                                        : project[key] ||
                                          "";
                            });
                    };
            });


        projectList
            .querySelectorAll(
                "[data-project-delete]"
            )
            .forEach(button => {

                button.onclick =
                    () => {

                        const id =
                            button.dataset
                                .projectDelete;

                        portfolioProjects =
                            portfolioProjects.filter(
                                project =>
                                    String(
                                        project.id
                                    ) !==
                                    String(id)
                            );

                        save();

                        renderAdminProjects();

                        resetProject();
                    };
            });
    }


    function renderAdminCertificates() {

        if (!certificateList)
            return;

        certificateList.innerHTML =
            portfolioCertificates
                .map(
                    certificate => `
                        <div class="admin-item">

                            <div>

                                <strong>
                                    ${esc(
                                        certificate.title
                                    )}
                                </strong>

                                <span>
                                    ${esc(
                                        certificate.issuer ||
                                        "Certificate"
                                    )}
                                </span>

                            </div>

                            <div>

                                <button
                                    type="button"
                                    class="admin-edit"
                                    data-certificate-edit="${esc(
                                        certificate.id
                                    )}"
                                >
                                    Edit
                                </button>

                                <button
                                    type="button"
                                    class="admin-delete"
                                    data-certificate-delete="${esc(
                                        certificate.id
                                    )}"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>
                    `
                )
                .join("");


        certificateList
            .querySelectorAll(
                "[data-certificate-edit]"
            )
            .forEach(button => {

                button.onclick =
                    () => {

                        const certificate =
                            portfolioCertificates.find(
                                item =>
                                    String(
                                        item.id
                                    ) ===
                                    String(
                                        button.dataset
                                            .certificateEdit
                                    )
                            );

                        if (!certificate)
                            return;

                        Object.keys(
                            certificateFields
                        )
                            .forEach(key => {

                                const field =
                                    certificateFields[
                                        key
                                    ];

                                if (!field)
                                    return;

                                field.value =
                                    certificate[key] ||
                                    "";
                            });
                    };
            });


        certificateList
            .querySelectorAll(
                "[data-certificate-delete]"
            )
            .forEach(button => {

                button.onclick =
                    () => {

                        const id =
                            button.dataset
                                .certificateDelete;

                        portfolioCertificates =
                            portfolioCertificates.filter(
                                certificate =>
                                    String(
                                        certificate.id
                                    ) !==
                                    String(id)
                            );

                        save();

                        renderAdminCertificates();

                        resetCertificate();
                    };
            });
    }


    async function unlock() {

        const value =
            adminPassword?.value ||
            "";

        if (!value) {

            if (adminLoginStatus) {

                adminLoginStatus.textContent =
                    "Enter a password";
            }

            return;
        }


        const existingHash =
            localStorage.getItem(
                key
            );


        const newHash =
            await hash(value);


        /*
           First use:
           create a browser-local password.
        */

        if (!existingHash) {

            localStorage.setItem(
                key,
                newHash
            );

            if (adminLogin) {
                adminLogin.hidden =
                    true;
            }

            if (adminContent) {
                adminContent.hidden =
                    false;
            }

            renderAdminProjects();
            renderAdminCertificates();

            return;
        }


        /*
           Existing password.
        */

        if (
            newHash ===
            existingHash
        ) {

            if (adminLogin) {
                adminLogin.hidden =
                    true;
            }

            if (adminContent) {
                adminContent.hidden =
                    false;
            }

            if (adminLoginStatus) {
                adminLoginStatus.textContent =
                    "";
            }

            renderAdminProjects();
            renderAdminCertificates();

        } else {

            if (adminLoginStatus) {

                adminLoginStatus.textContent =
                    "Incorrect password";
            }

            if (adminPassword) {

                adminPassword.value =
                    "";

                adminPassword.focus();
            }
        }
    }


    let logoTaps = 0;
    let logoTimer;


    document
        .querySelector(".logo")
        ?.addEventListener(
            "click",
            event => {

                logoTaps++;

                clearTimeout(
                    logoTimer
                );

                logoTimer =
                    setTimeout(
                        () => {
                            logoTaps = 0;
                        },
                        1600
                    );

                if (
                    logoTaps >= 5
                ) {

                    logoTaps = 0;

                    event.preventDefault();

                    adminTrigger?.click();
                }
            }
        );


    adminTrigger?.addEventListener(
        "click",
        () => {

            adminModal?.classList.add(
                "open"
            );

            adminModal?.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.classList.add(
                "modal-open"
            );

            if (adminLogin) {
                adminLogin.hidden =
                    false;
            }

            if (adminContent) {
                adminContent.hidden =
                    true;
            }

            if (adminPassword) {
                adminPassword.value =
                    "";

                setTimeout(
                    () =>
                        adminPassword.focus(),
                    50
                );
            }

            if (adminLoginBtn) {

                adminLoginBtn.textContent =
                    localStorage.getItem(
                        key
                    )
                        ? "Unlock"
                        : "Create Password";
            }
        }
    );


    adminClose?.addEventListener(
        "click",
        () => {

            adminModal?.classList.remove(
                "open"
            );

            adminModal?.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.classList.remove(
                "modal-open"
            );
        }
    );


    adminModal?.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                adminModal
            ) {
                adminClose?.click();
            }
        }
    );


    adminLoginBtn?.addEventListener(
        "click",
        unlock
    );


    adminPassword?.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Enter"
            ) {

                event.preventDefault();

                unlock();
            }
        }
    );


    document
        .querySelectorAll(
            ".admin-tab"
        )
        .forEach(tab => {

            tab.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".admin-tab"
                        )
                        .forEach(item =>
                            item.classList.toggle(
                                "active",
                                item === tab
                            )
                        );

                    document
                        .querySelectorAll(
                            ".admin-tab-panel"
                        )
                        .forEach(panel =>
                            panel.classList.toggle(
                                "active",
                                panel.dataset
                                    .adminPanel ===
                                    tab.dataset
                                        .adminTab
                            )
                        );
                }
            );
        });


    projectForm?.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const id =
                projectFields.id?.value ||
                crypto.randomUUID();

            const project = {

                id,

                title:
                    projectFields.title
                        ?.value
                        .trim() || "",

                category:
                    projectFields.category
                        ?.value
                        .trim() || "",

                icon:
                    projectFields.icon
                        ?.value
                        .trim() ||
                    "◆",

                live:
                    projectFields.live
                        ?.value
                        .trim() || "",

                github:
                    projectFields.github
                        ?.value
                        .trim() || "",

                tags:
                    (
                        projectFields.tags
                            ?.value || ""
                    )
                        .split(",")
                        .map(
                            value =>
                                value.trim()
                        )
                        .filter(Boolean),

                description:
                    projectFields.description
                        ?.value
                        .trim() || "",

                features:
                    (
                        projectFields.features
                            ?.value || ""
                    )
                        .split("|")
                        .map(
                            value =>
                                value.trim()
                        )
                        .filter(Boolean),

                problem:
                    projectFields.problem
                        ?.value
                        .trim() || "",

                solution:
                    projectFields.solution
                        ?.value
                        .trim() || "",

                engineering:
                    projectFields.engineering
                        ?.value
                        .trim() || "",

                quality:
                    projectFields.quality
                        ?.value
                        .trim() || ""
            };


            const index =
                portfolioProjects.findIndex(
                    item =>
                        String(
                            item.id
                        ) ===
                        String(id)
                );


            if (index < 0) {

                portfolioProjects.push(
                    project
                );

            } else {

                portfolioProjects[index] =
                    project;
            }


            save();

            renderAdminProjects();

            resetProject();
        }
    );


    certificateForm?.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const id =
                document.getElementById(
                    "editCertificateId"
                )?.value ||
                crypto.randomUUID();


            const certificate = {

                id,

                title:
                    certificateFields.title
                        ?.value
                        .trim() || "",

                issuer:
                    certificateFields.issuer
                        ?.value
                        .trim() || "",

                image:
                    certificateFields.image
                        ?.value
                        .trim() || "",

                date:
                    certificateFields.date
                        ?.value
                        .trim() || "",

                link:
                    certificateFields.link
                        ?.value
                        .trim() || "",

                description:
                    certificateFields.description
                        ?.value
                        .trim() || ""
            };


            const index =
                portfolioCertificates.findIndex(
                    item =>
                        String(
                            item.id
                        ) ===
                        String(id)
                );


            if (index < 0) {

                portfolioCertificates.push(
                    certificate
                );

            } else {

                portfolioCertificates[index] =
                    {
                        ...portfolioCertificates[
                            index
                        ],
                        ...certificate
                    };
            }


            save();

            renderAdminCertificates();

            resetCertificate();
        }
    );


    document
        .getElementById(
            "projectReset"
        )
        ?.addEventListener(
            "click",
            resetProject
        );


    document
        .getElementById(
            "certificateReset"
        )
        ?.addEventListener(
            "click",
            resetCertificate
        );


    /* =====================================================
       EXPORT
       ===================================================== */

    document
        .getElementById(
            "exportData"
        )
        ?.addEventListener(
            "click",
            () => {

                const blob =
                    new Blob(
                        [
                            JSON.stringify(
                                {
                                    projects:
                                        portfolioProjects,

                                    certificates:
                                        portfolioCertificates
                                },
                                null,
                                2
                            )
                        ],
                        {
                            type:
                                "application/json"
                        }
                    );

                const url =
                    URL.createObjectURL(
                        blob
                    );

                const anchor =
                    document.createElement(
                        "a"
                    );

                anchor.href =
                    url;

                anchor.download =
                    "ezz-nofal-portfolio-data.json";

                document.body.appendChild(
                    anchor
                );

                anchor.click();

                anchor.remove();

                URL.revokeObjectURL(
                    url
                );
            }
        );


    /* =====================================================
       IMPORT
       ===================================================== */

    document
        .getElementById(
            "importData"
        )
        ?.addEventListener(
            "change",
            event => {

                const file =
                    event.target.files?.[0];

                if (!file) return;

                const reader =
                    new FileReader();

                reader.onload =
                    () => {

                        try {

                            const data =
                                JSON.parse(
                                    reader.result
                                );

                            if (
                                Array.isArray(
                                    data.projects
                                )
                            ) {

                                portfolioProjects =
                                    data.projects;
                            }

                            if (
                                Array.isArray(
                                    data.certificates
                                )
                            ) {

                                portfolioCertificates =
                                    data.certificates;
                            }

                            save();

                            renderAdminProjects();

                            renderAdminCertificates();

                        } catch (error) {

                            console.warn(
                                "Invalid portfolio data:",
                                error
                            );
                        }
                    };

                reader.readAsText(
                    file
                );
            }
        );


    /* =====================================================
       RESET
       ===================================================== */

    document
        .getElementById(
            "resetData"
        )
        ?.addEventListener(
            "click",
            () => {

                localStorage.removeItem(
                    "portfolioProjects"
                );

                localStorage.removeItem(
                    "portfolioCertificates"
                );

                portfolioProjects =
                    defaultProjects;

                portfolioCertificates =
                    defaultCertificates;

                renderProjects();

                renderCertificates();

                renderAdminProjects();

                renderAdminCertificates();

                updatePortfolioStats();

                updateFeaturedLink();
            }
        );


    /* =====================================================
       KEYBOARD SHORTCUT
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.ctrlKey &&
                event.shiftKey &&
                event.key.toLowerCase() ===
                    "a"
            ) {

                event.preventDefault();

                adminTrigger?.click();
            }
        }
    );


    renderAdminProjects();

    renderAdminCertificates();

    updateFeaturedLink();

})();


/* =========================================================
   27. EXPERIENCE ENGINE
   ========================================================= */

(function () {

    const $ =
        selector =>
            document.querySelector(
                selector
            );

    const $$ =
        selector =>
            [
                ...document.querySelectorAll(
                    selector
                )
            ];


    const safe =
        (functionToRun, fallback) => {

            try {
                return functionToRun();
            } catch (error) {

                console.warn(
                    "Portfolio feature:",
                    error
                );

                return fallback;
            }
        };


    /* =====================================================
       ANALYTICS
       ===================================================== */

    const metricKey =
        "ezzPortfolioMetricsV3";

    let metrics =
        safe(
            () =>
                JSON.parse(
                    localStorage.getItem(
                        metricKey
                    ) || "{}"
                ),
            {}
        ) || {};


    metrics.visits =
        (metrics.visits || 0) + 1;

    metrics.projectOpens =
        metrics.projectOpens || 0;

    metrics.certificateOpens =
        metrics.certificateOpens || 0;

    metrics.actions =
        Array.isArray(
            metrics.actions
        )
            ? metrics.actions
            : [];


    function track(
        type,
        label
    ) {

        if (
            type !==
            "actions"
        ) {

            metrics[type] =
                (metrics[type] || 0) + 1;
        }


        metrics.actions.push({

            type,

            label,

            date:
                new Date().toISOString()
        });


        metrics.actions =
            metrics.actions.slice(
                -250
            );


        localStorage.setItem(
            metricKey,
            JSON.stringify(
                metrics
            )
        );


        renderAnalytics();
    }


    window.track =
        track;


    function renderAnalytics() {

        [
            "visits",
            "projectOpens",
            "certificateOpens"
        ]
            .forEach(key => {

                const element =
                    $(
                        "#analytics" +
                        key.charAt(0).toUpperCase() +
                        key.slice(1)
                    );

                if (element) {

                    element.textContent =
                        metrics[key] || 0;
                }
            });


        const recent =
            $(
                "#analyticsRecent"
            );


        if (recent) {

            recent.innerHTML =
                metrics.actions
                    .slice(
                        -8
                    )
                    .reverse()
                    .map(
                        action =>
                            `
                                <div>
                                    •
                                    ${esc(
                                        action.type
                                    )}
                                    —
                                    ${esc(
                                        action.label ||
                                        "action"
                                    )}
                                    —
                                    ${new Date(
                                        action.date
                                    ).toLocaleString()}
                                </div>
                            `
                    )
                    .join("");
        }
    }


    localStorage.setItem(
        metricKey,
        JSON.stringify(
            metrics
        )
    );

    renderAnalytics();


    /* =====================================================
       COMMAND PALETTE
       ===================================================== */

    const commandModal =
        $("#commandModal");

    const commandInput =
        $("#commandInput");

    const commandList =
        $("#commandList");


    const commands = [

        [
            "Go to Projects",
            "Scroll to projects",
            "projects"
        ],

        [
            "Open Developer Lab",
            "Developer tools",
            "developer-lab"
        ],

        [
            "Open Certificates",
            "View certificates",
            "certificates"
        ],

        [
            "Open Dashboard",
            "Developer dashboard",
            "dashboard"
        ],

        [
            "Open Terminal",
            "Developer terminal",
            "terminal"
        ],

        [
            "Open Identity Card",
            "Developer identity",
            "identity"
        ],

        [
            "Recruiter View",
            "Condensed professional view",
            "recruiter"
        ],

        [
            "Presentation Mode",
            "Portfolio presentation",
            "presentation"
        ],

        [
            "Open QRLink",
            "Featured project",
            "qrlink"
        ],

        [
            "Surprise Me",
            "Jump to a random section",
            "surprise"
        ]
    ];


    function renderCommands(
        filter = ""
    ) {

        if (!commandList) return;

        commandList.innerHTML =
            commands
                .filter(
                    command =>
                        (
                            command[0] +
                            " " +
                            command[1]
                        )
                            .toLowerCase()
                            .includes(
                                filter.toLowerCase()
                            )
                )
                .map(
                    (command, index) =>
                        `
                            <button
                                class="command-item"
                                data-command="${index}"
                                type="button"
                            >

                                <span>
                                    ${esc(
                                        command[0]
                                    )}
                                </span>

                                <small>
                                    ${esc(
                                        command[1]
                                    )}
                                </small>

                            </button>
                        `
                )
                .join("");


        $$(".command-item")
            .forEach(button => {

                button.onclick =
                    () => {

                        runCommand(
                            commands[
                                Number(
                                    button.dataset
                                        .command
                                )
                            ][2]
                        );
                    };
            });
    }


    function openCommand() {

        commandModal?.classList.add(
            "open"
        );

        commandModal?.setAttribute(
            "aria-hidden",
            "false"
        );

        renderCommands();

        setTimeout(
            () =>
                commandInput?.focus(),
            30
        );
    }


    function closeCommand() {

        commandModal?.classList.remove(
            "open"
        );

        commandModal?.setAttribute(
            "aria-hidden",
            "true"
        );
    }


    function runCommand(
        command
    ) {

        closeCommand();


        if (
            command ===
            "terminal"
        ) {
            return openTerminal();
        }


        if (
            command ===
            "identity"
        ) {
            return openIdentity();
        }


        if (
            command ===
            "recruiter"
        ) {
            return openRecruiter();
        }


        if (
            command ===
            "presentation"
        ) {
            return openPresentation();
        }


        if (
            command ===
            "surprise"
        ) {
            return surprise();
        }


        if (
            command ===
            "qrlink"
        ) {

            const qrlink =
                portfolioProjects.find(
                    project =>
                        project.title ===
                        "QRLink"
                );

            if (qrlink) {

                return openProjectById(
                    qrlink.id
                );
            }
        }


        const element =
            $("#" + command);

        element?.scrollIntoView({
            behavior:
                "smooth"
        });
    }


    document.addEventListener(
        "keydown",
        event => {

            if (
                (event.ctrlKey ||
                    event.metaKey) &&
                event.key.toLowerCase() ===
                    "k"
            ) {

                event.preventDefault();

                openCommand();
            }


            if (
                event.key ===
                "Escape"
            ) {

                closeCommand();
            }
        }
    );


    commandInput?.addEventListener(
        "input",
        event =>
            renderCommands(
                event.target.value
            )
    );


    $("#globalSearch")
        ?.addEventListener(
            "focus",
            openCommand
        );


    $("#globalSearch")
        ?.addEventListener(
            "input",
            event => {

                openCommand();

                if (
                    commandInput
                ) {

                    commandInput.value =
                        event.target.value;
                }

                renderCommands(
                    event.target.value
                );
            }
        );


    /* =====================================================
       TERMINAL
       ===================================================== */

    const terminalModal =
        $("#terminalModal");

    const terminalOutput =
        $("#terminalOutput");

    const terminalInput =
        $("#terminalInput");


    function openTerminal() {

        terminalModal?.classList.add(
            "open"
        );

        terminalModal?.setAttribute(
            "aria-hidden",
            "false"
        );


        if (
            terminalOutput &&
            !terminalOutput.dataset.ready
        ) {

            terminalOutput.innerHTML =
                `
                    <div class="ok">
                        Welcome to Ezz Nofal Portfolio Terminal.
                    </div>

                    <div>
                        Type
                        <b>help</b>
                        to see available commands.
                    </div>
                `;

            terminalOutput.dataset.ready =
                "1";
        }


        setTimeout(
            () =>
                terminalInput?.focus(),
            30
        );
    }


    $("#openTerminal")
        ?.addEventListener(
            "click",
            openTerminal
        );


    $("#terminalClose")
        ?.addEventListener(
            "click",
            () => {

                terminalModal?.classList.remove(
                    "open"
                );
            }
        );


    $("#terminalForm")
        ?.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const command =
                    terminalInput
                        ?.value
                        .trim()
                        .toLowerCase();

                if (!command)
                    return;


                terminalOutput?.insertAdjacentHTML(
                    "beforeend",
                    `
                        <div class="cmd">
                            › ${esc(command)}
                        </div>
                    `
                );


                let output = "";


                if (
                    command ===
                    "help"
                ) {

                    output =
                        "about projects skills certificates dashboard qrlink clear date";

                } else if (
                    command ===
                    "about"
                ) {

                    output =
                        "Ezz Nofal — Software Developer and builder of interactive web products.";

                } else if (
                    command ===
                    "projects"
                ) {

                    output =
                        `${portfolioProjects.length}+ projects in the portfolio.`;

                } else if (
                    command ===
                    "skills"
                ) {

                    output =
                        "HTML • CSS • JavaScript • React • Python • Bootstrap • Testing";

                } else if (
                    command ===
                    "certificates"
                ) {

                    output =
                        `${portfolioCertificates.length} certificates currently listed.`;

                } else if (
                    command ===
                    "qrlink"
                ) {

                    output =
                        "Opening QRLink...";

                    const qrlink =
                        portfolioProjects.find(
                            project =>
                                project.title ===
                                "QRLink"
                        );

                    if (qrlink) {

                        openProjectById(
                            qrlink.id
                        );
                    }

                } else if (
                    command ===
                    "dashboard"
                ) {

                    output =
                        "Opening developer dashboard...";

                    $("#dashboard")
                        ?.scrollIntoView({
                            behavior:
                                "smooth"
                        });

                } else if (
                    command ===
                    "clear"
                ) {

                    if (terminalOutput) {
                        terminalOutput.innerHTML =
                            "";
                    }

                    if (terminalInput) {
                        terminalInput.value =
                            "";
                    }

                    return;

                } else if (
                    command ===
                    "date"
                ) {

                    output =
                        new Date().toString();

                } else {

                    output =
                        `Command not found: ${command}. Type help.`;
                }


                terminalOutput?.insertAdjacentHTML(
                    "beforeend",
                    `
                        <div class="${
                            output.startsWith(
                                "Command"
                            )
                                ? "err"
                                : "ok"
                        }">
                            ${esc(output)}
                        </div>
                    `
                );


                if (terminalOutput) {

                    terminalOutput.scrollTop =
                        terminalOutput.scrollHeight;
                }


                if (terminalInput) {
                    terminalInput.value =
                        "";
                }
            }
        );


    /* =====================================================
       IDENTITY
       ===================================================== */

    const identity =
        $("#identityModal");


    function openIdentity() {

        identity?.classList.add(
            "open"
        );

        identity?.setAttribute(
            "aria-hidden",
            "false"
        );


        const projectsCount =
            $("#idProjects");

        const certificatesCount =
            $("#idCertificates");


        if (projectsCount) {

            projectsCount.textContent =
                portfolioProjects.length +
                "+";
        }


        if (certificatesCount) {

            certificatesCount.textContent =
                portfolioCertificates.length;
        }
    }


    function closeIdentity() {

        identity?.classList.remove(
            "open"
        );

        identity?.setAttribute(
            "aria-hidden",
            "true"
        );
    }


    $("#openIdentity")
        ?.addEventListener(
            "click",
            openIdentity
        );


    $("#identityClose")
        ?.addEventListener(
            "click",
            closeIdentity
        );


    $("#identityExplore")
        ?.addEventListener(
            "click",
            () => {

                closeIdentity();

                $("#projects")
                    ?.scrollIntoView({
                        behavior:
                            "smooth"
                    });
            }
        );


    /* =====================================================
       RECRUITER MODE
       ===================================================== */

    const recruiter =
        $("#recruiterOverlay");


    function openRecruiter() {

        recruiter?.classList.add(
            "open"
        );

        recruiter?.setAttribute(
            "aria-hidden",
            "false"
        );
    }


    function closeRecruiter() {

        recruiter?.classList.remove(
            "open"
        );

        recruiter?.setAttribute(
            "aria-hidden",
            "true"
        );
    }


    $("#recruiterMode")
        ?.addEventListener(
            "click",
            openRecruiter
        );


    $("#recruiterClose")
        ?.addEventListener(
            "click",
            closeRecruiter
        );


    $("#recruiterBack")
        ?.addEventListener(
            "click",
            closeRecruiter
        );


    $("#recruiterExplore")
        ?.addEventListener(
            "click",
            () => {

                closeRecruiter();

                $("#projects")
                    ?.scrollIntoView({
                        behavior:
                            "smooth"
                    });
            }
        );


    /* =====================================================
       PRESENTATION MODE
       ===================================================== */

    const presentation =
        $("#presentationOverlay");

    const slide =
        $("#presentationContent");

    const count =
        $("#presentationCount");


    let presentationIndex = 0;


    const slides = [

        [
            "Ezz Nofal",
            "Software Developer • Interactive builder"
        ],

        [
            "Achievements",
            "2026 recognition • Certificate + Medal • FabLab Egypt internship"
        ],

        [
            "Featured Project",
            "QRLink — a modern digital identity and QR profile platform."
        ],

        [
            "Projects",
            `${portfolioProjects.length}+ projects across education, productivity, management and creative experiences.`
        ],

        [
            "Technology",
            "HTML • CSS • JavaScript • React • Python • Bootstrap • Testing"
        ],

        [
            "Let’s build",
            "Turn an idea into a working digital product."
        ]
    ];


    function paintSlide() {

        const current =
            slides[
                presentationIndex
            ];

        if (slide) {

            slide.innerHTML =
                `
                    <span class="mini-label">
                        ${esc(
                            current[0]
                                .toUpperCase()
                        )}
                    </span>

                    <h1>
                        ${esc(current[0])}
                    </h1>

                    <p>
                        ${esc(current[1])}
                    </p>
                `;
        }


        if (count) {

            count.textContent =
                `${
                    presentationIndex + 1
                } / ${slides.length}`;
        }
    }


    function openPresentation() {

        presentation?.classList.add(
            "open"
        );

        presentation?.setAttribute(
            "aria-hidden",
            "false"
        );

        presentationIndex =
            0;

        paintSlide();
    }


    function closePresentation() {

        presentation?.classList.remove(
            "open"
        );

        presentation?.setAttribute(
            "aria-hidden",
            "true"
        );
    }


    $("#presentationMode")
        ?.addEventListener(
            "click",
            openPresentation
        );


    $("#presentationClose")
        ?.addEventListener(
            "click",
            closePresentation
        );


    $("#presentationPrev")
        ?.addEventListener(
            "click",
            () => {

                presentationIndex =
                    (
                        presentationIndex +
                        slides.length -
                        1
                    ) %
                    slides.length;

                paintSlide();
            }
        );


    $("#presentationNext")
        ?.addEventListener(
            "click",
            () => {

                presentationIndex =
                    (
                        presentationIndex +
                        1
                    ) %
                    slides.length;

                paintSlide();
            }
        );


    /* =====================================================
       SKILL MAP
       ===================================================== */

    const skills = [

        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Python",
        "Bootstrap",
        "Testing",
        "PWA",
        "LocalStorage"
    ];


    const skillMap =
        $("#skillMap");


    if (skillMap) {

        skillMap.innerHTML =
            "";

        skills.forEach(
            skill => {

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "skill-node";

                button.textContent =
                    skill;


                button.onclick =
                    () => {

                        $$(".skill-node")
                            .forEach(
                                node =>
                                    node.classList.remove(
                                        "active"
                                    )
                            );

                        button.classList.add(
                            "active"
                        );


                        const matching =
                            portfolioProjects.filter(
                                project =>
                                    (
                                        project.tags ||
                                        []
                                    ).some(
                                        tag =>
                                            tag.toLowerCase() ===
                                            skill.toLowerCase()
                                    )
                            );


                        showSearchResults(
                            `${skill} appears in ${matching.length} project(s).`,
                            matching.map(
                                project => [
                                    project.title,
                                    "PROJECT"
                                ]
                            )
                        );
                    };


                skillMap.appendChild(
                    button
                );
            }
        );
    }


    /* =====================================================
       SEARCH RESULTS
       ===================================================== */

    function showSearchResults(
        heading,
        items
    ) {

        const box =
            $("#searchResults");

        const list =
            $("#searchResultsList");

        if (
            !box ||
            !list
        ) {
            return;
        }


        list.innerHTML =
            `
                <div class="search-result-item">
                    <b>
                        ${esc(heading)}
                    </b>
                </div>

                ${
                    items
                        .map(
                            item =>
                                `
                                    <div
                                        class="search-result-item"
                                        data-jump="${esc(
                                            item[0]
                                        )}"
                                    >

                                        <b>
                                            ${esc(
                                                item[0]
                                            )}
                                        </b>

                                        <span>
                                            ${esc(
                                                item[1]
                                            )}
                                        </span>

                                    </div>
                                `
                        )
                        .join("")
                }
            `;


        box.classList.add(
            "open"
        );

        box.setAttribute(
            "aria-hidden",
            "false"
        );


        list
            .querySelectorAll(
                "[data-jump]"
            )
            .forEach(element => {

                element.onclick =
                    () => {

                        box.classList.remove(
                            "open"
                        );


                        const project =
                            portfolioProjects.find(
                                item =>
                                    item.title ===
                                    element.dataset
                                        .jump
                            );


                        if (project) {

                            openProjectById(
                                project.id
                            );
                        }
                    };
            });
    }


    /* =====================================================
       PROJECT SEARCH
       ===================================================== */

    const globalSearch =
        $("#globalSearch");


    function doSearch(
        query
    ) {

        const value =
            query
                .trim()
                .toLowerCase();


        if (!value)
            return;


        const results = [];


        portfolioProjects
            .filter(
                project =>
                    (
                        project.title +
                        " " +
                        project.category +
                        " " +
                        project.description +
                        " " +
                        (
                            project.tags ||
                            []
                        ).join(" ")
                    )
                        .toLowerCase()
                        .includes(value)
            )
            .forEach(
                project =>
                    results.push([
                        project.title,
                        "PROJECT"
                    ])
            );


        portfolioCertificates
            .filter(
                certificate =>
                    (
                        certificate.title +
                        " " +
                        certificate.issuer +
                        " " +
                        certificate.description
                    )
                        .toLowerCase()
                        .includes(value)
            )
            .forEach(
                certificate =>
                    results.push([
                        certificate.title,
                        "CERTIFICATE"
                    ])
            );


        showSearchResults(
            `${results.length} result(s) for "${value}"`,
            results
        );
    }


    globalSearch?.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Enter"
            ) {

                event.preventDefault();

                closeCommand();

                doSearch(
                    globalSearch.value
                );
            }
        }
    );


    /* =====================================================
       PROJECT COMPARISON
       ===================================================== */

    const compareA =
        $("#compareA");

    const compareB =
        $("#compareB");

    const compareResult =
        $("#compareResult");


    if (
        compareA &&
        compareB &&
        compareResult
    ) {

        const options =
            portfolioProjects
                .map(
                    project =>
                        `
                            <option
                                value="${esc(
                                    project.id
                                )}"
                            >
                                ${esc(
                                    project.title
                                )}
                            </option>
                        `
                )
                .join("");


        compareA.innerHTML =
            options;

        compareB.innerHTML =
            options;


        if (
            portfolioProjects[1]
        ) {

            compareB.value =
                portfolioProjects[1]
                    .id;
        }


        function compareProjects() {

            const first =
                portfolioProjects.find(
                    project =>
                        String(
                            project.id
                        ) ===
                        String(
                            compareA.value
                        )
                ) ||
                portfolioProjects[0];


            const second =
                portfolioProjects.find(
                    project =>
                        String(
                            project.id
                        ) ===
                        String(
                            compareB.value
                        )
                ) ||
                portfolioProjects[1] ||
                first;


            if (
                !first ||
                !second
            ) {
                return;
            }


            const rows = [

                [
                    "Category",
                    first.category,
                    second.category
                ],

                [
                    "Technologies",
                    (
                        first.tags ||
                        []
                    ).join(" • "),
                    (
                        second.tags ||
                        []
                    ).join(" • ")
                ],

                [
                    "Features",
                    `${
                        (
                            first.features ||
                            []
                        ).length
                    } features`,
                    `${
                        (
                            second.features ||
                            []
                        ).length
                    } features`
                ],

                [
                    "Problem",
                    first.problem,
                    second.problem
                ],

                [
                    "Engineering",
                    first.engineering,
                    second.engineering
                ]
            ];


            compareResult.innerHTML =
                `
                    <table class="compare-table">

                        <tr>

                            <th></th>

                            <th>
                                ${esc(
                                    first.title
                                )}
                            </th>

                            <th>
                                ${esc(
                                    second.title
                                )}
                            </th>

                        </tr>

                        ${
                            rows
                                .map(
                                    row =>
                                        `
                                            <tr>

                                                <th>
                                                    ${esc(
                                                        row[0]
                                                    )}
                                                </th>

                                                <td>
                                                    ${esc(
                                                        row[1] ||
                                                        ""
                                                    )}
                                                </td>

                                                <td>
                                                    ${esc(
                                                        row[2] ||
                                                        ""
                                                    )}
                                                </td>

                                            </tr>
                                        `
                                )
                                .join("")
                        }

                    </table>
                `;
        }


        compareA.onchange =
            compareProjects;

        compareB.onchange =
            compareProjects;

        compareProjects();
    }


    /* =====================================================
       PLAYGROUND
       ===================================================== */

    const playgroundDefaults = {

        html:
            document.getElementById(
                "playgroundHTML"
            )?.value || "",

        css:
            document.getElementById(
                "playgroundCSS"
            )?.value || "",

        js:
            document.getElementById(
                "playgroundJS"
            )?.value || ""
    };


    function runPlayground() {

        const frame =
            $("#playgroundFrame");

        if (!frame)
            return;


        const html =
            $("#playgroundHTML")
                ?.value || "";

        const css =
            $("#playgroundCSS")
                ?.value || "";

        const js =
            $("#playgroundJS")
                ?.value || "";

        const status =
            $("#playgroundStatus");


        frame.srcdoc =
            `
                <!doctype html>

                <html>

                <head>

                    <meta
                        name="viewport"
                        content="width=device-width,initial-scale=1"
                    >

                    <style>
                        ${css}
                    </style>

                </head>

                <body>

                    ${html}

                    <script>

                        window.addEventListener(
                            "error",
                            event => {

                                parent.postMessage(
                                    {
                                        type:
                                            "playground-error",

                                        message:
                                            event.message
                                    },
                                    "*"
                                );
                            }
                        );

                        try {

                            ${js}

                        } catch (error) {

                            parent.postMessage(
                                {
                                    type:
                                        "playground-error",

                                    message:
                                        error.message
                                },
                                "*"
                            );
                        }

                    <\/script>

                </body>

                </html>
            `;


        if (status) {

            status.innerHTML =
                "<span></span> Running";

            setTimeout(
                () => {

                    status.innerHTML =
                        "<span></span> Preview updated";

                },
                180
            );
        }


        localStorage.setItem(
            "ezzPlayground",
            JSON.stringify({
                html,
                css,
                js
            })
        );
    }


    function resetPlayground() {

        [
            "HTML",
            "CSS",
            "JS"
        ]
            .forEach(
                type => {

                    const element =
                        $(
                            "#playground" +
                            type
                        );

                    if (element) {

                        element.value =
                            playgroundDefaults[
                                type.toLowerCase()
                            ] || "";
                    }
                }
            );

        runPlayground();
    }


    function examplePlayground() {

        const html =
            $("#playgroundHTML");

        const css =
            $("#playgroundCSS");

        const js =
            $("#playgroundJS");


        if (html) {

            html.value =
                `
                    <div class="counter">

                        <span>
                            LIVE COUNTER
                        </span>

                        <h2 id="count">
                            0
                        </h2>

                        <button id="plus">
                            +1
                        </button>

                        <button id="reset">
                            Reset
                        </button>

                    </div>
                `;
        }


        if (css) {

            css.value =
                `
                    body {
                        font-family: Arial;
                        padding: 30px;
                    }

                    .counter {
                        max-width: 360px;
                        margin: auto;
                        padding: 30px;
                        text-align: center;
                        border: 1px solid #414a68;
                        border-radius: 22px;
                    }

                    .counter span {
                        font-size: 10px;
                        letter-spacing: .16em;
                    }

                    .counter h2 {
                        font-size: 64px;
                        margin: 12px;
                    }

                    .counter button {
                        margin: 4px;
                        padding: 10px 16px;
                        border: 0;
                        border-radius: 10px;
                        cursor: pointer;
                    }
                `;
        }


        if (js) {

            js.value =
                `
                    let n = 0;

                    const count =
                        document.getElementById(
                            "count"
                        );

                    document.getElementById(
                        "plus"
                    ).onclick =
                        () =>
                            count.textContent =
                                ++n;

                    document.getElementById(
                        "reset"
                    ).onclick =
                        () => {

                            n = 0;

                            count.textContent =
                                n;
                        };
                `;
        }


        runPlayground();
    }


    function clearPlayground() {

        [
            "HTML",
            "CSS",
            "JS"
        ]
            .forEach(
                type => {

                    const element =
                        $(
                            "#playground" +
                            type
                        );

                    if (element) {

                        element.value =
                            "";
                    }
                }
            );

        runPlayground();
    }


    $("#runPlayground")
        ?.addEventListener(
            "click",
            runPlayground
        );

    $("#resetPlayground")
        ?.addEventListener(
            "click",
            resetPlayground
        );

    $("#examplePlayground")
        ?.addEventListener(
            "click",
            examplePlayground
        );

    $("#clearPlayground")
        ?.addEventListener(
            "click",
            clearPlayground
        );


    [
        "HTML",
        "CSS",
        "JS"
    ]
        .forEach(
            type => {

                $(
                    "#playground" +
                    type
                )
                    ?.addEventListener(
                        "input",
                        () => {

                            if (
                                $("#playgroundAuto")
                                    ?.checked
                            ) {

                                runPlayground();
                            }
                        }
                    );
            }
        );


    window.addEventListener(
        "message",
        event => {

            if (
                event.data?.type ===
                "playground-error"
            ) {

                const status =
                    $("#playgroundStatus");

                if (status) {

                    status.innerHTML =
                        `
                            <span></span>
                            Error:
                            ${esc(
                                event.data.message
                            )}
                        `;
                }
            }
        }
    );


    try {

        const saved =
            JSON.parse(
                localStorage.getItem(
                    "ezzPlayground"
                ) || "null"
            );


        if (saved) {

            const html =
                $("#playgroundHTML");

            const css =
                $("#playgroundCSS");

            const js =
                $("#playgroundJS");


            if (html)
                html.value =
                    saved.html ||
                    html.value;


            if (css)
                css.value =
                    saved.css ||
                    css.value;


            if (js)
                js.value =
                    saved.js ||
                    js.value;
        }

    } catch (error) {

        console.warn(
            "Playground restore failed:",
            error
        );
    }


    runPlayground();


    /* =====================================================
       SURPRISE
       ===================================================== */

    function surprise() {

        const ids = [

            "dashboard",
            "developer-lab",
            "featured",
            "projects",
            "certificates",
            "blog"
        ];


        const id =
            ids[
                Math.floor(
                    Math.random() *
                    ids.length
                )
            ];


        $("#" + id)
            ?.scrollIntoView({
                behavior:
                    "smooth"
            });


        track(
            "actions",
            "surprise navigation"
        );
    }


    $("#surpriseMe")
        ?.addEventListener(
            "click",
            surprise
        );


    /* =====================================================
       ASSISTANT
       ===================================================== */

    const assistantButton =
        document.createElement(
            "button"
        );

    assistantButton.id =
        "assistantBtn";

    assistantButton.type =
        "button";

    assistantButton.textContent =
        "AI";

    assistantButton.setAttribute(
        "aria-label",
        "Open Ezz Nofal portfolio assistant"
    );


    document.body.appendChild(
        assistantButton
    );


    const assistant =
        document.createElement(
            "div"
        );

    assistant.id =
        "assistantPanel";


    assistant.innerHTML =
        `
            <div class="assistant-head">

                <div>

                    <b>
                        Ezz Assistant
                    </b>

                    <small>
                        Portfolio knowledge base
                    </small>

                </div>

                <button
                    type="button"
                    id="assistantClose"
                    aria-label="Close assistant"
                >
                    ×
                </button>

            </div>


            <div
                class="assistant-body"
                id="assistantBody"
            >

                <div class="assistant-msg bot">

                    Hi! I can tell you about
                    Ezz Nofal, QRLink,
                    projects, skills,
                    certificates and
                    portfolio features.

                </div>

            </div>


            <div class="assistant-suggestions">

                <button type="button">
                    Who is Ezz Nofal?
                </button>

                <button type="button">
                    Tell me about QRLink
                </button>

                <button type="button">
                    What are his achievements?
                </button>

            </div>


            <form id="assistantForm">

                <input
                    id="assistantInput"
                    placeholder="Ask about Ezz..."
                    autocomplete="off"
                >

                <button type="submit">
                    Send
                </button>

            </form>
        `;


    document.body.appendChild(
        assistant
    );


    const assistantFacts = {

        identity:
            "Ezz Nofal is a software developer and builder focused on modern websites, web applications, interactive interfaces and practical digital products.",

        name:
            "Ezz Nofal is the owner and creator behind this portfolio.",

        role:
            "Ezz presents himself as a Software Developer focused on frontend development, interactive interfaces and practical digital products.",

        skills:
            "His listed core skills include HTML, CSS, JavaScript, React, Python, Bootstrap, testing, PWA and browser-based application development.",

        projects:
            `The portfolio currently contains ${portfolioProjects.length}+ listed projects, including QRLink, StudyFlow, CODE Z, Learning Hub, Password Manager, Teacher Site, Best Market, Study Planner and Tender System.`,

        qrlink:
            "QRLink is the featured project. It is a digital identity and QR profile platform designed to bring multiple important links into one professional profile that can be shared through a single QR code.",

        studyflow:
            "StudyFlow is a student productivity platform built around schedules, tasks, study planning, goals, study-time tracking, streaks, achievements and PWA functionality.",

        codez:
            "CODE Z is a student-focused programming learning platform designed to make programming education more approachable.",

        achievements:
            "The portfolio documents a 2026 Top 50 programmers recognition with a certificate and medal, along with multiple learning and certification milestones.",

        certificates:
            `The certificate vault currently lists ${portfolioCertificates.length} certificates and recognition items.`,

        portfolio:
            "The portfolio includes project details, certificates, a developer dashboard, command palette, interactive terminal, local assistant, project comparison, live playground, analytics, recruiter mode, presentation mode and skills visualization.",

        dashboard:
            "The developer dashboard summarizes portfolio activity and technical information.",

        terminal:
            "The interactive terminal supports commands including help, about, projects, skills, certificates, dashboard, qrlink, clear and date.",

        recruiter:
            "Recruiter Mode provides a condensed professional presentation of the portfolio.",

        responsive:
            "The portfolio is designed to work across desktop, laptop, tablet and mobile layouts.",

        security:
            "The private portfolio manager uses browser-local password hashing and LocalStorage. This is client-side access control and should not be treated as server-grade authentication.",

        technologies:
            "The portfolio uses HTML, CSS and JavaScript for its main interface, with React, Python, Bootstrap, PWA and browser storage included in the wider technical stack.",

        learning:
            "The portfolio emphasizes continuous learning through projects, certificates, experimentation and practical development.",

        cv:
            "The CV download feature has intentionally been removed from this version.",

        contact:
            "The old Contact section has been removed. QRLink is now the primary digital connection and sharing experience."
    };


    const assistantAliases = [

        [
            /who (is|is this|is he|are you)/,
            "identity"
        ],

        [
            /ezz|nofal|developer|software engineer|software developer/,
            "identity"
        ],

        [
            /qrlink|qr link|qr profile/,
            "qrlink"
        ],

        [
            /project|work|built|builds/,
            "projects"
        ],

        [
            /skill|technology|tech stack|programming language/,
            "skills"
        ],

        [
            /studyflow|study flow/,
            "studyflow"
        ],

        [
            /code ?z|codez/,
            "codez"
        ],

        [
            /achievement|award|recognition|medal/,
            "achievements"
        ],

        [
            /certificate|certification|credential/,
            "certificates"
        ],

        [
            /portfolio|website|site|features/,
            "portfolio"
        ],

        [
            /dashboard|analytics|control panel/,
            "dashboard"
        ],

        [
            /terminal|command/,
            "terminal"
        ],

        [
            /recruiter/,
            "recruiter"
        ],

        [
            /responsive|mobile|tablet|laptop|phone/,
            "responsive"
        ],

        [
            /password|security|private manager/,
            "security"
        ],

        [
            /html|css|javascript|react|python|bootstrap|localstorage|pwa/,
            "technologies"
        ],

        [
            /learn|learning|education/,
            "learning"
        ],

        [
            /cv|resume/,
            "cv"
        ],

        [
            /contact|reach/,
            "contact"
        ]
    ];


    function assistantReply(
        question
    ) {

        const value =
            question
                .toLowerCase()
                .trim();


        if (!value) {

            return "Ask me something about Ezz Nofal or the portfolio.";
        }


        for (
            const [
                pattern,
                key
            ]
            of assistantAliases
        ) {

            if (
                pattern.test(
                    value
                )
            ) {

                return (
                    assistantFacts[
                        key
                    ]
                );
            }
        }


        if (
            /how many|number of|count/.test(
                value
            ) &&
            /project/.test(
                value
            )
        ) {

            return `
                There are currently
                ${portfolioProjects.length}
                listed projects in the portfolio.
            `;
        }


        if (
            /how many|number of|count/.test(
                value
            ) &&
            /certificate/.test(
                value
            )
        ) {

            return `
                There are currently
                ${portfolioCertificates.length}
                listed certificates.
            `;
        }


        if (
            /help|what can you do|questions/.test(
                value
            )
        ) {

            return `
                You can ask about Ezz Nofal,
                QRLink, projects, skills,
                StudyFlow, achievements,
                certificates, the portfolio,
                responsiveness or the developer tools.
            `;
        }


        return `
            I do not have a matching fact
            for that question yet.
        `;
    }


    function addAssistantMessage(
        type,
        message
    ) {

        const body =
            $("#assistantBody");

        if (!body)
            return;


        body.insertAdjacentHTML(
            "beforeend",
            `
                <div class="assistant-msg ${type}">
                    ${esc(message)}
                </div>
            `
        );


        body.scrollTop =
            body.scrollHeight;
    }


    assistantButton.addEventListener(
        "click",
        () => {

            assistant.classList.toggle(
                "open"
            );


            if (
                assistant.classList.contains(
                    "open"
                )
            ) {

                setTimeout(
                    () =>
                        $("#assistantInput")
                            ?.focus(),
                    50
                );
            }
        }
    );


    $("#assistantClose")
        ?.addEventListener(
            "click",
            () =>
                assistant.classList.remove(
                    "open"
                )
        );


    $("#assistantForm")
        ?.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const input =
                    $("#assistantInput");

                const question =
                    input?.value
                        .trim();


                if (!question)
                    return;


                addAssistantMessage(
                    "user",
                    question
                );


                addAssistantMessage(
                    "bot",
                    assistantReply(
                        question
                    )
                );


                if (input) {
                    input.value =
                        "";
                }
            }
        );


    assistant
        .querySelectorAll(
            ".assistant-suggestions button"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const question =
                            button.textContent.trim();


                        addAssistantMessage(
                            "user",
                            question
                        );


                        addAssistantMessage(
                            "bot",
                            assistantReply(
                                question
                            )
                        );
                    }
                );
            }
        );


    /* =====================================================
       EZZ EASTER EGG
       ===================================================== */

    let secret = "";


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key.length ===
                1
            ) {

                secret =
                    (
                        secret +
                        event.key.toUpperCase()
                    ).slice(-3);


                if (
                    secret ===
                    "EZZ"
                ) {

                    document.body.classList.add(
                        "ezz-secret"
                    );


                    setTimeout(
                        () =>
                            document.body.classList.remove(
                                "ezz-secret"
                            ),
                        3500
                    );


                    track(
                        "actions",
                        "EZZ easter egg"
                    );
                }
            }
        }
    );


    /* =====================================================
       CERTIFICATE PDF STORAGE
       ===================================================== */

    const PDF_DB =
        "ezzPortfolioFiles";

    const PDF_STORE =
        "certificates";


    function openPdfDB() {

        return new Promise(
            (
                resolve,
                reject
            ) => {

                const request =
                    indexedDB.open(
                        PDF_DB,
                        1
                    );


                request.onupgradeneeded =
                    () => {

                        if (
                            !request.result.objectStoreNames.contains(
                                PDF_STORE
                            )
                        ) {

                            request.result.createObjectStore(
                                PDF_STORE
                            );
                        }
                    };


                request.onsuccess =
                    () =>
                        resolve(
                            request.result
                        );


                request.onerror =
                    () =>
                        reject(
                            request.error
                        );
            }
        );
    }


    async function savePdfBlob(
        file
    ) {

        const db =
            await openPdfDB();


        const key =
            "pdf_" +
            Date.now() +
            "_" +
            Math.random()
                .toString(36)
                .slice(2);


        await new Promise(
            (
                resolve,
                reject
            ) => {

                const transaction =
                    db.transaction(
                        PDF_STORE,
                        "readwrite"
                    );


                transaction
                    .objectStore(
                        PDF_STORE
                    )
                    .put(
                        file,
                        key
                    );


                transaction.oncomplete =
                    resolve;

                transaction.onerror =
                    () =>
                        reject(
                            transaction.error
                        );
            }
        );


        return key;
    }


    async function getPdfBlob(
        key
    ) {

        const db =
            await openPdfDB();


        return new Promise(
            (
                resolve,
                reject
            ) => {

                const transaction =
                    db.transaction(
                        PDF_STORE,
                        "readonly"
                    );


                const request =
                    transaction
                        .objectStore(
                            PDF_STORE
                        )
                        .get(
                            key
                        );


                request.onsuccess =
                    () =>
                        resolve(
                            request.result
                        );

                request.onerror =
                    () =>
                        reject(
                            request.error
                        );
            }
        );
    }


    window.openCertificatePdf =
        async key => {

            try {

                const isExternalPath =
                    /^(https?:|\.\.?\/|[^/]+\.pdf$)/i.test(
                        key
                    );


                const blob =
                    isExternalPath
                        ? null
                        : await getPdfBlob(
                            key
                        );


                const url =
                    blob
                        ? URL.createObjectURL(
                            blob
                        )
                        : key;


                window.open(
                    url,
                    "_blank",
                    "noopener,noreferrer"
                );


                if (blob) {

                    setTimeout(
                        () =>
                            URL.revokeObjectURL(
                                url
                            ),
                        60000
                    );
                }

            } catch (error) {

                console.warn(
                    "PDF opening failed:",
                    error
                );
            }
        };


    function addPdfButtons() {

        if (!certificateGrid)
            return;


        const cards =
            certificateGrid.querySelectorAll(
                ".certificate-card"
            );


        cards.forEach(
            (card, index) => {

                const certificate =
                    portfolioCertificates[
                        index
                    ];


                if (
                    !certificate?.pdf
                ) {
                    return;
                }


                if (
                    card.querySelector(
                        ".certificate-pdf-btn"
                    )
                ) {
                    return;
                }


                const actions =
                    document.createElement(
                        "div"
                    );


                actions.className =
                    "certificate-actions";


                const button =
                    document.createElement(
                        "button"
                    );


                button.className =
                    "text-btn certificate-pdf-btn";


                button.type =
                    "button";


                button.textContent =
                    "View PDF ↗";


                button.addEventListener(
                    "click",
                    () => {

                        track(
                            "certificateOpens",
                            certificate.title
                        );


                        window.openCertificatePdf(
                            certificate.pdf
                        );
                    }
                );


                actions.appendChild(
                    button
                );


                card
                    .querySelector(
                        ".certificate-info"
                    )
                    ?.appendChild(
                        actions
                    );
            }
        );
    }


    const certificateObserver =
        new MutationObserver(
            () =>
                addPdfButtons()
        );


    if (certificateGrid) {

        certificateObserver.observe(
            certificateGrid,
            {
                childList: true,
                subtree: true
            }
        );
    }


    setTimeout(
        addPdfButtons,
        100
    );

})();


/* =========================================================
   28. FINAL INITIALIZATION
   ========================================================= */

renderProjects();

renderCertificates();

updatePortfolioStats();


/* =========================================================
   29. FEATURED QRLINK BUTTON
   ========================================================= */

(function setupFeaturedQRLink() {

    const button =
        document.getElementById(
            "featuredViewProject"
        );

    if (!button)
        return;


    const qrlink =
        portfolioProjects.find(
            project =>
                project.title.toLowerCase() ===
                "qrlink"
        );


    if (!qrlink)
        return;


    button.addEventListener(
        "click",
        event => {

            event.preventDefault();

            openProjectById(
                qrlink.id
            );
        }
    );

})();


/* =========================================================
   30. QRLink DIRECT ACCESS
   ========================================================= */

document
    .querySelectorAll(
        '[data-project="qrlink"]'
    )
    .forEach(
        element => {

            element.addEventListener(
                "click",
                () => {

                    const qrlink =
                        portfolioProjects.find(
                            project =>
                                project.title ===
                                "QRLink"
                        );


                    if (qrlink) {

                        openProjectById(
                            qrlink.id
                        );
                    }
                }
            );
        }
    );


/* =========================================================
   END
   ========================================================= */
