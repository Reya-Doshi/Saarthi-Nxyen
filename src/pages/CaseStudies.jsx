import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
    return (
        <>
            
    <div className="page-transition"></div><div className="scroll-progress" id="scrollProgress"></div>
    <header className="site-header"><nav className="nav container"><Link to="/" className="logo">Saarthi</Link><button className="nav-toggle" id="navToggle" aria-label="Toggle navigation">☰</button><ul className="nav-links" id="navLinks"><li><Link to="/">Home</Link></li><li><Link to="/healthcare">Healthcare</Link></li><li className="nav-item dropdown"><button className="dropdown-toggle" type="button">Work</button><ul className="dropdown-menu"><li><Link to="/work">Employees</Link></li><li><Link to="/teams">Teams</Link></li></ul></li><li className="nav-item dropdown"><button className="dropdown-toggle active" type="button">Resources</button><ul className="dropdown-menu"><li><Link to="/reports">Reports</Link></li><li><Link to="/clinical-evidence">Clinical Evidence</Link></li><li><Link className="active" to="/case-studies">Case Studies</Link></li><li><Link to="/blog">Blog</Link></li><li><Link to="/quizzes">Quizzes</Link></li><li><Link to="/games">Games</Link></li><li><Link to="/relaxation-videos">Relaxation Videos</Link></li><li><Link to="/meditation-audios">Meditation Audios</Link></li></ul></li><li><Link to="/about">About Us</Link></li><li><Link to="/ai-support">AI Support</Link></li><li><Link to="/journal">Journal</Link></li><li><Link to="/book-demo">Book Demo</Link></li></ul><button className="theme-toggle" id="themeToggle" aria-label="Toggle dark mode"><span className="icon-sun">☀</span><span className="icon-moon">☾</span></button></nav></header>
    <main>
        <section className="section hero mini-hero"><div className="container reveal narrow center"><h1>Case Studies</h1><p className="lead">Eight real-world implementation stories with detailed outcomes.</p></div></section>
        <section className="section"><div className="container reveal"><div className="grid two-grid">
            <article className="card case-card">
                <h3>Osmania University — Dropout Prevention</h3>
                <p>Reducing student dropout through always-on emotional check-ins.</p>
                <button className="case-toggle">Read Case Study ↓</button>
                <div className="case-body">
                    <p>Osmania University enrolled approximately 280,000 students across its main and affiliated campuses. In 2022, the student welfare department identified a worrying dropout trend in the second semester, with 8.4% of first-year students not returning after the winter break — significantly above the national average of 5.1%.</p>
                    <p>The institution piloted an AI-assisted check-in platform for first-year students. Daily mood check-ins were offered through a lightweight mobile interface, requiring only about ninety seconds per session. Students who showed sustained low-mood patterns over three consecutive days received personalised coping content and, where indicated, a prompt to connect with the campus counsellor.</p>
                    <p>Over one academic year, second-semester dropout among participating students fell to 4.9%, compared to 8.4% among non-participating students on the same campus. Participating students also reported higher satisfaction with university life and a greater sense of being supported. The counselling department noted that referrals were arriving earlier in the distress cycle, with cases presenting at mild rather than severe levels.</p>
                    <p>The university has since expanded the programme to all faculties and uses semester-wise mood trend data to time wellbeing workshops and counsellor availability increases proactively.</p>
                </div>
            </article>
            <article className="card case-card">
                <h3>BITS Pilani Hyderabad — Anonymous Access</h3>
                <p>Improved early help access through stigma-free anonymous pathways.</p>
                <button className="case-toggle">Read Case Study ↓</button>
                <div className="case-body">
                    <p>BITS Pilani Hyderabad is a highly competitive technical institution where academic pressure is intense and the cultural stigma around mental health disclosure has historically been significant. A survey conducted in 2021 found that only 11% of students would voluntarily visit the campus counsellor, even when experiencing significant distress, citing fear of being judged by peers or academic staff.</p>
                    <p>The campus introduced an anonymous digital wellbeing platform with no institutional login requirement. Students could access journalling tools, guided exercises, and AI conversation without registering their name or student ID. The platform clearly communicated its data privacy policies and did not share individual usage data with the institution.</p>
                    <p>Within four months, 43% of the student body had used the platform at least once. Among users, 31% voluntarily engaged with the "connect to a counsellor" feature, having first built comfort with the tool in anonymous mode. The campus counsellor reported that the nature of presenting concerns shifted, with many more students coming in for early-stage support rather than crisis intervention.</p>
                    <p>The case demonstrates that removing the identity barrier at first contact can more than triple voluntary help-seeking rates, without requiring institutions to relax privacy protections or compromise data governance.</p>
                </div>
            </article>
            <article className="card case-card">
                <h3>Government Engineering College — Counsellor Load Balancing</h3>
                <p>Counsellor workload management through guided AI triage.</p>
                <button className="case-toggle">Read Case Study ↓</button>
                <div className="case-body">
                    <p>A large government engineering college with a student body of 6,400 had a single full-time counsellor and two part-time support staff. Demand for appointments exceeded capacity by an estimated 340%, meaning most students who sought help either waited weeks or received no follow-up at all.</p>
                    <p>The institution deployed an AI triage layer that provided immediate guided support to students while simultaneously rating their distress level using validated markers. Students rated as low distress were directed to self-guided digital exercises. Moderate distress cases received structured check-in sequences with an offer to join a waitlist for counsellor sessions. Only high-distress cases received immediate escalation.</p>
                    <p>Within six months, the proportion of counsellor sessions used for low-severity cases dropped from 62% to 18%. The single full-time counsellor was able to triple the number of moderate and high-severity students seen, with no increase in staffing. Student satisfaction with the support available increased significantly, primarily because response time for any form of contact dropped from days to minutes.</p>
                    <p>This case illustrates that AI triage does not replace human counsellors but rather makes them dramatically more effective by ensuring their time is directed where the clinical need is greatest.</p>
                </div>
            </article>
            <article className="card case-card">
                <h3>Telangana Youth Programme — Engagement at Scale</h3>
                <p>Higher youth participation in structured support programmes.</p>
                <button className="case-toggle">Read Case Study ↓</button>
                <div className="case-body">
                    <p>A state-level youth welfare programme in Telangana sought to increase voluntary participation in mental health awareness and structured support activities among youth aged 18 to 24 in semi-urban and rural areas. Traditional outreach through physical workshops showed attendance rates below 8% due to transport barriers, time constraints, and social stigma.</p>
                    <p>A digital-first programme was deployed through WhatsApp-compatible content, offering accessible daily wellbeing prompts, mood tracking, and crisis information in both Telugu and English. Community health workers were trained to introduce the platform and supported users who needed escalation to district health services.</p>
                    <p>Voluntary programme participation rose to 31% within the first quarter of deployment. Completion of structured eight-week wellbeing programmes reached 54% among those who initiated. Male youth participation, which had been particularly low in previous in-person formats, reached 28% — double the prior baseline.</p>
                    <p>The programme demonstrated that local language support, familiar communication channels, and offline capability are critical design requirements for reaching youth populations outside major urban centres.</p>
                </div>
            </article>
            <article className="card case-card">
                <h3>Tech Mahindra — Workplace Burnout Recovery</h3>
                <p>Burnout reduction and morale recovery in hybrid teams.</p>
                <button className="case-toggle">Read Case Study ↓</button>
                <div className="case-body">
                    <p>Following the shift to hybrid work in 2021, Tech Mahindra's Hyderabad HR division observed a 22% increase in reported burnout indicators through its annual employee health survey. Employees cited blurred work-home boundaries, reduced social connection with colleagues, and increased ambiguity about performance expectations as primary contributors.</p>
                    <p>The company deployed a structured digital wellbeing programme accessible through the employee portal. The programme offered guided daily check-ins, team-level mood aggregation for managers (privacy-protected), resilience skill modules, and optional one-to-one sessions with licensed therapists via video call.</p>
                    <p>After six months, burnout indicators on validated scales dropped by 31% among active programme users. Manager-reported team productivity scores improved by 19%. The programme achieved 58% adoption across the Hyderabad division, with the highest uptake among mid-level employees aged 27 to 35 — the group showing the greatest pre-programme distress levels.</p>
                    <p>Critically, the anonymous aggregate mood dashboard gave management teams the ability to respond to team-level stress trends before individual performance issues emerged, representing a shift from reactive to proactive employee care.</p>
                </div>
            </article>
            <article className="card case-card">
                <h3>Healthcare Network — Care Continuity</h3>
                <p>Improved follow-up adherence with reminder-led check-ins.</p>
                <button className="case-toggle">Read Case Study ↓</button>
                <div className="case-body">
                    <p>A network of community health centres in Hyderabad serving low-income populations identified that fewer than 30% of patients referred for follow-up mental health support actually returned for their second appointment. Barriers included transport cost, appointment scheduling friction, and the perception that their concerns were not serious enough to warrant repeated visits.</p>
                    <p>The network integrated a digital follow-up system that sent personalised reminders between appointments, delivered short guided exercises matching the patient's self-reported concern, and allowed patients to flag worsening or improving status via a simple daily check-in.</p>
                    <p>Second-appointment attendance increased to 67% within three months of deployment. Clinicians reported arriving at follow-up appointments with significantly better contextual information about the patient's experience between sessions. Patients who completed check-ins consistently described feeling more confident about speaking with clinicians, attributing this to the practice of articulating their feelings daily.</p>
                    <p>This case argues strongly for integrating digital continuity tools into community health settings, where resource constraints make in-person follow-up particularly difficult.</p>
                </div>
            </article>
            <article className="card case-card">
                <h3>IIT Hyderabad — First-Year Stigma Reduction</h3>
                <p>Reducing stigma and enabling safer conversations in incoming students.</p>
                <button className="case-toggle">Read Case Study ↓</button>
                <div className="case-body">
                    <p>IIT Hyderabad's student welfare initiative identified that mental health stigma among first-year students was significantly higher than among senior students, likely because incoming students had not yet encountered norms of openness that existed within the campus community. Exit surveys from several cohorts showed that first-year students rated their awareness of available support below 25%.</p>
                    <p>The welfare team integrated a wellbeing orientation module into the induction programme, followed by ongoing access to an AI-assisted support tool reachable from the institute's student app. The tool was explicitly framed as a study companion rather than a mental health service, normalising its use as part of daily academic life.</p>
                    <p>Stigma ratings on a validated scale dropped by 41% among first-year students who completed the module and used the tool at least twice. Self-disclosure rates in peer settings increased, as measured by surveys six months after induction. Counsellor session bookings from first-year students tripled compared to the prior cohort.</p>
                    <p>The case demonstrates that reframing mental health tools as ordinary academic support resources, rather than clinical services, is one of the most effective stigma-reduction strategies available to institutions.</p>
                </div>
            </article>
            <article className="card case-card">
                <h3>Apollo Health Network — Digital Reflection Adherence</h3>
                <p>Better follow-up adherence through personalised reflection prompts.</p>
                <button className="case-toggle">Read Case Study ↓</button>
                <div className="case-body">
                    <p>Apollo's outpatient psychiatry unit in Hyderabad was piloting a digital supplement to medication management, focusing on patients with mild to moderate depression who were stable on medication but receiving limited psychosocial support between monthly appointments. The clinical team hypothesised that structured digital reflection could improve treatment adherence and self-management between sessions.</p>
                    <p>Patients were offered a daily reflection tool that delivered personalised prompts based on their self-reported mood and session notes provided by their treating physician. Prompts were designed to reinforce cognitive techniques discussed in sessions and to flag any changes in mood requiring attention before the next appointment.</p>
                    <p>Treatment adherence, measured by medication continuation and appointment keeping, improved from 61% to 84% among digital tool users over six months. Patients also reported feeling more engaged in their own recovery, with 78% agreeing that the prompts helped them feel connected to their treatment plan between appointments.</p>
                    <p>Clinical outcomes, assessed by PHQ-9 at each monthly appointment, showed faster improvement trajectories among tool users. The psychiatry team noted that the quality and specificity of patient self-reporting in sessions improved markedly, reducing the time required for initial assessment and leaving more time for therapeutic work.</p>
                </div>
            </article>
        </div></div></section>
    </main>
    <section className="disclaimer"><div className="container"><p>Saarthi is not designed to assist with crises such as abuse, severe mental health conditions that may cause feelings of suicide, harm to self, or other medical emergencies.</p><p>Saarthi cannot and will not offer medical or clinical advice. It can only suggest that users seek professional medical help.</p><p>Please reach out to your country's suicide hotline in case of emergency.</p><p>You must be 18 years of age to use Saarthi. If you are between 13 and 18, please review the Terms of Service and Privacy Policy with a parent or guardian before using the platform.</p><p>Saarthi is not designed to be used by children under 13.</p></div></section>
    <footer className="site-footer"><div className="container footer-grid"><div><h4>Important Links</h4><Link to="/">Home</Link><Link to="/healthcare">Healthcare</Link><Link to="/work">Work</Link></div><div><h4>Legal</h4><Link to="#">Privacy Policy</Link><Link to="#">Terms of Service</Link><Link to="/about">Contact</Link></div><div><h4>Resources</h4><Link to="/resources">Library</Link><Link to="/ai-support">AI Support</Link><Link to="/journal">Journal</Link></div><div><h4>Social</h4><div className="socials"><Link to="#" aria-label="Instagram">◯</Link><Link to="#" aria-label="LinkedIn">▢</Link><Link to="#" aria-label="YouTube">▷</Link></div></div></div></footer>
    

        </>
    );
}
