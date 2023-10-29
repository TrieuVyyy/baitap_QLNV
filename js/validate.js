function kiemTraDoDai(value, idErr, min, max) {
  var length = value.length;
  if (min <= length && length <= max) {
    //hợp lệ
    document.getElementById(idErr).innerText = "";
    return true;
  } else {
    document.getElementById(
      idErr
    ).innerText = `Độ dài phải từ ${min} đến ${max} ký số`;
    return false;
  }
}

function kiemTraTen(ten) {
  const re = /^[a-zA-Z]+$/;
  var isValid = re.test(ten);
  if (isValid) {
    document.getElementById("tbTen").innerText = "";
    return true;
  } else {
    document.getElementById("tbTen").innerText = `Chỉ nhập chữ`;
    return false;
  }
}

function kiemTraEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var isValid = re.test(email);
  if (isValid) {
    document.getElementById("tbEmail").innerText = "";
    return true;
  } else {
    document.getElementById("tbEmail").innerText = `Email không hợp lệ`;
    return false;
  }
}

function kiemTraMatKhau(matKhau) {
  const re = // Bao gồm cả chữ hoa, chữ thường, số, ký tự đặc biệt và ít nhất 8 kỹ tự
    /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}/;
  var isValid = re.test(matKhau);
  if (isValid) {
    document.getElementById("tbMatKhau").innerText = "";
    return true;
  } else {
    document.getElementById(
      "tbMatKhau"
    ).innerText = `chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt`;
    return false;
  }
}

function kiemTraNgay(ngay) {
  const re = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/([0-9]{4})$/;
  var isValid = re.test(ngay);
  if (isValid) {
    document.getElementById("tbNgay").innerText = "";
    return true;
  }else{
    document.getElementById("tbNgay").innerText = `Định dạng mm/dd/yyyy`;
    return false;
  }
}

function kiemTraLuong(luong) {
  var isValid = luong;
  if (isValid >= 1000000 && isValid <= 20000000) {
    document.getElementById("tbLuongCB").innerText = "";
    return true;
  } else {
    document.getElementById(
      "tbLuongCB"
    ).innerText = `Nhập từ 1000000 - 20000000`;
    return false;
  }
}

function kiemTraChucVu(chucVu){
    var isValid = chucVu;
    if(isValid === "Sếp" || isValid === "Nhân viên" || isValid === "Trưởng phòng"){
        document.getElementById("tbChucVu").innerText = "";
        return true;
    }else{
        document.getElementById("tbChucVu").innerText = `Chọn chức vụ phù hợp`;
        return false;
    }
}

function kiemTraGioLam(gio) {
  var isValid = gio;
  if (isValid >= 80 && isValid <= 200) {
    document.getElementById("tbGiolam").innerText = "";
    return true;
  } else {
    document.getElementById("tbGiolam").innerText = `Nhập từ 80 -200 giờ`;
    return false;
  }
}
