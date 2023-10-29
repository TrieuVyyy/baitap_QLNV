function kiemTraDoDai (value, idErr, min, max){
    var length = value.length;
    if (min <= length && length <= max){
        //hợp lệ
        document.getElementById(idErr).innerText = "";
        return true;
    }else{
        document.getElementById(idErr).innerText = `Độ dài phải từ ${min} đến ${max} ký số`;
        return false;
    }
}

function kiemTraTen(ten){
    const re = /^[a-zA-Z]+$/;
    var isValid = re.test("ten");
    if(isValid){
        document.getElementById('tbTen'). innerText = "";
        return true;
    }else{
        document.getElementById('tbTen'). innerText = "Chỉ nhập chữ";
        return false;
    }
    
}

function kiemTraEmail (email){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var isValid = re.test("email");
    if(isValid){
        document.getElementById('tbEmail'). innerText = "";
        return true;
    }else{
        document.getElementById('tbEmail'). innerText = "Email không hợp lệ";
        return false;
    }
}

function kiemTraMatKhau(matKhau){
    const re = // Bao gồm cả chữ hoa, chữ thường, số, ký tự đặc biệt và ít nhất 8 kỹ tự
    /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}/;
    var isValid =re.test ("matKhau");
    if(isValid){
        document.getElementById('tbMatKhau'). innerText = "chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
        return true;
    }else{
        document.getElementById('tbMatKhau'). innerText = "";
        return false;
    }  
}

function kiemTraNgay (ngay){
    if(ngay ===""){
        return false;
    }
}

function kiemTraLuong(value){
    if(value ===""){
        return false;
    }
    if(value >= 1000000 && value <= 20000000){
        return true;
    }
}

function kiemTraGioLam(value){
    if(value ===""){
        return false;
    }else(value >= 80 && value <= 200){
        return true;
    }
}
