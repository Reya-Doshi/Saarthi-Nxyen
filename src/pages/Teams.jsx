import React from 'react';
import { Link } from 'react-router-dom';

export default function Teams() {
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
                <li className="nav-item dropdown">
                    <button className="dropdown-toggle active" type="button">Work</button>
                    <ul className="dropdown-menu">
                        <li><Link to="/work">Employees</Link></li>
                        <li><Link className="active" to="/teams">Teams</Link></li>
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
                <li><Link to="/book-demo">Book Demo</Link></li>
            </ul>
            <button className="theme-toggle" id="themeToggle" aria-label="Toggle dark mode"><span className="icon-sun">☀</span><span className="icon-moon">☾</span></button>
        </nav>
    </header>

    <main>
        <section className="section hero mini-hero">
            <div className="container reveal narrow center">
                <h1>Team Wellbeing Programs</h1>
                <p className="lead">Support team culture with safe check-ins, manager visibility and emotional resilience tools.</p>
            </div>
        </section>

        <section className="section">
            <div className="container reveal">
                <div className="grid three-grid">
                    <article className="card hover-glow"><h3>Manager Nudges</h3><p>Prompt managers with timely guidance for empathetic team conversations.</p></article>
                    <article className="card hover-glow"><h3>Burnout Risk Signals</h3><p>Track team wellbeing trends early and reduce long-term stress incidents.</p></article>
                    <article className="card hover-glow"><h3>Peer Support Rituals</h3><p>Build regular reflection habits and improve psychological safety in teams.</p></article>
                </div>
            </div>
        </section>

        <section className="section alt">
            <div className="container reveal">
                <h2>Team Outcomes</h2>
                <div className="grid four-grid counters">
                    <article className="card counter-card"><h3 className="counter" data-target="82">0</h3><p>team engagement increase</p></article>
                    <article className="card counter-card"><h3 className="counter" data-target="68">0</h3><p>reduced emotional escalation</p></article>
                    <article className="card counter-card"><h3 className="counter" data-target="4">0</h3><p>weeks to measurable uplift</p></article>
                    <article className="card counter-card"><h3 className="counter" data-target="250">0</h3><p>active teams onboarded</p></article>
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
            <div><h4>Resources</h4><Link to="/resources">Library</Link><Link to="/ai-support">AI Support</Link><Link to="/book-demo">Book Demo</Link></div>
            <div><h4>Social</h4><div className="socials"><Link to="#" aria-label="Instagram">◯</Link><Link to="#" aria-label="LinkedIn">▢</Link><Link to="#" aria-label="YouTube">▷</Link></div></div>
        </div>
    </footer>

    

        </>
    );
}
