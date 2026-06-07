import React from 'react';
import { Link } from 'react-router-dom';

export default function MeditationAudios() {
    return (
        <>
            
<div className="page-transition"></div><div className="scroll-progress" id="scrollProgress"></div>
<header className="site-header"><nav className="nav container"><Link to="/" className="logo">Saarthi</Link><button className="nav-toggle" id="navToggle" aria-label="Toggle navigation">☰</button><ul className="nav-links" id="navLinks"><li><Link to="/">Home</Link></li><li><Link to="/healthcare">Healthcare</Link></li><li className="nav-item dropdown"><button className="dropdown-toggle" type="button">Work</button><ul className="dropdown-menu"><li><Link to="/work">Employees</Link></li><li><Link to="/teams">Teams</Link></li></ul></li><li className="nav-item dropdown"><button className="dropdown-toggle active" type="button">Resources</button><ul className="dropdown-menu"><li><Link to="/reports">Reports</Link></li><li><Link to="/clinical-evidence">Clinical Evidence</Link></li><li><Link to="/case-studies">Case Studies</Link></li><li><Link to="/blog">Blog</Link></li><li><Link to="/quizzes">Quizzes</Link></li><li><Link to="/games">Games</Link></li><li><Link to="/relaxation-videos">Relaxation Videos</Link></li><li><Link className="active" to="/meditation-audios">Meditation Audios</Link></li></ul></li><li><Link to="/about">About Us</Link></li><li><Link to="/ai-support">AI Support</Link></li><li><Link to="/journal">Journal</Link></li><li><Link to="/book-demo">Book Demo</Link></li></ul><button className="theme-toggle" id="themeToggle" aria-label="Toggle dark mode"><span className="icon-sun">☀</span><span className="icon-moon">☾</span></button></nav></header>
<main>
<section className="section hero mini-hero"><div className="container reveal narrow center"><h1>Meditation Audios</h1><p className="lead">Six audio tracks for focus, calm, and rest.</p></div></section>
<section className="section"><div className="container reveal"><div className="grid three-grid">
<article className="card resource-card"><h3>Mindful Breathing</h3><audio controls><source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" /></audio></article>
<article className="card resource-card"><h3>Body Scan</h3><audio controls><source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg" /></audio></article>
<article className="card resource-card"><h3>Calm Reset</h3><audio controls><source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/mpeg" /></audio></article>
<article className="card resource-card"><h3>Sleep Wind-down</h3><audio controls><source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" type="audio/mpeg" /></audio></article>
<article className="card resource-card"><h3>Self Compassion</h3><audio controls><source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" type="audio/mpeg" /></audio></article>
<article className="card resource-card"><h3>Focus Recovery</h3><audio controls><source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" type="audio/mpeg" /></audio></article>
</div></div></section>
</main>
<section className="disclaimer"><div className="container"><p>Saarthi is not designed to assist with crises such as abuse, severe mental health conditions that may cause feelings of suicide, harm to self, or other medical emergencies.</p><p>Saarthi cannot and will not offer medical or clinical advice. It can only suggest that users seek professional medical help.</p><p>Please reach out to your country's suicide hotline in case of emergency.</p><p>You must be 18 years of age to use Saarthi. If you are between 13 and 18, please review the Terms of Service and Privacy Policy with a parent or guardian before using the platform.</p><p>Saarthi is not designed to be used by children under 13.</p></div></section>
<footer className="site-footer"><div className="container footer-grid"><div><h4>Important Links</h4><Link to="/">Home</Link><Link to="/healthcare">Healthcare</Link><Link to="/work">Work</Link></div><div><h4>Legal</h4><Link to="#">Privacy Policy</Link><Link to="#">Terms of Service</Link><Link to="/about">Contact</Link></div><div><h4>Resources</h4><Link to="/resources">Library</Link><Link to="/ai-support">AI Support</Link><Link to="/journal">Journal</Link></div><div><h4>Social</h4><div className="socials"><Link to="#" aria-label="Instagram">◯</Link><Link to="#" aria-label="LinkedIn">▢</Link><Link to="#" aria-label="YouTube">▷</Link></div></div></div></footer>


        </>
    );
}
