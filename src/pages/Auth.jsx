import React from 'react';
import { Link } from 'react-router-dom';

export default function Auth() {
    return (
        <>
            
<div className="auth-page">
<div className="auth-flip-wrap">
<div className="auth-flip" id="authFlip">
<div className="auth-flip-inner">
<div className="auth-face auth-front card glass">
<p className="eyebrow">Welcome to Saarthi</p>
<h1>Sign In</h1>
<p className="lead">Use your email and password to continue.</p>
<form id="signInForm" className="form-card">
<label htmlFor="signinEmail">Mail</label>
<input id="signinEmail" type="email" required />
<label htmlFor="signinPassword">Password</label>
<input id="signinPassword" type="password" required />
<button type="submit" className="btn btn-primary glow">Sign In</button>
</form>
<button type="button" className="auth-switch" id="flipToSignUp">Don't have an account? Sign Up</button>
<button type="button" className="auth-anon" id="anonBtn">Continue as Anonymous</button>
</div>

<div className="auth-face auth-back card glass">
<p className="eyebrow">Create Your Account</p>
<h1>Sign Up</h1>
<p className="lead">Create an account to access Saarthi.</p>
<form id="signUpForm" className="form-card">
<label htmlFor="signupName">Name</label>
<input id="signupName" type="text" required />
<label htmlFor="signupEmail">Mail</label>
<input id="signupEmail" type="email" required />
<label htmlFor="signupNumber">Number</label>
<input id="signupNumber" type="tel" required />
<label htmlFor="signupPassword">Create Password</label>
<input id="signupPassword" type="password" required />
<label htmlFor="signupPasswordAgain">Enter Again</label>
<input id="signupPasswordAgain" type="password" required />
<button type="submit" className="btn btn-primary glow">Sign Up</button>
</form>
<button type="button" className="auth-switch" id="flipToSignIn">Already have an account? Sign In</button>
</div>
</div>
</div>
</div>
</div>


        </>
    );
}
