const inputControllers = {
  focus: (object) => {
    const mess = document.querySelector("#mess");
    object.forEach((item) => {
      const { input, span } = item;
      const elm = document.querySelector(input);
      const spanElm = document.querySelector(span);
      elm.onfocus = () => {
        spanElm.innerHTML = "";
        mess.innerHTML = "";
      };
    });
  },
  clear: () => {
    const arr = [
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
    ];
    arr.forEach((item) => {
      const { input, span } = item;
      document.querySelector(input).value = "";
      document.querySelector(span).innerHTML = "";
    });
    document.getElementById("txtMaSV").disabled = false;
  },
  clearSpan: () => {
    const arr = [
      "#spanTenSV",
      "#spanMaSV",
      "#spanEmailSV",
      "#spanToan",
      "#spanLy",
      "#spanHoa",
    ];
    arr.forEach((item) => {
      document.querySelector(item).innerHTML = "";
    });
  },
};
