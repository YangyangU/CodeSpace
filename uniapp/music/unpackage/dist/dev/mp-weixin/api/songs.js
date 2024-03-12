"use strict";
const common_vendor = require("../common/vendor.js");
const api_request = require("./request.js");
const apiGetPlayList = (id, limit, offset) => {
  return common_vendor.index.request({
    url: `${api_request.baseUrl}/playlist/track/all`,
    method: "GET",
    data: {
      id,
      limit,
      offset
    }
  });
};
const apiGetPlayListDetail = (id) => {
  return common_vendor.index.request({
    url: `${api_request.baseUrl}/playlist/detail`,
    method: "GET",
    data: {
      id
    }
  });
};
exports.apiGetPlayList = apiGetPlayList;
exports.apiGetPlayListDetail = apiGetPlayListDetail;
