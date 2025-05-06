import Link from "next/link";

const Cta = () => {
  return (
    <div className="zubuz-cta-section blue-bg" id="cta">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 order-lg-2 d-flex align-items-center">
            <div className="zubuz-default-content light">
              <h2>Start Showcasing Your Business Now!</h2>
              <p>
                Get in touch to have a free quote of how we can help your business grow digitally.
              </p>
              <div className="zubuz-extara-mt">
                <div className="zubuz-app-wrap">
                <Link
              className="zubuz-default-btn zubuz-header-btn button-cta"
              href="contact-us"
            >
              <span>Contact Us</span>
            </Link>
                  <div className="zubuz-cta-shape">
                    <img src="/images/v1/shape2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="zubuz-cta-thumb">
              <img src="/images/v1/cta-mocup.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
