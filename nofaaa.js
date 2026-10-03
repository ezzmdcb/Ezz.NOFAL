

const PORTFOLIO_EMAIL = "YOUR-EMAIL@example.com";
const GITHUB_URL = "https://www.instagram.com/ezz.nofal";
const GITHUB_USERNAME = "";
const FORMSPREE_ENDPOINT = "";
const INTRO_VIDEO_URL = "https://qr-pro-roan.vercel.app/u/ezznofal";
window.PORTFOLIO_CONFIG = { githubUrl:GITHUB_URL, githubUsername:GITHUB_USERNAME, formspreeEndpoint:FORMSPREE_ENDPOINT, introVideoUrl:INTRO_VIDEO_URL };

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");
const scrollProgress = document.getElementById("scrollProgress");

function handleScroll() {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 180;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.offsetHeight) {
            current = section.id;
        }
    });

    navigationLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.style.width = scrollable > 0 ? `${(window.scrollY / scrollable) * 100}%` : "0%";
}
window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
revealElements.forEach(element => revealObserver.observe(element));

const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => topBtn.classList.toggle("show", window.scrollY > 600), { passive: true });
topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

document.getElementById("year").textContent = new Date().getFullYear();

const projects = [
    { title: "CODE Z", category: "EDUCATION", icon: "&lt;/&gt;", description: "A student-led educational platform designed to make programming learning simple, interactive, and approachable.", tags: ["HTML", "CSS", "JavaScript"], features: ["Student-friendly learning interface", "Structured lesson navigation", "Responsive educational pages", "Interactive course experience"], problem: "Make programming learning easier to approach for students.", solution: "A structured educational experience with clear navigation and accessible learning content.", engineering: "Responsive page architecture, reusable UI patterns and interactive browser-side behavior.", quality: "Responsive layouts, clear hierarchy and iterative usability refinement.", live: "", github: "" },
    { title: "Learning Hub", category: "WEB APP", icon: "LH", description: "A centralized learning environment for organizing educational content and resources.", tags: ["React", "Bootstrap", "JavaScript"], features: ["Centralized learning resources", "Component-based interface", "Responsive layout", "Organized content structure"], problem: "Keep educational resources organized in one accessible place.", solution: "A centralized interface that groups learning resources into a coherent workflow.", engineering: "Component-based UI and responsive layout patterns.", quality: "Consistent spacing, responsive behavior and clear information hierarchy.", live: "", github: "" },
    { title: "Password Manager", category: "SECURITY", icon: "🔐", description: "A password-management interface focused on organization, usability and browser-side data handling.", tags: ["JavaScript", "CSS", "HTML"], features: ["Local browser storage", "Password visibility controls", "Searchable entries", "Privacy-oriented interface"], problem: "Provide a simple interface for organizing credentials locally.", solution: "A browser-based interface for adding, searching and viewing stored entries.", engineering: "Client-side state and local persistence with interactive controls.", quality: "Clear states, focused interactions and responsive presentation.", live: "", github: "" },
    { title: "Teacher Site", category: "EDUCATION", icon: "ED", description: "A professional website concept for teachers to present courses and educational resources.", tags: ["HTML", "CSS", "JavaScript"], features: ["Course presentation", "Educational resources", "Responsive interface", "Clear information hierarchy"], problem: "Present teaching content in a professional and accessible format.", solution: "A focused website structure for courses, resources and teacher information.", engineering: "Semantic sections, responsive layouts and interactive UI elements.", quality: "Mobile support and readable content hierarchy.", live: "", github: "" },
    { title: "Best Market", category: "MARKETPLACE", icon: "BM", description: "A modern marketplace interface focused on products, categories and usability.", tags: ["React", "Bootstrap", "CSS"], features: ["Product-focused layout", "Category organization", "Responsive UI", "Reusable interface patterns"], problem: "Present products and categories in an easy-to-browse interface.", solution: "A marketplace-style experience with organized product presentation.", engineering: "Reusable UI patterns and responsive component layouts.", quality: "Consistent cards, spacing and responsive behavior.", live: "", github: "" },
    { title: "Study Planner", category: "PRODUCTIVITY", icon: "SP", description: "A productivity-focused planner designed to help students organize tasks and study priorities.", tags: ["React", "JavaScript", "Bootstrap"], features: ["Task organization", "Student-focused workflow", "Responsive design", "Productivity-oriented UI"], problem: "Help students keep study tasks visible and organized.", solution: "A focused planning interface for tasks, priorities and daily organization.", engineering: "Interactive state handling and responsive UI patterns.", quality: "Simple workflows, readable states and mobile-friendly design.", live: "", github: "" },
    { title: "Tender System", category: "MANAGEMENT", icon: "TS", description: "A dashboard-style system for organizing tender information with a structured UI.", tags: ["JavaScript", "CSS", "HTML"], features: ["Structured tender records", "Dashboard statistics", "Filtering and organization", "Export-ready workflow"], problem: "Organize tender records and make key information easier to review.", solution: "A structured dashboard with searchable records and management-oriented views.", engineering: "Client-side data handling, filters and dashboard interactions.", quality: "Clear information hierarchy and practical management workflows.", live: "", github: "" },
    { title: "Romantic Message", category: "CREATIVE", icon: "♡", description: "An animated interactive web experience focused on typography and visual storytelling.", tags: ["HTML", "CSS", "JavaScript"], features: ["Animated presentation", "Interactive storytelling", "Typography-focused design", "Responsive experience"], problem: "Turn a simple message into a memorable interactive experience.", solution: "A visual storytelling page combining animation, typography and interaction.", engineering: "CSS animation and browser-side interaction logic.", quality: "Responsive presentation and controlled motion.", live: "", github: "" },
    { title: "StudyFlow", category: "PRODUCTIVITY", icon: "SF", description: "A complete student productivity platform for planning, study tracking, goals, streaks, achievements and personal organization.", tags: ["HTML", "CSS", "JavaScript", "PWA"], features: ["Study dashboard", "Schedules and deadlines", "Tasks and goals", "Study-time tracking", "Streaks and achievements", "Responsive mobile experience", "PWA support", "Local persistence"], problem: "Students need a single workspace for planning study activities, tracking progress and staying consistent.", solution: "A responsive productivity system that combines planning, tracking, goals and progress feedback in one experience.", engineering: "Client-side state management, LocalStorage persistence, timers, responsive UI systems and progressive web app capabilities.", quality: "Mobile-first layouts, explicit UI states, feedback, validation and iterative feature testing.", live: "https://study-ezz.vercel.app", github: "" }
];

const defaultProjects = projects.map((project,index)=>({...project,id:String(index+1)}));
const defaultCertificates = [
 {id:"c1",title:"JavaScript — Level 3",issuer:"TOFAS",image:"certificates/certificate-01.jpg",date:"",link:"",description:"JavaScript achievement certificate."},
 {id:"c2",title:"JavaScript — Level 2",issuer:"TOFAS",image:"certificates/certificate-02.jpg",date:"",link:"",description:"JavaScript achievement certificate."},
 {id:"c3",title:"JavaScript — Level 1",issuer:"TOFAS",image:"certificates/certificate-03.jpg",date:"",link:"",description:"JavaScript achievement certificate."},
 {id:"c4",title:"Digital Transformation",issuer:"Microsoft",image:"certificates/certificate-04.jpg",date:"2023",link:"",description:"Microsoft Digital Transformation training certificate."},
 {id:"c5",title:"Digital Egypt Cubs Initiative — Level One",issuer:"Udacity",image:"certificates/certificate-05.jpg",date:"2024",link:"",description:"Udacity participation certificate."},
 {id:"c6",title:"Digital Egypt Cubs Initiative — Level Two",issuer:"Udacity",image:"certificates/certificate-06.jpg",date:"2025",link:"",description:"Udacity participation certificate."},
 {id:"c7",title:"Digital Egypt Cubs Initiative — Lite One",issuer:"Udacity",image:"certificates/certificate-07.jpg",date:"2023",link:"",description:"Udacity participation certificate."},
 {id:"c8",title:"Information Representation & Data Organization",issuer:"Huawei ICT Academy",image:"certificates/certificate-08.jpg",date:"",link:"",description:"Huawei ICT Academy certificate."},
 {id:"c9",title:"Development & Basic Concepts of Cloud Computing",issuer:"Huawei ICT Academy",image:"certificates/certificate-09.jpg",date:"",link:"",description:"Huawei ICT Academy certificate."},
 {id:"c10",title:"Python Programming Basics",issuer:"Huawei ICT Academy",image:"certificates/certificate-10.jpg",date:"",link:"",description:"Huawei ICT Academy certificate."},
 {id:"c11",title:"AI Basic — Overview of AI",issuer:"Huawei ICT Academy",image:"certificates/certificate-11.jpg",date:"",link:"",description:"Huawei ICT Academy certificate."},
 {id:"c12",title:"Cloud Basics",issuer:"Huawei ICT Academy",image:"certificates/certificate-12.jpg",date:"",link:"",description:"Huawei ICT Academy certificate."},
 {id:"c13",title:"Data Management & Analytics",issuer:"Huawei ICT Academy",image:"certificates/certificate-13.jpg",date:"",link:"",description:"Huawei ICT Academy certificate."},
 {id:"c14",title:"Top 50 Programmers — 2026",issuer:"Ezz Nofal",image:"",date:"2026",link:"",pdf:"my certificate.pdf",description:"Official 2026 Top 50 programmers certificate and medal achievement."}
];
let portfolioProjects = JSON.parse(localStorage.getItem("portfolioProjects")||"null") || defaultProjects;
let portfolioCertificates = JSON.parse(localStorage.getItem("portfolioCertificates")||"null") || defaultCertificates;
const projectGrid=document.getElementById("projectsGrid");
const certificateGrid=document.getElementById("certificateGrid");
const filterButtons=document.querySelectorAll(".filter-btn");
function esc(value){return String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));}
function normalizeCategory(value){return String(value||"").trim().toLowerCase();}
function renderProjects(filter="all"){
 if(!projectGrid)return;
 projectGrid.innerHTML=portfolioProjects.map((p,i)=>{const cat=normalizeCategory(p.category);if(filter!=="all"&&cat!==filter)return "";const tags=(p.tags||[]).map(t=>`<span>${esc(t)}</span>`).join("");const live=p.live?`<a class="project-live" href="${esc(p.live)}" target="_blank" rel="noopener noreferrer">View Project ↗</a>`:"";return `<article class="glass project reveal ${i===portfolioProjects.length-1?"featured-project-card":""}" data-category="${esc(cat)}" data-project="${esc(p.id||i)}"><div class="project-preview"><span>${esc(p.title)}</span><small>${esc(String(p.category||"PROJECT").toUpperCase())}</small></div><div class="project-top"><span>${String(i+1).padStart(2,"0")}</span><small>${esc(String(p.category||"PROJECT").toUpperCase())}</small></div><div class="project-icon">${p.icon||"◆"}</div><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="tags">${tags}</div><div class="project-actions"><button class="project-btn" type="button">View Details ↗</button>${live}</div></article>`}).join("");
 projectGrid.querySelectorAll(".project-btn").forEach(btn=>btn.addEventListener("click",e=>openProjectById(e.currentTarget.closest(".project").dataset.project)));
 projectGrid.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));
}
function renderCertificates(){
 if(!certificateGrid)return;
 certificateGrid.innerHTML=portfolioCertificates.map(c=>`<article class="glass certificate-card reveal"><div class="certificate-image-wrap ${c.image?"":"certificate-empty-image"}">${c.image?`<img src="${esc(c.image)}" alt="${esc(c.title)}" loading="lazy" draggable="false">`:`<div class="certificate-placeholder">🏆<span>Certificate + Medal</span></div>`}</div><div class="certificate-info"><span>${esc(c.issuer||"Certificate")}${c.date?` • ${esc(c.date)}`:""}</span><h3>${esc(c.title)}</h3>${c.description?`<p>${esc(c.description)}</p>`:""}${c.link?`<a class="text-btn" href="${esc(c.link)}" target="_blank" rel="noopener noreferrer">Verify ↗</a>`:""}</div></article>`).join("");
 certificateGrid.querySelectorAll("img").forEach(img=>{img.addEventListener("click",e=>e.preventDefault());img.addEventListener("dblclick",e=>e.preventDefault());});
 certificateGrid.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));
}
function getProject(indexOrId){return portfolioProjects.find(p=>String(p.id)===String(indexOrId)) || portfolioProjects[Number(indexOrId)]}
function openProjectById(id){const project=getProject(id);if(!project)return;projectModalIcon.innerHTML=project.icon||"◆";projectModalCategory.textContent=project.category||"PROJECT";projectModalTitle.textContent=project.title||"Project";projectModalDescription.textContent=project.description||"";projectModalTags.innerHTML=(project.tags||[]).map(tag=>`<span>${esc(tag)}</span>`).join("");projectModalFeatures.innerHTML=(project.features||[]).map(feature=>`<li>${esc(feature)}</li>`).join("");projectModalProblem.textContent=project.problem||"Project goal and user need.";projectModalSolution.textContent=project.solution||"A focused solution built around the project requirements.";projectModalEngineering.textContent=project.engineering||"Modern frontend development and reusable interaction patterns.";projectModalQuality.textContent=project.quality||"Responsive behavior, usability and iterative testing.";setLinkState(projectLiveLink,project.live);setLinkState(projectGithubLink,project.github);projectLinkNote.textContent=project.live||project.github?"":"This project does not have a public live/GitHub link configured yet. The full case study is available above.";projectLinkNote.style.display=project.live||project.github?"none":"block";projectModal.classList.add("open");projectModal.setAttribute("aria-hidden","false");document.body.classList.add("modal-open");track("projectOpens",project.title);}
filterButtons.forEach(button=>button.addEventListener("click",()=>{filterButtons.forEach(btn=>btn.classList.toggle("active",btn===button));renderProjects(button.dataset.filter)}));
renderProjects();
renderCertificates();

const projectModal = document.getElementById("projectModal");
const projectModalClose = document.getElementById("projectModalClose");
const projectModalIcon = document.getElementById("projectModalIcon");
const projectModalCategory = document.getElementById("projectModalCategory");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectModalDescription = document.getElementById("projectModalDescription");
const projectModalTags = document.getElementById("projectModalTags");
const projectModalFeatures = document.getElementById("projectModalFeatures");
const projectModalProblem = document.getElementById("projectModalProblem");
const projectModalSolution = document.getElementById("projectModalSolution");
const projectModalEngineering = document.getElementById("projectModalEngineering");
const projectModalQuality = document.getElementById("projectModalQuality");
const projectLiveLink = document.getElementById("projectLiveLink");
const projectGithubLink = document.getElementById("projectGithubLink");
const projectLinkNote = document.getElementById("projectLinkNote");

function setLinkState(element, url) {
    if (url) {
        element.href = url;
        element.classList.remove("disabled");
        element.removeAttribute("aria-disabled");
    } else {
        element.href = "#";
        element.classList.add("disabled");
        element.setAttribute("aria-disabled", "true");
    }
}

function openProject(index) {
    const project = projects[index];
    if (!project) return;
    projectModalIcon.innerHTML = project.icon;
    projectModalCategory.textContent = project.category;
    projectModalTitle.textContent = project.title;
    projectModalDescription.textContent = project.description;
    projectModalTags.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join("");
    projectModalFeatures.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join("");
    projectModalProblem.textContent = project.problem || "Project goal and user need.";
    projectModalSolution.textContent = project.solution || "A focused solution built around the project requirements.";
    projectModalEngineering.textContent = project.engineering || "Modern frontend development and reusable interaction patterns.";
    projectModalQuality.textContent = project.quality || "Responsive behavior, usability and iterative testing.";
    setLinkState(projectLiveLink, project.live);
    setLinkState(projectGithubLink, project.github);
    projectLinkNote.style.display = project.live || project.github ? "none" : "block";
    projectModal.classList.add("open");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeProject() {
    projectModal.classList.remove("open");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

projectModal.addEventListener("click",event=>{if(event.target===projectModal)closeProject();});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!PORTFOLIO_EMAIL || PORTFOLIO_EMAIL.includes("YOUR-EMAIL")) {
        return;
        return;
    }
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${PORTFOLIO_EMAIL}?subject=${subject}&body=${body}`;
});

const githubLink = document.getElementById("githubLink");
if (GITHUB_URL) {
    githubLink.href = GITHUB_URL;
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";
} else {
    githubLink.addEventListener("click", event => {
        event.preventDefault();
        return;
    });
}

const githubRepos = document.getElementById("githubRepos");
const githubDashboardLink = document.getElementById("githubDashboardLink");
async function loadGitHub() {
    if (!githubRepos || !GITHUB_USERNAME) return;
    if (githubDashboardLink && GITHUB_URL) { githubDashboardLink.href = GITHUB_URL; }
    githubRepos.innerHTML = '<div class="github-loading glass">Loading public repositories…</div>';
    try {
        const response = await fetch(`https://api.github.com/users/${encodeURIComponent(GITHUB_USERNAME)}/repos?sort=updated&per_page=6`);
        if (!response.ok) throw new Error("GitHub request failed");
        const repos = await response.json();
        githubRepos.innerHTML = repos.length ? repos.map(repo => `<article class="glass github-repo reveal"><div class="repo-top"><span>${repo.language || "CODE"}</span><span>★ ${repo.stargazers_count}</span></div><h3>${repo.name}</h3><p>${repo.description || "Public repository by Ezz Nofal."}</p><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="text-btn">View repository ↗</a></article>`).join("") : '<div class="github-empty glass"><h3>No public repositories found</h3><p>Check the GitHub username in nofaaa.js.</p></div>';
    } catch (error) {
        githubRepos.innerHTML = '<div class="github-empty glass"><h3>GitHub could not be loaded</h3><p>Check the username or network connection. Your portfolio still works normally without the API.</p></div>';
    }
}
loadGitHub();

const cursorDot = document.getElementById("cursorDot");
const cursorRing = document.getElementById("cursorRing");
if (window.matchMedia("(pointer:fine)").matches) {
    window.addEventListener("mousemove", event => {
        cursorDot.style.left = `${event.clientX}px`;
        cursorDot.style.top = `${event.clientY}px`;
        cursorRing.style.left = `${event.clientX}px`;
        cursorRing.style.top = `${event.clientY}px`;
    });
    document.querySelectorAll("a, button, input, textarea, .skill").forEach(element => {
        element.addEventListener("mouseenter", () => cursorRing.classList.add("hover"));
        element.addEventListener("mouseleave", () => cursorRing.classList.remove("hover"));
    });
}

document.addEventListener("keydown", event => {
    if (projectModal.classList.contains("open") && event.key === "Escape") closeProject();
});

(function(){
    const cfg = window.PORTFOLIO_CONFIG || {};
    const langBtn=document.getElementById('langBtn');
    const dictionary={en:{home:'Home',about:'About',achievements:'Achievements',skills:'Skills',journey:'Journey',dashboard:'Dashboard',github:'GitHub',featured:'Featured',projects:'Projects',certificates:'Certificates',blog:'Blog',process:'Process',services:'Services',contact:'Contact'},ar:{home:'الرئيسية',about:'عني',achievements:'الإنجازات',skills:'المهارات',journey:'المسيرة',dashboard:'لوحة المطور',github:'جيت هب',featured:'المميز',projects:'المشاريع',certificates:'الشهادات',blog:'المقالات',process:'طريقة العمل',services:'الخدمات',contact:'تواصل'}};
    let lang=localStorage.getItem('portfolioLang')||'en';
    function setLang(){document.documentElement.lang=lang;document.body.dir=lang==='ar'?'rtl':'ltr';if(langBtn)langBtn.textContent=lang==='en'?'AR':'EN';document.querySelectorAll('.nav-links a[data-key]').forEach(a=>a.textContent=dictionary[lang][a.dataset.key]);localStorage.setItem('portfolioLang',lang)}
    langBtn?.addEventListener('click',()=>{lang=lang==='en'?'ar':'en';setLang()});setLang();

    const articles=[['FRONTEND','Building responsive interfaces without overcomplicating CSS',['Start mobile-first.','Use grid for page composition and flexbox for alignment.','Keep spacing consistent.','Test real content at narrow widths.']],['JAVASCRIPT','Small interactions that make a UI feel alive',['Use progressive enhancement.','Keep modal state explicit and keyboard-accessible.','Prefer small event handlers.','Respect reduced-motion preferences.']],['QUALITY','Testing a project before calling it finished',['Check every navigation link.','Test empty, invalid and valid forms.','Resize from phone to desktop.','Test keyboard focus and modal closing.','Check more than one browser.']]];
    const am=document.getElementById('articleModal');
    document.querySelectorAll('.article-btn').forEach(btn=>btn.addEventListener('click',()=>{const a=articles[+btn.dataset.article];document.getElementById('articleCategory').textContent=a[0];document.getElementById('articleTitle').textContent=a[1];document.getElementById('articleBody').innerHTML=a[2].map(x=>`<p>• ${x}</p>`).join('');am.classList.add('open');document.body.classList.add('modal-open')}));
    document.getElementById('articleModalClose')?.addEventListener('click',()=>{am.classList.remove('open');document.body.classList.remove('modal-open')});am?.addEventListener('click',e=>{if(e.target===am){am.classList.remove('open');document.body.classList.remove('modal-open')}});

    const vm=document.getElementById('videoModal');
    document.getElementById('videoOpen')?.addEventListener('click', () => {
    const url = cfg.introVideoUrl || '';

    if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
});
    document.getElementById('videoClose')?.addEventListener('click',()=>{vm.classList.remove('open');document.body.classList.remove('modal-open')});vm?.addEventListener('click',e=>{if(e.target===vm){vm.classList.remove('open');document.body.classList.remove('modal-open')}});

    document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.article-modal.open,.video-modal.open,.project-modal.open').forEach(m=>m.classList.remove('open'));document.body.classList.remove('modal-open')}});
})();


function updatePortfolioStats(){const a=document.getElementById("statProjects"),b=document.getElementById("statCertificates"),c=document.getElementById("dashProjects"),d=document.getElementById("dashCertificates");if(a)a.textContent=portfolioProjects.length+"+";if(b)b.textContent=portfolioCertificates.length;if(c)c.textContent=portfolioProjects.length+"+";if(d)d.textContent=portfolioCertificates.length;}
updatePortfolioStats();

(function(){
 const key="portfolioAdminHash";
 const adminTrigger=document.getElementById("adminTrigger"),adminModal=document.getElementById("adminModal"),adminClose=document.getElementById("adminClose"),adminLogin=document.getElementById("adminLogin"),adminContent=document.getElementById("adminContent"),adminPassword=document.getElementById("adminPassword"),adminLoginBtn=document.getElementById("adminLoginBtn"),adminLoginStatus=document.getElementById("adminLoginStatus");
 const projectForm=document.getElementById("projectForm"),certificateForm=document.getElementById("certificateForm");
 const projectFields={id:document.getElementById("editProjectId"),title:document.getElementById("projectTitle"),category:document.getElementById("projectCategory"),icon:document.getElementById("projectIcon"),live:document.getElementById("projectLive"),github:document.getElementById("projectGithub"),tags:document.getElementById("projectTags"),description:document.getElementById("projectDescription"),features:document.getElementById("projectFeatures"),problem:document.getElementById("projectProblem"),solution:document.getElementById("projectSolution"),engineering:document.getElementById("projectEngineering"),quality:document.getElementById("projectQuality")};
 const certificateFields={id:document.getElementById("editCertificateId"),title:document.getElementById("certificateTitle"),issuer:document.getElementById("certificateIssuer"),image:document.getElementById("certificateImage"),date:document.getElementById("certificateDate"),link:document.getElementById("certificateLink"),description:document.getElementById("certificateDescription")};
 const projectList=document.getElementById("adminProjectList"),certificateList=document.getElementById("adminCertificateList");
 const hash=async text=>{const data=new TextEncoder().encode(text),buf=await crypto.subtle.digest("SHA-256",data);return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,"0")).join("")};
 const save=()=>{localStorage.setItem("portfolioProjects",JSON.stringify(portfolioProjects));localStorage.setItem("portfolioCertificates",JSON.stringify(portfolioCertificates));renderProjects(document.querySelector(".filter-btn.active")?.dataset.filter||"all");renderCertificates();updateFeaturedLink();updatePortfolioStats();};
 const resetProject=()=>{projectForm.reset();projectFields.id.value=""};
 const resetCertificate=()=>{certificateForm.reset();certificateFields.id.value=""};
 function updateFeaturedLink(){const study=portfolioProjects.find(p=>p.title.toLowerCase()==="studyflow"),a=document.getElementById("featuredViewProject");if(!a)return;a.onclick=()=>{if(study)window.openProjectById(study.id);else document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})};}
 function renderAdminProjects(){projectList.innerHTML=portfolioProjects.map(p=>`<div class="admin-item"><div><strong>${esc(p.title)}</strong><span>${esc(p.category||"PROJECT")}</span></div><div><button type="button" class="admin-edit" data-project-edit="${esc(p.id)}">Edit</button><button type="button" class="admin-delete" data-project-delete="${esc(p.id)}">Delete</button></div></div>`).join("");projectList.querySelectorAll("[data-project-edit]").forEach(b=>b.onclick=()=>{const p=getProject(b.dataset.projectEdit);if(!p)return;Object.keys(projectFields).forEach(k=>{if(projectFields[k])projectFields[k].value=Array.isArray(p[k])?p[k].join(","):p[k]||""});});projectList.querySelectorAll("[data-project-delete]").forEach(b=>b.onclick=()=>{portfolioProjects=portfolioProjects.filter(p=>String(p.id)!==String(b.dataset.projectDelete));save();renderAdminProjects();resetProject();});}
 function renderAdminCertificates(){certificateList.innerHTML=portfolioCertificates.map(c=>`<div class="admin-item"><div><strong>${esc(c.title)}</strong><span>${esc(c.issuer||"Certificate")}</span></div><div><button type="button" class="admin-edit" data-certificate-edit="${esc(c.id)}">Edit</button><button type="button" class="admin-delete" data-certificate-delete="${esc(c.id)}">Delete</button></div></div>`).join("");certificateList.querySelectorAll("[data-certificate-edit]").forEach(b=>b.onclick=()=>{const c=portfolioCertificates.find(x=>String(x.id)===String(b.dataset.certificateEdit));if(!c)return;Object.keys(certificateFields).forEach(k=>{if(certificateFields[k])certificateFields[k].value=c[k]||""});});certificateList.querySelectorAll("[data-certificate-delete]").forEach(b=>b.onclick=()=>{portfolioCertificates=portfolioCertificates.filter(c=>String(c.id)!==String(b.dataset.certificateDelete));save();renderAdminCertificates();resetCertificate();});}
 function unlock(){const value=adminPassword.value;if(!value)return;if(!localStorage.getItem(key)){hash(value).then(h=>{localStorage.setItem(key,h);adminLogin.hidden=true;adminContent.hidden=false;renderAdminProjects();renderAdminCertificates();});return;}hash(value).then(h=>{if(h===localStorage.getItem(key)){adminLogin.hidden=true;adminContent.hidden=false;adminLoginStatus.textContent="";renderAdminProjects();renderAdminCertificates()}else{adminLoginStatus.textContent="Incorrect password";adminPassword.value=""}})}
 let logoTaps=0,logoTimer;document.querySelector(".logo")?.addEventListener("click",e=>{logoTaps++;clearTimeout(logoTimer);logoTimer=setTimeout(()=>logoTaps=0,1600);if(logoTaps>=5){logoTaps=0;e.preventDefault();adminTrigger?.click()}});
 adminTrigger?.addEventListener("click",()=>{adminModal.classList.add("open");adminModal.setAttribute("aria-hidden","false");document.body.classList.add("modal-open");adminLogin.hidden=false;adminContent.hidden=true;adminPassword.focus();adminLoginBtn.textContent=localStorage.getItem(key)?"Unlock":"Create Password";});
 adminClose?.addEventListener("click",()=>{adminModal.classList.remove("open");adminModal.setAttribute("aria-hidden","true");document.body.classList.remove("modal-open")});
 adminModal?.addEventListener("click",e=>{if(e.target===adminModal)adminClose.click()});adminLoginBtn?.addEventListener("click",unlock);adminPassword?.addEventListener("keydown",e=>{if(e.key==="Enter")unlock()});
 document.querySelectorAll(".admin-tab").forEach(tab=>tab.addEventListener("click",()=>{document.querySelectorAll(".admin-tab").forEach(x=>x.classList.toggle("active",x===tab));document.querySelectorAll(".admin-tab-panel").forEach(x=>x.classList.toggle("active",x.dataset.adminPanel===tab.dataset.adminTab));}));
 projectForm?.addEventListener("submit",e=>{e.preventDefault();const id=projectFields.id.value||crypto.randomUUID();const p={id,title:projectFields.title.value.trim(),category:projectFields.category.value.trim(),icon:projectFields.icon.value.trim()||"◆",live:projectFields.live.value.trim(),github:projectFields.github.value.trim(),tags:projectFields.tags.value.split(",").map(x=>x.trim()).filter(Boolean),description:projectFields.description.value.trim(),features:projectFields.features.value.split("|").map(x=>x.trim()).filter(Boolean),problem:projectFields.problem.value.trim(),solution:projectFields.solution.value.trim(),engineering:projectFields.engineering.value.trim(),quality:projectFields.quality.value.trim()};const i=portfolioProjects.findIndex(x=>String(x.id)===String(id));if(i<0)portfolioProjects.push(p);else portfolioProjects[i]=p;save();renderAdminProjects();resetProject();});
 certificateForm?.addEventListener("submit",e=>{e.preventDefault();const id=certificateFields.id.value||crypto.randomUUID();const c={id,title:certificateFields.title.value.trim(),issuer:certificateFields.issuer.value.trim(),image:certificateFields.image.value.trim(),date:certificateFields.date.value.trim(),link:certificateFields.link.value.trim(),description:certificateFields.description.value.trim()};const i=portfolioCertificates.findIndex(x=>String(x.id)===String(id));if(i<0)portfolioCertificates.push(c);else portfolioCertificates[i]=c;save();renderAdminCertificates();resetCertificate();});
 document.getElementById("projectReset")?.addEventListener("click",resetProject);document.getElementById("certificateReset")?.addEventListener("click",resetCertificate);
 document.getElementById("exportData")?.addEventListener("click",()=>{const blob=new Blob([JSON.stringify({projects:portfolioProjects,certificates:portfolioCertificates},null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="ezz-nofal-portfolio-data.json";a.click();URL.revokeObjectURL(a.href)});
 document.getElementById("importData")?.addEventListener("change",e=>{const file=e.target.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(reader.result);if(Array.isArray(data.projects))portfolioProjects=data.projects;if(Array.isArray(data.certificates))portfolioCertificates=data.certificates;save();renderAdminProjects();renderAdminCertificates()}catch(_){}};reader.readAsText(file)});
 document.getElementById("resetData")?.addEventListener("click",()=>{localStorage.removeItem("portfolioProjects");localStorage.removeItem("portfolioCertificates");portfolioProjects=defaultProjects;portfolioCertificates=defaultCertificates;renderProjects();renderCertificates();renderAdminProjects();renderAdminCertificates();updateFeaturedLink()});
 document.addEventListener("keydown",e=>{if(e.ctrlKey&&e.shiftKey&&e.key.toLowerCase()==="a"){e.preventDefault();adminTrigger?.click()}if(e.key==="Escape"&&adminModal.classList.contains("open"))adminClose.click()});
 renderAdminProjects();renderAdminCertificates();updateFeaturedLink();
})();


/* ===== EZZ NOFAL EXPERIENCE ENGINE ===== */
(function(){
  const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const safe=(fn,fallback)=>{try{return fn()}catch(e){console.warn('Portfolio feature:',e);return fallback}};
  const metricKey='ezzPortfolioMetricsV2';
  let metrics=safe(()=>JSON.parse(localStorage.getItem(metricKey)||'{}'),{})||{};
  metrics.visits=(metrics.visits||0)+1; metrics.projectOpens=metrics.projectOpens||0; metrics.certificateOpens=metrics.certificateOpens||0; metrics.actions=metrics.actions||[];
  function track(type,label){if(type!=='actions')metrics[type]=(metrics[type]||0)+1;if(!Array.isArray(metrics.actions))metrics.actions=[];metrics.actions.push({type,label,date:new Date().toISOString()});metrics.actions=metrics.actions.slice(-250);localStorage.setItem(metricKey,JSON.stringify(metrics));renderAnalytics();}
  function renderAnalytics(){['visits','projectOpens','certificateOpens'].forEach(k=>{const el=$('#analytics'+k[0].toUpperCase()+k.slice(1));if(el)el.textContent=metrics[k]||0});const r=$('#analyticsRecent');if(r)r.innerHTML=(metrics.actions||[]).slice(-8).reverse().map(a=>`<div>• ${esc(a.type)} — ${esc(a.label||'action')} — ${new Date(a.date).toLocaleString()}</div>`).join('');}
  function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
  localStorage.setItem(metricKey,JSON.stringify(metrics));renderAnalytics();

  // Fixed private manager password: ezznofal@3112 (stored as a hash, never as plain text in localStorage).
  const fixedPasswordHash='fe966341d8e41dccbbd2a2f558ad2b892aa87a1769ceba287e6a62033550db77';
  const oldUnlock=window.__portfolioUnlock;
  if(oldUnlock){} // compatibility marker
  const adminBtn=$('#adminLoginBtn'), adminPass=$('#adminPassword'), adminStatus=$('#adminLoginStatus'), adminLogin=$('#adminLogin'), adminContent=$('#adminContent');
  async function fixedUnlock(){const value=adminPass?.value||''; if(!value){if(adminStatus)adminStatus.textContent='Enter the password';return} const data=new TextEncoder().encode(value),buf=await crypto.subtle.digest('SHA-256',data),h=[...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join(''); if(h===fixedPasswordHash){adminLogin.hidden=true;adminContent.hidden=false;adminStatus.textContent='';if(window.renderAdminProjectsExternal)window.renderAdminProjectsExternal()}else{adminStatus.textContent='Incorrect password';adminPass.value='';adminPass.focus()}}
  // The original manager listener remains; intercept it by cloning the button to remove old listeners.
  if(adminBtn){const clone=adminBtn.cloneNode(true);adminBtn.replaceWith(clone);clone.addEventListener('click',fixedUnlock);adminPass?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();fixedUnlock()}});clone.textContent='Unlock';$('#adminTrigger')?.addEventListener('click',()=>{clone.textContent='Unlock'})}
  const oldKey='portfolioAdminHash';localStorage.removeItem(oldKey);

  // Command palette
  const commandModal=$('#commandModal'), commandInput=$('#commandInput'), commandList=$('#commandList');
  const commands=[
    ['Go to Projects','Scroll to #projects','projects'],['Open Developer Lab','Scroll to #developer-lab','developer-lab'],['Open Certificates','Scroll to #certificates','certificates'],['Open Dashboard','Scroll to #dashboard','dashboard'],['Open Terminal','Developer terminal','terminal'],['Open Identity Card','Developer identity','identity'],['Recruiter View','Condensed professional view','recruiter'],['Presentation Mode','Fullscreen portfolio presentation','presentation'],['Surprise Me','Jump to a random section','surprise']
  ];
  function renderCommands(filter=''){commandList.innerHTML=commands.filter(c=>(c[0]+' '+c[1]).toLowerCase().includes(filter.toLowerCase())).map((c,i)=>`<button class="command-item" data-command="${i}" type="button"><span>${esc(c[0])}</span><small>${esc(c[1])}</small></button>`).join('');$$('.command-item').forEach(b=>b.onclick=()=>runCommand(commands[+b.dataset.command][2]));}
  function openCommand(){commandModal?.classList.add('open');commandModal?.setAttribute('aria-hidden','false');renderCommands();setTimeout(()=>commandInput?.focus(),30)}
  function closeCommand(){commandModal?.classList.remove('open');commandModal?.setAttribute('aria-hidden','true')}
  function runCommand(c){closeCommand();if(c==='terminal')return openTerminal();if(c==='identity')return openIdentity();if(c==='recruiter')return openRecruiter();if(c==='presentation')return openPresentation();if(c==='surprise')return surprise();const el=$('#'+c);el?.scrollIntoView({behavior:'smooth'});}
  document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openCommand()}if(e.key==='Escape')closeCommand()});
  commandInput?.addEventListener('input',e=>renderCommands(e.target.value));$('#globalSearch')?.addEventListener('focus',openCommand);$('#globalSearch')?.addEventListener('input',e=>{openCommand();commandInput.value=e.target.value;renderCommands(e.target.value)});$('#searchClose')?.addEventListener('click',()=>$('#searchResults')?.classList.remove('open'));

  // Terminal
  const terminalModal=$('#terminalModal'), terminalOutput=$('#terminalOutput'), terminalInput=$('#terminalInput');
  function openTerminal(){terminalModal?.classList.add('open');terminalModal?.setAttribute('aria-hidden','false');if(!terminalOutput.dataset.ready){terminalOutput.innerHTML='<div class="ok">Welcome to Ezz Nofal Portfolio Terminal.</div><div>Type <b>help</b> to see available commands.</div>';terminalOutput.dataset.ready='1'}setTimeout(()=>terminalInput?.focus(),30)}
  $('#openTerminal')?.addEventListener('click',openTerminal);$('#terminalClose')?.addEventListener('click',()=>terminalModal.classList.remove('open'));
  $('#terminalForm')?.addEventListener('submit',e=>{e.preventDefault();const cmd=terminalInput.value.trim().toLowerCase();if(!cmd)return;terminalOutput.insertAdjacentHTML('beforeend',`<div class="cmd">› ${esc(cmd)}</div>`);let out='';if(cmd==='help')out='about   projects   skills   certificates   dashboard   contact   clear   date';else if(cmd==='about')out='Ezz Nofal — Software Developer and builder of interactive web products.';else if(cmd==='projects')out=`${portfolioProjects.length}+ projects in the portfolio.`;else if(cmd==='skills')out='HTML • CSS • JavaScript • React • Python • Bootstrap • Testing';else if(cmd==='certificates')out=`${portfolioCertificates.length} certificates currently listed.`;else if(cmd==='dashboard')out='Opening developer dashboard...';else if(cmd==='contact')out='Scroll to the contact section to send a message.';else if(cmd==='date')out=new Date().toString();else if(cmd==='clear'){terminalOutput.innerHTML='';terminalInput.value='';return}else out=`Command not found: ${cmd}. Type help.`;terminalOutput.insertAdjacentHTML('beforeend',`<div class="${out.startsWith('Command')?'err':'ok'}">${esc(out)}</div>`);terminalOutput.scrollTop=terminalOutput.scrollHeight;terminalInput.value='';if(cmd==='dashboard')$('#dashboard')?.scrollIntoView({behavior:'smooth'})});

  // Developer identity card — intentionally no CV or QR actions.
  const identity=$('#identityModal');
  function openIdentity(){identity?.classList.add('open');identity?.setAttribute('aria-hidden','false');const ip=$('#idProjects'),ic=$('#idCertificates');if(ip)ip.textContent=portfolioProjects.length+'+';if(ic)ic.textContent=portfolioCertificates.length}
  function closeIdentity(){identity?.classList.remove('open');identity?.setAttribute('aria-hidden','true')}
  $('#openIdentity')?.addEventListener('click',openIdentity);
  $('#identityClose')?.addEventListener('click',closeIdentity);
  $('#identityExplore')?.addEventListener('click',()=>{closeIdentity();$('#projects')?.scrollIntoView({behavior:'smooth'})});

  // Recruiter view
  const recruiter=$('#recruiterOverlay');
  function openRecruiter(){recruiter?.classList.add('open');recruiter?.setAttribute('aria-hidden','false')}
  function closeRecruiter(){recruiter?.classList.remove('open');recruiter?.setAttribute('aria-hidden','true')}
  $('#recruiterMode')?.addEventListener('click',openRecruiter);
  $('#recruiterClose')?.addEventListener('click',closeRecruiter);
  $('#recruiterBack')?.addEventListener('click',closeRecruiter);
  $('#recruiterExplore')?.addEventListener('click',()=>{closeRecruiter();$('#projects')?.scrollIntoView({behavior:'smooth'})});

  // Presentation mode
  const presentation=$('#presentationOverlay'), slide=$('#presentationContent'), count=$('#presentationCount');let pi=0;const slides=[['Ezz Nofal','Software Developer • Interactive builder'],['Achievements','2026 recognition • Certificate + Medal • FabLab Egypt internship'],['Projects',`${portfolioProjects.length}+ projects across education, productivity, management and creative experiences.`],['StudyFlow','A student productivity platform combining planning, tracking, goals, streaks, achievements and PWA features.'],['Technology','HTML • CSS • JavaScript • React • Python • Bootstrap • Testing'],['Let’s build','Have an idea? Use the contact section and turn it into a working product.']];function paintSlide(){const s=slides[pi];slide.innerHTML=`<span class="mini-label">${esc(s[0].toUpperCase())}</span><h1>${esc(s[0])}</h1><p>${esc(s[1])}</p>`;count.textContent=`${pi+1} / ${slides.length}`}function openPresentation(){presentation?.classList.add('open');presentation?.setAttribute('aria-hidden','false');pi=0;paintSlide()}function closePresentation(){presentation?.classList.remove('open');presentation?.setAttribute('aria-hidden','true')}$('#presentationMode')?.addEventListener('click',openPresentation);$('#presentationClose')?.addEventListener('click',closePresentation);$('#presentationPrev')?.addEventListener('click',()=>{pi=(pi+slides.length-1)%slides.length;paintSlide()});$('#presentationNext')?.addEventListener('click',()=>{pi=(pi+1)%slides.length;paintSlide()});

  // Activity heatmap: portfolio interactions + deterministic base activity.
  const heat=$('#activityHeatmap');if(heat){let total=0;for(let i=0;i<196;i++){const base=(i*17+7)%5;const recent=(metrics.actions||[]).length%4;const level=Math.min(4,Math.max(0,base+(i>180?recent:0)-1));const d=document.createElement('i');d.dataset.level=level;d.title=`Activity level ${level}`;heat.appendChild(d);total+=level}$('#activityTotal').textContent=`${total} activity points`}

  // Skill map
  const skills=['HTML','CSS','JavaScript','React','Python','Bootstrap','Testing','PWA','LocalStorage'];const sm=$('#skillMap');if(sm){skills.forEach(s=>{const b=document.createElement('button');b.type='button';b.className='skill-node';b.textContent=s;b.onclick=()=>{$$('.skill-node').forEach(x=>x.classList.remove('active'));b.classList.add('active');const matching=portfolioProjects.filter(p=>(p.tags||[]).some(t=>t.toLowerCase()===s.toLowerCase()));showSearchResults(`${s} appears in ${matching.length} project(s).`,matching.map(p=>[p.title,'PROJECT']))};sm.appendChild(b)})}
  function showSearchResults(head,items){const box=$('#searchResults'),list=$('#searchResultsList');if(!box||!list)return;list.innerHTML=`<div class="search-result-item"><b>${esc(head)}</b></div>`+items.map(x=>`<div class="search-result-item" data-jump="${esc(x[0])}"><b>${esc(x[0])}</b><span>${esc(x[1])}</span></div>`).join('');box.classList.add('open');box.setAttribute('aria-hidden','false');list.querySelectorAll('[data-jump]').forEach(el=>el.onclick=()=>{box.classList.remove('open');const p=portfolioProjects.find(x=>x.title===el.dataset.jump);if(p){openProjectById(p.id)}})}

  // Compare projects
  const ca=$('#compareA'),cb=$('#compareB'),cr=$('#compareResult');if(ca&&cb){[ca,cb].forEach(s=>s.innerHTML=portfolioProjects.map(p=>`<option value="${esc(p.id)}">${esc(p.title)}</option>`).join(''));if(portfolioProjects[1])cb.value=portfolioProjects[1].id;const compare=()=>{const a=portfolioProjects.find(p=>String(p.id)===ca.value)||portfolioProjects[0],b=portfolioProjects.find(p=>String(p.id)===cb.value)||portfolioProjects[1]||a;const rows=['Category','Technologies','Features','Problem','Engineering'].map(k=>{let va='',vb='';if(k==='Category'){va=a.category;vb=b.category}if(k==='Technologies'){va=(a.tags||[]).join(' • ');vb=(b.tags||[]).join(' • ')}if(k==='Features'){va=(a.features||[]).length+' features';vb=(b.features||[]).length+' features'}if(k==='Problem'){va=a.problem;vb=b.problem}if(k==='Engineering'){va=a.engineering;vb=b.engineering}return `<tr><th>${k}</th><td>${esc(va)}</td><td>${esc(vb)}</td></tr>`}).join('');cr.innerHTML=`<table class="compare-table"><tr><th></th><th>${esc(a.title)}</th><th>${esc(b.title)}</th></tr>${rows}</table>`};ca.onchange=compare;cb.onchange=compare;compare()}

  // Playground
  const playgroundDefaults={html:document.getElementById('playgroundHTML')?.value||'',css:document.getElementById('playgroundCSS')?.value||'',js:document.getElementById('playgroundJS')?.value||''};
  function runPlayground(){const frame=$('#playgroundFrame');if(!frame)return;const html=$('#playgroundHTML')?.value||'';const css=$('#playgroundCSS')?.value||'';const js=$('#playgroundJS')?.value||'';const status=$('#playgroundStatus');frame.srcdoc=`<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>${css}</style></head><body>${html}<script>window.addEventListener('error',e=>parent.postMessage({type:'playground-error',message:e.message},'*'));try{${js}}catch(error){parent.postMessage({type:'playground-error',message:error.message},'*')}</script></body></html>`;if(status)status.innerHTML='<span></span> Running';setTimeout(()=>{if(status)status.innerHTML='<span></span> Preview updated'},180);localStorage.setItem('ezzPlayground',JSON.stringify({html,css,js}))}
  function resetPlayground(){['HTML','CSS','JS'].forEach(k=>{const el=$('#playground'+k);if(el)el.value=playgroundDefaults[k.toLowerCase()]||''});runPlayground();}
  function examplePlayground(){if($('#playgroundHTML'))$('#playgroundHTML').value='<div class="counter"><span>LIVE COUNTER</span><h2 id="count">0</h2><button id="plus">+1</button><button id="reset">Reset</button></div>';if($('#playgroundCSS'))$('#playgroundCSS').value='body{font-family:Arial;padding:30px;background:#0b1020;color:#fff}.counter{max-width:360px;margin:auto;padding:30px;text-align:center;border:1px solid #414a68;border-radius:22px;background:#151b2d}.counter span{font-size:10px;letter-spacing:.16em;color:#a99aff}.counter h2{font-size:64px;margin:12px}.counter button{margin:4px;padding:10px 16px;border:0;border-radius:10px;background:#7c5ce7;color:#fff;cursor:pointer}';if($('#playgroundJS'))$('#playgroundJS').value="let n=0;const count=document.getElementById('count');document.getElementById('plus').onclick=()=>count.textContent=++n;document.getElementById('reset').onclick=()=>{n=0;count.textContent=n}";runPlayground()}
  function clearPlayground(){['HTML','CSS','JS'].forEach(k=>{const el=$('#playground'+k);if(el)el.value=''});runPlayground()}
  $('#runPlayground')?.addEventListener('click',runPlayground);$('#resetPlayground')?.addEventListener('click',resetPlayground);$('#examplePlayground')?.addEventListener('click',examplePlayground);$('#clearPlayground')?.addEventListener('click',clearPlayground);['HTML','CSS','JS'].forEach(k=>$('#playground'+k)?.addEventListener('input',()=>{if($('#playgroundAuto')?.checked)runPlayground()}));window.addEventListener('message',e=>{if(e.data?.type==='playground-error'){$('#playgroundStatus')&&( $('#playgroundStatus').innerHTML='<span></span> Error: '+esc(e.data.message));}});try{const saved=JSON.parse(localStorage.getItem('ezzPlayground')||'null');if(saved){$('#playgroundHTML').value=saved.html||$('#playgroundHTML').value;$('#playgroundCSS').value=saved.css||$('#playgroundCSS').value;$('#playgroundJS').value=saved.js||$('#playgroundJS').value}}catch{}runPlayground();

  // Surprise me
  function surprise(){const ids=['dashboard','developer-lab','featured','projects','certificates','blog','contact'];const id=ids[Math.floor(Math.random()*ids.length)];$('#'+id)?.scrollIntoView({behavior:'smooth'});track('actions','surprise navigation')}
  $('#surpriseMe')?.addEventListener('click',surprise);

  // Project/certificate tracking and certificate PDF viewer helpers.
  const originalRenderProjects=window.renderProjects;
  function openProjectById(id){const p=portfolioProjects.find(x=>String(x.id)===String(id));if(!p)return;track('projectOpens',p.title);if(typeof projectModal!=='undefined'&&projectModal){projectModalIcon.innerHTML=p.icon||"◆";projectModalCategory.textContent=p.category||"PROJECT";projectModalTitle.textContent=p.title||"Project";projectModalDescription.textContent=p.description||"";projectModalTags.innerHTML=(p.tags||[]).map(tag=>`<span>${esc(tag)}</span>`).join("");projectModalFeatures.innerHTML=(p.features||[]).map(feature=>`<li>${esc(feature)}</li>`).join("");projectModalProblem.textContent=p.problem||"Project goal and user need.";projectModalSolution.textContent=p.solution||"A focused solution built around the project requirements.";projectModalEngineering.textContent=p.engineering||"Modern frontend development and reusable interaction patterns.";projectModalQuality.textContent=p.quality||"Responsive behavior, usability and iterative testing.";setLinkState(projectLiveLink,p.live);setLinkState(projectGithubLink,p.github);projectLinkNote.textContent=p.live||p.github?"":"This project does not have a public live/GitHub link configured yet. The full case study is available above.";projectLinkNote.style.display=p.live||p.github?"none":"block";projectModal.classList.add('open');projectModal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');}else{$('#projects')?.scrollIntoView({behavior:'smooth'})}}
  window.openProjectById=openProjectById;
  document.addEventListener('click',e=>{const card=e.target.closest('.project');if(card&&!e.target.closest('a,button')){const id=card.dataset.project;if(id)openProjectById(id)}});

  // Search across projects/certificates.
  const gs=$('#globalSearch');function doSearch(q){q=q.trim().toLowerCase();if(!q)return;const items=[];portfolioProjects.filter(p=>(p.title+' '+p.category+' '+p.description+' '+(p.tags||[]).join(' ')).toLowerCase().includes(q)).forEach(p=>items.push([p.title,'PROJECT']));portfolioCertificates.filter(c=>(c.title+' '+c.issuer+' '+c.description).toLowerCase().includes(q)).forEach(c=>items.push([c.title,'CERTIFICATE']));showSearchResults(`${items.length} result(s) for “${q}”`,items)}gs?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();closeCommand();doSearch(gs.value)}});

  // Local portfolio assistant — rich offline knowledge base, no external API required.
  const assistantBtn=document.createElement('button');
  assistantBtn.id='assistantBtn'; assistantBtn.type='button'; assistantBtn.textContent='AI';
  assistantBtn.setAttribute('aria-label','Open Ezz Nofal portfolio assistant');
  document.body.appendChild(assistantBtn);
  const assistant=document.createElement('div'); assistant.id='assistantPanel';
  assistant.innerHTML='<div class="assistant-head"><div><b>Ezz Assistant</b><small>Portfolio knowledge base</small></div><button type="button" id="assistantClose" aria-label="Close assistant">×</button></div><div class="assistant-body" id="assistantBody"><div class="assistant-msg bot">Hi! I can tell you who Ezz Nofal is, his background, achievements, projects, skills, certificates, StudyFlow, CODE Z, internship, portfolio features and how to contact him.</div></div><div class="assistant-suggestions"><button type="button">Who is Ezz Nofal?</button><button type="button">Tell me about his projects</button><button type="button">What are his achievements?</button></div><form id="assistantForm"><input id="assistantInput" placeholder="Ask about Ezz..." autocomplete="off"><button type="submit">Send</button></form>';
  document.body.appendChild(assistant);

  const assistantFacts={
    identity:'Ezz Nofal is a software developer and builder who focuses on modern websites, web applications, interactive interfaces and practical digital products. This portfolio is his personal developer platform and showcases his projects, skills, certificates and achievements.',
    name:'Ezz Nofal is the owner and creator behind this portfolio. He presents himself as a software developer focused on building useful, responsive and interactive digital experiences.',
    role:'Ezz presents himself as a Software Engineer / Software Developer. His work centers on front-end web development, interactive UI, productivity applications and practical student-focused products.',
    skills:'His listed core skills include HTML, CSS, JavaScript, React, Python, Bootstrap and software testing. The portfolio also demonstrates LocalStorage, IndexedDB, PWA features, responsive design, animations, dashboards and browser-based application logic.',
    projects:`The portfolio contains ${portfolioProjects.length}+ listed projects. Examples include StudyFlow, CODE Z, Learning Hub, Password Manager, Teacher Site, Best Market, Study Planner, Tender System and a Romantic Message project. Each project can be explored through its details view when information is available.`,
    studyflow:'StudyFlow is a student productivity platform built around schedules, tasks, study planning, goals, study-time tracking, streaks, achievements, notes and PWA-style functionality. The portfolio describes it as a major active project designed for practical student use.',
    codez:'CODE Z is a student-led programming learning platform associated with Mustafa Kamel School students. Its goal is beginner-friendly programming education and it uses web technologies with pages for courses, profiles and learning content.',
    achievements:'The portfolio documents a 2026 recognition as one of the Top 50 programmers, represented with a certificate and medal. It also documents attendance at an internship in FabLab Egypt and multiple learning/certification milestones.',
    top50:'The portfolio states that Ezz officially became one of the Top 50 programmers in 2026 and received a certificate and medal for that recognition.',
    fablab:'The portfolio states that Ezz attended an internship at FabLab Egypt. The achievement is presented as part of his 2026 development experience.',
    certificates:`The certificate vault currently lists ${portfolioCertificates.length} certificates/recognition items. Certificates cover areas such as programming, cloud, AI, data and digital skills, and the private manager can add certificate PDFs directly in the browser.`,
    portfolio:'The portfolio is more than a static profile: it includes a developer dashboard, project details, certificate vault, command palette, interactive terminal, local assistant, project comparison, live playground, analytics, recruiter mode, presentation mode, skills visualization, search and an Easter egg.',
    dashboard:'The developer dashboard summarizes portfolio activity and technical information. A private control area can manage projects, certificates, imported/exported data and browser-local analytics.',
    terminal:'The interactive terminal is available from the portfolio tools. Commands include help, about, projects, skills, certificates, dashboard, contact, clear and date.',
    recruiter:'Recruiter Mode condenses the portfolio into a professional snapshot of core skills, highlights, featured work and contact options.',
    responsive:'The portfolio is designed for desktop, laptop, tablet and phone widths. Navigation, grids, modals, dashboard panels, project cards and the assistant have responsive rules for smaller screens.',
    contact:'Visitors can use the Contact section near the bottom of the portfolio. Social links for Instagram, GitHub and LinkedIn are also available where configured.',
    security:'The private portfolio manager uses a fixed password check and keeps editable portfolio data in the browser. This is client-side access control, not server-grade authentication.',
    technologies:'The portfolio uses plain HTML, CSS and JavaScript for its main interface and browser functionality, while the displayed skills include React and Python as part of Ezz’s wider technical stack.',
    learning:'The portfolio emphasizes continuous learning through certificates, projects, experimentation and practical builds rather than only listing technologies.',
    age:'The portfolio does not provide a public age field. The assistant should not invent personal details that are not documented.',
    cv:'The CV has intentionally been removed from this version of the portfolio, so there is no CV download feature.',
    qr:'The QR feature has intentionally been removed from this version of the portfolio.'
  };
  const assistantAliases=[
    [/who (is|is this|is he|are you)/,'identity'],[/ezz|nofal|person|developer|software engineer|software developer/,'identity'],[/project|work|built|builds/,'projects'],[/skill|technology|tech stack|programming language/,'skills'],[/studyflow|study flow/,'studyflow'],[/code ?z|codez/,'codez'],[/achievement|award|recognition|medal/,'achievements'],[/top ?50|top 50 programmer|programmers/,'top50'],[/fablab|internship/,'fablab'],[/certificate|certification|credential/,'certificates'],[/portfolio|website|site|features/,'portfolio'],[/dashboard|analytics|control panel/,'dashboard'],[/terminal|command/,'terminal'],[/recruiter/,'recruiter'],[/responsive|mobile|tablet|laptop|phone/,'responsive'],[/contact|reach|instagram|linkedin|github/,'contact'],[/password|security|private manager/,'security'],[/html|css|javascript|react|python|bootstrap|localstorage|indexeddb|pwa/,'technologies'],[/learn|learning|education/,'learning'],[/cv|resume/,'cv'],[/qr|qr code/,'qr']
  ];
  function assistantReply(question){
    const q=question.toLowerCase().trim();
    if(!q) return 'Ask me something about Ezz Nofal or the portfolio.';
    for(const [pattern,key] of assistantAliases){if(pattern.test(q))return assistantFacts[key];}
    if(/how many|number of|count/.test(q)&&/project/.test(q))return `There are currently ${portfolioProjects.length} listed projects in the portfolio.`;
    if(/how many|number of|count/.test(q)&&/certificate/.test(q))return `There are currently ${portfolioCertificates.length} listed certificates/recognition items.`;
    if(/help|what can you do|questions/.test(q))return 'You can ask: “Who is Ezz Nofal?”, “What projects has he built?”, “What are his skills?”, “What is StudyFlow?”, “What achievements does he have?”, “Tell me about FabLab Egypt”, “What is CODE Z?”, “Is the site responsive?”, or “What features are in the portfolio?”';
    return 'I do not have a matching fact for that question yet. Try asking about Ezz Nofal, his projects, skills, StudyFlow, CODE Z, certificates, Top 50 recognition, FabLab Egypt internship, portfolio features, responsiveness or contact.';
  }
  function addAssistantMessage(type,text){const body=$('#assistantBody');if(!body)return;body.insertAdjacentHTML('beforeend',`<div class="assistant-msg ${type}">${esc(text)}</div>`);body.scrollTop=body.scrollHeight}
  assistantBtn.addEventListener('click',()=>{assistant.classList.toggle('open');if(assistant.classList.contains('open'))setTimeout(()=>$('#assistantInput')?.focus(),50)});
  $('#assistantClose')?.addEventListener('click',()=>assistant.classList.remove('open'));
  $('#assistantForm')?.addEventListener('submit',e=>{e.preventDefault();const input=$('#assistantInput'),q=input.value.trim();if(!q)return;addAssistantMessage('user',q);addAssistantMessage('bot',assistantReply(q));input.value='';});
  assistant.querySelectorAll('.assistant-suggestions button').forEach(b=>b.addEventListener('click',()=>{const q=b.textContent;addAssistantMessage('user',q);addAssistantMessage('bot',assistantReply(q))}));

  // Easter egg: type EZZ anywhere.
  let secret='';document.addEventListener('keydown',e=>{if(e.key.length===1){secret=(secret+e.key.toUpperCase()).slice(-3);if(secret==='EZZ'){document.body.classList.add('ezz-secret');setTimeout(()=>document.body.classList.remove('ezz-secret'),3500);track('actions','EZZ easter egg')}}});

  // Certificate PDFs use IndexedDB for browser persistence, avoiding LocalStorage quota problems.
  const PDF_DB='ezzPortfolioFiles',PDF_STORE='certificates';
  function openPdfDB(){return new Promise((resolve,reject)=>{const r=indexedDB.open(PDF_DB,1);r.onupgradeneeded=()=>r.result.createObjectStore(PDF_STORE);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
  async function savePdfBlob(file){const db=await openPdfDB();const key='pdf_'+Date.now()+'_'+Math.random().toString(36).slice(2);await new Promise((res,rej)=>{const tx=db.transaction(PDF_STORE,'readwrite');tx.objectStore(PDF_STORE).put(file,key);tx.oncomplete=res;tx.onerror=()=>rej(tx.error)});return key}
  async function getPdfBlob(key){const db=await openPdfDB();return new Promise((res,rej)=>{const tx=db.transaction(PDF_STORE,'readonly');const r=tx.objectStore(PDF_STORE).get(key);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
  window.openCertificatePdf=async key=>{try{const isPath=/^(https?:|\.\.?\/|[^/]+\.pdf$)/i.test(key);const blob=isPath?null:await getPdfBlob(key);const url=blob?URL.createObjectURL(blob):key;window.open(url,'_blank','noopener,noreferrer')}catch(e){console.warn(e)}};
  // Add PDF view buttons to cards for the built-in certificate PDF and uploaded IDs.
  function addPdfButtons(){certificateGrid?.querySelectorAll('.certificate-card').forEach((card,i)=>{const c=portfolioCertificates[i];if(!c?.pdf)return;const actions=document.createElement('div');actions.className='certificate-actions';const b=document.createElement('button');b.className='text-btn';b.type='button';b.textContent='View PDF ↗';b.onclick=()=>{track('certificateOpens',c.title);window.openCertificatePdf(c.pdf)};actions.appendChild(b);card.querySelector('.certificate-info')?.appendChild(actions)})}
  const originalRenderCertificates=window.renderCertificates; // keep compatibility with the original renderer
  let pendingCertificateFile=null,pendingCertificateId='';
  const certificateFormEl=document.getElementById('certificateForm');
  certificateFormEl?.addEventListener('submit',e=>{pendingCertificateFile=document.getElementById('certificatePdf')?.files?.[0]||null;pendingCertificateId=document.getElementById('editCertificateId')?.value||'';if(pendingCertificateFile){setTimeout(async()=>{try{const key=await savePdfBlob(pendingCertificateFile);const target=portfolioCertificates.find(c=>String(c.id)===String(pendingCertificateId))||portfolioCertificates[portfolioCertificates.length-1];if(target){target.pdf=key;localStorage.setItem('portfolioCertificates',JSON.stringify(portfolioCertificates));renderCertificates();track('actions','certificate PDF uploaded');}}catch(err){console.warn('Certificate PDF upload failed',err)}finally{pendingCertificateFile=null;pendingCertificateId=''}},0)}},true);
  const certObserver=new MutationObserver(()=>addPdfButtons());if(certificateGrid)certObserver.observe(certificateGrid,{childList:true});
  setTimeout(addPdfButtons,50);
})();
