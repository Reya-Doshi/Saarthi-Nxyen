import React from 'react';
import { Link } from 'react-router-dom';

export default function Healthcare() {
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
                <li><Link className="active" to="/healthcare">Healthcare</Link></li>
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
                <li><Link to="/book-demo">Book Demo</Link></li>
            </ul>
            <button className="theme-toggle" id="themeToggle" aria-label="Toggle dark mode"><span className="icon-sun">☀</span><span className="icon-moon">☾</span></button>
        </nav>
    </header>

    <main>
        <section className="section hero mini-hero">
            <div className="container reveal narrow center">
                <h1>Mental Health Support That Meets Young People Where They Are</h1>
                <p className="lead">From everyday worries to bigger challenges, Saarthi offers safe and stigma-free support exactly when it is needed.</p>
            </div>
        </section>

        <section className="section">
            <div className="container reveal">
                <h2>Engaging Young People Through the Care Pathway</h2>
                <div className="grid three-grid">
                    <article className="card pathway-step glass">
                        <h3>1. Population Support</h3>
                        <p>Anonymous emotional support before referrals. Helps young people build resilience early.</p>
                    </article>
                    <article className="card pathway-step glass">
                        <h3>2. Everyday AI Self-Help</h3>
                        <p>Students can use AI to discuss worries, anxiety, and stress in a stigma-free space.</p>
                    </article>
                    <article className="card pathway-step glass">
                        <h3>3. Recovery Support</h3>
                        <p>Ongoing emotional support and follow-up check-ins after first interventions.</p>
                    </article>
                </div>
            </div>
        </section>

        <section className="section alt">
            <div className="container reveal">
                <h2>Population Support</h2>
                <div className="grid four-grid">
                    <article className="card feature-card hover-glow"><h3>Anonymous emotional support</h3></article>
                    <article className="card feature-card hover-glow"><h3>Early resilience building</h3></article>
                    <article className="card feature-card hover-glow"><h3>Self-management tools</h3></article>
                    <article className="card feature-card hover-glow"><h3>24/7 AI access</h3></article>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container reveal">
                <h2>What Children and Young People Get</h2>
                <div className="grid four-grid">
                    <article className="card feature-card hover-glow"><div className="icon-blue"><svg viewBox="0 0 24 24"><path d="M12 2v20"></path><path d="M5 12h14"></path></svg></div><h3>24/7 Access to AI Support</h3></article>
                    <article className="card feature-card hover-glow"><div className="icon-blue"><svg viewBox="0 0 24 24"><path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"></path><path d="M12 8v4l3 2"></path></svg></div><h3>Daily Check-Ins</h3></article>
                    <article className="card feature-card hover-glow"><div className="icon-blue"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="2"></rect><path d="M8 9h8"></path><path d="M8 13h5"></path></svg></div><h3>Customized Knowledge Boards</h3></article>
                    <article className="card feature-card hover-glow"><div className="icon-blue"><svg viewBox="0 0 24 24"><path d="M12 20c4-2.2 7-5.2 7-9V5l-7-3-7 3v6c0 3.8 3 6.8 7 9Z"></path></svg></div><h3>Signposting to Professional Help</h3></article>
                </div>
                <div className="grid three-grid top-gap">
                    <article className="phone-mock"><img src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80" alt="Phone chat screen" /></article>
                    <article className="phone-mock"><img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" alt="Mood tracking screen" /></article>
                    <article className="phone-mock"><img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=800&q=80" alt="Support resources screen" /></article>
                </div>
            </div>
        </section>

        <section className="section alt">
            <div className="container reveal">
                <h2>Youth Research</h2>
                <p className="lead">We surveyed 1400 teenagers aged 13-17 to understand mental health needs, support gaps, and accessibility challenges.</p>
                <div className="grid three-grid counters">
                    <article className="card counter-card"><h3 className="counter" data-target="55">0</h3><p>had never spoken to a professional.</p></article>
                    <article className="card counter-card"><h3 className="counter" data-target="75">0</h3><p>experienced stress outside traditional services.</p></article>
                    <article className="card counter-card"><h3 className="counter" data-target="78">0</h3><p>feel more comfortable opening up to AI.</p></article>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container reveal">
                <h2>Programs Supporting Young People</h2>
                <div className="grid three-grid">
                    <article className="card hover-glow"><h3>Emotional Resilience Training</h3></article>
                    <article className="card hover-glow"><h3>Digital Wellbeing Coaching</h3></article>
                    <article className="card hover-glow"><h3>Peer Support Communities</h3></article>
                    <article className="card hover-glow"><h3>Mindfulness Sessions</h3></article>
                    <article className="card hover-glow"><h3>Recovery Support</h3></article>
                    <article className="card hover-glow"><h3>Confidence Building</h3></article>
                </div>
            </div>
        </section>

        <section className="section alt">
            <div className="container reveal">
                <h2>Collaborative Care</h2>
                <div className="grid three-grid">
                    <article className="card glass hover-glow"><h3>Public speaking sessions</h3><p>Build confidence and emotional resilience in guided workshops.</p></article>
                    <article className="card glass hover-glow"><h3>Community meetups</h3><p>Safe, inclusive circles that help students share and support one another.</p></article>
                    <article className="card glass hover-glow"><h3>Group counseling workshops</h3><p>Facilitated sessions focused on coping skills, stress and social wellbeing.</p></article>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container reveal narrow">
                <h2>Privacy and Information Security Management</h2>
                <p className="lead">Saarthi uses secure access controls, encrypted data pathways, and privacy-focused architecture so user conversations remain protected and confidential.</p>
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
