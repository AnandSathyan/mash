// components/MarketingSection.js
import { useEffect } from 'react';
import Image from 'next/image';
import styles from './styles/UpdatedFeaturedSolution.module.css';

export default function MarketingSection() {
    const sections = [
        {
          title: "Proven Track Record",
          description: "We've helped businesses of all sizes achieve their digital goals with our data-driven strategies and personalized approach.",
          buttonText: "View Our Services",
          services: [
            "SEO",
            "ECommerce",
            "Web Design & Development",
            "Mobile App Development",
            "Customized Software Solutions",
            "Marketing",
            "Content Marketing",
            "Search Engine Optimization"
          ],
          imageSrc: "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/choose-img1.png",
          altText: "Digital Marketing Success Illustration"
        },
        {
          title: "Tailored Solutions",
          description: "We've helped businesses of all sizes achieve their digital goals with our data-driven strategies and personalized approach.",
          buttonText: "View Our Services",
          services: [
            "ERP Solutions for Various Industries",
            "Customized Software Solutions",
            "Web Design",
            "Mobile Development",
            "Web Apps"
          ],
          imageSrc: "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/choose-img2.png",
          altText: "Tailored Solutions Illustration"
        },
        {
          title: "Transparent Communication",
          description: "Transparency involves making decisions that are visible to everyone involved, like how the app will be designed, and how the project plan is structured. Transparency in software development is a practice that ensures an open and honest relationship between different stakeholders.",
          buttonText: "View Our Services",
          services: [
            "Web Design & Development",
            "Customized Software Development",
            "Mobile Development",
            "ERP Solutions"
          ],
          imageSrc: "https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/choose-img4.png",
          altText: "Transparent Communication Illustration"
        }
      ];
  return (
    <>
     <section className={`${styles.marketingSections} pt-5`}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.subheading}>
          Why Choose Us
        </h2>
        <h1 className={styles.heading}>
          Why Partner with Sinnox Your Path to{" "}
          <span className={styles.headingSpan}>
            SEO & Digital Marketing Success
          </span>
        </h1>
      </div>
    </section>
    <section className={`${styles.marketingWhole}`}>
    {/* <section className={`${styles.marketingSection}`}>
      <div className="container">
        <div className="row align-items-left">
          <div className="col-lg-6">
            <h1 className="display d-flex align-item-left fw-semibold mb-4">Proven Track Record</h1>
            
            <div className={`${styles.badg} d-flex align-items-left flex-wrap gap-2 mb-4`}>
              {services.map((service, index) => (
                <span key={index} className={`${styles.badge} badge rounded-pill bg-light  text-dark border px-4 py-3`}>
                  {service}
                </span>
              ))}
            </div>

            <p className="lead d-flex text-muted align-items-left mb-4">
              We've helped businesses of all sizes achieve their digital goals with our data-driven strategies and personalized approach.
            </p>

            <button className={`${styles.badges} align-items-left d-flex  btn btn-outline-dark rounded-pill px-4 py-3`}>
              View Our Services
            </button>
          </div>
          
          <div className="col-lg-6">
            <Image
              src="https://wp.fleexstudio.com/seoc/wp-content/uploads/2024/08/choose-img1.png"
              alt="Digital Marketing Success Illustration"
              width={500}
              height={400}
              className="img-fluid"
            />
           
          </div>
         
        </div>
      </div>
    </section> */}
      {sections.map((section, index) => (
        <section key={index} className={`${styles.marketingSection}`}>
          <div className="container">
            <div className="row align-items-left">
              <div className="col-lg-6">
                <h1 className="display d-flex align-item-left fw-semibold mb-4">{section.title}</h1>
                <div className={`${styles.badg} d-flex align-items-left flex-wrap gap-2 mb-4`}>
                  {section.services.map((service, idx) => (
                    <span key={idx} className={`${styles.badge} badge rounded-pill bg-light text-dark border px-4 py-3`}>
                      {service}
                    </span>
                  ))}
                </div>
                <p className="lead d-flex text-muted align-items-left mb-4">{section.description}</p>
                <button className={`${styles.badges} align-items-left d-flex btn btn-outline-dark rounded-pill px-4 py-3`}>
                  {section.buttonText}
                </button>
              </div>
              <div className="col-lg-6">
                <Image
                  src={section.imageSrc}
                  alt={section.altText}
                  width={500}
                  height={400}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    
    </section>
    </>
  );
}
