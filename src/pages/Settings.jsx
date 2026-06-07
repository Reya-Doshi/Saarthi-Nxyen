import React from 'react';
import { Link } from 'react-router-dom';

export default function Settings() {
    return (
        <>
            
<div className="page-transition"></div><div className="scroll-progress" id="scrollProgress"></div>
<header className="site-header"><nav className="nav container"><Link to="/" className="logo">Saarthi</Link><button className="nav-toggle" id="navToggle" aria-label="Toggle navigation">☰</button><ul className="nav-links" id="navLinks"><li><Link to="/">Home</Link></li><li><Link to="/healthcare">Healthcare</Link></li><li className="nav-item dropdown"><button className="dropdown-toggle" type="button">Work</button><ul className="dropdown-menu"><li><Link to="/work">Employees</Link></li><li><Link to="/teams">Teams</Link></li></ul></li><li className="nav-item dropdown"><button className="dropdown-toggle" type="button">Resources</button><ul className="dropdown-menu"><li><Link to="/reports">Reports</Link></li><li><Link to="/clinical-evidence">Clinical Evidence</Link></li><li><Link to="/case-studies">Case Studies</Link></li><li><Link to="/blog">Blog</Link></li><li><Link to="/quizzes">Quizzes</Link></li><li><Link to="/games">Games</Link></li><li><Link to="/relaxation-videos">Relaxation Videos</Link></li><li><Link to="/meditation-audios">Meditation Audios</Link></li></ul></li><li><Link to="/about">About Us</Link></li><li><Link to="/ai-support">AI Support</Link></li><li><Link to="/journal">Journal</Link></li><li><Link to="/book-demo">Book Demo</Link></li></ul><button className="theme-toggle" id="themeToggle" aria-label="Toggle dark mode"><span className="icon-sun">☀</span><span className="icon-moon">☾</span></button></nav></header>
<main>
<section className="section hero mini-hero"><div className="container reveal narrow center"><h1>Settings</h1><p className="lead">Manage your preferences and account options.</p></div></section>
<section className="section"><div className="container reveal narrow">

    <article className="card" style={{"marginBottom":"1.2rem"}}>
        <h3 style={{"marginBottom":"1rem"}}>Theme</h3>
        <p style={{"color":"var(--muted)","marginBottom":"0.9rem"}}>Choose your preferred appearance.</p>
        <div className="theme-btn-group">
            <button className="theme-option-btn" id="themeLight" type="button">☀ Light Mode</button>
            <button className="theme-option-btn" id="themeDark" type="button">☾ Dark Mode</button>
        </div>
    </article>

    <article className="card" style={{"marginBottom":"1.2rem"}}>
        <h3 style={{"marginBottom":"1rem"}}>Privacy</h3>
        <div className="settings-row">
            <div><span className="settings-label">Journal Storage</span><br  /><span className="settings-sublabel">Your journal entries are stored only in your browser using localStorage. They are never sent to any server and are private to your device.</span></div>
        </div>
        <div className="settings-row">
            <div><span className="settings-label">Authentication Data</span><br  /><span className="settings-sublabel">Your name, email, and password are stored locally in your browser only. Saarthi does not transmit or store личные данные on any external server.</span></div>
        </div>
    </article>

    <article className="card" style={{"marginBottom":"1.2rem"}}>
        <h3 style={{"marginBottom":"1rem"}}>Notifications</h3>
        <p style={{"color":"var(--muted)","marginBottom":"0.9rem"}}>Manage your daily reminder preferences.</p>
        <div className="settings-row">
            <div><span className="settings-label">Daily Wellness Reminder</span><br  /><span className="settings-sublabel">A gentle daily check-in prompt.</span></div>
            <label className="settings-toggle"><input type="checkbox" id="notifWellness" /><span className="settings-slider"></span></label>
        </div>
        <div className="settings-row">
            <div><span className="settings-label">Journal Reminder</span><br  /><span className="settings-sublabel">A prompt to write in your journal each evening.</span></div>
            <label className="settings-toggle"><input type="checkbox" id="notifJournal" /><span className="settings-slider"></span></label>
        </div>
        <div className="settings-row">
            <div><span className="settings-label">Exercise Suggestions</span><br  /><span className="settings-sublabel">Receive a daily guided exercise recommendation.</span></div>
            <label className="settings-toggle"><input type="checkbox" id="notifExercise" /><span className="settings-slider"></span></label>
        </div>
    </article>

    <article className="card">
        <h3 style={{"marginBottom":"1rem"}}>Account</h3>
        <div className="settings-row"><span className="settings-label">Session Mode</span><span className="settings-sublabel" id="settingsAuthMode">—</span></div>
        <div style={{"marginTop":"1rem"}}>
            <button type="button" id="logoutBtn" className="btn btn-secondary btn-small">Logout</button>
        </div>
    </article>

</div></section>
</main>
<section className="disclaimer"><div className="container"><p>Saarthi is not designed to assist with crises such as abuse, severe mental health conditions that may cause feelings of suicide, harm to self, or other medical emergencies.</p><p>Saarthi cannot and will not offer medical or clinical advice. It can only suggest that users seek professional medical help.</p><p>Please reach out to your country's suicide hotline in case of emergency.</p><p>You must be 18 years of age to use Saarthi. If you are between 13 and 18, please review the Terms of Service and Privacy Policy with a parent or guardian before using the platform.</p><p>Saarthi is not designed to be used by children under 13.</p></div></section>
<footer className="site-footer"><div className="container footer-grid"><div><h4>Important Links</h4><Link to="/">Home</Link><Link to="/healthcare">Healthcare</Link><Link to="/work">Work</Link></div><div><h4>Legal</h4><Link to="#">Privacy Policy</Link><Link to="#">Terms of Service</Link><Link to="/about">Contact</Link></div><div><h4>Resources</h4><Link to="/resources">Library</Link><Link to="/ai-support">AI Support</Link><Link to="/journal">Journal</Link></div><div><h4>Social</h4><div className="socials"><Link to="#" aria-label="Instagram">◯</Link><Link to="#" aria-label="LinkedIn">▢</Link><Link to="#" aria-label="YouTube">▷</Link></div></div></div></footer>


        </>
    );
}
