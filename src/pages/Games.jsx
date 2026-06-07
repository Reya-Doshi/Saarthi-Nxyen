import React from 'react';
import { Link } from 'react-router-dom';

export default function Games() {
    return (
        <>
            
<div className="page-transition"></div><div className="scroll-progress" id="scrollProgress"></div>
<header className="site-header"><nav className="nav container"><Link to="/" className="logo">Saarthi</Link><button className="nav-toggle" id="navToggle" aria-label="Toggle navigation">☰</button><ul className="nav-links" id="navLinks"><li><Link to="/">Home</Link></li><li><Link to="/healthcare">Healthcare</Link></li><li className="nav-item dropdown"><button className="dropdown-toggle" type="button">Work</button><ul className="dropdown-menu"><li><Link to="/work">Employees</Link></li><li><Link to="/teams">Teams</Link></li></ul></li><li className="nav-item dropdown"><button className="dropdown-toggle active" type="button">Resources</button><ul className="dropdown-menu"><li><Link to="/reports">Reports</Link></li><li><Link to="/clinical-evidence">Clinical Evidence</Link></li><li><Link to="/case-studies">Case Studies</Link></li><li><Link to="/blog">Blog</Link></li><li><Link to="/quizzes">Quizzes</Link></li><li><Link className="active" to="/games">Games</Link></li><li><Link to="/relaxation-videos">Relaxation Videos</Link></li><li><Link to="/meditation-audios">Meditation Audios</Link></li></ul></li><li><Link to="/about">About Us</Link></li><li><Link to="/ai-support">AI Support</Link></li><li><Link to="/journal">Journal</Link></li><li><Link to="/book-demo">Book Demo</Link></li></ul><button className="theme-toggle" id="themeToggle" aria-label="Toggle dark mode"><span className="icon-sun">☀</span><span className="icon-moon">☾</span></button></nav></header>
<main>
<section className="section hero mini-hero"><div className="container reveal narrow center"><h1>Interactive Exercises</h1><p className="lead">Five meaningful wellness activities to support your emotional health.</p></div></section>
<section className="section"><div className="container reveal">

<div className="grid two-grid">


<article className="card">
    <h3>Calm Breathing Guide</h3>
    <p>Follow the circle to guide your breath. Each cycle takes about 16 seconds.</p>
    <div className="breath-circle" id="breathCircle"><span id="breathPhase">Ready</span></div>
    <div className="game-controls">
        <button id="breathPlayBtn" className="btn btn-small btn-primary" type="button">Start</button>
        <button id="breathPauseBtn" className="btn btn-small btn-secondary" type="button" disabled>Pause</button>
    </div>
</article>


<article className="card">
    <h3>Mood Pattern Tracker</h3>
    <p>Record your mood for each day this week to spot patterns.</p>
    <div id="moodGrid" className="mood-grid"></div>
    <p className="mood-summary" id="moodSummary"></p>
    <button id="saveMoodBtn" className="btn btn-small btn-primary" type="button">Save & Analyse</button>
</article>


<article className="card">
    <h3>Emotion Reflection Cards</h3>
    <p>Explore each emotion and sit with the reflection prompt it offers.</p>
    <div className="emotion-display" id="emotionCard"></div>
    <div className="game-controls">
        <button id="prevEmotionBtn" className="btn btn-small btn-secondary" type="button">← Prev</button>
        <button id="nextEmotionBtn" className="btn btn-small btn-primary" type="button">Next →</button>
    </div>
</article>


<article className="card">
    <h3>Self-Care Decision Guide</h3>
    <p id="selfCareScenario">Press start to begin a scenario.</p>
    <div id="selfCareOptions" className="self-care-options"></div>
    <p id="selfCareResult" className="self-care-result"></p>
    <div className="game-controls">
        <button id="selfCareRestart" className="btn btn-small btn-primary" type="button">Next Scenario</button>
    </div>
</article>

</div>


<div className="card" style={{"marginTop":"1.5rem"}}>
    <h3>5-4-3-2-1 Grounding Exercise</h3>
    <p>Work through each sense one at a time. Type your answers to ground yourself in the present moment.</p>
    <div id="groundingActivity">
        <p className="grounding-prompt" id="groundingPromptText">Name 5 things you can see right now.</p>
        <textarea id="groundingTextarea" className="grounding-input" placeholder="Type your answer here..."></textarea>
        <div className="game-controls">
            <button id="groundingNextBtn" className="btn btn-small btn-primary" type="button">Next Step →</button>
        </div>
        <p className="grounding-progress" id="groundingProgress">Step 1 of 5</p>
    </div>
</div>


<div className="card" style={{"marginTop":"1.5rem"}}>
    <h3>Gratitude Prompt Cards</h3>
    <p>Explore these fifteen reflection prompts. Take one a day or pick one that speaks to where you are right now.</p>
    <div id="gratitudeCardsGrid" className="gratitude-cards-grid"></div>
</div>

</div></section>
</main>
<section className="disclaimer"><div className="container"><p>Saarthi is not designed to assist with crises such as abuse, severe mental health conditions that may cause feelings of suicide, harm to self, or other medical emergencies.</p><p>Saarthi cannot and will not offer medical or clinical advice. It can only suggest that users seek professional medical help.</p><p>Please reach out to your country's suicide hotline in case of emergency.</p><p>You must be 18 years of age to use Saarthi. If you are between 13 and 18, please review the Terms of Service and Privacy Policy with a parent or guardian before using the platform.</p><p>Saarthi is not designed to be used by children under 13.</p></div></section>
<footer className="site-footer"><div className="container footer-grid"><div><h4>Important Links</h4><Link to="/">Home</Link><Link to="/healthcare">Healthcare</Link><Link to="/work">Work</Link></div><div><h4>Legal</h4><Link to="#">Privacy Policy</Link><Link to="#">Terms of Service</Link><Link to="/about">Contact</Link></div><div><h4>Resources</h4><Link to="/resources">Library</Link><Link to="/ai-support">AI Support</Link><Link to="/journal">Journal</Link></div><div><h4>Social</h4><div className="socials"><Link to="#" aria-label="Instagram">◯</Link><Link to="#" aria-label="LinkedIn">▢</Link><Link to="#" aria-label="YouTube">▷</Link></div></div></div></footer>


        </>
    );
}
