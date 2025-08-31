import React from "react";
import "./schemes.css";

const schemesData = [
  {
    id: 1,
    name: "Pradhan Mantri Matru Vandana Yojana",
    description:
      "A maternity benefit scheme that provides financial assistance to pregnant and lactating women to ensure proper nutrition and healthcare.",
    link: "https://wcd.nic.in/pmmvvy/pmmvvy-scheme"
  },
  {
    id: 2,
    name: "Beti Bachao Beti Padhao",
    description:
      "An initiative aimed at improving the welfare of the girl child, promoting girl education, and preventing female foeticide.",
    link: "https://wcd.nic.in/schemes/beti-bachao-beti-padhao"
  },
  {
    id: 3,
    name: "Janani Suraksha Yojana",
    description:
      "A scheme to promote institutional deliveries and reduce maternal mortality by providing financial assistance to pregnant women.",
    link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=727&lid=98"
  },
  {
    id: 4,
    name: "Ujjwala Yojana",
    description:
      "A scheme providing free LPG connections to women from below poverty line (BPL) households to reduce the use of firewood.",
    link: "https://www.pmujjwalayojana.com/"
  },
  {
    id: 5,
    name: "Swachh Bharat Mission - Women’s Sanitation",
    description:
      "A part of the Swachh Bharat Mission that aims to ensure access to sanitary facilities for women and reduce the burden of open defecation.",
    link: "https://swachhbharatmission.gov.in"
  },
  {
    id: 6,
    name: "Pradhan Mantri Awas Yojana (PMAY) - Women’s Empowerment",
    description:
      "A housing scheme aimed at providing affordable homes to women from economically weaker sections, ensuring better living conditions.",
    link: "https://pmaymis.gov.in/"
  },
  {
    id: 7,
    name: "National Nutrition Mission (Poshan Abhiyaan)",
    description:
      "Aimed at improving nutritional outcomes for women, children, and adolescents by focusing on maternal and child health.",
    link: "https://poshanabhiyaan.gov.in/"
  },
  {
    id: 8,
    name: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana",
    description:
      "A health insurance scheme that provides financial protection to poor families, covering hospitalization and medical expenses for women.",
    link: "https://pmjay.gov.in/"
  },
  {
    id: 9,
    name: "Maternity Benefit Programme (MBP)",
    description:
      "A government scheme to provide maternity benefits, including paid leave and healthcare services for working women.",
    link: "https://www.labour.gov.in/mbp"
  },
  {
    id: 10,
    name: "Shakti Yojana",
    description:
      "A scheme aimed at empowering women through financial aid and skill development programs, promoting self-reliance and independence.",
    link: "https://www.wcd.nic.in/schemes/shakti-yojana"
  },
  {
    id: 11,
    name: "Menstrual Hygiene Scheme",
    description:
      "A scheme to provide affordable sanitary napkins to rural women and raise awareness about menstrual hygiene.",
    link: "https://www.wcd.nic.in/schemes/menstrual-hygiene-scheme"
  },
  {
    id: 12,
    name: "Sakhi Centers (Women’s Helpline)",
    description:
      "A government initiative providing a platform for women in distress, offering emotional, legal, and financial support.",
    link: "https://wcd.nic.in/schemes/sakhi-centers"
  },
];

const Schemes = () => {
  return (
    <div className="schemes-container">
      <h2>GOVERNMENT SCHEMES FOR WOMEN'S HEALTH</h2>

      <div className="schemes-list">
        {schemesData.map((scheme) => (
          <div key={scheme.id} className="scheme-card">
            <h3>{scheme.name}</h3>
            <p>{scheme.description}</p>
            <a
              href={scheme.link}
              target="_blank"
              rel="noopener noreferrer"
              className="scheme-link"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schemes;
