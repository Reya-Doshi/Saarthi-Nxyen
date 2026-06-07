import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function LegacyScript() {
    const location = useLocation();

    useEffect(() => {
        return (function() {
const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const scrollProgress = document.getElementById("scrollProgress");
const AUTH_KEY = "saarthi-auth";
const USER_KEY = "saarthi-user";
const JOURNAL_KEY = "saarthi-journal-entries";

function currentPage() {
    return location.pathname;
}

function isHomePage() {
    return currentPage() === "/";
}

function enforceAuth() {
    const page = currentPage();
    const isAuthPage = page === "/auth";
    const isLoggedIn = Boolean(localStorage.getItem(AUTH_KEY));

    if (!isAuthPage && !isLoggedIn) {
        window.location.hash = "/auth";
    }

    if (isAuthPage && isLoggedIn) {
        window.location.hash = "/";
    }
}

function setTheme(theme) {
    if (theme === "dark") {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
    localStorage.setItem("saarthi-theme", theme);
}

function initTheme() {
    const saved = localStorage.getItem("saarthi-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(saved || (prefersDark ? "dark" : "light"));
}

function enhanceNavbar() {
    if (!navLinks) return;

    const links = navLinks.querySelectorAll("a");

    const hasJournal = [...links].some((a) => a.getAttribute("href") === "/journal");
    if (!hasJournal) {
        const journalLi = document.createElement("li");
        journalLi.innerHTML = '<a href="/journal">Journal</a>';
        const bookDemoLi = [...navLinks.children].find(
            (li) => li.querySelector('a[href="/book-demo"]')
        );
        if (bookDemoLi) {
            navLinks.insertBefore(journalLi, bookDemoLi);
        } else {
            navLinks.appendChild(journalLi);
        }
    }

    const nav = navLinks.closest(".nav");
    if (!nav) return;

    const existingProfile = nav.querySelector("#profileMenu");
    if (!existingProfile) {
        let navRight = nav.querySelector(".nav-right");
        if (!navRight) {
            navRight = document.createElement("div");
            navRight.className = "nav-right";
            nav.appendChild(navRight);
        }

        const theme = nav.querySelector("#themeToggle");
        if (theme && theme.parentElement !== navRight) {
            navRight.appendChild(theme);
        }

        const profile = document.createElement("div");
        profile.className = "profile-menu";
        profile.id = "profileMenu";
        profile.innerHTML = `
            <button class="profile-toggle" id="profileToggle" aria-label="Open profile">👤</button>
            <ul class="profile-dropdown">
                <li><a href="/profile">Profile</a></li>
                <li><a href="/journal#saved">Saved Journals</a></li>
                <li><a href="/settings">Settings</a></li>
                <li><button id="logoutBtn" type="button">Logout</button></li>
            </ul>
        `;
        navRight.appendChild(profile);
    }
}

enhanceNavbar();

const navDropdownItems = document.querySelectorAll(".nav-item.dropdown");
const profileMenu = document.getElementById("profileMenu");
const profileToggle = document.getElementById("profileToggle");
const logoutBtn = document.getElementById("logoutBtn");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const next = body.classList.contains("dark") ? "light" : "dark";
        setTheme(next);
    });
}

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
}

navDropdownItems.forEach((item) => {
    const trigger = item.querySelector(".dropdown-toggle");
    if (!trigger) return;
    trigger.addEventListener("click", (event) => {
        event.preventDefault();
        navDropdownItems.forEach((other) => {
            if (other !== item) other.classList.remove("open");
        });
        item.classList.toggle("open");
    });
});

if (profileToggle && profileMenu) {
    profileToggle.addEventListener("click", () => profileMenu.classList.toggle("open"));
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem(AUTH_KEY);
        window.location.hash = "/auth";
    });
}

const clickHandler = (event) => {
    if (![...navDropdownItems].some((item) => item.contains(event.target))) {
        navDropdownItems.forEach((item) => item.classList.remove("open"));
    }
    if (profileMenu && !profileMenu.contains(event.target)) {
        profileMenu.classList.remove("open");
    }
};
    document.addEventListener("click", clickHandler);

const scrollHandler = () => {
    if (!scrollProgress) return;
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const val = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    scrollProgress.style.width = `${Math.min(val, 100)}%`;
};
    window.addEventListener("scroll", scrollHandler);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

function animateCounter(counter) {
    const target = Number(counter.dataset.target) || 0;
    const duration = 1800;
    const start = performance.now();

    counter.classList.add("counting");

    function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(target * eased);

        if (target >= 1000000) {
            counter.textContent = `${(value / 1000000).toFixed(1)}M+`;
        } else if (target <= 100 && !counter.closest("#impact")) {
            counter.textContent = `${value}%`;
        } else {
            counter.textContent = `${value.toLocaleString()}+`;
        }

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            counter.classList.remove("counting");
        }
    }

    requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = "true";
                animateCounter(entry.target);
            }
        });
    },
    { threshold: 0.45 }
);

document.querySelectorAll(".counter").forEach((counter) => counterObserver.observe(counter));

document.querySelectorAll(".faq-item").forEach((item) => {
    const button = item.querySelector(".faq-question");
    if (button) button.addEventListener("click", () => item.classList.toggle("open"));
});

const exerciseModal = document.getElementById("exerciseModal");
const exerciseTitle = document.getElementById("exerciseTitle");
const exerciseList = document.getElementById("exerciseList");
const exerciseClose = document.getElementById("exerciseClose");

const exercises = {
    loneliness: [
        {
            name: "Connection Ladder",
            description: "Build social confidence gradually by choosing one tiny outreach action each day.",
            action: "List five people you trust and send one short message to one person from the list today."
        },
        {
            name: "Shared Interest Finder",
            description: "Reduce isolation by identifying groups where your interests are already welcome.",
            action: "Pick one topic you enjoy and find one local or online community to join this week."
        },
        {
            name: "Comfort Conversation Script",
            description: "Prepare for difficult social moments so meeting people feels less overwhelming.",
            action: "Write and practice a 3-line intro for meeting a classmate, colleague, or neighbor."
        },
        {
            name: "Social Energy Tracker",
            description: "Understand when your energy is highest so social plans feel sustainable.",
            action: "Track your energy before and after social interactions for 5 days."
        },
        {
            name: "Guided Breathing Reset",
            description: "Calm social anxiety before conversations with a short breathing rhythm.",
            action: "Inhale for 4 seconds, hold for 4, exhale for 6, and repeat for 2 minutes."
        },
        {
            name: "Micro-Gratitude Notes",
            description: "Shift attention from loneliness to existing points of support.",
            action: "Write 3 moments each day where you felt seen, supported, or valued."
        },
        {
            name: "Support Network Map",
            description: "Visualize who can support you emotionally, practically, and socially.",
            action: "Draw three circles: close support, occasional support, and professional support, then fill names."
        }
    ],
    esteem: [
        {
            name: "Small Wins Diary",
            description: "Build confidence by documenting meaningful progress, even if it feels minor.",
            action: "Write three wins from today and why each one matters."
        },
        {
            name: "Self-Compassion Script",
            description: "Replace harsh self-talk with language you would use for a friend in pain.",
            action: "Write one kind paragraph to yourself after a mistake and read it aloud."
        },
        {
            name: "Strength Inventory",
            description: "Reconnect with your identity beyond current stress or setbacks.",
            action: "List ten personal strengths and one real example for each."
        },
        {
            name: "Negative Thought Reframing",
            description: "Challenge distorted thoughts and replace them with balanced alternatives.",
            action: "Take one negative thought and rewrite it into a more accurate statement."
        },
        {
            name: "Boundary Setting Prompts",
            description: "Strengthen self-respect by practicing clear emotional and time boundaries.",
            action: "Complete the sentence: I need ___ to feel respected in this situation."
        },
        {
            name: "Achievement Timeline",
            description: "See your growth over time instead of judging yourself by one difficult day.",
            action: "Create a timeline of your key achievements from the last 5 years."
        },
        {
            name: "Future Self Letter",
            description: "Develop hope and motivation by connecting with your future identity.",
            action: "Write a letter from your future self describing what helped you grow."
        },
        {
            name: "Mirror Confidence Practice",
            description: "Train your nervous system to tolerate and accept your own presence.",
            action: "Look in the mirror for 60 seconds and say three affirming statements slowly."
        }
    ],
    pain: [
        {
            name: "Pain Acceptance Check-In",
            description: "Acknowledge pain without letting it define your whole day.",
            action: "Name what you feel physically and emotionally, then rate intensity from 1 to 10."
        },
        {
            name: "Body Scan Reset",
            description: "Release tension by moving attention slowly through each body region.",
            action: "Spend one minute each on shoulders, jaw, chest, stomach, and legs."
        },
        {
            name: "Paced Breathing",
            description: "Lower distress signals using longer exhales to calm your nervous system.",
            action: "Inhale for 4 and exhale for 6 for 3 minutes."
        },
        {
            name: "Comfort Routine Plan",
            description: "Create predictable self-care for flare-up moments.",
            action: "Choose 3 low-effort comfort actions and place them in your phone notes."
        },
        {
            name: "Energy Budgeting",
            description: "Protect wellbeing by planning your limited energy intentionally.",
            action: "List tasks as high, medium, and low energy and choose one priority only."
        },
        {
            name: "Support Request Draft",
            description: "Reduce emotional load by asking for practical help clearly.",
            action: "Write one short message requesting specific help from a trusted person."
        }
    ],
    lgbtq: [
        {
            name: "Identity Affirmation Prompts",
            description: "Strengthen self-worth by grounding in language that reflects who you are.",
            action: "Complete: I feel most myself when..., and I deserve spaces where that is respected."
        },
        {
            name: "Safe Space Mapping",
            description: "Identify emotionally safer people, places, and communities for support.",
            action: "Create three lists: safe people, safe online spaces, and safe offline environments."
        },
        {
            name: "Pronoun Confidence Practice",
            description: "Build confidence in introducing your identity in affirming ways.",
            action: "Write and rehearse a preferred-name and pronoun introduction script."
        },
        {
            name: "Boundary Communication Guide",
            description: "Practice clear responses for invalidating or uncomfortable interactions.",
            action: "Draft two boundary sentences you can use when someone crosses a line."
        },
        {
            name: "Community Connection Plan",
            description: "Reduce isolation through chosen family and identity-affirming communities.",
            action: "Choose one support group, creator, or local event to engage with this week."
        },
        {
            name: "Self-Acceptance Reflection",
            description: "Replace shame loops with compassion and pride in your lived experience.",
            action: "Write five statements starting with: I honor myself for...."
        }
    ],
    relationship: [
        {
            name: "Conflict Reset Worksheet",
            description: "Pause reactive cycles and identify what the conflict is truly about.",
            action: "Write what happened, what you felt, what you needed, and what you can ask for."
        },
        {
            name: "Attachment Style Reflection",
            description: "Understand your emotional patterns in closeness and distance.",
            action: "Journal one moment where you withdrew or pursued and what triggered it."
        },
        {
            name: "Communication Timing Planner",
            description: "Choose better moments for hard conversations to improve outcomes.",
            action: "Schedule one discussion time when both people are calm and available."
        },
        {
            name: "Values Alignment Review",
            description: "Assess shared values to reduce repeated misunderstandings.",
            action: "List your top five relationship values and compare them with your current dynamic."
        },
        {
            name: "Healthy Boundary Checklist",
            description: "Clarify what is acceptable and what needs to change.",
            action: "Mark yes or no for respect, communication, autonomy, and emotional safety."
        },
        {
            name: "Repair Conversation Script",
            description: "Rebuild connection after conflict with accountability and empathy.",
            action: "Use this structure: I understand..., I regret..., I will do..."
        },
        {
            name: "Trust Rebuilding Prompts",
            description: "Create practical agreements that restore reliability over time.",
            action: "Define one behavior each person will practice consistently for 2 weeks."
        },
        {
            name: "Mutual Goals Journal",
            description: "Focus on shared direction rather than recurring arguments.",
            action: "Write three short-term goals and one long-term shared intention."
        }
    ],
    breakup: [
        {
            name: "Closure Writing",
            description: "Process unfinished emotions by expressing what you could not say.",
            action: "Write a private unsent letter with gratitude, hurt, and goodbye statements."
        },
        {
            name: "Emotional Release Timer",
            description: "Allow grief safely without letting it consume your full day.",
            action: "Set a 10-minute timer to feel and write, then shift to a grounding activity."
        },
        {
            name: "Trigger Tracker",
            description: "Identify recurring triggers so you can prepare for difficult moments.",
            action: "Track where, when, and why emotional spikes happen for one week."
        },
        {
            name: "No-Contact Planning",
            description: "Protect healing by reducing compulsive checking and reactivation.",
            action: "List boundaries for social media, messaging, and shared spaces."
        },
        {
            name: "Morning Resilience Ritual",
            description: "Create emotional structure at the start of each day.",
            action: "Begin with water, 3 deep breaths, and one supportive self-statement."
        },
        {
            name: "Meaning Reconstruction",
            description: "Reframe the breakup as part of growth rather than failure.",
            action: "Complete: This relationship taught me..., and now I choose...."
        },
        {
            name: "Self-Worth Affirmations",
            description: "Reinforce identity beyond the relationship.",
            action: "Write five affirmations about your values, strengths, and future."
        },
        {
            name: "Grief Wave Check-Ins",
            description: "Normalize changing emotions by naming each wave without judgment.",
            action: "When emotions rise, pause and label: sadness, anger, fear, or relief."
        },
        {
            name: "Future Goals Reset",
            description: "Shift attention to your next chapter with actionable steps.",
            action: "Set one goal for health, one for career, and one for relationships this month."
        }
    ]
};

function openExercise(category, title) {
    if (!exerciseModal || !exerciseTitle || !exerciseList) return;
    exerciseTitle.textContent = title;
    exerciseList.innerHTML = (exercises[category] || [])
        .map(
            (item) =>
                `<li class="exercise-item"><h4>${item.name}</h4><p>${item.description}</p><p><strong>What to do:</strong> ${item.action}</p></li>`
        )
        .join("");
    exerciseModal.classList.add("show");
    document.body.classList.add("overlay-lock");
}

function closeExercise() {
    if (exerciseModal) exerciseModal.classList.remove("show");
    document.body.classList.remove("overlay-lock");
}

document.querySelectorAll(".exercise-open").forEach((btn) => {
    btn.addEventListener("click", () => openExercise(btn.dataset.category, btn.dataset.title || "Exercises"));
});
if (exerciseClose) exerciseClose.addEventListener("click", closeExercise);
if (exerciseModal) {
    exerciseModal.addEventListener("click", (e) => {
        if (e.target === exerciseModal) closeExercise();
    });
}

const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
const typingIndicator = document.getElementById("typingIndicator");

const chatReplies = [
    "Thanks for sharing. Want a one-minute breathing routine?",
    "I hear you. Let us take one small calming step together.",
    "You are not alone. I can suggest a quick exercise now.",
    "Would you like support for stress, sleep, or motivation first?"
];

function addMessage(text, type) {
    if (!chatMessages) return;
    const msg = document.createElement("div");
    msg.className = `message ${type}`;
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function aiReply() {
    if (!typingIndicator) return;
    typingIndicator.classList.add("show");
    setTimeout(() => {
        typingIndicator.classList.remove("show");
        addMessage(chatReplies[Math.floor(Math.random() * chatReplies.length)], "ai");
    }, 900);
}

if (chatForm && chatInput) {
    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;
        addMessage(text, "user");
        chatInput.value = "";
        aiReply();
    });
}

document.querySelectorAll(".quick-option").forEach((btn) => {
    btn.addEventListener("click", () => {
        addMessage(btn.textContent || "Help", "user");
        aiReply();
    });
});

function bindFormAlert(formId, text) {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert(text);
        form.reset();
    });
}

bindFormAlert("contactWorkForm", "Thank you. We will contact you shortly.");
bindFormAlert("aboutContactForm", "Thanks for reaching out. Our team will get back to you soon.");
bindFormAlert("demoForm", "Demo request submitted successfully.");

function isValidEmail(email) {
    return email.includes("@");
}

function initAuthPage() {
    if (currentPage() !== "/auth") return;

    const authFlip = document.getElementById("authFlip");
    const flipToSignUp = document.getElementById("flipToSignUp");
    const flipToSignIn = document.getElementById("flipToSignIn");
    const signInForm = document.getElementById("signInForm");
    const signUpForm = document.getElementById("signUpForm");

    if (flipToSignUp && authFlip) {
        flipToSignUp.addEventListener("click", () => authFlip.classList.add("flipped"));
    }

    if (flipToSignIn && authFlip) {
        flipToSignIn.addEventListener("click", () => authFlip.classList.remove("flipped"));
    }

    if (signUpForm) {
        signUpForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = document.getElementById("signupName")?.value.trim() || "";
            const email = document.getElementById("signupEmail")?.value.trim() || "";
            const number = document.getElementById("signupNumber")?.value.trim() || "";
            const password = document.getElementById("signupPassword")?.value || "";
            const confirmPassword = document.getElementById("signupPasswordAgain")?.value || "";

            if (!name || !email || !number || !password || !confirmPassword) {
                alert("Please fill all sign up fields.");
                return;
            }

            if (!isValidEmail(email)) {
                alert("Please enter a valid email with @.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            localStorage.setItem(USER_KEY, JSON.stringify({ name, email, number, password }));
            localStorage.setItem(AUTH_KEY, "signup");
            localStorage.setItem("saarthi-last-login", new Date().toISOString());
            window.location.hash = "/";
        });
    }

    const anonBtn = document.getElementById("anonBtn");
    if (anonBtn) {
        anonBtn.addEventListener("click", () => {
            localStorage.setItem(AUTH_KEY, "anonymous");
            localStorage.setItem("saarthi-last-login", new Date().toISOString());
            window.location.hash = "/";
        });
    }

    if (signInForm) {
        signInForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = document.getElementById("signinEmail")?.value.trim() || "";
            const password = document.getElementById("signinPassword")?.value || "";
            const savedUser = JSON.parse(localStorage.getItem(USER_KEY) || "null");

            if (!isValidEmail(email)) {
                alert("Please enter a valid email with @.");
                return;
            }

            if (!password) {
                alert("Please enter password.");
                return;
            }

            if (savedUser && (savedUser.email !== email || savedUser.password !== password)) {
                alert("Email or password is incorrect.");
                return;
            }

            localStorage.setItem(AUTH_KEY, "signin");
            localStorage.setItem("saarthi-last-login", new Date().toISOString());
            window.location.hash = "/";
        });
    }
}

const demoUserType = document.getElementById("demoUserType");
const demoInstituteGroup = document.getElementById("demoInstituteGroup");
const demoInstituteLabel = document.getElementById("demoInstituteLabel");
const demoInstitute = document.getElementById("demoInstitute");

const hyderabadColleges = [
    "Osmania University",
    "University of Hyderabad",
    "JNTU Hyderabad",
    "Nizam College",
    "St. Francis College for Women",
    "Loyola Academy",
    "St. Ann's College for Women",
    "Villa Marie College",
    "Badruka College of Commerce and Arts",
    "Malla Reddy College of Engineering",
    "CVR College of Engineering",
    "VNR VJIET",
    "MGIT",
    "CBIT",
    "Anurag University",
    "ICFAI Tech",
    "Woxsen University",
    "Muffakham Jah College of Engineering",
    "Gokaraju Rangaraju Institute",
    "Keshav Memorial Institute of Technology",
    "Aurora's Engineering College",
    "Methodist College of Engineering",
    "ISL Engineering College",
    "Sreenidhi Institute of Science and Technology",
    "Matrusri Engineering College",
    "Nawab Shah Alam Khan College",
    "Vasavi College of Engineering",
    "Stanley College of Engineering",
    "CMR College of Engineering",
    "Malla Reddy University",
    "Institute of Public Enterprise",
    "Administrative Staff College of India",
    "NIFT Hyderabad",
    "IIIT Hyderabad",
    "BITS Hyderabad",
    "IIT Hyderabad",
    "Dr. B.R. Ambedkar Open University",
    "Telangana University PG Center",
    "Mahatma Gandhi Law College",
    "Symbiosis Hyderabad"
];

const hyderabadEmployers = [
    "TCS Hyderabad",
    "Infosys Hyderabad",
    "Wipro Hyderabad",
    "Tech Mahindra Hyderabad",
    "Cyient",
    "Dr. Reddy's Laboratories"
];

const hyderabadAreas = [
    "Gachibowli",
    "Hitech City",
    "Madhapur",
    "Kukatpally",
    "Secunderabad",
    "Begumpet",
    "Banjara Hills",
    "Jubilee Hills",
    "Ameerpet",
    "Dilsukhnagar"
];

function populateDynamicSelect(label, options) {
    if (!demoInstituteGroup || !demoInstituteLabel || !demoInstitute) return;
    demoInstituteGroup.hidden = false;
    demoInstituteLabel.textContent = label;
    demoInstitute.innerHTML = '<option value="">Select an option</option>';
    options.forEach((item) => {
        const opt = document.createElement("option");
        opt.value = item;
        opt.textContent = item;
        demoInstitute.appendChild(opt);
    });
}

if (demoUserType) {
    demoUserType.addEventListener("change", () => {
        const selected = demoUserType.value;
        if (selected === "Student") {
            populateDynamicSelect("College", hyderabadColleges);
        } else if (selected === "Employee") {
            populateDynamicSelect("Organization / Company", hyderabadEmployers);
        } else if (selected === "Other") {
            populateDynamicSelect("Area / Location", hyderabadAreas);
        } else if (demoInstituteGroup) {
            demoInstituteGroup.hidden = true;
            demoInstitute.innerHTML = '<option value="">Select an option</option>';
        }
    });
}

const journalForm = document.getElementById("journalForm");
const moodSelect = document.getElementById("moodSelect");
const reflectionInput = document.getElementById("reflectionInput");
const moodInput = document.getElementById("moodInput");
const helpedInput = document.getElementById("helpedInput");
const notesInput = document.getElementById("notesInput");
const journalList = document.getElementById("journalList");

function renderJournal() {
    if (!journalList) return;
    const entries = JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]");
    journalList.innerHTML = entries
        .map(
            (entry) =>
                `<article class="card journal-entry"><p class="journal-meta">${entry.date}</p><h3>Mood</h3><p>${entry.mood}</p><h3>Today's Reflection</h3><p>${entry.reflection}</p><h3>What Helped Today</h3><p>${entry.helped}</p><h3>Notes</h3><p>${entry.notes || "-"}</p></article>`
        )
        .join("");
}

if (journalForm && reflectionInput && helpedInput) {
    journalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const entries = JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]");
        const moodValue = moodSelect ? moodSelect.value : moodInput?.value.trim() || "Not specified";
        entries.unshift({
            date: new Date().toLocaleString(),
            reflection: reflectionInput.value.trim(),
            mood: moodValue,
            helped: helpedInput.value.trim(),
            notes: notesInput ? notesInput.value.trim() : ""
        });
        localStorage.setItem(JOURNAL_KEY, JSON.stringify(entries));
        journalForm.reset();
        renderJournal();
    });
}

document.querySelectorAll(".quiz-option").forEach((btn) => {
    btn.addEventListener("click", () => {
        const wrapper = btn.closest(".quiz-card");
        const result = wrapper ? wrapper.querySelector(".quiz-result") : null;
        if (result) {
            result.textContent = btn.dataset.feedback || "Nice reflection. Keep going.";
        }
    });
});

// Blog article expand
document.querySelectorAll(".read-more-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".resource-card");
        if (!card) return;
        const isOpen = card.classList.contains("open");
        card.classList.toggle("open", !isOpen);
        btn.textContent = isOpen ? "Read More ↓" : "Close ↑";
    });
});

// Case study expand
document.querySelectorAll(".case-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".case-card");
        if (!card) return;
        const isOpen = card.classList.contains("open");
        card.classList.toggle("open", !isOpen);
        btn.textContent = isOpen ? "Read Case Study ↓" : "Close ↑";
    });
});

const focusTapBtn = document.getElementById("focusTapBtn");
const focusTapCount = document.getElementById("focusTapCount");
let focusCount = 0;
if (focusTapBtn && focusTapCount) {
    focusTapBtn.addEventListener("click", () => {
        focusCount += 1;
        focusTapCount.textContent = `${focusCount}`;
    });
}

const gratitudePromptBtn = document.getElementById("gratitudePromptBtn");
const gratitudePromptText = document.getElementById("gratitudePromptText");
const gratitudePrompts = [
    "What made you feel supported today?",
    "What is one thing your body helped you do today?",
    "Who are you thankful for this week and why?",
    "What challenge did you handle better than before?",
    "What simple moment gave you peace today?",
    "Name three people who have positively influenced your life.",
    "What skill are you grateful to have developed this year?",
    "What is something in nature that you appreciate?",
    "What mistake helped you grow the most?",
    "What about your home or surroundings are you thankful for?",
    "What recent conversation left you feeling good?",
    "What small daily comfort do you often take for granted?",
    "Who showed you kindness when you needed it most?",
    "What opportunity are you grateful to have right now?",
    "What about your own personality are you grateful for?"
];
if (gratitudePromptBtn && gratitudePromptText) {
    gratitudePromptBtn.addEventListener("click", () => {
        const pick = gratitudePrompts[Math.floor(Math.random() * gratitudePrompts.length)];
        gratitudePromptText.textContent = pick;
    });
}

// Inline gratitude cards grid (games.html)
const gratitudeCardsGrid = document.getElementById("gratitudeCardsGrid");
if (gratitudeCardsGrid) {
    gratitudeCardsGrid.innerHTML = gratitudePrompts
        .map((p) => `<div class="gratitude-card-item">${p}</div>`)
        .join("");
}

// Calm Breathing Guide (games.html)
const breathPlayBtn = document.getElementById("breathPlayBtn");
const breathPauseBtn = document.getElementById("breathPauseBtn");
const breathPhase = document.getElementById("breathPhase");
const breathCircle = document.getElementById("breathCircle");
let breathTimer = null;
let breathRunning = false;

function breathCycle() {
    const sequence = [
        { phase: "Inhale", dur: 4000, cls: "inhale" },
        { phase: "Hold", dur: 4000, cls: "" },
        { phase: "Exhale", dur: 6000, cls: "exhale" },
        { phase: "Rest", dur: 2000, cls: "" }
    ];
    let i = 0;
    function step() {
        if (!breathRunning) return;
        const s = sequence[i % sequence.length];
        if (breathPhase) breathPhase.textContent = s.phase;
        if (breathCircle) {
            breathCircle.className = "breath-circle" + (s.cls ? " " + s.cls : "");
        }
        i++;
        breathTimer = setTimeout(step, s.dur);
    }
    step();
}

if (breathPlayBtn) {
    breathPlayBtn.addEventListener("click", () => {
        if (breathRunning) return;
        breathRunning = true;
        breathPlayBtn.disabled = true;
        if (breathPauseBtn) breathPauseBtn.disabled = false;
        breathCycle();
    });
}
if (breathPauseBtn) {
    breathPauseBtn.addEventListener("click", () => {
        breathRunning = false;
        clearTimeout(breathTimer);
        if (breathPhase) breathPhase.textContent = "Paused";
        if (breathCircle) breathCircle.className = "breath-circle";
        breathPlayBtn.disabled = false;
        breathPauseBtn.disabled = true;
    });
}

// Mood Pattern Tracker (games.html)
const moodGrid = document.getElementById("moodGrid");
const moodSummary = document.getElementById("moodSummary");
const saveMoodBtn = document.getElementById("saveMoodBtn");
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const moods = ["-", "Happy", "Calm", "Sad", "Stressed", "Anxious", "Energized"];
if (moodGrid) {
    const saved = JSON.parse(localStorage.getItem("saarthi-mood-week") || "[]");
    moodGrid.innerHTML = days.map((d, i) => `<div class="mood-day"><label>${d}</label><select id="moodDay${i}">${moods.map((m) => `<option${saved[i] === m ? " selected" : ""}>${m}</option>`).join("")}</select></div>`).join("");
}
if (saveMoodBtn && moodGrid) {
    saveMoodBtn.addEventListener("click", () => {
        const selected = days.map((_, i) => document.getElementById(`moodDay${i}`)?.value || "-");
        localStorage.setItem("saarthi-mood-week", JSON.stringify(selected));
        const filled = selected.filter((m) => m !== "-");
        const freq = {};
        filled.forEach((m) => (freq[m] = (freq[m] || 0) + 1));
        const top = Object.entries(freq).sort((a, b) => b[1] - a[1])[0];
        if (moodSummary) moodSummary.textContent = top ? `Most frequent mood: ${top[0]} (${top[1]} days)` : "No moods recorded yet.";
    });
}

// Emotion Reflection Cards (games.html)
const emotionCard = document.getElementById("emotionCard");
const prevEmotionBtn = document.getElementById("prevEmotionBtn");
const nextEmotionBtn = document.getElementById("nextEmotionBtn");
const emotions = [
    { name: "Anger", prompt: "What boundary feels crossed? What do you truly need right now?" },
    { name: "Sadness", prompt: "What loss are you carrying? Is there someone who can sit with you in this?" },
    { name: "Anxiety", prompt: "What uncertain outcome are you imagining? Take one breath and name what you can control." },
    { name: "Joy", prompt: "Anchor this moment. What made it possible and how can you nurture it?" },
    { name: "Loneliness", prompt: "Who comes to mind when you imagine feeling understood? Can you reach out today?" },
    { name: "Overwhelm", prompt: "List the three biggest demands right now and choose just one to address first." },
    { name: "Guilt", prompt: "Did you do something wrong or simply not meet an impossible standard? Reflect honestly." },
    { name: "Hope", prompt: "What is the one possibility keeping you going? Take one small step toward it today." }
];
let emotionIndex = 0;
function renderEmotion() {
    if (!emotionCard) return;
    const e = emotions[emotionIndex];
    emotionCard.innerHTML = `<h4>${e.name}</h4><p>${e.prompt}</p>`;
}
if (emotionCard) renderEmotion();
if (prevEmotionBtn) prevEmotionBtn.addEventListener("click", () => { emotionIndex = (emotionIndex - 1 + emotions.length) % emotions.length; renderEmotion(); });
if (nextEmotionBtn) nextEmotionBtn.addEventListener("click", () => { emotionIndex = (emotionIndex + 1) % emotions.length; renderEmotion(); });

// 5-4-3-2-1 Grounding with text input (games.html)
const groundingPromptText = document.getElementById("groundingPromptText");
const groundingTextarea = document.getElementById("groundingTextarea");
const groundingNextBtn = document.getElementById("groundingNextBtn");
const groundingProg = document.getElementById("groundingProgress");
const groundingActivity = document.getElementById("groundingActivity");
const groundingSteps = [
    "Name 5 things you can see right now.",
    "Name 4 things you can physically feel.",
    "Name 3 things you can hear.",
    "Name 2 things you can smell.",
    "Name 1 thing you can taste."
];
let groundingStep = 0;
if (groundingNextBtn && groundingPromptText && groundingTextarea) {
    groundingNextBtn.addEventListener("click", () => {
        if (groundingStep < groundingSteps.length - 1) {
            groundingStep++;
            groundingPromptText.textContent = groundingSteps[groundingStep];
            groundingTextarea.value = "";
            if (groundingProg) groundingProg.textContent = `Step ${groundingStep + 1} of 5`;
        } else {
            if (groundingActivity) {
                groundingActivity.innerHTML = `<p class="grounding-done">Well done! You have completed the grounding exercise. You are present, safe, and here.</p><button class="btn btn-small btn-secondary" id="groundingRestartBtn">Start Again</button>`;
                const restart = document.getElementById("groundingRestartBtn");
                if (restart) {
                    restart.addEventListener("click", () => {
                        groundingStep = 0;
                        groundingActivity.innerHTML = `<p class="grounding-prompt" id="groundingPromptText">${groundingSteps[0]}</p><textarea id="groundingTextarea" class="grounding-input" placeholder="Type your answer here..."></textarea><button id="groundingNextBtn" class="btn btn-small btn-primary">Next Step →</button><p class="grounding-progress" id="groundingProgress">Step 1 of 5</p>`;
                    });
                }
            }
        }
    });
}

// Self-Care Decision Game (games.html)
const selfCareScenario = document.getElementById("selfCareScenario");
const selfCareOptions = document.getElementById("selfCareOptions");
const selfCareResult = document.getElementById("selfCareResult");
const selfCareRestart = document.getElementById("selfCareRestart");
const selfCareScenarios = [
    {
        q: "You feel drained after a long day. What do you do?",
        opts: [
            { label: "Take a 10-minute walk", result: "Great choice. Light movement releases tension and resets your nervous system. Even a short walk can boost mood for hours." },
            { label: "Watch something comforting", result: "This is valid rest. A calming show or movie can help your brain decompress and shift out of stress mode." },
            { label: "Call a trusted friend", result: "Connection is healing. Sharing how you feel with someone you trust reduces cortisol and builds emotional resilience." }
        ]
    },
    {
        q: "You notice you have been skipping meals when stressed. What do you do?",
        opts: [
            { label: "Set a meal reminder alarm", result: "Smart! Small structure helps when stress disrupts routines. Your body and brain need fuel to manage difficulties." },
            { label: "Prep a simple meal now", result: "Taking immediate action is powerful. Even a simple nutritious meal starts reestablishing your self-care habit." },
            { label: "Order something you enjoy", result: "There is no shame in this. Nourishing yourself matters more than the method, especially under stress." }
        ]
    },
    {
        q: "You have been losing sleep due to worry. You tonight would...",
        opts: [
            { label: "Write down worries before bed", result: "Excellent. Externalizing worries frees mental bandwidth and helps your brain stop rehearsing concerns during sleep." },
            { label: "Do a 5-minute breathing exercise", result: "Very effective. Slow breathing activates the parasympathetic nervous system, making sleep easier to reach." },
            { label: "Read something light before bed", result: "Good choice. Replacing screen time with reading helps your brain shift into a calmer pre-sleep state." }
        ]
    }
];
let selfCareIdx = 0;
function renderSelfCare() {
    const sc = selfCareScenarios[selfCareIdx % selfCareScenarios.length];
    if (selfCareScenario) selfCareScenario.textContent = sc.q;
    if (selfCareOptions) {
        selfCareOptions.innerHTML = sc.opts.map((o, i) => `<button class="btn btn-small btn-secondary self-care-choice" data-idx="${i}">${o.label}</button>`).join("");
        selfCareOptions.querySelectorAll(".self-care-choice").forEach((btn) => {
            btn.addEventListener("click", () => {
                const r = sc.opts[Number(btn.dataset.idx)].result;
                if (selfCareResult) selfCareResult.textContent = r;
                if (selfCareRestart) selfCareRestart.style.display = "inline-flex";
                selfCareOptions.querySelectorAll(".self-care-choice").forEach((b) => (b.disabled = true));
            });
        });
    }
    if (selfCareResult) selfCareResult.textContent = "";
    if (selfCareRestart) selfCareRestart.style.display = "none";
}
if (selfCareScenario) renderSelfCare();
if (selfCareRestart) {
    selfCareRestart.addEventListener("click", () => {
        selfCareIdx++;
        renderSelfCare();
    });
}

// Profile page init
function initProfilePage() {
    if (currentPage() !== "/profile") return;
    const user = JSON.parse(localStorage.getItem(USER_KEY) || "null");
    const authMode = localStorage.getItem(AUTH_KEY) || "anonymous";
    const lastLogin = localStorage.getItem("saarthi-last-login");
    const journals = JSON.parse(localStorage.getItem(JOURNAL_KEY) || "[]");
    const nameEl = document.getElementById("profileName");
    const emailEl = document.getElementById("profileEmail");
    const phoneEl = document.getElementById("profilePhone");
    const roleEl = document.getElementById("profileRole");
    const loginEl = document.getElementById("profileLastLogin");
    const journalCountEl = document.getElementById("profileJournalCount");
    const accountTypeEl = document.getElementById("profileAccountType");
    if (nameEl) nameEl.textContent = user ? user.name : "Anonymous User";
    if (emailEl) emailEl.textContent = user ? user.email : "—";
    if (phoneEl) phoneEl.textContent = user ? user.number : "—";
    if (roleEl) roleEl.textContent = authMode === "anonymous" ? "Guest" : (user ? "Registered User" : "User");
    if (loginEl) loginEl.textContent = lastLogin ? new Date(lastLogin).toLocaleString() : "—";
    if (journalCountEl) journalCountEl.textContent = `${journals.length} entries`;
    if (accountTypeEl) accountTypeEl.textContent = authMode;
}
initProfilePage();

// Settings page init
function initSettingsPage() {
    if (currentPage() !== "/settings") return;
    const authMode = localStorage.getItem(AUTH_KEY) || "anonymous";
    const settingsAuthMode = document.getElementById("settingsAuthMode");
    if (settingsAuthMode) settingsAuthMode.textContent = authMode;
    // theme buttons
    const lightBtn = document.getElementById("themeLight");
    const darkBtn = document.getElementById("themeDark");
    function refreshThemeBtns() {
        const isDark = document.body.classList.contains("dark");
        if (lightBtn) lightBtn.classList.toggle("active", !isDark);
        if (darkBtn) darkBtn.classList.toggle("active", isDark);
    }
    if (lightBtn) lightBtn.addEventListener("click", () => { setTheme("light"); refreshThemeBtns(); });
    if (darkBtn) darkBtn.addEventListener("click", () => { setTheme("dark"); refreshThemeBtns(); });
    refreshThemeBtns();
    // notification toggles
    ["notifWellness", "notifJournal", "notifExercise"].forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const saved = localStorage.getItem(`saarthi-notif-${id}`);
        el.checked = saved === "1";
        el.addEventListener("change", () => localStorage.setItem(`saarthi-notif-${id}`, el.checked ? "1" : "0"));
    });
}
initSettingsPage();

renderJournal();
initAuthPage();

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeExercise();
        navDropdownItems.forEach((item) => item.classList.remove("open"));
        if (profileMenu) profileMenu.classList.remove("open");
    }
});
initTheme();
enforceAuth();


            return () => {
                if (typeof clickHandler !== 'undefined') document.removeEventListener("click", clickHandler);
                if (typeof scrollHandler !== 'undefined') window.removeEventListener("scroll", scrollHandler);
                if (typeof revealObserver !== 'undefined') revealObserver.disconnect();
                if (typeof counterObserver !== 'undefined') counterObserver.disconnect();
            };
        })();
    }, [location.pathname]);

    return null;
}
