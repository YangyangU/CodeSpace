"use strict";
const common_vendor = require("../../common/vendor.js");
const api_request = require("../../api/request.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const store = common_vendor.useStore();
    let msg = common_vendor.ref("扫一扫");
    let qrimg = common_vendor.ref("");
    const goIndexPage = () => {
      common_vendor.index.reLaunch({
        url: "/pages/index/index"
      });
    };
    const qrLogin = () => {
      common_vendor.index.request({
        url: `${api_request.baseUrl}/login/qr/key?timestamp=${Date.now()}`,
        success: (res) => {
          let key = res.data.data.unikey;
          common_vendor.index.request({
            url: `${api_request.baseUrl}/login/qr/create?key=${key}&qrimg=true&timestamp=${Date.now()}`,
            success: (result) => {
              qrimg.value = result.data.data.qrimg;
              const timmer = setInterval(() => {
                common_vendor.index.request({
                  url: `${api_request.baseUrl}/login/qr/check?key=${key}&timestamp=${Date.now()}`,
                  success: (response) => {
                    console.log(response.data);
                    msg.value = response.data.message;
                    if (response.data.code === 803) {
                      clearInterval(timmer);
                      common_vendor.index.setStorageSync("cookie", response.data.cookie);
                      store.commit("changeLoginState", true);
                      getApp().getUser(response.data.cookie);
                      common_vendor.index.reLaunch({
                        url: "/pages/index/index"
                      });
                    }
                  }
                });
              }, 1e3);
            }
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(qrimg)
      }, common_vendor.unref(qrimg) ? {
        b: common_vendor.t(common_vendor.unref(msg))
      } : {}, {
        c: common_vendor.unref(qrimg)
      }, common_vendor.unref(qrimg) ? {
        d: common_vendor.unref(qrimg)
      } : {}, {
        e: common_vendor.o(goIndexPage),
        f: common_vendor.o(qrLogin)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/CodeSpace/uniapp/music/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
