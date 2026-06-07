import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
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
                <li><Link className="active" to="/about">About Us</Link></li>
                <li><Link to="/ai-support">AI Support</Link></li>
                <li><Link to="/book-demo">Book Demo</Link></li>
            </ul>
            <button className="theme-toggle" id="themeToggle" aria-label="Toggle dark mode"><span className="icon-sun">☀</span><span className="icon-moon">☾</span></button>
        </nav>
    </header>

    <main>
        <section className="section hero mini-hero">
            <div className="container reveal narrow center">
                <h1>About Saarthi</h1>
                <p className="lead">Building compassionate AI-first support for emotional wellbeing.</p>
            </div>
        </section>

        <section className="section">
            <div className="container reveal">
                <h2>Team</h2>
                <div className="grid two-grid">
                    <article className="card counselor-card glass">
                        <div className="team-photo-placeholder" aria-label="Reya photo placeholder">
                            <span>Replace photo</span>
                            <small>reya-image.jpg</small>
                        </div>
                        <h3>Reya Doshi</h3>
                        <p>Role: Vision and Core Idea</p>
                        <p>Reya shaped Saarthi from a lived need for stigma-free emotional care. She defines the platform vision, care tone, and product ethics so every feature supports dignity, inclusion, and safety. Her focus is building a trusted wellbeing ecosystem where students and young professionals can seek help early without fear or judgment.</p>
                    </article>
                    <article className="card counselor-card glass">
                        <div className="team-photo-placeholder" aria-label="Vaishnavi photo placeholder">
                            <span>Replace photo</span>
                            <small>vaishnavi-image.jpg</small>
                        </div>
                        <h3>Vaishnavi Patil</h3>
                        <p>Role: Production, Design and Development</p>
                        <p>Vaishnavi leads production delivery from UX architecture to frontend execution. She translates mental wellness workflows into responsive, accessible interfaces while preserving emotional clarity across every interaction. Her work ensures Saarthi feels premium, lightweight, and dependable across devices and user contexts.</p>
                    </article>
                </div>
            </div>
        </section>

        <section className="section alt">
            <div className="container reveal narrow">
                <h2>FAQ</h2>
                <div className="faq-item card">
                    <button className="faq-question" type="button">Is Saarthi a replacement for therapy?<span>+</span></button>
                    <div className="faq-answer"><p>No. Saarthi supports wellbeing and early intervention while complementing professional care.</p></div>
                </div>
                <div className="faq-item card">
                    <button className="faq-question" type="button">Is my conversation private?<span>+</span></button>
                    <div className="faq-answer"><p>Yes. Saarthi is designed for privacy-first support with safe and responsible data practices.</p></div>
                </div>
                <div className="faq-item card">
                    <button className="faq-question" type="button">Can institutions deploy Saarthi?<span>+</span></button>
                    <div className="faq-answer"><p>Yes. Colleges, healthcare teams and workplaces can deploy Saarthi with scalable workflows.</p></div>
                </div>
                <div className="faq-item card">
                    <button className="faq-question" type="button">Is Saarthi available 24/7?<span>+</span></button>
                    <div className="faq-answer"><p>Yes, students can access AI-guided support at any time across devices.</p></div>
                </div>
                <div className="faq-item card">
                    <button className="faq-question" type="button">Does Saarthi support counselor workflows?<span>+</span></button>
                    <div className="faq-answer"><p>Yes, Saarthi complements human care teams with ongoing engagement and check-ins.</p></div>
                </div>
                <div className="faq-item card">
                    <button className="faq-question" type="button">Can users stay anonymous?<span>+</span></button>
                    <div className="faq-answer"><p>Anonymous support options help reduce stigma and improve help-seeking behavior.</p></div>
                </div>
                <div className="faq-item card">
                    <button className="faq-question" type="button">What kind of exercises are included?<span>+</span></button>
                    <div className="faq-answer"><p>Reflection, breathing, mood tracking, and resilience routines are included across categories.</p></div>
                </div>
                <div className="faq-item card">
                    <button className="faq-question" type="button">Is Saarthi safe for LGBTQ+ users?<span>+</span></button>
                    <div className="faq-answer"><p>Yes, Saarthi includes inclusive pathways and identity-affirming support content.</p></div>
                </div>
                <div className="faq-item card">
                    <button className="faq-question" type="button">Does Saarthi replace emergency care?<span>+</span></button>
                    <div className="faq-answer"><p>No, Saarthi is not for crisis response and directs users to emergency medical help when needed.</p></div>
                </div>
                <div className="faq-item card">
                    <button className="faq-question" type="button">Can I save journal entries?<span>+</span></button>
                    <div className="faq-answer"><p>Yes, journal entries are stored locally in the browser for quick personal reflection history.</p></div>
                </div>
                <div className="faq-item card">
                    <button className="faq-question" type="button">Is dark mode supported?<span>+</span></button>
                    <div className="faq-answer"><p>Yes, Saarthi supports both light and dark modes with consistent readability.</p></div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container reveal narrow">
                <h2>Contact</h2>
                <p className="lead">Email: support@saarthi.ai</p>
                <form className="card form-card" id="aboutContactForm">
                    <label htmlFor="aboutName">Name</label>
                    <input id="aboutName" type="text" required />
                    <label htmlFor="aboutEmail">Email</label>
                    <input id="aboutEmail" type="email" required />
                    <label htmlFor="aboutMsg">Message</label>
                    <textarea id="aboutMsg" rows="5" required></textarea>
                    <button className="btn btn-primary" type="submit">Send Message</button>
                </form>
                <div className="socials top-gap"><Link to="#" aria-label="Instagram">◯</Link><Link to="#" aria-label="LinkedIn">▢</Link><Link to="#" aria-label="YouTube">▷</Link></div>
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
