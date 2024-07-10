import Logo from '../../Img/Logo_footer.jpg';
function Footer() {
    return (
        <div className="App">
            <div className="">

            </div>
            <div className="">
                <img src={Logo} className="" alt="Logo" />
            </div>
            <div className="">
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. </p>
            </div>
            <div className="">
                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">RSS</a>
            </div>
            <div className="">
                <p>© 2012–2020 Nordic Rose Co.</p>
                <p>All rights reserved.</p>
            </div>
        </div>
    );
    }
    export default Footer;
      