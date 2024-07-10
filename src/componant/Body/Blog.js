import Blog_img from '../../Img/Blog.jpg';



function Blog() {
    return (
        <div className="Blog">
            <div style={{ fontFamily: 'New York Medium', fontSize: '20px',width:'640px', margin: '20px auto',maxWidth: '90%' }} className="content">
                <p style={{marginTop: '20px'}} className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.</p>
                <p style={{marginTop: '20px'}} className="paragraph">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.</p>
                <p style={{marginTop: '20px'}} className="paragraph">Next on the pipeline</p>
                <p style={{marginTop: '20px'}} className="paragraph">Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <p style={{marginTop: '20px'}} className="paragraph">Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.</p>
            </div> 
            <div style={{ margin: '20px auto', maxWidth: '90%', textAlign: 'center' }} className="content">
                <img src={Blog_img} style={{ height: 'auto',width:'854px',maxWidth: '100%'}} className="blog-image" alt="Blog" />
                <p style={{ marginTop: '10px', fontSize: '16px', maxWidth: '130%', textAlign: 'center' }} className="image-caption">
                    Image caption centered this way and I'll make this a bit longer to indicate the amount of line-height.
                </p>
            </div>
            <div style={{ fontFamily: 'New York Medium', fontSize: '20px',width:'640px', margin: '20px auto',maxWidth: '90%' }} className="content">   
                <p style={{marginTop: '20px'}} className="paragraph">Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.</p>
                <p style={{marginTop: '20px'}} className="paragraph">In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.</p>
                <p style={{marginTop: '20px'}} className="paragraph">A list looks like this:</p>
                <ul className="list">
                    <li style={{marginTop: '20px'}} className="list-item">First item in the list</li>
                    <li style={{marginTop: '20px'}} className="list-item">Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet</li>
                    <li style={{marginTop: '20px'}} className="list-item">Third item in the list</li>
                </ul>
                <p style={{marginTop: '20px'}} className="paragraph">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.</p>
                <p style={{marginTop: '20px'}} className="paragraph">Thanks for reading,<br />Mika</p>
            </div>
            <div className="extra-content-1"></div>
            <div className="extra-content-2"></div>
            <div className="extra-content-3"></div>
        </div>
    );
}

export default Blog;
  