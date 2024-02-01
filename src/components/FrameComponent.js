import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="frame-group">
      <div className="home-parent">
        <b className="home">Home</b>
        <div className="services">Services</div>
        <div className="about-us">About Us</div>
        <div className="contact-us">Contact Us</div>
      </div>
      <div className="frame-group-with-icon">
        <div className="color-vector">
          <div className="spiral-instance">
            <div className="contact-us-frame">
              <h1 className="transforming-ideas">Transforming Ideas</h1>
              <div className="input-email-frame">
                <h1 className="into-powerful-solutions-container">
                  <span className="into">Into</span>
                  <span>{` `}</span>
                  <span className="powerful">Powerful</span>
                  <span>{` `}</span>
                  <span className="solutions">Solutions</span>
                </h1>
                <header className="group-frame-with-logo">
                  <img className="line-icon" alt="" src="/line.svg" />
                  <img
                    className="s-e-o-frame"
                    loading="eager"
                    alt=""
                    src="/frame-4.svg"
                  />
                  <div className="wrapper-img">
                    <img
                      className="img-icon"
                      loading="eager"
                      alt=""
                      src="/img@2x.png"
                    />
                  </div>
                  <div className="wrapper-rectangle-18">
                    <img
                      className="wrapper-rectangle-18-child"
                      loading="eager"
                      alt=""
                      src="/rectangle-18.svg"
                    />
                  </div>
                  <div className="dev-ops-frame">
                    <img
                      className="digital-service-digital-age-2-icon"
                      loading="eager"
                      alt=""
                      src="/digital-service-digital-age-2removebgpreview-1@2x.png"
                    />
                    <div className="rectangle-intersection" />
                  </div>
                </header>
              </div>
            </div>
            <div className="for-startups-and">
              For startups and growing businesses, web and mobile solutions,
              cloud expertise, and dynamic digital marketing strategies. Partner
              with us for a transformative journey into the digital realm.
            </div>
          </div>
          <div className="group-header">
            <div className="frame-text">
              <div className="get-a-free">Get a Free Consultation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
