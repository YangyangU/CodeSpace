"use strict";
const common_vendor = require("../../common/vendor.js");
const api_mine = require("../../api/mine.js");
const utils_index = require("../../utils/index.js");
require("../../api/request.js");
if (!Array) {
  const _easycom_wyheader2 = common_vendor.resolveComponent("wyheader");
  const _easycom_menuLeft2 = common_vendor.resolveComponent("menuLeft");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_musicPlayer2 = common_vendor.resolveComponent("musicPlayer");
  (_easycom_wyheader2 + _easycom_menuLeft2 + _easycom_uni_icons2 + _easycom_musicPlayer2)();
}
const _easycom_wyheader = () => "../../components/wyheader/wyheader.js";
const _easycom_menuLeft = () => "../../components/menuLeft/menuLeft.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_musicPlayer = () => "../../components/musicPlayer/musicPlayer.js";
if (!Math) {
  (_easycom_wyheader + _easycom_menuLeft + _easycom_uni_icons + _easycom_musicPlayer)();
}
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "0513ccb4": nav_bottom.value
    }));
    const store = common_vendor.useStore();
    const state = common_vendor.reactive({
      info: {},
      list: []
    });
    const activeNum = common_vendor.ref(0);
    const listNav = ["音乐", "播客", "动态"];
    const nav_bottom = common_vendor.ref(750 / 3 / 2 + "rpx");
    const headerBgColor = common_vendor.ref("rgba(255,255,255,0)");
    const headerFontColor = common_vendor.ref("rgba(255,255,255,1)");
    const showTab = common_vendor.ref([true, false, false]);
    const isLogin = common_vendor.computed(() => {
      return store.state.loginState;
    });
    const login = () => {
      common_vendor.index.reLaunch({
        url: "/pages/login/login"
      });
    };
    common_vendor.onLoad(() => {
    });
    const getUserInfo = async () => {
      const res = await api_mine.apiGetUserInfo(store.state.userInfo.userId);
      state.info = res.data;
    };
    const getUserSongsList = async () => {
      const res = await api_mine.apiGetUserSongsList(store.state.userInfo.userId);
      state.list = res.data.playlist;
    };
    common_vendor.watch(
      () => store.state.userInfo.userId,
      (newVal, oldVal) => {
        if (newVal) {
          getUserInfo();
          getUserSongsList();
        }
      },
      { immediate: true }
    );
    const changeNav = (index) => {
      activeNum.value = index;
      nav_bottom.value = 750 / 3 / 2 * (2 * index + 1) + "rpx";
      showTab.value = [false, false, false];
      showTab.value[index] = true;
    };
    let bgOpacity = 0;
    let fontColor = 255;
    const handleScroll = (e) => {
      let top = e.detail.scrollTop;
      if (top <= 340) {
        bgOpacity = (top / 340).toFixed(1);
      } else {
        bgOpacity = 1;
      }
      if (top >= 200) {
        fontColor = 0;
      } else {
        fontColor = 255;
      }
      headerBgColor.value = `rgba(255,255,255,${bgOpacity})`;
      headerFontColor.value = `rgba(${fontColor},${fontColor},${fontColor})`;
    };
    const goSongsList = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/songsList/songsList?id=${id}`
        //url带参数
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          icon: "more-filled",
          bgColor: headerBgColor.value,
          needBox: false,
          fontColor: headerFontColor.value
        }),
        b: `url(${state.info.profile && state.info.profile.backgroundUrl})`,
        c: state.info.profile && state.info.profile.avatarUrl,
        d: common_vendor.unref(isLogin)
      }, common_vendor.unref(isLogin) ? {
        e: common_vendor.t(state.info.profile && state.info.profile.nickname),
        f: common_vendor.t(state.info.profile && common_vendor.unref(utils_index.formateTime)(state.info.profile.birthday).ageLever),
        g: common_vendor.t(state.info.profile && common_vendor.unref(utils_index.formateTime)(state.info.profile.birthday).horoscope),
        h: common_vendor.t(state.info.profile && ~~(state.info.createDays / 365)),
        i: common_vendor.t(state.info.profile && state.info.profile.follows),
        j: common_vendor.t(state.info.profile && state.info.profile.followeds),
        k: common_vendor.t(state.info.profile && state.info.level),
        l: common_vendor.t(state.info.profile && state.info.listenSongs)
      } : {
        m: common_vendor.p({
          type: "right",
          size: "16"
        }),
        n: common_vendor.o(login)
      }, {
        o: common_vendor.f(listNav, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.o(($event) => changeNav(index), index),
            c: activeNum.value === index ? 1 : "",
            d: index
          };
        }),
        p: common_vendor.f(state.list, (item, index, i0) => {
          return common_vendor.e({
            a: item.coverImgUrl,
            b: common_vendor.t(item.name),
            c: index > 0
          }, index > 0 ? {} : {}, {
            d: common_vendor.t(item.trackCount),
            e: index == 0
          }, index == 0 ? {
            f: common_vendor.t(item.playCount)
          } : {}, {
            g: index > 0
          }, index > 0 ? {
            h: common_vendor.t(item.creator.nickname)
          } : {}, {
            i: index,
            j: common_vendor.o(($event) => goSongsList(item.id), index)
          });
        }),
        q: showTab.value[0],
        r: showTab.value[1],
        s: showTab.value[2],
        t: common_vendor.p({
          bottom: "100rpx"
        }),
        v: common_vendor.o(handleScroll),
        w: common_vendor.s(_ctx.__cssVars())
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7c2ebfa5"], ["__file", "D:/CodeSpace/uniapp/music/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
