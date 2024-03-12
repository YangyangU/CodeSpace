"use strict";
const common_vendor = require("../common/vendor.js");
const api_request = require("./request.js");
const apiGetSongUrl = (id) => {
  return common_vendor.index.request({
    url: `${api_request.baseUrl}/song/url/v1`,
    method: "GET",
    data: {
      id,
      level: "jymaster"
    }
  });
};
const apiGetSongDetail = (id) => {
  return common_vendor.index.request({
    url: `${api_request.baseUrl}/song/detail`,
    method: "GET",
    data: {
      ids: id
    }
  });
};
exports.apiGetSongDetail = apiGetSongDetail;
exports.apiGetSongUrl = apiGetSongUrl;
