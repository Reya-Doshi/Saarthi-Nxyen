import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
    return (
        <>
            
<div className="page-transition"></div>
<div className="scroll-progress" id="scrollProgress"></div>

<header className="site-header">
<nav className="nav container">
<Link to="/" className="logo">Saarthi</Link>
<button className="nav-toggle" id="navToggle" aria-label="Toggle navigation">☰</button>
<ul className="nav-links" id="navLinks">
<li><Link className="active" to="/">Home</Link></li>
<li><Link to="/healthcare">Healthcare</Link></li>
<li className="nav-item dropdown">
<button className="dropdown-toggle" type="button">Work</button>
<ul className="dropdown-menu">
<li><Link to="/work">Employees</Link></li>
<li><Link to="/teams">Teams</Link></li>
</ul>
</li>
<li className="nav-item dropdown">
<button className="dropdown-toggle" type="button">Resources</button>
<ul className="dropdown-menu">
<li><Link to="/reports">Reports</Link></li>
<li><Link to="/clinical-evidence">Clinical Evidence</Link></li>
<li><Link to="/case-studies">Case Studies</Link></li>
<li><Link to="/blog">Blog</Link></li>
<li><Link to="/quizzes">Quizzes</Link></li>
<li><Link to="/games">Games</Link></li>
<li><Link to="/relaxation-videos">Relaxation Videos</Link></li>
<li><Link to="/meditation-audios">Meditation Audios</Link></li>
</ul>
</li>
<li><Link to="/about">About Us</Link></li>
<li><Link to="/ai-support">AI Support</Link></li>
<li><Link to="/journal">Journal</Link></li>
<li><Link to="/book-demo">Book Demo</Link></li>
</ul>
<div className="nav-right">
<button className="theme-toggle" id="themeToggle" aria-label="Toggle dark mode"><span className="icon-sun">☀</span><span className="icon-moon">☾</span></button>
<div className="profile-menu" id="profileMenu">
<button className="profile-toggle" id="profileToggle" aria-label="Open profile">👤</button>
<ul className="profile-dropdown">
<li><Link to="/profile">Profile</Link></li>
<li><Link to="/journal#saved">Saved Journals</Link></li>
<li><Link to="/settings">Settings</Link></li>
<li><button type="button" id="logoutBtn">Logout</button></li>
</ul>
</div>
</div>
</nav>
</header>

<main>
<section className="hero section">
<div className="hero-bg-shape shape-1"></div>
<div className="hero-bg-shape shape-2"></div>
<div className="hero-bg-shape shape-3"></div>
<div className="container hero-grid reveal">
<div>
<p className="eyebrow">Mental Wellness Platform</p>
<h1>Saarthi - Your AI Companion for Mental Well-Being</h1>
<p className="hero-subtext">How are you feeling today?</p>
<div className="hero-actions">
<Link className="btn btn-primary glow" to="/ai-support">Talk to Saarthi AI</Link>
<Link className="btn btn-secondary" to="/resources">Explore Resources</Link>
</div>
</div>
<div className="hero-visual">
<div className="chat-illustration card glass float-card">
<p className="tiny">Daily Companion</p>
<h3>Check in and reset your day</h3>
<div className="bubble-row"><span className="bubble">Stress</span><span className="bubble">Anxiety</span><span className="bubble">Sleep</span></div>
<Link to="/ai-support" className="btn btn-small btn-primary">Start Chat</Link>
</div>
<div className="floating-ui floating-1">Breathing Guide</div>
<div className="floating-ui floating-2">Daily Journal</div>
<div className="floating-ui floating-3">Mood Tracker</div>
</div>
</div>
</section>

<section className="section" id="mental-redefined">
<div className="container reveal">
<h2>Mental Health Redefined</h2>
<div className="grid four-grid">
<article className="card feature-card hover-glow"><div className="icon-blue"><svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V8a4 4 0 0 1 8 0v3"></path></svg></div><h3>Completely Anonymous</h3></article>
<article className="card feature-card hover-glow"><div className="icon-blue"><svg viewBox="0 0 24 24"><path d="M6 19c4 0 8-3 8-8 0-4 2-6 5-6-1 7-3 14-13 14Z"></path><path d="M8 16c3-3 6-4 10-4"></path></svg></div><h3>No Stigma</h3></article>
<article className="card feature-card hover-glow"><div className="icon-blue"><svg viewBox="0 0 24 24"><path d="M6 12c0-2.5 1.5-4 3.5-4 3.5 0 4.5 8 8 8 2 0 3.5-1.5 3.5-4s-1.5-4-3.5-4c-3.5 0-4.5 8-8 8-2 0-3.5-1.5-3.5-4Z"></path></svg></div><h3>No Limits</h3></article>
<article className="card feature-card hover-glow"><div className="icon-blue"><svg viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="12" rx="4"></rect></svg></div><h3>Safe Emotional Space</h3></article>
</div>
</div>
</section>

<section className="section alt">
<div className="container reveal">
<h2>Rethink How Behavioral Health Works</h2>
<div className="grid three-grid">
<article className="card glass behavioral-card"><h3>Care That Fits Everything</h3><p className="icon-text">✓</p><p>People everywhere are turning to AI. Saarthi provides accessible emotional support designed around real care pathways.</p></article>
<article className="card glass behavioral-card"><h3>Support Across the Continuum</h3><p className="icon-text">💬</p><p>From first check-ins to ongoing support, Saarthi helps users stay engaged without stigma.</p></article>
<article className="card glass behavioral-card"><h3>Outcomes That Matter</h3><p className="icon-text">📈</p><p>Improve emotional outcomes, reduce drop-offs, and scale safe support at lower cost.</p></article>
</div>
</div>
</section>

<section className="section" id="why-choose">
<div className="container reveal">
<h2>Why Choose Saarthi</h2>
<div className="grid three-grid flip-grid">
<article className="flip-card"><div className="flip-card-inner"><div className="flip-face flip-front">Overcome Loneliness</div><div className="flip-face flip-back">Gentle routines help students reconnect socially and emotionally.</div></div></article>
<article className="flip-card"><div className="flip-card-inner"><div className="flip-face flip-front">Improve Self-Esteem</div><div className="flip-face flip-back">Daily affirmations and reframing exercises reinforce confidence.</div></div></article>
<article className="flip-card"><div className="flip-card-inner"><div className="flip-face flip-front">Cope With Pain</div><div className="flip-face flip-back">Evidence-based coping practices reduce overwhelm and emotional fatigue.</div></div></article>
<article className="flip-card"><div className="flip-card-inner"><div className="flip-face flip-front">LGBTQ+ Support</div><div className="flip-face flip-back">Identity-affirming pathways create a safer support experience.</div></div></article>
<article className="flip-card"><div className="flip-card-inner"><div className="flip-face flip-front">Relationship Support</div><div className="flip-face flip-back">Communication prompts support healthy boundaries and repair.</div></div></article>
<article className="flip-card"><div className="flip-card-inner"><div className="flip-face flip-front">Breakup Support</div><div className="flip-face flip-back">Recovery journeys support emotional reset and resilience.</div></div></article>
<article className="flip-card"><div className="flip-card-inner"><div className="flip-face flip-front">Exam Stress Relief</div><div className="flip-face flip-back">Focused breathing and planning tools reduce exam panic.</div></div></article>
<article className="flip-card"><div className="flip-card-inner"><div className="flip-face flip-front">Sleep Recovery</div><div className="flip-face flip-back">Night routines and calming audio improve sleep consistency.</div></div></article>
<article className="flip-card"><div className="flip-card-inner"><div className="flip-face flip-front">Motivation Building</div><div className="flip-face flip-back">Behavioral nudges help students regain momentum.</div></div></article>
<article className="flip-card"><div className="flip-card-inner"><div className="flip-face flip-front">Daily Mood Tracking</div><div className="flip-face flip-back">Quick check-ins help identify stress patterns early.</div></div></article>
</div>

<h3 className="top-gap">Exercise Categories</h3>
<div className="grid three-grid exercise-grid">
<article className="card exercise-card hover-glow"><h3>Overcome Loneliness</h3><p>7 exercises</p><button className="btn btn-small btn-primary exercise-open" data-category="loneliness" data-title="Overcome Loneliness">View Exercises</button></article>
<article className="card exercise-card hover-glow"><h3>Improve Self-Esteem</h3><p>8 exercises</p><button className="btn btn-small btn-primary exercise-open" data-category="esteem" data-title="Improve Self-Esteem">View Exercises</button></article>
<article className="card exercise-card hover-glow"><h3>Cope With Pain</h3><p>6 exercises</p><button className="btn btn-small btn-primary exercise-open" data-category="pain" data-title="Cope With Pain">View Exercises</button></article>
<article className="card exercise-card hover-glow"><h3>LGBTQ Support</h3><p>6 exercises</p><button className="btn btn-small btn-primary exercise-open" data-category="lgbtq" data-title="LGBTQ Support">View Exercises</button></article>
<article className="card exercise-card hover-glow"><h3>Relationship Support</h3><p>8 exercises</p><button className="btn btn-small btn-primary exercise-open" data-category="relationship" data-title="Relationship Support">View Exercises</button></article>
<article className="card exercise-card hover-glow"><h3>Breakup Support</h3><p>9 exercises</p><button className="btn btn-small btn-primary exercise-open" data-category="breakup" data-title="Breakup Support">View Exercises</button></article>
</div>
</div>
</section>

<section className="section alt">
<div className="container reveal">
<h2>Wellness in Motion</h2>
<div className="image-reel"><div className="reel-track">
<div className="reel-item"><img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80" alt="Meditation" /></div>
<div className="reel-item"><img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80" alt="Wellness moments" /></div>
<div className="reel-item"><img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80" alt="Support conversations" /></div>
<div className="reel-item"><img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1000&q=80" alt="Campus life" /></div>
<div className="reel-item"><img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80" alt="Meditation duplicate" /></div>
<div className="reel-item"><img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80" alt="Wellness duplicate" /></div>
</div></div>
</div>
</section>

<section className="section" id="impact">
<div className="container reveal">
<h2>Scope of Impact</h2>
<div className="grid five-grid counters">
<article className="card counter-card"><h3 className="counter" data-target="50000">0</h3><p>People Support</p></article>
<article className="card counter-card"><h3 className="counter" data-target="120000">0</h3><p>Sessions Complete</p></article>
<article className="card counter-card"><h3 className="counter" data-target="300">0</h3><p>Wellness Resources</p></article>
<article className="card counter-card"><h3 className="counter" data-target="100">0</h3><p>Organizations Partner</p></article>
<article className="card counter-card"><h3 className="counter" data-target="850000">0</h3><p>AI Conversations</p></article>
</div>
</div>
</section>
</main>

<div className="exercise-modal" id="exerciseModal" aria-hidden="true">
<div className="exercise-modal-content card">
<button className="exercise-close" id="exerciseClose" aria-label="Close exercises">×</button>
<h3 id="exerciseTitle">Exercises</h3>
<ul id="exerciseList" className="exercise-list"></ul>
</div>
</div>

<section className="disclaimer">
<div className="container">
<p>Saarthi is not designed to assist with crises such as abuse, severe mental health conditions that may cause feelings of suicide, harm to self, or other medical emergencies.</p>
<p>Saarthi cannot and will not offer medical or clinical advice. It can only suggest that users seek professional medical help.</p>
<p>Please reach out to your country’s suicide hotline in case of emergency.</p>
<p>You must be 18 years of age to use Saarthi. If you are between 13 and 18, please review the Terms of Service and Privacy Policy with a parent or guardian before using the platform.</p>
<p>Saarthi is not designed to be used by children under 13.</p>
</div>
</section>

<footer className="site-footer">
<div className="container footer-grid">
<div><h4>Important Links</h4><Link to="/">Home</Link><Link to="/healthcare">Healthcare</Link><Link to="/work">Work</Link></div>
<div><h4>Legal</h4><Link to="#">Privacy Policy</Link><Link to="#">Terms of Service</Link><Link to="/about">Contact</Link></div>
<div><h4>Resources</h4><Link to="/resources">Library</Link><Link to="/ai-support">AI Support</Link><Link to="/journal">Journal</Link></div>
<div><h4>Social</h4><div className="socials"><Link to="#" aria-label="Instagram">◯</Link><Link to="#" aria-label="LinkedIn">▢</Link><Link to="#" aria-label="YouTube">▷</Link></div></div>
</div>
</footer>



        </>
    );
}
