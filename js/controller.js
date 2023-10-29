function renderDsnv (dsnv){
  var contentHTML = "";
for (var i = 0; i < dsnv.length; i++) {
  var data = dsnv[i];
  var trString = `<tr>
                            <td>${data.taiKhoan}</td>
                            <td>${data.ten}</td>
                            <td>${data.email}</td>
                            <td>${data.ngayLam}</td>
                            <td>${data.chucVu}</td>
                            <td>${data.tongLuong()}</td>
                            <td>${data.loai()}</td>
                            <td>
                            <button class="btn btn-danger" onclick="xoaNV('${data.taiKhoan}')">Xoá</button>
                            <button class="btn btn-danger" onclick="suaNV('${data.taiKhoan}')">Sửa</button>
                            </td>
                        </tr>`;
  contentHTML = contentHTML + trString;
}
//duyet mang
document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

