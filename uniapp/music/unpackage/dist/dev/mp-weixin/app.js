"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const api_request = require("./api/request.js");
const store_index = require("./store/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/play/play.js";
  "./pages/mine/mine.js";
  "./pages/follow/follow.js";
  "./pages/community/community.js";
  "./pages/login/login.js";
  "./pages/songsList/songsList.js";
}
const _sfc_main = {
  onLaunch: function() {
    let key = common_vendor.index.getStorageSync("cookie");
    if (!key) {
      this.$store.commit("changeLoginState", false);
      return;
    }
    common_vendor.index.request({
      url: api_request.baseUrl + "/login/status",
      data: {
        cookie: key
      },
      success: (res) => {
        let id = res.data.data.account.id;
        if (id) {
          this.$store.commit("changeLoginState", true);
          this.getUser(key);
        }
      }
    });
  },
  onShow: function() {
  },
  onHide: function() {
    console.log("App Hide");
  },
  methods: {
    getUser(key) {
      if (!key)
        return;
      common_vendor.index.request({
        url: api_request.baseUrl + "/user/account",
        data: {
          cookie: key
        },
        success: (res) => {
          let nickname = res.data.profile && res.data.profile.nickname;
          let id = res.data.profile && res.data.profile.userId;
          let avatar = res.data.profile && res.data.profile.avatarUrl;
          this.$store.commit("getUserInfo", { nickname, userId: id, avatar });
        }
      });
    }
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/CodeSpace/uniapp/music/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
