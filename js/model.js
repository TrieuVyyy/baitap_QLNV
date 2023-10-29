function NhanVien(
  _taiKhoan,
  _ten,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.ten = _ten;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCB = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = function () {
    if ((this.chucVu = "Sếp")) {
      return (tongLuong = this.luongCB * 3);
    } else if ((this.chucVu = "Trưởng phòng")) {
      return (tongLuong = this.luongCB * 2);
    } else {
      return (tongLuong = this.luongCB);
    }
  };

  this.loai = function () {
    if (this.gioLam >= 192) {
      return (loai = `Nhân viên xuất sắc`);
    } else if (this.gioLam >= 176) {
      return (loai = `Nhân viên giỏi`);
    } else if (this.gioLam >= 160) {
      return (loai = `Nhân viên khá`);
    } else {
      return (loai = `Nhân viên trung bình`);
    }
  };
}
