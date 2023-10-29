var dsnv = [];

function themNV() {
  var _taiKhoan = document.getElementById("tknv").value;
  var _ten = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _matKhau = document.getElementById("password").value;
  var _ngayLam = document.getElementById("datepicker").value;
  var _luongCoBan = document.getElementById("luongCB").value * 1;
  var _chucVu = document.getElementById("chucvu").value;
  var _gioLam = document.getElementById("gioLam").value;
  var nv = new NhanVien(
    _taiKhoan,
    _ten,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam
  );  

  //validate
  var 
  //tài khoản
  isValid = isValid & kiemTraDoDai(nv.taiKhoan, "tbTKNV", 4, 6);
  //tên
  isValid = kiemTraTen (nv.ten) & kiemTraDoDai(nv.ten, "tbTen", 2,15);
  //email
  isValid = isValid & kiemTraEmail(nv.email);
  //mật khẩu
  isValid = kiemTraMatKhau (nv.matKhau) & kiemTraDoDai (nv.matKhau, "tbMatKhau", 6, 10);
  //ngày làm
  isValid = isValid & kiemTraNgay (nv.ngayLam);
  //lương
  isValid = isValid & kiemTraLuong(nv.luongCB);
  //chức vụ
  isValid = isValid & kiemTraChucVu(nv.chucVu);
  //giờ làm
  isValid = isValid & kiemTraGioLam(nv.gioLam);

  if (isValid) {
    dsnv.push(nv);
    renderDsnv(dsnv);
  }
}

function xoaNV(id) {
  var viTri = dsnv.findIndex(function (item) {
    return item.taiKhoan == id;
  });
  dsnv.splice(viTri, 1);
  renderDsnv(dsnv);
}

function suaNV(id) {
    var viTri = dsnv.findIndex(function (item) {
      return item.taiKhoan == id;
    });
    var nv = dsnv[viTri];
    console.log('suaNV', nv);
    //đưa thông tin lên form
    document.getElementById('tknv').value = nv.taiKhoan;
    document.getElementById('name').value = nv.ten;
    document.getElementById('email').value = nv.email;
    document.getElementById('password').value = nv.matKhau;
    document.getElementById('datepicker').value = nv.ngayLam;
    document.getElementById('luongCB').value = nv.luongCB;
    document.getElementById('chucvu').value = nv.chucVu;
    document.getElementById('gioLam').value = nv.gioLam;
  }


function timNV(id){
    var viTri = dsnv.findIndex(function(item){
        return item.taiKhoan == id;
    });
    dsnv[viTri]= sv;
    renderDsnv(dsnv);
}
