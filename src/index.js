const delConfStr = (str, conf) => {
  return str.replace(conf, "");
};

const recursionSearch = (str, confStr) => {
  let res = str;

  for (let i = 0; i < confStr.length; i++) {
    if (res) {
      res = delConfStr(res, confStr[i]);
      if (res.length < str.length) {
        res = recursionSearch(res, confStr);
      }
    }
  }
  return res;
};
module.exports = function check(str, bracketsConfig) {
  const confStr = bracketsConfig.map((item) => item.join(""));
  const answer = recursionSearch(str, confStr);

  return !answer;
};
