"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
require("../../api/request.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_wyheader2 = common_vendor.resolveComponent("wyheader");
  const _easycom_menuLeft2 = common_vendor.resolveComponent("menuLeft");
  const _easycom_songList2 = common_vendor.resolveComponent("songList");
  const _easycom_recommendSong2 = common_vendor.resolveComponent("recommendSong");
  (_easycom_uni_search_bar2 + _easycom_wyheader2 + _easycom_menuLeft2 + _easycom_songList2 + _easycom_recommendSong2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_wyheader = () => "../../components/wyheader/wyheader.js";
const _easycom_menuLeft = () => "../../components/menuLeft/menuLeft.js";
const _easycom_songList = () => "../../components/songList/songList.js";
const _easycom_recommendSong = () => "../../components/recommendSong/recommendSong.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_wyheader + _easycom_menuLeft + _easycom_songList + _easycom_recommendSong)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const state = common_vendor.reactive({
      banners: [],
      balls: [],
      recommend: [],
      songs: [],
      personalizedList: []
    });
    common_vendor.onLoad(() => {
      getBanner();
      getBall();
      getRecommendList();
      getRecommendSong();
      getPersonalizedList();
    });
    const getBanner = () => {
      api_index.apiGetBanner({ type: 2 }).then((res) => {
        state.banners = res.data.banners;
      });
    };
    const getBall = async () => {
      const { data: { data: balls } } = await api_index.apiGetBall();
      state.balls = balls;
    };
    const getRecommendList = async () => {
      const { data: { recommend } } = await api_index.apiGetRecommendList();
      state.recommend = recommend;
    };
    const getRecommendSong = async () => {
      const res = await api_index.apiGetRecommendSong();
      state.songs = res.data.data.dailySongs;
    };
    const getPersonalizedList = async () => {
      const res = await api_index.apiGetPersonalizedList();
      state.personalizedList = res.data.result;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          placeholder: "歌曲"
        }),
        b: common_vendor.f(state.banners, (item, k0, i0) => {
          return {
            a: item.pic,
            b: item.encodeId
          };
        }),
        c: common_vendor.f(state.balls, (item, k0, i0) => {
          return {
            a: item.iconUrl,
            b: common_vendor.t(item.name),
            c: item.id
          };
        }),
        d: common_vendor.p({
          recommend: state.recommend,
          title: "推荐歌单"
        }),
        e: common_vendor.p({
          songs: state.songs
        }),
        f: common_vendor.p({
          recommend: state.personalizedList,
          title: "阳阳的雷达歌单"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/CodeSpace/uniapp/music/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
