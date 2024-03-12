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
  __name: "recommendSong",
  props: {
    songs: Array
  },
  setup(__props) {
    const props = __props;
    const swiperList = common_vendor.ref([]);
    common_vendor.onUpdated(() => {
      let arr = [];
      props.songs.forEach((item, i) => {
        if (arr.length === 3) {
          swiperList.value.push(arr);
          arr = [];
        }
        arr.push(item);
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "right",
          size: "16"
        }),
        b: common_vendor.f(swiperList.value, (item, index, i0) => {
          return {
            a: common_vendor.f(item, (song, k1, i1) => {
              return common_vendor.e({
                a: song.al.picUrl,
                b: common_vendor.t(song.al.name),
                c: song.recommendReason
              }, song.recommendReason ? {
                d: common_vendor.t(song.recommendReason)
              } : {}, {
                e: common_vendor.t(song.ar[0].name),
                f: song.videoInfo.video
              }, song.videoInfo.video ? {} : {}, {
                g: song.id
              });
            }),
            b: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/CodeSpace/uniapp/music/components/recommendSong/recommendSong.vue"]]);
wx.createComponent(Component);
