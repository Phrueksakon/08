import React from 'react';

const Courses = () => (
  <div className="container py-5">
    <h1 className="text-center text-pink-dark mb-4">หลักสูตร</h1>
    
    <div className="row">
      <div className="col-md-12 mb-4">
        <p className="lead text-center">
          ยินดีต้อนรับสู่หลักสูตรการศึกษาในสาขาเทคโนโลยีสารสนเทศและวิทยาการคอมพิวเตอร์ ที่วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เรามีหลักสูตรที่มุ่งเน้นการพัฒนาทักษะและความรู้ที่จำเป็นสำหรับการทำงานในอุตสาหกรรม IT ที่กำลังเติบโตและเปลี่ยนแปลงอย่างรวดเร็ว
        </p>
      </div>
    </div>

    <div className="mb-5">
      <h2 className="text-pink-dark">หลักสูตรที่เปิดสอน</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>ปวช. เทคโนโลยีสารสนเทศ</strong> (Vocational Certificate in Information Technology)
        </li>
        <li className="list-group-item">
          <strong>ปวส. วิทยาการคอมพิวเตอร์</strong> (Vocational Diploma in Computer Science)
        </li>
      </ul>
    </div>

    <div className="mb-5">
      <h3 className="text-pink-dark">ความแตกต่างของหลักสูตร</h3>
      <div className="row">
        <div className="col-md-6">
          <h5>ปวช. เทคโนโลยีสารสนเทศ</h5>
          <p>เน้นการฝึกฝนทักษะพื้นฐานทางด้านเทคโนโลยีสารสนเทศ เช่น การดูแลระบบคอมพิวเตอร์ การติดตั้งและบำรุงรักษาเครือข่าย การใช้ซอฟต์แวร์สำนักงาน การพัฒนาระบบฐานข้อมูล และการจัดการข้อมูล</p>
        </div>
        <div className="col-md-6">
          <h5>ปวส. วิทยาการคอมพิวเตอร์</h5>
          <p>เน้นการศึกษาในด้านวิทยาการคอมพิวเตอร์และการพัฒนาโปรแกรม รวมถึงการทำงานกับระบบปฏิบัติการต่างๆ การออกแบบเว็บไซต์และแอปพลิเคชัน การเขียนโปรแกรม และการพัฒนาระบบที่ซับซ้อน</p>
        </div>
      </div>
    </div>

    <div className="mb-5">
      <h3 className="text-pink-dark">วิธีการสมัครเรียน</h3>
      <p>การสมัครเรียนสามารถทำได้ผ่านเว็บไซต์ของวิทยาลัยหรือสมัครที่สำนักงานวิทยาลัยโดยตรง ตามขั้นตอนดังนี้:</p>
      <ul className="list-group">
        <li className="list-group-item">กรอกแบบฟอร์มสมัครเรียนออนไลน์บนเว็บไซต์ของวิทยาลัยหรือที่สำนักงานวิทยาลัย</li>
        <li className="list-group-item">เตรียมเอกสารที่จำเป็น เช่น สำเนาบัตรประชาชน, ทะเบียนบ้าน, ผลการเรียน, และรูปถ่ายขนาด 1 นิ้ว</li>
        <li className="list-group-item">ชำระค่าธรรมเนียมการสมัครเรียน (ถ้ามี)</li>
        <li className="list-group-item">สัมภาษณ์กับคณะกรรมการเพื่อประเมินความพร้อมของผู้สมัคร</li>
      </ul>
    </div>

    <div className="mb-5">
      <h3 className="text-pink-dark">ความเชี่ยวชาญที่คุณจะได้รับจากสาขา IT</h3>
      <p>เมื่อสำเร็จการศึกษาจากหลักสูตรของเรา คุณจะได้รับความรู้และทักษะที่ครอบคลุมในหลายด้านของเทคโนโลยีสารสนเทศและคอมพิวเตอร์ รวมถึง:</p>
      <ul className="list-group">
        <li className="list-group-item">ทักษะในการใช้เครื่องมือซอฟต์แวร์ที่ใช้ในงานประจำวัน เช่น Microsoft Office, Google Suite, และเครื่องมือสำหรับการพัฒนาเว็บไซต์</li>
        <li className="list-group-item">ความเชี่ยวชาญในการเขียนโปรแกรม เช่น ภาษา Python, Java, HTML/CSS, JavaScript และอื่นๆ</li>
        <li className="list-group-item">ทักษะในการพัฒนาและบำรุงรักษาเครือข่ายคอมพิวเตอร์ รวมถึงการจัดการระบบเซิร์ฟเวอร์และความปลอดภัยของข้อมูล</li>
        <li className="list-group-item">ความรู้พื้นฐานเกี่ยวกับวิทยาการคอมพิวเตอร์ เช่น อัลกอริธึม, โครงสร้างข้อมูล, และการพัฒนาแอปพลิเคชัน</li>
        <li className="list-group-item">ทักษะในการพัฒนาซอฟต์แวร์และแอปพลิเคชันที่ใช้ในอุตสาหกรรมต่างๆ</li>
      </ul>
    </div>

    <div className="mb-5">
      <h3 className="text-pink-dark">รายวิชาที่เปิดสอน</h3>
      <h4>ปวช. เทคโนโลยีสารสนเทศ</h4>
      <ul className="list-group mb-4">
        <li className="list-group-item">การดูแลและบำรุงรักษาคอมพิวเตอร์</li>
        <li className="list-group-item">การจัดการเครือข่ายคอมพิวเตอร์</li>
        <li className="list-group-item">การพัฒนาโปรแกรมและการใช้ฐานข้อมูล</li>
        <li className="list-group-item">การใช้ซอฟต์แวร์สำนักงาน</li>
        <li className="list-group-item">การพัฒนาเว็บไซต์และแอปพลิเคชันพื้นฐาน</li>
      </ul>

      <h4>ปวส. วิทยาการคอมพิวเตอร์</h4>
      <ul className="list-group">
        <li className="list-group-item">อัลกอริธึมและโครงสร้างข้อมูล</li>
        <li className="list-group-item">การพัฒนาเว็บไซต์ขั้นสูง</li>
        <li className="list-group-item">การพัฒนาแอปพลิเคชันมือถือ (Mobile Application Development)</li>
        <li className="list-group-item">การพัฒนาระบบฐานข้อมูลขั้นสูง</li>
        <li className="list-group-item">การรักษาความปลอดภัยในเครือข่ายคอมพิวเตอร์</li>
        <li className="list-group-item">การพัฒนาซอฟต์แวร์และระบบการจัดการข้อมูล</li>
      </ul>
    </div>

    <div>
      <h3 className="text-pink-dark">โอกาสในการทำงานหลังสำเร็จการศึกษา</h3>
      <p>
        ผู้สำเร็จการศึกษาจากหลักสูตรนี้สามารถทำงานในหลากหลายตำแหน่งในอุตสาหกรรม IT เช่น:
      </p>
      <ul className="list-group">
        <li className="list-group-item">โปรแกรมเมอร์</li>
        <li className="list-group-item">ผู้ดูแลระบบคอมพิวเตอร์และเครือข่าย</li>
        <li className="list-group-item">นักพัฒนาซอฟต์แวร์</li>
        <li className="list-group-item">ผู้เชี่ยวชาญด้านความปลอดภัยข้อมูล</li>
        <li className="list-group-item">ผู้ดูแลและพัฒนาเว็บไซต์</li>
        <li className="list-group-item">นักวิเคราะห์ระบบ</li>
      </ul>
    </div>

  </div>
);

export default Courses;
