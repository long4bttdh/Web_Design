import './style.css';

function Sign_up() {
    return (
        <div className="section">
            <h2 className="section-heading">Sign up for the newsletter</h2>
            <p className="section-sub-heading">If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared. </p>
            <div className="contact-content">
                <form action="" className='action'>
                <input type="text"  name="message" placeholder="Enter your email..." className="form-control"/>
                <input className="custom-input" type="submit" value="SIGN UP" />
                </form>
            </div>
        </div>
    );
}

export default Sign_up;