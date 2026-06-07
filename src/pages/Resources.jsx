import React from 'react';
import { Link } from 'react-router-dom';

export default function Resources() {
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
                    <button className="dropdown-toggle" type="button">Work</button>
                    <ul className="dropdown-menu">
                        <li><Link to="/work">Employees</Link></li>
                        <li><Link to="/teams">Teams</Link></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <button className="dropdown-toggle active" type="button">Resources</button>
                    <ul className="dropdown-menu">
                        <li><Link to="#reports">Reports</Link></li>
                        <li><Link to="#clinical-evidence">Clinical Evidence</Link></li>
                        <li><Link to="#case-studies">Case Studies</Link></li>
                        <li><Link to="#blog">Blog</Link></li>
                        <li><Link to="#quizzes">Quizzes</Link></li>
                        <li><Link to="#games">Games</Link></li>
                        <li><Link to="#relaxation-videos">Relaxation Videos</Link></li>
                        <li><Link to="#meditation-audios">Meditation Audios</Link></li>
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
                <h1>Resource Library</h1>
                <p className="lead">Choose a dedicated page for each content type. Every category now opens separately.</p>
            </div>
        </section>

        <section className="section">
            <div className="container reveal">
                <div className="grid four-grid">
                    <article className="card resource-card hover-glow"><h3>Reports</h3><p>7 clickable reports</p><Link className="btn btn-small btn-primary" to="/reports">Open Reports</Link></article>
                    <article className="card resource-card hover-glow"><h3>Clinical Evidence</h3><p>5 evidence items</p><Link className="btn btn-small btn-primary" to="/clinical-evidence">Open Clinical Evidence</Link></article>
                    <article className="card resource-card hover-glow"><h3>Case Studies</h3><p>8 case studies</p><Link className="btn btn-small btn-primary" to="/case-studies">Open Case Studies</Link></article>
                    <article className="card resource-card hover-glow"><h3>Blog</h3><p>7 blog articles</p><Link className="btn btn-small btn-primary" to="/blog">Open Blog</Link></article>
                    <article className="card resource-card hover-glow"><h3>Quizzes</h3><p>4 guided quizzes</p><Link className="btn btn-small btn-primary" to="/quizzes">Open Quizzes</Link></article>
                    <article className="card resource-card hover-glow"><h3>Games</h3><p>4 interactive wellness cards</p><Link className="btn btn-small btn-primary" to="/games">Open Games</Link></article>
                    <article className="card resource-card hover-glow"><h3>Relaxation Videos</h3><p>6 embedded videos</p><Link className="btn btn-small btn-primary" to="/relaxation-videos">Open Videos</Link></article>
                    <article className="card resource-card hover-glow"><h3>Meditation Audios</h3><p>6 calming tracks</p><Link className="btn btn-small btn-primary" to="/meditation-audios">Open Audios</Link></article>
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
