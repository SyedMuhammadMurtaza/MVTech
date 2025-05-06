import React from 'react'
import Slider from '../../slider'

const Portfolio = () => {
    return (
        <>
        <div id='projects'></div>
        <div className="section zubuz-section-padding2 light-bg">
            <div className="container">
                <div className="zubuz-section-title zubuz-two-column-title">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="">Our Portfolio !</h2>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <p>
                                Choose us for our proven track record of delivering top notch digital solutions tailored to your needs as we excel in combining technical expertise with creativity.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                      <Slider />
                    </div>
                </div>
            </div>
        </div>
       
        </>
    )
}

export default Portfolio
