import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg border-0">
                        <div className="card-header bg-primary text-white text-center">
                            <h2 className="mb-0">โปรไฟล์นักศึกษา</h2>
                        </div>
                        <div className="card-body text-center bg-light">
                            <img
                                src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/351484798_985781775927683_1612092628827697675_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ghYfBVzycRwQ7kNvgE1_fPw&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=AkmjNkStBeQO-Ney5aEqDXg&oh=00_AYCakBRaO5ov5cvTBvf3EAsSbJETTfR2mV6Y_seixU-jSg&oe=674DA252"
                                alt="Profile"
                                className="rounded-circle mb-4"
                                width={150}
                                height={150}
                            />
                            <h3 className="mb-3 text-primary">นางสาวกานต์ธิดา จ่าดวงใจ</h3>
                            <p className="text-secondary mb-2"><strong>รหัสนักศึกษา:</strong> IT.4501</p>
                            <p className="text-secondary mb-2"><strong>อายุ:</strong> 20 ปี</p>
                            <p className="text-secondary mb-2"><strong>สาขาวิชา:</strong> เทคโนโลยีสารสนเทศ</p>
                            <p className="text-secondary"><strong>วิทยาลัย:</strong> วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</p>
                        </div>
                        <div className="card-footer text-center bg-white">
                            <a href="#edit-profile" className="btn btn-outline-primary btn-sm me-2">
                                แก้ไขข้อมูล
                            </a>
                            <a href="#view-courses" className="btn btn-primary btn-sm">
                                ดูหลักสูตร
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
