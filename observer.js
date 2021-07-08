import { userInfoTpl } from "./templete"

export function observer(userInfo, viewDom) {
  let _storageInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")
  let _returnInfo = {}

  let init = function () {
    initData(_storageInfo, _returnInfo, userInfo)
    initDom(_returnInfo, viewDom)   
  }
  function initData(storageInfo, returnInfo, userInfo) {
    for (let k in storageInfo) {
      if (!userInfo[k]) {
        userInfo[k] = storageInfo[k]
      }
    }

    for (let k in userInfo) {
      (function (k) {
        Object.defineProperty(returnInfo, k, {
          get() {
            return userInfo[k]
          },
          set(newValue) {
            userInfo[k] = newValue
            localStorage.setItem("userInfo", JSON.stringify(userInfo))
            document.querySelector(`.__${k}`).innerHTML = userInfo[k]
          }
        })
      })(k)
    }
  }

  function initDom (returnInfo, dom) {
    dom.innerHTML = userInfoTpl(returnInfo)
  }

  init();

  return _returnInfo;
}