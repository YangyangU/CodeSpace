"use strict";
const common_vendor = require("../common/vendor.js");
const api_request = require("./request.js");
const apiGetUserInfo = (uid) => {
  return common_vendor.index.request({
    url: `${api_request.baseUrl}/user/detail`,
    method: "GET",
    data: {
      uid
    }
  });
};
const apiGetUserSongsList = (uid) => {
  return common_vendor.index.request({
    url: `${api_request.baseUrl}/user/playlist`,
    method: "GET",
    data: {
      uid
    }
  });
};
exports.apiGetUserInfo = apiGetUserInfo;
exports.apiGetUserSongsList = apiGetUserSongsList;
