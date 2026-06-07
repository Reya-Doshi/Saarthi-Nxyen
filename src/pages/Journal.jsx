import React from 'react';
import { Link } from 'react-router-dom';

export default function Journal() {
    return (
        <>
            
<div className="page-transition"></div>
<div className="scroll-progress" id="scrollProgress"></div>
<header className="site-header">
<nav className="nav container">
<Link to="/" className="logo">Saarthi</Link>
<button className="nav-toggle" id="navToggle" aria-label="Toggle navigation">☰</button>
<ul className="nav-links" id="navLinks">
<li><Link to="/">Home</Link></li>
<li><Link to="/healthcare">Healthcare</Link></li>
<li className="nav-item dropdown"><button className="dropdown-toggle" type="button">Work</button><ul className="dropdown-menu"><li><Link to="/work">Employees</Link></li><li><Link to="/teams">Teams</Link></li></ul></li>
<li className="nav-item dropdown"><button className="dropdown-toggle" type="button">Resources</button><ul className="dropdown-menu"><li><Link to="/reports">Reports</Link></li><li><Link to="/clinical-evidence">Clinical Evidence</Link></li><li><Link to="/case-studies">Case Studies</Link></li><li><Link to="/blog">Blog</Link></li><li><Link to="/quizzes">Quizzes</Link></li><li><Link to="/games">Games</Link></li><li><Link to="/relaxation-videos">Relaxation Videos</Link></li><li><Link to="/meditation-audios">Meditation Audios</Link></li></ul></li>
<li><Link to="/about">About Us</Link></li>
<li><Link to="/ai-support">AI Support</Link></li>
<li><Link className="active" to="/journal">Journal</Link></li>
<li><Link to="/book-demo">Book Demo</Link></li>
</ul>
<div className="nav-right">
<button className="theme-toggle" id="themeToggle" aria-label="Toggle dark mode"><span className="icon-sun">☀</span><span className="icon-moon">☾</span></button>
<div className="profile-menu" id="profileMenu"><button className="profile-toggle" id="profileToggle" aria-label="Open profile">👤</button><ul className="profile-dropdown"><li><Link to="/profile">Profile</Link></li><li><Link to="#saved">Saved Journals</Link></li><li><Link to="/settings">Settings</Link></li><li><button type="button" id="logoutBtn">Logout</button></li></ul></div>
</div>
</nav>
</header>

<main>
<section className="section hero mini-hero">
<div className="container reveal narrow center">
<h1>Journal</h1>
<p className="lead">Capture your daily reflection, mood, and what helped you most.</p>
</div>
</section>

<section className="section">
<div className="container reveal narrow journal-wrap">
<form id="journalForm" className="card form-card">
<label htmlFor="moodSelect">Mood</label>
<select id="moodSelect" required>
<option value="">Select your mood</option>
<option>Happy</option>
<option>Calm</option>
<option>Tired</option>
<option>Stressed</option>
<option>Sad</option>
<option>Angry</option>
<option>Anxious</option>
<option>Motivated</option>
</select>
<label htmlFor="reflectionInput">Today's Reflection</label>
<textarea id="reflectionInput" rows="5" required></textarea>
<label htmlFor="helpedInput">What Helped Today</label>
<textarea id="helpedInput" rows="4" required></textarea>
<label htmlFor="notesInput">Notes</label>
<textarea id="notesInput" rows="4" placeholder="Any extra notes for today..."></textarea>
<button className="btn btn-primary glow" type="submit">Save Entry</button>
</form>

<div id="saved" className="journal-grid" aria-live="polite">
<h2>Saved Entries</h2>
<div id="journalList"></div>
</div>
</div>
</section>
</main>

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
