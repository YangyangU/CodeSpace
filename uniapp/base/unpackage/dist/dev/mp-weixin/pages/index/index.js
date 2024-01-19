"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("你好");
    console.log(getApp().globalData.name);
    const name = getApp().globalData.name;
    const changeTitle = () => {
      title.value = title.value === "你好" ? "hello" : "你好";
    };
    const reverseTitle = common_vendor.computed(() => {
      return title.value.split("").reverse().join("");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value),
        b: common_vendor.o(changeTitle),
        c: common_vendor.t(common_vendor.unref(reverseTitle)),
        d: common_vendor.o(changeTitle),
        e: common_vendor.t(common_vendor.unref(name))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/CodeSpace/uniapp/base/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
