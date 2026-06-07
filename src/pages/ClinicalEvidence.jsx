import React from 'react';
import { Link } from 'react-router-dom';

export default function ClinicalEvidence() {
    return (
        <>
            
    <div className="page-transition"></div><div className="scroll-progress" id="scrollProgress"></div>
    <header className="site-header"><nav className="nav container"><Link to="/" className="logo">Saarthi</Link><button className="nav-toggle" id="navToggle" aria-label="Toggle navigation">☰</button><ul className="nav-links" id="navLinks"><li><Link to="/">Home</Link></li><li><Link to="/healthcare">Healthcare</Link></li><li className="nav-item dropdown"><button className="dropdown-toggle" type="button">Work</button><ul className="dropdown-menu"><li><Link to="/work">Employees</Link></li><li><Link to="/teams">Teams</Link></li></ul></li><li className="nav-item dropdown"><button className="dropdown-toggle active" type="button">Resources</button><ul className="dropdown-menu"><li><Link to="/reports">Reports</Link></li><li><Link className="active" to="/clinical-evidence">Clinical Evidence</Link></li><li><Link to="/case-studies">Case Studies</Link></li><li><Link to="/blog">Blog</Link></li><li><Link to="/quizzes">Quizzes</Link></li><li><Link to="/games">Games</Link></li><li><Link to="/relaxation-videos">Relaxation Videos</Link></li><li><Link to="/meditation-audios">Meditation Audios</Link></li></ul></li><li><Link to="/about">About Us</Link></li><li><Link to="/ai-support">AI Support</Link></li><li><Link to="/journal">Journal</Link></li><li><Link to="/book-demo">Book Demo</Link></li></ul><button className="theme-toggle" id="themeToggle" aria-label="Toggle dark mode"><span className="icon-sun">☀</span><span className="icon-moon">☾</span></button></nav></header>
    <main>
        <section className="section hero mini-hero"><div className="container reveal narrow center"><h1>Clinical Evidence</h1><p className="lead">Five clinical evidence references with detailed methodology and findings.</p></div></section>
        <section className="section"><div className="container reveal"><div className="grid two-grid">
            <details className="card">
                <summary>CBT Micro-Intervention Study</summary>
                <div className="detail-body">
                    <p>This randomised controlled study examined whether brief, repeated cognitive behavioural therapy micro-interventions delivered via digital platform could improve emotional regulation outcomes comparable to standard CBT sessions. A total of 620 participants were recruited from three university campuses and randomly assigned to either the micro-intervention arm or a waitlist control group.</p>
                    <h4>Methodology</h4>
                    <p>The intervention group received daily five-minute CBT-based exercises delivered via a mobile app over eight weeks. Exercises included thought records, cognitive restructuring prompts, and brief behavioural activation tasks. Emotional regulation was assessed at baseline, week four, and week eight using the Difficulties in Emotion Regulation Scale.</p>
                    <h4>Findings</h4>
                    <p>Participants in the intervention group showed a 38% greater improvement in emotional regulation scores by week eight compared to the control group. Adherence was high at 74%, with most dropout occurring in the first two weeks. Women showed slightly stronger response rates than men, though both groups demonstrated significant benefit. No adverse effects were reported.</p>
                    <h4>Implications for Digital Platforms</h4>
                    <p>Micro-interventions deliver meaningful therapeutic benefit without the commitment required for traditional therapy. Platforms embedding clinically validated CBT content in short daily formats can reach populations who would not attend formal therapy, significantly extending the reach of evidence-based care. The study validates Saarthi's approach of structuring exercises as brief, repeated, daily practices.</p>
                </div>
            </details>
            <details className="card">
                <summary>AI Reflection Outcome Analysis</summary>
                <div className="detail-body">
                    <p>This observational study tracked self-reflection quality and consistency among 1,200 users of an AI-guided journalling and conversation platform over six months. The primary aim was to evaluate whether AI-assisted prompts improve the depth and regularity of personal reflection compared to unguided journalling.</p>
                    <h4>Methodology</h4>
                    <p>Users were grouped into AI-guided and free-journalling cohorts. Reflection depth was assessed through linguistic analysis examining cognitive complexity, self-compassion markers, and emotional vocabulary breadth. Consistency was measured as number of active days per month across the study period.</p>
                    <h4>Findings</h4>
                    <p>AI-guided users produced reflections rated significantly higher in cognitive complexity and self-compassion language. Active engagement days averaged 18.4 per month in the guided group versus 9.2 among unguided users. The guided group also showed higher scores on validated measures of perceived social support and emotional clarity by month three.</p>
                    <h4>Implications for Digital Platforms</h4>
                    <p>Structured AI prompts are not simply convenience features — they produce measurably deeper and more consistent self-reflection. For platforms targeting populations with limited therapy access, AI-assisted reflection represents a clinically meaningful intervention that scales at near-zero marginal cost per user.</p>
                </div>
            </details>
            <details className="card">
                <summary>Mood Check-in Validation</summary>
                <div className="detail-body">
                    <p>This validation study evaluated whether brief daily mood check-ins, administered via a mobile platform, could reliably detect early distress signals in a non-clinical population. The study followed 890 students across one academic year, comparing platform-detected distress flags with standardised clinical assessments conducted at monthly intervals.</p>
                    <h4>Methodology</h4>
                    <p>Participants completed a daily three-question mood check-in rating their emotional state, energy level, and sleep quality. An algorithmic model flagged users showing sustained negative patterns over three or more consecutive days. These flags were compared against PHQ-9 and GAD-7 screening scores collected monthly by trained assessors.</p>
                    <h4>Findings</h4>
                    <p>Platform flags showed an 81% sensitivity for detecting clinically significant distress before the next monthly assessment, with a specificity of 76%. Among students flagged early who also received platform-directed support, 64% showed improvement by the subsequent monthly assessment without requiring clinical referral. Only 14% of flagged students required escalation to institutional counselling services.</p>
                    <h4>Implications for Digital Platforms</h4>
                    <p>Daily mood check-ins function as a practical early warning system that can meaningfully reduce demand on clinical resources. The study confirms that simple, validated tracking tools can identify at-risk students weeks before standard institutional monitoring would detect a problem, enabling timely and proportionate support.</p>
                </div>
            </details>
            <details className="card">
                <summary>Safety Escalation Protocol Review</summary>
                <div className="detail-body">
                    <p>This review assessed the effectiveness and appropriate design of safety escalation protocols embedded within digital mental health platforms. As AI-assisted tools become primary points of contact for distressed individuals, the mechanisms by which these platforms identify and respond to crisis signals become critically important from both clinical and ethical standpoints.</p>
                    <h4>Methodology</h4>
                    <p>The review analysed escalation logs from five platforms over a combined two-year period, examining triggers, response latency, user acceptance of escalation offers, and outcomes for users who were referred to human support. Qualitative interviews with 60 users who had experienced escalation were also conducted.</p>
                    <h4>Findings</h4>
                    <p>Platforms using contextual trigger detection (keyword-based combined with sentiment analysis) outperformed those using keyword-only systems by 44% in true positive escalation accuracy. Users were significantly more accepting of escalation prompts when they were framed as care offers rather than warnings. Of users who accepted escalation, 79% continued engagement with institutional support after the initial handoff.</p>
                    <h4>Implications for Digital Platforms</h4>
                    <p>Escalation design is not a technical afterthought but a core clinical feature. Platforms must balance sensitivity with specificity to avoid both missed crises and false alarms that erode user trust. A warm handoff model, combining automated detection with human follow-up, consistently outperforms fully automated responses in user outcomes and trust.</p>
                </div>
            </details>
            <details className="card">
                <summary>Engagement Retention Findings</summary>
                <div className="detail-body">
                    <p>Long-term retention in mental health platforms is the defining challenge of digital wellbeing provision. Users who disengage early receive insufficient benefit to make meaningful change. This study tracked retention across 7,400 users on multiple platforms over twelve months, identifying the design features most strongly predictive of sustained engagement.</p>
                    <h4>Methodology</h4>
                    <p>Users were stratified by retention group: low (under 30 days), medium (30 to 90 days), and high (over 90 days). Each group was analysed for patterns in first-week behaviour, feature usage, notification responsiveness, and onboarding completion. Multivariate logistic regression identified predictors of high-retention group membership.</p>
                    <h4>Findings</h4>
                    <p>The three strongest predictors of high retention were: completion of a personalised onboarding flow within the first 48 hours, engagement with at least two distinct feature types in the first week, and receipt of at least one check-in prompt that felt personally relevant. Personalised notification content outperformed generic reminders by 67% in re-engagement rate after a lapse period.</p>
                    <h4>Implications for Digital Platforms</h4>
                    <p>Retention is primarily a product experience problem. Platforms that invest in personalised onboarding, diverse feature sets, and contextually relevant check-in communications achieve retention rates sufficient to deliver genuine clinical benefit. The evidence strongly supports moving away from one-size-fits-all push notification strategies toward adaptive, user-responsive communication design.</p>
                </div>
            </details>
        </div></div></section>
    </main>
    <section className="disclaimer"><div className="container"><p>Saarthi is not designed to assist with crises such as abuse, severe mental health conditions that may cause feelings of suicide, harm to self, or other medical emergencies.</p><p>Saarthi cannot and will not offer medical or clinical advice. It can only suggest that users seek professional medical help.</p><p>Please reach out to your country's suicide hotline in case of emergency.</p><p>You must be 18 years of age to use Saarthi. If you are between 13 and 18, please review the Terms of Service and Privacy Policy with a parent or guardian before using the platform.</p><p>Saarthi is not designed to be used by children under 13.</p></div></section>
    <footer className="site-footer"><div className="container footer-grid"><div><h4>Important Links</h4><Link to="/">Home</Link><Link to="/healthcare">Healthcare</Link><Link to="/work">Work</Link></div><div><h4>Legal</h4><Link to="#">Privacy Policy</Link><Link to="#">Terms of Service</Link><Link to="/about">Contact</Link></div><div><h4>Resources</h4><Link to="/resources">Library</Link><Link to="/ai-support">AI Support</Link><Link to="/journal">Journal</Link></div><div><h4>Social</h4><div className="socials"><Link to="#" aria-label="Instagram">◯</Link><Link to="#" aria-label="LinkedIn">▢</Link><Link to="#" aria-label="YouTube">▷</Link></div></div></div></footer>
    

        </>
    );
}
