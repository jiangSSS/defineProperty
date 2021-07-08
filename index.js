import { observer } from "./observer";
(function (doc) {
  let oUsername  = doc.querySelector("#username");
  let oAge       = doc.querySelector("#age");
  let oEmail     = doc.querySelector("#email");
  let oTel       = doc.querySelector("#tel");
  let oSubmitBtn = doc.querySelector("#submitBtn");
  let oInfoTable = doc.querySelector("#infoTable"); 

  let userInfo = observer({
    username: "",
    age: "",
    email: "",
    tel: ""
  }, oInfoTable)

  let init = function () {
    bindEvent()
  }

  function bindEvent () {
    oSubmitBtn.addEventListener("click", handleSubmitBtnClick, false)
  }

  function handleSubmitBtnClick () {
    let _username = oUsername.value.trim();
    let _age      = oAge.value.trim();
    let _email    = oEmail.value.trim();
    let _tel      = oTel.value.trim();

    _username && (_username !== userInfo.username) && (userInfo.username = _username)
    _age      && (_age !== userInfo.age)           && (userInfo.age = _age)
    _email    && (_email !== userInfo.email)       && (userInfo.email = _email)
    _tel      && (_tel !== userInfo.tel)           && (userInfo.tel = _tel)
    
    oUsername.value = "" 
    oAge.value      = "" 
    oEmail.value    = "" 
    oTel.value      = "" 
  }

  init();
})(document);