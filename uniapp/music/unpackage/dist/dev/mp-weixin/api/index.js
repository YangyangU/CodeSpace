"use strict";
const common_vendor = require("../common/vendor.js");
const api_request = require("./request.js");
const apiGetBanner = (data) => {
  return common_vendor.index.request({
    url: api_request.baseUrl + "/banner",
    method: "GET",
    data
  });
};
const apiGetBall = () => {
  return common_vendor.index.request({
    url: api_request.baseUrl + "/homepage/dragon/ball",
    method: "GET"
  });
};
const apiGetRecommendList = () => {
  return common_vendor.index.request({
    url: api_request.baseUrl + "/recommend/resource",
    method: "GET"
  });
};
const apiGetRecommendSong = () => {
  return common_vendor.index.request({
    url: api_request.baseUrl + "/recommend/songs",
    method: "GET"
  });
};
const apiGetPersonalizedList = () => {
  return common_vendor.index.request({
    url: api_request.baseUrl + "/personalized?limit=6",
    method: "GET"
  });
};
exports.apiGetBall = apiGetBall;
exports.apiGetBanner = apiGetBanner;
exports.apiGetPersonalizedList = apiGetPersonalizedList;
exports.apiGetRecommendList = apiGetRecommendList;
exports.apiGetRecommendSong = apiGetRecommendSong;
