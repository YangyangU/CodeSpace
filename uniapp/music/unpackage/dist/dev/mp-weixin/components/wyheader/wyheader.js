"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "wyheader",
  props: {
    icon: {
      type: String,
      default: "mic"
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
    needBox: {
      type: Boolean,
      default: true
    },
    fontColor: String
  },
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "26584eb2": __props.fontColor
    }));
    const store = common_vendor.useStore();
    const showMenu = () => {
      store.commit("changeIsShowMenu", true);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.needBox
      }, __props.needBox ? {
        b: common_vendor.s(_ctx.__cssVars())
      } : {}, {
        c: common_vendor.o(showMenu),
        d: common_vendor.p({
          type: "bars",
          size: "22"
        }),
        e: common_vendor.p({
          type: __props.icon,
          size: "22"
        }),
        f: common_vendor.s({
          backgroundColor: __props.bgColor
        }),
        g: common_vendor.s(_ctx.__cssVars()),
        h: __props.needBox
      }, __props.needBox ? {
        i: common_vendor.s(_ctx.__cssVars())
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f4ce61de"], ["__file", "D:/CodeSpace/uniapp/music/components/wyheader/wyheader.vue"]]);
wx.createComponent(Component);
