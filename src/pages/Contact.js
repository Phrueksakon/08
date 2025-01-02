import React from "react";

function Contact() {
  return (
    <div className="container my-5 py-5 bg-pink-light rounded shadow">
      <div className="text-center mb-4">
        <h1 className="display-4 text-pink-dark">ติดต่อเรา</h1>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.339598392009!2d98.96328561538545!3d18.789080687261886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a2c17e2c93d%3A0x405e7abdf8e93782!2z4LiE4LiX4Li14Lii4LmA4LiC4LmH4Lit4Lit4LmA4Liq4Lix4LiB4Lip4Lix4LmB4LiU4LmM!5e0!3m2!1sth!2sth!4v1689395952405!5m2!1sth!2sth"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Lanna Polytechnic Location"
          ></iframe>
        </div>
        <div className="col-md-6 text-center">
          <h2 className="text-pink-dark mb-3">วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</h2>
          <p className="mb-2">
            <strong>ที่อยู่:</strong> 2 ถนนสุขเกษม ตำบลป่าตัน อำเภอเมือง จังหวัดเชียงใหม่ 50300
          </p>
          <p className="mb-2">
            <strong>โทรศัพท์:</strong> +66 53 123 456
          </p>
          <p className="mb-2">
            <strong>อีเมล:</strong> info@lannapoly.ac.th
          </p>
          <p className="mb-2">
            <strong>เว็บไซต์:</strong>{" "}
            <a href="https://www.lannapoly.ac.th/" target="_blank" rel="noopener noreferrer">
              www.lannapoly.ac.th
            </a>
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <h3 className="text-pink-dark text-center mb-4">ส่งข้อความถึงเรา</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                ชื่อ-นามสกุล
              </label>
              <input type="text" className="form-control" id="name" placeholder="กรอกชื่อ-นามสกุลของคุณ" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                อีเมล
              </label>
              <input type="email" className="form-control" id="email" placeholder="กรอกอีเมลของคุณ" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                ข้อความ
              </label>
              <textarea className="form-control" id="message" rows="5" placeholder="พิมพ์ข้อความของคุณ"></textarea>
            </div>
            <button type="submit" className="btn btn-pink-dark">
              ส่งข้อความ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
