import React from "react";

function About() {
  return (
    <div className="container text-center my-5">
      <h1 className="text-pink-dark">เกี่ยวกับสาขาเทคโนโลยีสารสนเทศ</h1>
      <p className="text-pink-muted">
        สาขาเทคโนโลยีสารสนเทศมีเป้าหมายในการสร้างผู้ที่มีความสามารถด้าน
        การพัฒนาโปรแกรม ระบบเครือข่าย การจัดการข้อมูล และการประยุกต์ใช้เทคโนโลยี
        ในการแก้ปัญหาต่าง ๆ ให้กับองค์กร
      </p>
      <p className="text-pink-muted">
        เรียนรู้ทักษะที่จำเป็นในโลกดิจิทัล และเตรียมตัวเข้าสู่ตลาดงานไอที
        โดยสอนให้เข้าใจเทคโนโลยีล่าสุดในด้านต่าง ๆ เช่น Web Development, Mobile App Development,
        และ Data Management
      </p>

      <div className="mt-5">
        <h2 className="text-pink-dark">ข่าวสารเกี่ยวกับสาขา</h2>
        <div className="row text-center">
          {/* ข่าวสาร 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="images\download.png"
                alt="IT News 1"
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-pink-dark">โครงการพัฒนาทักษะด้านการเขียนโปรแกรม</h5>
                <p className="card-text text-pink-muted">
                  สาขาเทคโนโลยีสารสนเทศเปิดโครงการฝึกอบรมการพัฒนาโปรแกรมเพื่อเตรียมความพร้อมให้กับนักศึกษา...
                </p>
                <a href="#!" className="btn btn-pink-dark btn-sm">อ่านเพิ่มเติม</a>
              </div>
            </div>
          </div>

          {/* ข่าวสาร 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="images\download (2).jpg"
                alt="IT News 2"
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-pink-dark">การประกวดแอปพลิเคชันมือถือ</h5>
                <p className="card-text text-pink-muted">
                  การประกวดแอปพลิเคชันมือถือภายในมหาวิทยาลัยเพื่อพัฒนาไอเดียของนักศึกษาภายใต้การสนับสนุนจากคณะ...
                </p>
                <a href="#!" className="btn btn-pink-dark btn-sm">อ่านเพิ่มเติม</a>
              </div>
            </div>
          </div>

          {/* ข่าวสาร 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="images\download (4).jpg"
                alt="IT News 3"
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-pink-dark">การจัดงานสัมมนาด้านเทคโนโลยี</h5>
                <p className="card-text text-pink-muted">
                  นักศึกษาจากสาขาเทคโนโลยีสารสนเทศได้เข้าร่วมสัมมนาเกี่ยวกับเทคโนโลยีและนวัตกรรมล่าสุดในอุตสาหกรรม...
                </p>
                <a href="#!" className="btn btn-pink-dark btn-sm">อ่านเพิ่มเติม</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
