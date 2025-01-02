import React from "react";

function About() {
  return (
    <div className="container my-5">
      {/* Main Title with background image */}
      <div 
        className="position-relative" 
        style={{
          backgroundImage: 'url(images/background-tech.jpg)', // เพิ่ม URL ของรูปที่ต้องการใช้เป็นพื้นหลัง
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '60px 0'
        }}
      >
        <h1 className="text-warning text-start mb-4" style={{ fontSize: '2rem' }}>
          เกี่ยวกับสาขาเทคโนโลยีสารสนเทศ
        </h1>
      </div>
      
      {/* Images with borders */}
      <div className="row mb-4">
        {[1, 2, 3].map((imgNum) => (
          <div className="col-md-4 mb-4" key={imgNum}>
            <div className="card shadow border-0">
              <img
                src={`\\images\\22.jpg`} // รูปภาพที่คุณต้องการใช้
                alt="Lanna Polytechnic College"
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
        
      {/* Introduction Text with white text */}
      <p className="text-white text-start mb-4" style={{ fontSize: '1rem' }}>
        สาขาเทคโนโลยีสารสนเทศมีเป้าหมายในการสร้างผู้ที่มีความสามารถด้านการพัฒนาโปรแกรม ระบบเครือข่าย การจัดการข้อมูล และการประยุกต์ใช้เทคโนโลยีในการแก้ปัญหาต่าง ๆ ให้กับองค์กร
      </p>
      <p className="text-white text-start mb-4" style={{ fontSize: '1rem' }}>
        เรียนรู้ทักษะที่จำเป็นในโลกดิจิทัล และเตรียมตัวเข้าสู่ตลาดงานไอที โดยสอนให้เข้าใจเทคโนโลยีล่าสุดในด้านต่าง ๆ เช่น Web Development, Mobile App Development, และ Data Management
      </p>

      {/* Section for Lanna Polytechnic College with background image */}
      <div className="mt-5">
        <div 
          className="position-relative" 
          style={{
            backgroundImage: 'url(images/lanna-background.jpg)', // เพิ่ม URL ของรูปที่ต้องการใช้เป็นพื้นหลัง
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '60px 0'
          }}
        >
          <h2 className="text-warning text-start mb-3" style={{ fontSize: '1.5rem' }}>
            เกี่ยวกับวิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา
          </h2>
        </div>
        
        {/* Images with borders */}
        <div className="row mb-4">
          {[1, 2, 3].map((imgNum) => (
            <div className="col-md-4 mb-4" key={imgNum}>
              <div className="card shadow border-0">
                <img
                  src={`\\images\\33.jpg`} // รูปภาพที่คุณต้องการใช้
                  alt="Lanna Polytechnic College"
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Description with white text */}
        <p className="text-white text-start mb-4" style={{ fontSize: '1rem' }}>
          วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา (Lanna Polytechnic College) มีความมุ่งมั่นในการผลิตบุคลากรที่มีคุณภาพ สำหรับอุตสาหกรรมไอที และเทคโนโลยีสารสนเทศ โดยเน้นการเรียนการสอนที่ทันสมัยและสอดคล้องกับความต้องการของตลาดงานในปัจจุบัน
        </p>
        <p className="text-white text-start mb-4" style={{ fontSize: '1rem' }}>
          วิทยาลัยของเราให้ความสำคัญกับการพัฒนาทักษะของนักศึกษาให้มีความรู้ ความสามารถ และทักษะการแก้ปัญหาด้านเทคโนโลยี รวมถึงการให้โอกาสในด้านการฝึกงานและการพัฒนาผลงานจริงในสถานการณ์ต่าง ๆ
        </p>

        <h3 className="text-warning text-start mb-3" style={{ fontSize: '1.2rem' }}>
          เป้าหมายและวิสัยทัศน์ของสาขา IT
        </h3>
        {/* More Images with borders */}
        <div className="row mb-4">
          {[1, 2, 3].map((imgNum) => (
            <div className="col-md-4 mb-4" key={imgNum}>
              <div className="card shadow border-0">
                <img
                  src={`\\images\\44.jpg`} // รูปภาพที่คุณต้องการใช้
                  alt="Lanna Polytechnic College"
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-white text-start mb-4" style={{ fontSize: '1rem' }}>
          วิสัยทัศน์ของสาขาเทคโนโลยีสารสนเทศที่วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนาคือการเป็นผู้นำในด้านการศึกษาทางเทคโนโลยีสารสนเทศ โดยเน้นการพัฒนาทักษะที่เกี่ยวข้องกับการสร้างโปรแกรม การจัดการข้อมูล และการพัฒนาแอปพลิเคชันสำหรับรองรับความต้องการที่เปลี่ยนแปลงอย่างรวดเร็วในยุคดิจิทัล
        </p>
        <p className="text-white text-start mb-4" style={{ fontSize: '1rem' }}>
          เป้าหมายของเราคือการผลิตนักศึกษาที่สามารถนำความรู้และทักษะไปใช้ในการพัฒนาเทคโนโลยีและนวัตกรรมใหม่ ๆ ซึ่งจะช่วยแก้ไขปัญหาและยกระดับความสามารถทางด้านดิจิทัลขององค์กรและสังคมในอนาคต
        </p>
      </div>

      {/* News Section */}
      <div className="mt-5">
        <h2 className="text-warning text-start mb-4" style={{ fontSize: '1.25rem' }}>
          ข่าวสารเกี่ยวกับสาขา
        </h2>
        <div className="row text-start">
          {/* News Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="images/download.png"
                alt="IT News 1"
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-warning" style={{ fontSize: '1rem' }}>
                  โครงการพัฒนาทักษะด้านการเขียนโปรแกรม
                </h5>
                <p className="card-text text-white" style={{ fontSize: '0.85rem' }}>
                  สาขาเทคโนโลยีสารสนเทศเปิดโครงการฝึกอบรมการพัฒนาโปรแกรมเพื่อเตรียมความพร้อมให้กับนักศึกษา...
                </p>
                <a href="#!" className="btn btn-warning btn-sm">อ่านเพิ่มเติม</a>
              </div>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="images/download (2).jpg"
                alt="IT News 2"
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-warning" style={{ fontSize: '1rem' }}>
                  การประกวดแอปพลิเคชันมือถือ
                </h5>
                <p className="card-text text-white" style={{ fontSize: '0.85rem' }}>
                  การประกวดแอปพลิเคชันมือถือภายในมหาวิทยาลัยเพื่อพัฒนาไอเดียของนักศึกษาภายใต้การสนับสนุนจากคณะ...
                </p>
                <a href="#!" className="btn btn-warning btn-sm">อ่านเพิ่มเติม</a>
              </div>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="images/download (4).jpg"
                alt="IT News 3"
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-warning" style={{ fontSize: '1rem' }}>
                  การจัดงานสัมมนาด้านเทคโนโลยี
                </h5>
                <p className="card-text text-white" style={{ fontSize: '0.85rem' }}>
                  นักศึกษาจากสาขาเทคโนโลยีสารสนเทศได้เข้าร่วมสัมมนาเกี่ยวกับเทคโนโลยีและนวัตกรรมล่าสุดในอุตสาหกรรม...
                </p>
                <a href="#!" className="btn btn-warning btn-sm">อ่านเพิ่มเติม</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
