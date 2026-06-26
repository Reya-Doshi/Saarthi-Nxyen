# Saarthi — Your AI Companion for Mental Well-Being

## 📌 Problem
Adolescents, students, and employees worldwide suffer from increasing rates of stress, anxiety, and burnout. However, seeking professional help is often hindered by:
- **Cultural Stigma**: Fear of judgment by peers, family, or institutions.
- **Resource Constraints**: High counselor-to-student ratios leading to long waiting times (sometimes weeks) for crisis care.
- **High Commitment Friction**: Standard onboarding and booking flows act as a major deterrent for individuals in the early stages of distress.
- **Privacy Concerns**: Reluctance to register using real identities or institutional logins due to concerns over data security and reporting.

---

## ✨ What Saarthi Does

### 1) Daily Mood Check-Ins & Telemetry
Users check in daily to record their emotional states (e.g., Happy, Calm, Tired, Stressed, Sad, Angry, Anxious, Motivated), reflection notes, and what helped them during the day. This provides localized, client-side emotional tracking over time.

### 2) Clinical Evidence & Welfare Intelligence
Integrates a rich library of clinical reference summaries (covering CBT micro-intervention research, AI reflection studies, and check-in validation indices) alongside detailed demographic reports (e.g., Campus Stress Trends, Youth Anxiety Snapshot) to ground user and institutional understanding in empirical care pathways.

### 3) Stress & Burnout Scoring Engine
An interactive self-assessment module evaluating user status across three distinct clinical questionnaires:
- **Stress Assessment Quiz** (calculating current load and concentration blocks)
- **Emotional Wellbeing Check** (tracking optimistic and supportive connection indicators)
- **Burnout Risk Quiz** (rating cynicism, emotional fatigue, and recovery patterns)

### 4) Always-On AI Companion Chatbot
An embedded interactive AI chatbot widget (powered by Chatbase) acting as a non-judgmental active listener. It assists users with cognitive reframing, mindfulness guidance, and safety-focused redirection.

### 5) Wellness Interactive Games & Grounding Flows
A collection of sensory and cognitive de-escalation tools:
- **Calm Breathing Guide**: An interactive visual breath-bubble guiding users through deep-breathing cycles.
- **Mood Pattern Tracker**: A 7-day visual grid displaying weekly emotional trends.
- **Emotion Reflection Cards**: A carousel of cognitive prompts for processing complex feelings.
- **Self-Care Decision Guide**: Scenario-based simulations teaching boundary setting.
- **5-4-3-2-1 Grounding Flow**: A step-by-step sensory exercise to anchor users during panic or anxiety.
- **Gratitude Prompt Cards**: Focus areas encouraging positive psychology.

### 6) User Profile & Care Signposting
A personal profile dashboard tracking streaks, activity metrics, and saved reflections. If severe distress levels are logged or detected through quizzes, the app displays prominent signposting to professional hotlines and emergency contact resources.

---

## 🧠 Core Idea
The core idea behind Saarthi is **stigma-free, frictionless, and privacy-first early intervention**. By enabling complete anonymity (no forced logins or identity verification) and running key features (assessments, journaling, and tracking) entirely in-browser, Saarthi gives users a safe emotional space where they can build mental resilience before their struggles escalate into clinical crises.

---

## 🏗️ How it Works

### Step 1 — Inputs
The user feeds the platform through:
- **Mood Ratings & Journal Reflections** (form text inputs)
- **Interactive Game Responses** (sensory grounding text, weekly mood grid picks, scenario choices)
- **Quiz Responses** (multiple-choice rating scale clicks)
- **AI Chat Interactions** (conversational text exchanges)

### Step 2 — Client-Side Core Processing
```
                                        +---------------------------------------+
                                        |           User Interactions           |
                                        +-------------------+-------------------+
                                                            |
                                                            v
                                        +-------------------+-------------------+
                                        |         LegacyScript Engine           |
                                        |      (Local Event Processor)          |
                                        +----------+-----------------+----------+
                                                   |                 |
                             (Persists State)      |                 | (Triage & Score)
                                                   v                 v
                                        +----------+------+   +------+----------+
                                        |  Web Storage    |   | Diagnostic      |
                                        | (LocalStorage)  |   | Score Engine    |
                                        +-----------------+   +------+----------+
                                                                     |
                                                                     v
                                                              +------+----------+
                                                              |  Care Pathway    |
                                                              |   Signposting    |
                                                              +-----------------+
```
1. **Event Parsing**: The user's input triggers event listeners in [LegacyScript.jsx](file:///c:/Users/lenovo/OneDrive/Desktop/ReyaWeb/Saarthi/src/LegacyScript.jsx) which updates the active state variables.
2. **Scoring Engine**: Assessment clicks calculate cumulative indices client-side to output immediate rating feedback (e.g., "High Burnout Risk" or "Moderate Stress").
3. **Local Persistence**: User settings, theme selections (dark/light mode toggle), daily journal logs, and weekly mood patterns are saved to the browser's `localStorage` (safeguarding user privacy).
4. **Third-Party AI Pipeline**: Chat messages are routed securely through an embedded iframe widget mapping to the trained Chatbase agent.
5. **Care Escalarion**: If high-risk distress answers are flagged, the DOM is updated dynamically to feature crisis resources and support hotline directories.

---

## 📊 Triage Philosophy & Calculation Logic
Saarthi utilizes a three-tier wellness triage framework:
- **Tier 1 (Low Distress / General Wellbeing)**: Self-guided exercises, breathing visualizers, and gratitude cards.
- **Tier 2 (Moderate Distress / Active Coping)**: Guided journaling, mood tracking, and 5-4-3-2-1 grounding sequences.
- **Tier 3 (High Distress / Crisis Alert)**: Immediate display of emergency contact signposts, counselor demo links, and local hotlines.

### Quiz Calculation Formula
Quizzes use a linear cumulative scoring model. For each question block:
$$\text{Score} = \sum_{i=1}^{N} w_i$$
Where:
- $w_i \in \{0, 1, 2, 3\}$ representing choice values (e.g., *Never*, *Sometimes*, *Often*, *Almost Always*).
- $N$ is the number of questions in the quiz.

The cumulative score determines the threshold:
- **Stress Assessment (Max Score: 24)**:
  - $0 - 8$: Low Stress (Continue healthy routines)
  - $9 - 16$: Moderate Stress (Try Breathing exercises and journaling)
  - $17 - 24$: High Stress (Consider seeking professional advice; contact signposting displayed)

---

## 🧩 Key Features
- **Stigma-Free Onboarding**: Switch between login credentials and fully anonymous entry mode.
- **Interactive Breathing Visualizer**: Dynamic canvas/CSS bubble expanding and contracting to guide breathing rates.
- **5-4-3-2-1 Grounding Tool**: Multi-step conversational form helping de-escalate anxiety through five sensory inputs.
- **Personalized Journal & Diary**: Add, view, filter, and delete past daily journals directly on the page.
- **Dynamic Weekly Mood Grid**: Track and analyze mood changes over a seven-day cycle.
- **Curated Resource Hub**: Clinical studies, workplace wellbeing statistics, and university case studies.
- **Sleek Custom UI**: Premium glassmorphism design, scroll progress indicator, custom dark/light theme, and smooth page transitions.

---

## 🛠️ Tech Stack

### Frontend
- **React 19**: Component architecture and single-page routing orchestration.
- **Vite 8**: Frontend build toolchain ensuring hot module replacement (HMR) and optimized resource bundles.
- **React Router DOM 7**: View orchestration using hash-based routing (`HashRouter`) for serverless static page environments.
- **Vanilla CSS3**: Tailored styling using CSS variables, custom grid systems, and smooth keyframe animations (no bulky utility frameworks).

### Backend
- **Serverless Architecture**: None. Saarthi operates entirely client-side on the user's browser, eliminating hosting overhead, database security holes, and server cold-start latencies.

### Database
- **Web Storage API (LocalStorage)**: Key-value storage for local user profiles, theme states, journal entries, and tracking flags.

### Intelligence Layer / External APIs
- **Chatbase Widget API**: An embedded AI chatbot trained on custom behavioral health pathways, acting as the primary conversational counselor.

### Utilities & File Handling
- **Node.js Build & Refactoring Scripts**: Internal scripts (`convert.cjs`, `convert_pages.cjs`, `fix_legacy_events.cjs`) designed to migrate the codebase from a legacy multi-page HTML site into a modern React SPA.
- **IntersectionObserver API**: Custom triggers animating counter-up statistics cards and revealing grid items on scroll.

### Deployment
- **GitHub Pages**: Configured with the `gh-pages` npm deployment library for zero-cost static hosting.

---

## 📂 Project Structure
```text
Saarthi/
├── public/                 # Static assets & public assets
│   ├── favicon.svg         # Application favicon
│   ├── icons.svg           # Icon sprite registry
│   ├── style.css           # Core stylesheet (custom design system)
│   └── script.js           # Pre-migration vanilla script backup
├── src/                    # Source code
│   ├── pages/              # View components
│   │   ├── About.jsx       # "About Us" and contact info
│   │   ├── AiSupport.jsx   # Embedded Chatbase AI chat client
│   │   ├── Auth.jsx        # Login, registration, and anonymous onboarding
│   │   ├── Blog.jsx        # Mental health articles
│   │   ├── BookDemo.jsx    # Institutional demo booking form
│   │   ├── CaseStudies.jsx # Real-world efficacy case studies
│   │   ├── ClinicalEvidence.jsx # Clinical trial evidence summaries
│   │   ├── Games.jsx       # Breathing, Mood, Grounding, and Decision interactive tools
│   │   ├── Healthcare.jsx  # Healthcare pathway landing page
│   │   ├── Index.jsx       # Welcome dashboard & wellness categories
│   │   ├── Journal.jsx     # Daily journal writer & logs
│   │   ├── MeditationAudios.jsx # Calming audio media player
│   │   ├── Profile.jsx     # User analytics, streaks, and settings overview
│   │   ├── Quizzes.jsx     # Stress, Wellbeing, and Burnout self-assessments
│   │   ├── RelaxationVideos.jsx # Video resource compilation
│   │   ├── Reports.jsx     # Campus and workplace distress reports
│   │   ├── Resources.jsx   # Core library directory index
│   │   ├── Settings.jsx    # Theme preference and account control
│   │   ├── Teams.jsx       # Workplace wellness dashboard for managers
│   │   └── Work.jsx        # Employee support features
│   ├── App.jsx             # SPA routing engine & component configuration
│   ├── LegacyScript.jsx    # Core script binding dynamic state and logic
│   └── main.jsx            # Entrypoint file mounting React tree
├── convert.cjs             # Refactoring / code migration script
├── convert_pages.cjs       # Multi-page JSX converter script
├── rebuild_legacy.cjs      # Post-migration compiler check script
├── index.html              # Core SPA HTML structure
├── package.json            # Scripts, project dependencies, and versioning
└── vite.config.js          # Vite compilation settings
```

---

## ⚙️ Local Setup

### 1) Clone the repo
```bash
git clone https://github.com/Reya-Doshi/Saarthi-Nxyen.git
cd Saarthi
```

### 2) Backend setup
Saarthi has no backend dependencies. All logic is executed on the client. You can skip to frontend setup.

### 3) Frontend setup
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).
```bash
# Install node dependencies
npm install

# Start the Vite local development server
npm run dev

# Compile the application for production build
npm run build

# Preview the local build distribution
npm run preview
```

---

## 🌍 Deployment
Saarthi is optimized for static hosting providers. To deploy to GitHub Pages:
```bash
# Build the production bundle and deploy
npm run build
npx gh-pages -d dist
```
Alternatively, drag-and-drop the generated `dist/` directory into Vercel, Netlify, or AWS Amplify.

---

## 🔐 Environment Variables

### Backend
No backend environment variables are required.

### Frontend
No API keys are required for general features. The AI Chatbot is served via a public Chatbase iframe:
- To configure your own chatbot custom data, open [src/pages/AiSupport.jsx](file:///c:/Users/lenovo/OneDrive/Desktop/ReyaWeb/Saarthi/src/pages/AiSupport.jsx) and replace the iframe `src` link with your Chatbase chatbot iframe URL.

---

## 🧪 Example User Flow
1. **Accessing the App**: User opens the app and lands on the [Auth](file:///c:/Users/lenovo/OneDrive/Desktop/ReyaWeb/Saarthi/src/pages/Auth.jsx) screen. They select **Continue as Anonymous** to bypass authentication.
2. **Completing an Assessment**: The user navigates to **Quizzes** and takes the *Burnout Risk Quiz*. After selecting responses, they click **See My Result** and receive an immediate score assessment advising them of high burnout risk.
3. **Engaging with Grounding Tools**: The user goes to **Games** to calm their nervous system. They follow the expanding visual bubble in the **Calm Breathing Guide**, then complete the five sensory text prompts in the **5-4-3-2-1 Grounding Exercise**.
4. **Writing a Journal Entry**: On the **Journal** view, they record their mood as "Stressed," write down what they are feeling, and hit **Save**. The script processes the input and lists the new card under **Saved Entries**.
5. **Chatting with AI**: Seeking immediate conversation, the user clicks **Talk to Saarthi AI** to start a chat session with the embedded chatbot assistant.
6. **Reviewing Streaks**: Later, the user visits their **Profile** to view their daily streak score, mood analytics, and review the saved journal histories.

---

## 🎯 Why This Architecture is Different
- **Zero Server Footprint**: Without databases or server processes, the application has no hosting maintenance costs and can scale to handle massive traffic spikes with zero lag.
- **Client-Side Privacy Boundaries**: Because user check-ins and journal text entries are stored locally on the browser (`localStorage`), sensitive emotional telemetry is never sent to a backend, protecting users from institutional tracking or data breaches.
- **Low Barrier Entry**: By decoupling utility access from profile creation, Saarthi encourages students and employees to seek help early, avoiding the stigma and resistance typically associated with signing up for mental health services.

---

## ⚠️ Current Limitations / Future Work
- **Device Synchronization**: Currently, clearing browser cookies or switching browsers deletes the user's saved journals and mood histories. Plans are in place to add optional, end-to-end encrypted backup (using WebCrypto APIs and a serverless database).
- **Stateless AI Chat**: The Chatbase iframe chatbot operates independently of the client-side journal and quiz scores. Passing aggregated user mood telemetry to the chatbot safely via postMessage triggers is under review.
- **Offline Capabilities**: Transforming the application into a Progressive Web App (PWA) using Service Workers to allow full offline usability for users in areas with poor network coverage.

---

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](file:///c:/Users/lenovo/OneDrive/Desktop/ReyaWeb/Saarthi/LICENSE) file for more information.

---

## 🙌 Acknowledgements
- Cognitive Behavioral Therapy (CBT) frameworks and psychological sensory-grounding principles that inspired the interactive tools.
- [Chatbase](https://www.chatbase.co) for the chatbot integration support.
- The open-source community for React and Vite tooling.
