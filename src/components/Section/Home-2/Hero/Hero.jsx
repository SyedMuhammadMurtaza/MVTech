import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="zubuz-hero-section2">
      <div className="container">
        <div className="row zubuz_screenfix_right">
          <div className="col-lg-6">
            <div className="zubuz-hero-content">
              <div className="zubuz-hero-rating">
                <ul>
                  {/* <li>
                    <img src="/images/v2/rating.png" alt="" />
                  </li> */}
                  <h3 className="head-1">Agile Software Development</h3>
                </ul>
              </div>
              <h1>Seamless Digital Solutions</h1>
              <p>
               A passionate and dedicated team to revolutionize your workflow efficiency with our result-oriented digital solutions.
              </p>
              <div className="zubuz-hero-btn-wrap">
                <Link href="/#tech" className="zubuz-default-btn pill">
                  <span>Discover more</span>
                </Link>
                <Link href="/" className="zubuz-login-btn m-0">
                  View all features
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="zubuz-hero-thumb2">
              <img src="/images/v2/dashboard.png" alt="" />
              <div className="zubuz-hero-shape2">
                <img src="/images/v2/blob-2.png" alt="" />
              </div>
              <div className="zubuz-hero-shape3">
                <img src="/images/v2/blob-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
