import Main_img from '../../Img/Main.jpg';
function Intro() {
return (
    <div className="Intro">
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'New York Extra Large', fontWeight: 'bold', fontSize: '48px',margin: '20px auto',maxWidth: '800px' }}>
            A few words about this blog platform, Ghost, and how this site was made
        </h1>
        <p style={{ fontFamily: 'SF Mono', fontSize: '20px', lineHeight: '1.6', margin: '20px auto', maxWidth: '400px' }}>
            Why Ghost (& Figma) instead of Medium, WordPress or other options?        </p>
      </div>
      <div className="">
        <img src={Main_img} style={{ width: '100%', height: 'auto', display: 'block' }} alt="logo" />
      </div>
    </div>
);
}
export default Intro;
  