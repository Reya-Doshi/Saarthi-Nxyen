import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
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
                <li className="nav-item dropdown"><button className="dropdown-toggle active" type="button">Resources</button><ul className="dropdown-menu"><li><Link className="active" to="/reports">Reports</Link></li><li><Link to="/clinical-evidence">Clinical Evidence</Link></li><li><Link to="/case-studies">Case Studies</Link></li><li><Link to="/blog">Blog</Link></li><li><Link to="/quizzes">Quizzes</Link></li><li><Link to="/games">Games</Link></li><li><Link to="/relaxation-videos">Relaxation Videos</Link></li><li><Link to="/meditation-audios">Meditation Audios</Link></li></ul></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/ai-support">AI Support</Link></li>
                <li><Link to="/journal">Journal</Link></li>
                <li><Link to="/book-demo">Book Demo</Link></li>
            </ul>
            <button className="theme-toggle" id="themeToggle" aria-label="Toggle dark mode"><span className="icon-sun">☀</span><span className="icon-moon">☾</span></button>
        </nav>
    </header>

    <main>
        <section className="section hero mini-hero">
            <div className="container reveal narrow center">
                <h1>Reports</h1>
                <p className="lead">Seven focused wellbeing reports with expandable summaries.</p>
            </div>
        </section>

        <section className="section">
            <div className="container reveal">
                <div className="grid two-grid reports-grid">
                    <details className="card">
                        <summary>Campus Stress Trend Report</summary>
                        <div className="detail-body">
                            <p>Academic institutions across India have seen a consistent rise in student-reported stress levels over the last five years. This report synthesises data gathered from over 12,000 students across 40 campuses, tracking stress patterns by semester period, exam cycle intensity, and cumulative academic load.</p>
                            <h4>Key Findings</h4>
                            <p>Stress spikes are most pronounced during the two weeks preceding final examinations and during assignment submission windows. Students in technical programmes report significantly higher stress compared to those in humanities, with 68% of engineering students indicating chronic high stress versus 41% in arts disciplines. The transition from first to second year was identified as the single highest-risk window for emotional burnout.</p>
                            <h4>Impact on Mental Health</h4>
                            <p>Elevated stress correlates strongly with reduced academic performance, increased absenteeism, and disrupted sleep patterns. Among students who reported very high stress, 54% showed signs of clinical anxiety when assessed using standardised screening tools. Only 18% of those students had accessed any form of professional support, pointing to a significant gap in care uptake.</p>
                            <h4>Conclusions</h4>
                            <p>Early identification through routine check-ins, peer support structures, and AI-assisted self-assessment tools significantly reduces the escalation from manageable stress to clinical severity. Platforms offering anonymous, low-barrier support show the highest adoption rates, particularly among male students who are statistically less likely to seek direct counselling. Saarthi-type tools that integrate with daily digital habits show strong promise as a first-line stress reduction resource.</p>
                        </div>
                    </details>
                    <details className="card">
                        <summary>Youth Anxiety Snapshot</summary>
                        <div className="detail-body">
                            <p>This snapshot captures anxiety prevalence and preferred coping modalities among young adults aged 17 to 25, drawn from a national survey conducted across urban and semi-urban populations. The goal was to understand not just prevalence but also what formats of support youth are most likely to engage with voluntarily.</p>
                            <h4>Key Findings</h4>
                            <p>Generalised anxiety disorder indicators were present in 34% of respondents, with social anxiety being the most commonly reported subtype at 28%. Nearly 60% of young people reported avoiding anxiety-provoking situations rather than seeking help. Among those who did seek support, peer conversation was the most common first step, followed by app-based tools and self-help resources. Only 14% engaged with formal counselling as a first response.</p>
                            <h4>Preferred Coping Formats</h4>
                            <p>Short, structured exercises of under ten minutes were rated as most manageable and likely to be completed. Journalling was preferred by 44% of respondents as a daily practice. Audio-guided sessions and anonymous AI conversation interfaces ranked highest for perceived safety, particularly among those concerned about social stigma.</p>
                            <h4>Conclusions</h4>
                            <p>Youth are seeking support but on their own terms, favouring tools that respect their pace and privacy. Products offering short-form, mobile-first anxiety management content with anonymity built in are the most adoptable. Reducing the perceived social risk of accessing support is the single most important design principle for youth mental health platforms.</p>
                        </div>
                    </details>
                    <details className="card">
                        <summary>Early Intervention Outcomes</summary>
                        <div className="detail-body">
                            <p>This report examines outcomes across three separate intervention studies totalling 4,800 participants, comparing students who accessed support at early distress indicators against those who sought help only at the point of crisis. The central question was whether early digital intervention produces measurably better outcomes than delayed professional care alone.</p>
                            <h4>Methodology</h4>
                            <p>Participants were grouped into early support (mild distress, self-identified via screening) and late support (moderate to severe distress, referred by institution). Both groups received structured digital interventions for eight weeks, with follow-up at twelve and twenty-four weeks. Validated wellbeing scales were used at each checkpoint.</p>
                            <h4>Key Findings</h4>
                            <p>The early intervention group showed a 43% greater reduction in distress scores by week twelve. Dropout from the support programme was 29% lower among early interveners. Academic engagement, measured by attendance and submission rates, improved more significantly in the early group, suggesting that emotional support has direct academic benefits.</p>
                            <h4>Conclusions</h4>
                            <p>Every week of delayed support correlates with a measurable increase in recovery time and severity. Embedding light-touch check-in tools within routine student life, rather than positioning them as crisis responses, is the most effective approach. Platforms that students encounter as ordinary daily tools are more likely to catch distress early and significantly reduce the population requiring intensive clinical support.</p>
                        </div>
                    </details>
                    <details className="card">
                        <summary>Digital Support Adoption</summary>
                        <div className="detail-body">
                            <p>This report analyses usage trends for AI-first emotional support tools across campuses and workplaces in India from 2021 to 2024. It draws on anonymised usage logs, retention data, and satisfaction ratings from over 80,000 unique users across 15 platform deployments.</p>
                            <h4>Adoption Drivers</h4>
                            <p>The three strongest predictors of adoption were accessibility without appointment, anonymous entry, and integration with existing digital platforms such as learning management systems and employee apps. Platforms requiring institutional login or personal registration saw 38% lower first-session conversion than those offering anonymous quick-start flows.</p>
                            <h4>Retention Patterns</h4>
                            <p>Monthly retention averaged 61% for platforms combining journalling, guided exercises, and AI conversation. Platforms offering only one modality showed retention under 30%. Users who completed at least three check-ins in their first week had a significantly higher 90-day retention rate, suggesting the critical window for habit formation is narrow.</p>
                            <h4>Conclusions</h4>
                            <p>Digital mental health adoption is no longer a speculative trend. Structured platforms with AI at the core, human escalation pathways built in, and privacy-first design are achieving meaningful engagement at scale. Institutions investing in digital-first wellbeing support see lower rates of academic dropout and employee absenteeism, with positive returns within the first year of deployment.</p>
                        </div>
                    </details>
                    <details className="card">
                        <summary>Help-Seeking Behavior Map</summary>
                        <div className="detail-body">
                            <p>Understanding how different individuals choose to seek help is essential for designing effective mental health platforms. This report maps help-seeking pathways across age groups, genders, academic levels, and geographic contexts, using data from surveys, platform logs, and structured interviews conducted over eighteen months.</p>
                            <h4>Anonymous vs. Identified Pathways</h4>
                            <p>Anonymous pathways were preferred by 71% of first-time users. Men were 3.2 times more likely than women to choose fully anonymous access over named registration. Students in their first year of higher education showed the strongest preference for anonymity, likely reflecting unfamiliarity with the institution and social anxiety about disclosure.</p>
                            <h4>Trigger Points</h4>
                            <p>Help-seeking was most commonly triggered by exam failure, interpersonal conflict, financial pressure, or feelings of academic inadequacy. Very few users described proactive self-care as the reason they first accessed support, indicating that demand is largely reactive. This suggests a need for ambient, low-stakes tools that engage users before distress fully escalates.</p>
                            <h4>Conclusions</h4>
                            <p>The design of help-seeking pathways must account for the strong human preference for privacy and low commitment at first contact. Multiple entry points, zero-friction onboarding, and clear explanations of data handling significantly increase the likelihood that individuals will take the first step. Saarthi's approach of anonymous access with optional registration addresses the most significant barrier identified across all demographic groups.</p>
                        </div>
                    </details>
                    <details className="card">
                        <summary>Semester Burnout Index</summary>
                        <div className="detail-body">
                            <p>Academic burnout follows predictable seasonal patterns that, once understood, allow institutions to proactively time support deployments. This report presents a semester burnout index derived from mood tracking data, counsellor referral volumes, and academic performance records across twelve institutions over four academic years.</p>
                            <h4>Burnout Intensity Windows</h4>
                            <p>Three distinct burnout peaks occur each academic year: weeks 8 to 10 of the first semester (mid-semester fatigue), weeks 14 to 16 of the same semester (pre-final exhaustion), and the first three weeks of the subsequent semester (post-break re-entry difficulty). The second peak is consistently the most severe, with burnout indicators 2.4 times higher than the academic year baseline.</p>
                            <h4>Recovery Opportunities</h4>
                            <p>Semester breaks represent significant but underutilised recovery opportunities. Students who used structured digital tools during the inter-semester period showed markedly lower burnout at the post-break re-entry peak. Simple daily journalling or mood tracking during breaks was sufficient to reduce burnout scores, suggesting that minimal intervention during recovery windows creates disproportionate benefit.</p>
                            <h4>Conclusions</h4>
                            <p>Burnout is not random but follows mappable institutional rhythms. Institutions that align support deployment to these known peaks, rather than reacting to crises after they occur, achieve significantly better student wellbeing outcomes. A consistent digital presence throughout the academic calendar, rather than crisis-only interventions, is the evidence-based standard this report recommends.</p>
                        </div>
                    </details>
                    <details className="card">
                        <summary>Care Continuity Dashboard</summary>
                        <div className="detail-body">
                            <p>One of the most consistent failures in campus mental health provision is the disruption of care. Students who begin support often disengage due to counsellor availability constraints, stigma concerns, or administrative friction. This report examines care continuity metrics across diverse institutional contexts and identifies the structural interventions with the highest impact on follow-through rates.</p>
                            <h4>Follow-Up Adherence</h4>
                            <p>Nationally, only 41% of students who access a first counselling session return for a second. This drops to 28% by the third session. In contrast, digital platforms with integrated reminder systems and flexible session timing achieve second-session rates above 70%. The difference is primarily attributable to reduced friction and the elimination of scheduling as a barrier.</p>
                            <h4>Long-Term Engagement</h4>
                            <p>Users who engage with daily micro-practices such as mood tracking or journalling show 3.1 times higher long-term platform engagement than those who only use chat or crisis features. Habit-forming features are therefore not supplementary but the primary driver of sustained support uptake.</p>
                            <h4>Conclusions</h4>
                            <p>Care continuity depends on reducing friction at every stage of the support journey. Automatic check-in reminders, personalised content based on prior mood data, and low-commitment daily tools are the most effective structural supports for maintaining engagement. Platforms that offer a seamless bridge between self-guided care and professional escalation achieve the best long-term user outcomes and institutional wellbeing metrics.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    </main>

    <section className="disclaimer"><div className="container"><p>Saarthi is not designed to assist with crises such as abuse, severe mental health conditions that may cause feelings of suicide, harm to self, or other medical emergencies.</p><p>Saarthi cannot and will not offer medical or clinical advice. It can only suggest that users seek professional medical help.</p><p>Please reach out to your country's suicide hotline in case of emergency.</p><p>You must be 18 years of age to use Saarthi. If you are between 13 and 18, please review the Terms of Service and Privacy Policy with a parent or guardian before using the platform.</p><p>Saarthi is not designed to be used by children under 13.</p></div></section>

    <footer className="site-footer"><div className="container footer-grid"><div><h4>Important Links</h4><Link to="/">Home</Link><Link to="/healthcare">Healthcare</Link><Link to="/work">Work</Link></div><div><h4>Legal</h4><Link to="#">Privacy Policy</Link><Link to="#">Terms of Service</Link><Link to="/about">Contact</Link></div><div><h4>Resources</h4><Link to="/resources">Library</Link><Link to="/ai-support">AI Support</Link><Link to="/journal">Journal</Link></div><div><h4>Social</h4><div className="socials"><Link to="#" aria-label="Instagram">◯</Link><Link to="#" aria-label="LinkedIn">▢</Link><Link to="#" aria-label="YouTube">▷</Link></div></div></div></footer>

    

        </>
    );
}
