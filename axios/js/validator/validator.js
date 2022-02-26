let validator = {
  kiemTraSo: function (value, idErr) {
    errEl = document.getElementById(idErr);
    let parten = new RegExp("^(0|[1-9][0-9]*)$");
    if (parten.test(value.trim())) {
      return true;
    } else {
      errEl.innerText = "Trường này phải điền số dương";
      return false;
    }
  },
  kiemTraKiTu: function (value, idErr) {
    errEl = document.getElementById(idErr);

    let parten = new RegExp("[A-Za-z]");
    if (parten.test(value.trim())) {
      return true;
    } else {
      errEl.innerText = "Trường này phải điền chữ";
      return false;
    }
  },
  kiemTraDoDai: function (value, idErr) {
    errEl = document.getElementById(idErr);
    let length = value.trim().length;
    if (length < 5) {
      errEl.innerText = "Độ dài tối thiểu phải  lớn hơn 5";
      return false;
    }
    if (length > 15) {
      errEl.innerText = "Độ dài tối đa phải  bé hơn 15";
      return false;
    }
    return true;
  },

  kiemTraEmail: function (value, idErr) {
    errEl = document.getElementById(idErr);
    let parten =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!value.trim().match(parten)) {
      errEl.innerText = "Trường này phải điền email";
      return false;
    }
    return true;
  },
  kiemTraDiem: function (value, idErr) {
    errEl = document.getElementById(idErr);
    const nbValue = value.trim() * 1;
    if (nbValue < 0) {
      errEl.innerText = "Điểm không được bé hơn 0";
      return false;
    } else if (nbValue > 10) {
      errEl.innerText = "Điểm không được lớn hơn 10";
      return false;
    }
    return true;
  },
  kiemTraId: function (value, idErr) {
    let valid = true;
    errEl = document.getElementById(idErr);
    const idArr = document.querySelectorAll(".idTxt");
    idArr.forEach((item) => {
      if (value.trim() === item.innerText.trim()) {
        errEl.innerText = "Trùng ID";
        valid = false;
      }
    });
    return valid;
  },
};
