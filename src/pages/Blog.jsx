import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
    return (
        <>
            
    <div className="page-transition"></div><div className="scroll-progress" id="scrollProgress"></div>
    <header className="site-header"><nav className="nav container"><Link to="/" className="logo">Saarthi</Link><button className="nav-toggle" id="navToggle" aria-label="Toggle navigation">☰</button><ul className="nav-links" id="navLinks"><li><Link to="/">Home</Link></li><li><Link to="/healthcare">Healthcare</Link></li><li className="nav-item dropdown"><button className="dropdown-toggle" type="button">Work</button><ul className="dropdown-menu"><li><Link to="/work">Employees</Link></li><li><Link to="/teams">Teams</Link></li></ul></li><li className="nav-item dropdown"><button className="dropdown-toggle active" type="button">Resources</button><ul className="dropdown-menu"><li><Link to="/reports">Reports</Link></li><li><Link to="/clinical-evidence">Clinical Evidence</Link></li><li><Link to="/case-studies">Case Studies</Link></li><li><Link className="active" to="/blog">Blog</Link></li><li><Link to="/quizzes">Quizzes</Link></li><li><Link to="/games">Games</Link></li><li><Link to="/relaxation-videos">Relaxation Videos</Link></li><li><Link to="/meditation-audios">Meditation Audios</Link></li></ul></li><li><Link to="/about">About Us</Link></li><li><Link to="/ai-support">AI Support</Link></li><li><Link to="/journal">Journal</Link></li><li><Link to="/book-demo">Book Demo</Link></li></ul><button className="theme-toggle" id="themeToggle" aria-label="Toggle dark mode"><span className="icon-sun">☀</span><span className="icon-moon">☾</span></button></nav></header>
    <main>
        <section className="section hero mini-hero"><div className="container reveal narrow center"><h1>Blog</h1><p className="lead">Seven practical reads for daily emotional wellbeing. Click any article to read in full.</p></div></section>
        <section className="section"><div className="container reveal"><div className="grid three-grid">
            <article className="card resource-card">
                <h3>Understanding Exam Anxiety</h3>
                <p>Break the cycle of panic with structure and recovery rituals.</p>
                <button className="read-more-btn">Read More ↓</button>
                <div className="blog-article-body">
                    <p>Exam anxiety is one of the most common forms of performance anxiety experienced by students at every level of education. It goes beyond normal pre-exam nervousness and can manifest as racing thoughts, physical tension, memory blanks, and an overwhelming urge to avoid revision altogether.</p>
                    <h4>Why Anxiety Hijacks Performance</h4>
                    <p>When the brain perceives threat, it activates the fight-or-flight response, flooding the body with cortisol. In exam contexts, this response can impair the prefrontal cortex — the area responsible for recall, reasoning, and planning — precisely when you need it most. Understanding this mechanism helps you respond to anxiety without judging yourself for feeling it.</p>
                    <h4>Key Insights</h4>
                    <p>Research consistently shows that moderate anxiety improves performance, while severe anxiety impairs it. The goal is not to eliminate anxiety entirely but to keep it from escalating into panic. Regular practice of structured breathing, physical activity, and consistent sleep are among the most evidence-supported interventions for exam anxiety.</p>
                    <h4>Practical Tips</h4>
                    <ul>
                        <li>Begin revision early to avoid panic-driven cramming in the final days.</li>
                        <li>Use box breathing (4 seconds in, 4 hold, 4 out, 4 hold) before study sessions.</li>
                        <li>Limit caffeine, which amplifies anxiety symptoms significantly.</li>
                        <li>Create a pre-exam ritual: same preparation sequence each time to signal safety to your nervous system.</li>
                        <li>Talk to a friend, counsellor, or use a journalling tool to externalise worry before it spirals.</li>
                    </ul>
                </div>
            </article>
            <article className="card resource-card">
                <h3>Sleep Hygiene for Students</h3>
                <p>Night routines that improve emotional resilience and focus.</p>
                <button className="read-more-btn">Read More ↓</button>
                <div className="blog-article-body">
                    <p>Poor sleep is one of the most significant and least addressed contributors to student mental health difficulties. In a culture that glamourises all-nighters and treats sleep as optional, it is worth understanding what the science says about what sleep deprivation actually costs you emotionally and cognitively.</p>
                    <h4>What Sleep Does for Your Mind</h4>
                    <p>During sleep, the brain processes the emotional content of the day's experiences, consolidates memory, and resets the emotional reactivity systems that determine how you respond to stress the following day. A single night of poor sleep measurably increases anxiety, reduces impulse control, and makes negative events feel more significant than they are.</p>
                    <h4>Key Insights</h4>
                    <p>Students consistently underestimate their sleep deficit. Even moderate sleep restriction of six hours per night for two weeks produces cognitive deficits equivalent to two full nights of absence, yet individuals typically rate their own performance as only mildly affected. The gap between perceived and actual impairment is a significant danger.</p>
                    <h4>Practical Tips</h4>
                    <ul>
                        <li>Set a consistent wake time seven days a week, even on weekends.</li>
                        <li>Stop screen use 45 minutes before bed or use blue-light filters if unavoidable.</li>
                        <li>Keep your room cool and dark — even small light sources disrupt melatonin production.</li>
                        <li>Write down tomorrow's tasks before bed so your brain does not rehearse them during sleep.</li>
                        <li>Avoid heavy meals and alcohol within three hours of sleep time.</li>
                    </ul>
                </div>
            </article>
            <article className="card resource-card">
                <h3>Building Emotional Resilience</h3>
                <p>How micro-habits protect you during stressful weeks.</p>
                <button className="read-more-btn">Read More ↓</button>
                <div className="blog-article-body">
                    <p>Emotional resilience is not a fixed personality trait that some people have and others do not. It is a set of practised responses and habits that make the difference between someone who recovers from setbacks and someone who stays stuck in them. The good news is that resilience is specifically trainable through consistent small actions rather than single dramatic interventions.</p>
                    <h4>The Science Behind Micro-Habits</h4>
                    <p>Neuroscience research shows that small repeated behaviours create neural pathways that eventually become default responses. A person who practises self-compassion daily for several weeks gradually replaces their automatic self-critical voice with a more balanced inner dialogue. You are, in a literal sense, rewiring your brain through consistency.</p>
                    <h4>Key Insights</h4>
                    <p>The most resilient individuals are not those who experience less difficulty but those who have reliable tools for processing and recovering from difficulty. These tools are almost always simple — a daily walk, a brief journalling practice, a trusted person they speak to regularly. Complexity is the enemy of consistency.</p>
                    <h4>Practical Tips</h4>
                    <ul>
                        <li>Identify one two-minute practice you can commit to every single morning.</li>
                        <li>Track your mood daily — awareness of patterns is the first step in managing them.</li>
                        <li>Learn one validated breathing technique and use it before stressful events.</li>
                        <li>Build one relationship in which you can speak honestly about difficulty.</li>
                        <li>Review what helped last time you felt overwhelmed — your own history is your best guide.</li>
                    </ul>
                </div>
            </article>
            <article className="card resource-card">
                <h3>Digital Burnout Prevention</h3>
                <p>Simple limits that lower screen fatigue without losing productivity.</p>
                <button className="read-more-btn">Read More ↓</button>
                <div className="blog-article-body">
                    <p>The average student spends between eight and twelve hours per day looking at screens across academic work, social media, entertainment, and messaging. This volume of screen exposure is physiologically novel — human brains evolved in environments without sustained artificial visual stimulation — and it carries real costs for attention, mood, and sleep quality.</p>
                    <h4>How Digital Fatigue Develops</h4>
                    <p>Continuous partial attention — the state of monitoring multiple channels simultaneously — keeps the brain's alert systems chronically activated. Over time this produces a form of fatigue that feels like exhaustion but is not resolved by sleep alone. Users describe it as feeling drained despite doing nothing physical, unable to concentrate, and experiencing low-grade irritability throughout the day.</p>
                    <h4>Key Insights</h4>
                    <p>The research on digital wellbeing suggests that the type of screen use matters more than the total time. Passive consumption (scrolling, watching) produces significantly more fatigue than active creation, problem-solving, or communication. Short breaks from screens every 45 to 60 minutes restore attention more effectively than longer breaks taken infrequently.</p>
                    <h4>Practical Tips</h4>
                    <ul>
                        <li>Use the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.</li>
                        <li>Remove social media apps from your phone and access them only through a browser.</li>
                        <li>Designate the first 30 minutes after waking as screen-free time.</li>
                        <li>Create a phone-free physical space in your home, even if just a corner of your room.</li>
                        <li>Set specific times for checking notifications rather than allowing constant interruption.</li>
                    </ul>
                </div>
            </article>
            <article className="card resource-card">
                <h3>Healthy Relationship Boundaries</h3>
                <p>Boundary scripts that preserve respect and emotional safety.</p>
                <button className="read-more-btn">Read More ↓</button>
                <div className="blog-article-body">
                    <p>The word "boundary" is used frequently in wellbeing conversations but is often misunderstood as a rejection of others. Healthy boundaries are not walls that keep people out — they are fences with gates that you control. They define what you are available for, what you need to feel safe, and what you will and will not accept in how others engage with you.</p>
                    <h4>Why Boundaries Are Difficult</h4>
                    <p>For many people, particularly those raised in environments where their needs were consistently deprioritised, setting a boundary feels like an act of selfishness or aggression. This is a learned response, not a fact. The discomfort of setting a boundary is temporary; the damage of consistently not setting one accumulates over time into resentment, exhaustion, and disconnection.</p>
                    <h4>Key Insights</h4>
                    <p>Clear boundaries actually improve relationships by removing the ambiguity that causes resentment. When both people in a relationship understand each other's limits, they can engage with genuine safety. The research on relationship satisfaction consistently shows that boundary clarity correlates more strongly with long-term happiness than compatibility alone.</p>
                    <h4>Practical Tips</h4>
                    <ul>
                        <li>Use "I need" statements rather than "you always" statements when communicating boundaries.</li>
                        <li>Start with one low-stakes boundary and honour it consistently before moving to more complex situations.</li>
                        <li>Write down your boundary before the conversation so you are clear on what you are asking for.</li>
                        <li>Expect discomfort when you first set a boundary with someone used to not having one.</li>
                        <li>Recognise that the other person's discomfort is not evidence that your boundary is wrong.</li>
                    </ul>
                </div>
            </article>
            <article className="card resource-card">
                <h3>Coping with Loneliness</h3>
                <p>Social reconnection steps that feel realistic and kind.</p>
                <button className="read-more-btn">Read More ↓</button>
                <div className="blog-article-body">
                    <p>Loneliness is a deeply uncomfortable experience that affects people across all social contexts — including those with active social lives. It is possible to be surrounded by people and feel profoundly alone. Loneliness is not measured by the number of people around you but by the gap between the connection you have and the connection you need.</p>
                    <h4>The Biology of Loneliness</h4>
                    <p>Chronic loneliness activates the same threat-response systems as physical pain. Research has found that prolonged social isolation increases the risk of depression, cardiovascular disease, and cognitive decline. The brain treats social disconnection as a survival problem, which is why loneliness feels so urgently uncomfortable — it is meant to motivate action.</p>
                    <h4>Key Insights</h4>
                    <p>The most effective solutions to loneliness are not always social events. Quality matters significantly more than quantity. A single honest conversation with one person who genuinely understands you has a stronger protective effect against loneliness than several hours spent in casual social settings where true connection is absent.</p>
                    <h4>Practical Tips</h4>
                    <ul>
                        <li>Identify one existing relationship that could be deepened with more honesty and invest in it.</li>
                        <li>Join a group structured around shared activity rather than forced socialising.</li>
                        <li>Volunteer — helping others consistently reduces loneliness faster than seeking help with it directly.</li>
                        <li>Be honest with yourself about what kind of connection you are actually missing.</li>
                        <li>Use a journalling tool to distinguish between situational loneliness and chronic isolation, which may need professional support.</li>
                    </ul>
                </div>
            </article>
            <article className="card resource-card">
                <h3>Managing Academic Burnout</h3>
                <p>Recognise the signs early and recover with purpose.</p>
                <button className="read-more-btn">Read More ↓</button>
                <div className="blog-article-body">
                    <p>Academic burnout is not simply tiredness from studying hard. It is a state of physical and emotional exhaustion resulting from prolonged exposure to academic demands that exceed a student's perceived ability to cope. It arrives gradually and, if unrecognised, can severely impair both performance and long-term academic engagement.</p>
                    <h4>The Three Dimensions of Burnout</h4>
                    <p>Research identifies three core burnout dimensions: emotional exhaustion (feeling depleted and unable to engage), depersonalisation (developing a cynical or detached attitude toward study), and reduced personal accomplishment (feeling that effort no longer produces meaningful results). Students experiencing all three are at high risk of dropout if not supported.</p>
                    <h4>Key Insights</h4>
                    <p>Burnout prevention is more effective than burnout recovery. Students who identify early warning signs — persistent fatigue, declining motivation, difficulty concentrating, increasing cynicism about their course — and take structured rest before full exhaustion arrives recover significantly faster. Recovery from full burnout typically requires weeks rather than days.</p>
                    <h4>Practical Tips</h4>
                    <ul>
                        <li>Protect at least one half-day per week with no academic work, conversations about study, or revision-related thinking.</li>
                        <li>Break large academic goals into weekly milestones to maintain a sense of progress.</li>
                        <li>Identify the specific demand driving the most exhaustion and discuss it with a supervisor or tutor.</li>
                        <li>Distinguish between activities that genuinely restore you and those that simply pass time.</li>
                        <li>Seek support early — burnout is not a sign of weakness but a signal that resources need to be realigned.</li>
                    </ul>
                </div>
            </article>
        </div></div></section>
    </main>
    <section className="disclaimer"><div className="container"><p>Saarthi is not designed to assist with crises such as abuse, severe mental health conditions that may cause feelings of suicide, harm to self, or other medical emergencies.</p><p>Saarthi cannot and will not offer medical or clinical advice. It can only suggest that users seek professional medical help.</p><p>Please reach out to your country's suicide hotline in case of emergency.</p><p>You must be 18 years of age to use Saarthi. If you are between 13 and 18, please review the Terms of Service and Privacy Policy with a parent or guardian before using the platform.</p><p>Saarthi is not designed to be used by children under 13.</p></div></section>
    <footer className="site-footer"><div className="container footer-grid"><div><h4>Important Links</h4><Link to="/">Home</Link><Link to="/healthcare">Healthcare</Link><Link to="/work">Work</Link></div><div><h4>Legal</h4><Link to="#">Privacy Policy</Link><Link to="#">Terms of Service</Link><Link to="/about">Contact</Link></div><div><h4>Resources</h4><Link to="/resources">Library</Link><Link to="/ai-support">AI Support</Link><Link to="/journal">Journal</Link></div><div><h4>Social</h4><div className="socials"><Link to="#" aria-label="Instagram">◯</Link><Link to="#" aria-label="LinkedIn">▢</Link><Link to="#" aria-label="YouTube">▷</Link></div></div></div></footer>
    

        </>
    );
}
