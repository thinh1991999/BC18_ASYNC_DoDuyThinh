let renderTaleDSSV = () => {
  sinhVienService
    .layDanhSachSinhVien()
    .then((res) => {
      convertedArr = res.data.map((item) => {
        let { name, email, toan, ly, hoa, id } = item;
        return new SV(name, email, toan, ly, hoa, id);
      });
      console.log("convertedArr", convertedArr);
      sinhVienControllers.renderTable(convertedArr);
    })
    .catch((err) => {
      console.log("err", err);
    });
};
renderTaleDSSV();
document.getElementById("btn-add").addEventListener("click", function () {
  document.getElementById("txtMaSV").disabled = false;
  document.querySelector("#txtSearch").value = "";
  const mess = document.querySelector("#mess");
  mess.innerHTML = "";
  let svOject = sinhVienControllers.layThongTinTuForm();

  let isValid =
    validator.kiemTraDoDai(svOject.name, "spanTenSV") &
    validator.kiemTraKiTu(svOject.name, "spanTenSV") &
    validator.kiemTraId(svOject.id, "spanMaSV") &
    validator.kiemTraSo(svOject.id, "spanMaSV") &
    validator.kiemTraEmail(svOject.email, "spanEmailSV") &
    validator.kiemTraSo(svOject.toan, "spanToan") &
    validator.kiemTraSo(svOject.ly, "spanLy") &
    validator.kiemTraSo(svOject.hoa, "spanHoa") &
    validator.kiemTraDiem(svOject.toan, "spanToan") &
    validator.kiemTraDiem(svOject.ly, "spanLy") &
    validator.kiemTraDiem(svOject.hoa, "spanHoa");

  isValid &&
    sinhVienService
      .themSinhVien(svOject)
      .then((res) => {
        mess.classList.add("text-success");
        mess.classList.remove("text-danger");
        mess.innerHTML = "Thêm thành công";
        renderTaleDSSV();
        inputControllers.clear();
      })
      .catch((err) => {
        mess.classList.add("text-danger");
        mess.classList.remove("text-success");
        mess.innerHTML = "Có lỗi xảy ra";
        console.log(err);
      });
});

function xoaSV(id) {
  document.querySelector("#txtSearch").value = "";
  sinhVienService
    .xoaSinhVien(id)
    .then((res) => {
      renderTaleDSSV();
    })
    .catch((err) => {
      console.log(err);
    });
}

function suaSV(id) {
  inputControllers.clearSpan();
  let tenSV = document.getElementById("txtTenSV");
  let maSV = document.getElementById("txtMaSV");
  let mailSV = document.getElementById("txtEmail");
  let diemToan = document.getElementById("txtDiemToan");
  let diemLy = document.getElementById("txtDiemLy");
  let diemHoa = document.getElementById("txtDiemHoa");
  sinhVienService
    .layChiTietSinhVien(id)
    .then((res) => {
      maSV.disabled = true;
      const { id, name, email, toan, ly, hoa } = res.data;
      maSV.value = id;
      tenSV.value = name;
      mailSV.value = email;
      diemToan.value = toan;
      diemLy.value = ly;
      diemHoa.value = hoa;
    })
    .catch(() => {});
}

function capNhatSV() {
  document.querySelector("#txtSearch").value = "";
  const mess = document.querySelector("#mess");
  mess.innerHTML = "";
  let svOject = sinhVienControllers.layThongTinTuForm();
  let isValid =
    validator.kiemTraDoDai(svOject.name, "spanTenSV") &
    validator.kiemTraKiTu(svOject.name, "spanTenSV") &
    validator.kiemTraSo(svOject.id, "spanMaSV") &
    validator.kiemTraEmail(svOject.email, "spanEmailSV") &
    validator.kiemTraSo(svOject.toan, "spanToan") &
    validator.kiemTraSo(svOject.ly, "spanLy") &
    validator.kiemTraSo(svOject.hoa, "spanHoa") &
    validator.kiemTraDiem(svOject.toan, "spanToan") &
    validator.kiemTraDiem(svOject.ly, "spanLy") &
    validator.kiemTraDiem(svOject.hoa, "spanHoa");
  isValid &&
    sinhVienService
      .capNhatSinhVien(svOject.id, svOject)
      .then((res) => {
        document.getElementById("txtMaSV").disabled = false;
        mess.classList.add("text-success");
        mess.classList.remove("text-danger");
        mess.innerText = "Cập nhật thành công";
        inputControllers.clear();
        renderTaleDSSV();
      })
      .catch((error) => {
        mess.classList.add("text-danger");
        mess.classList.remove("text-success");
        mess.innerText = "Không tồn tại ID này";
      });
}

inputControllers.focus([
  {
    input: "#txtTenSV",
    span: "#spanTenSV",
  },
  {
    input: "#txtMaSV",
    span: "#spanMaSV",
  },
  {
    input: "#txtEmail",
    span: "#spanEmailSV",
  },
  {
    input: "#txtDiemToan",
    span: "#spanToan",
  },
  {
    input: "#txtDiemLy",
    span: "#spanLy",
  },
  {
    input: "#txtDiemHoa",
    span: "#spanHoa",
  },
]);

document.querySelector(".btn-reset").onclick = () => {
  document.querySelector("#txtSearch").value = "";
  const mess = document.querySelector("#mess");
  mess.innerHTML = "";
  inputControllers.clear();
  renderTaleDSSV();
};

document.querySelector("#txtSearch").onfocus = () => {
  const mess = document.querySelector("#mess");
  mess.innerHTML = "";
};
document.querySelector(".form-search").onsubmit = (e) => {
  e.preventDefault();

  const valueInput = document.querySelector("#txtSearch").value.trim();

  sinhVienService
    .timKiemTheoTenSV(valueInput)
    .then((res) => {
      convertedArr = res.data.map((item) => {
        let { name, email, toan, ly, hoa, id } = item;
        return new SV(name, email, toan, ly, hoa, id);
      });
      sinhVienControllers.renderTable(convertedArr);
    })
    .catch((error) => {
      console.log(error);
    });
};
