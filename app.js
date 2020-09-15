var words = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];

function replaceStr(str, i, char) {
  return str.substr(0, i) + char + str.substr(i + 1);
}

function swap(str, i1, i2) {
  return replaceStr(replaceStr(str, i1, str[i2]), i2, str[i1]);
}

function sortedChar(str) {
  var sorted = str;
  for (var i = 0; i < sorted.length; i++) {
    for (var j = i + 1; j < sorted.length; j++) {
      if (sorted[i] > sorted[j]) {
        sorted = swap(sorted, i, j);
      }
    }
  }
  return sorted;
}

function groupAnagrams(strs) {
  let result = {};
  for (var i = 0; i < strs.length; i++) {
    let sort = sortedChar(strs[i]);
    if (result[sort]) {
      result[sort].push(strs[i]);
    } else {
      result[sort] = [strs[i]];
    }
  }
  return Object.values(result);
}

groupAnagrams(words);
