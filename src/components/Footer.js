import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* โลโก้หรือชื่อสถาบัน */}
        <h6 className="mb-2 mb-md-0 text-yellow">© 2024 IT Polytechnic</h6>

        {/* ไอคอนโซเชียลมีเดีย */}
        <div className="d-flex mb-2 mb-md-0">
          <a
            href="#facebook"
            className="mx-2 text-yellow"
            style={{ fontSize: "1.2rem" }}
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="#twitter"
            className="mx-2 text-yellow"
            style={{ fontSize: "1.2rem" }}
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="#instagram"
            className="mx-2 text-yellow"
            style={{ fontSize: "1.2rem" }}
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="#linkedin"
            className="mx-2 text-yellow"
            style={{ fontSize: "1.2rem" }}
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        {/* ลิงก์นโยบาย */}
        <div>
          <a href="#privacy-policy" className="text-yellow mx-2 small">
            Privacy Policy
          </a>
          <a href="#terms" className="text-yellow mx-2 small">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
