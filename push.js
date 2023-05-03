var j = JSON.parse(decodeURIComponent(s));

document.title="["+j.key+"]Nha khoa SV - Hóa đơn";
//Khách hàng
document.getElementById("hoTen").innerText=j.hoTen;
document.getElementById("sdt").innerText=j.sdt;
document.getElementById("diaChi").innerText=j.diaChi;
//Thông tin đơn hàng
document.getElementById("key").innerText=j.key;
document.getElementById("ngayDat").innerText=j.ngayDat;
document.getElementById("tenDVVC").innerText=j.tenDVVC;
document.getElementById("maDon").innerText=j.maDon;
document.getElementById("keyQr").src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=https%3A%2F%2Fwww.nhakhoasv.com%2F%3ForderKey%3D"+j.key;
document.getElementById("momo").src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=2%7C99%7C0968747831%7CDinh%20Phuoc%20An%7C%7C0%7C0%7C%7Cho ten va sdt%7Ctransfer_myqr";
document.getElementById("vcb").src="https://chart.googleapis.com/chart?chs=120x120&cht=qr&chl=00020101021138540010A00000072701240006970436011099687478310208QRIBFTTA53037045802VN62170813ho ten va sdt63046D75";
//Chi tiết
j.chiTiet.sort((a, b)=>{
    if(a.sku > b.sku) return -1;
}).forEach((item)=>{
    document.getElementById("chiTiet").insertRow(1).innerHTML=
    `<tr>
            <td class="text-center">${item.sku}</td>
            <td>
                <div class="card f-center flex h-fit">
                    <div class="card-body">${item.proTitle}</div>
                    <div class="card-header">${item.proDes}</div>
                </div>
            </td>
            <td class="text-center">${item.soLg}</td>
            <td class="text-right">${item.gia}</td>
            <td class="text-right">${item.thanhTien}</td>
            <td class="text-center">${item.tui}</td>
            <td>${item.ghiChu}</td>
        </tr>`;
});

document.getElementById("tongSoLg").innerText=j.tongSoLg;
document.getElementById("tienHang").innerText=j.tienHang;
document.getElementById("soKien").innerText=j.soKien;
document.getElementById("ghiChu").innerText=j.ghiChu;




