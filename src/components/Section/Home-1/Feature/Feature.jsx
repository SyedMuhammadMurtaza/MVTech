"use client";
import { useEffect, useState } from "react";
import SerciveCard from "~/components/Ui/Cards/Sercive";

const FeatureSection = () => {
 
  const [serviceDatas, setServiceDatas] = useState([]);
  const serviceData = async () => {
    const res = await fetch("./db/serviceData.json");
    const serviceData = await res.json();
    setServiceDatas(serviceData);
  };
  useEffect(() => {
    serviceData();
  }, []);

  

  return (
    <div className="section zubuz-section-padding3 light-bg">
      <div className="container">
      <div className="zubuz-section-title zubuz-two-column-title">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="headingFeature">Why Choose Us ?</h2>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <p>
               Choose us for our proven track record of delivering top notch digital solutions tailored to your needs as we excel in combining technical expertise with creativity.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceDatas?.map((service, index) => (
            <SerciveCard
              key={index}
              title={service?.title}
              icon={service?.icon}
              description={service?.description}
              link={service?.link}
            />
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default FeatureSection;
