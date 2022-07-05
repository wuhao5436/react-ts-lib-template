
/*
 * @Description:
 * @Autor: 吴浩舟
 * @Date: 2022-03-24 17:21:41
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-03-24 17:42:31
 */

/**
 * 
 * @param str 原始字符串
 * @param limit 限制长度
 * @param defaultTail 结尾
 * @returns 
 */
export const getLimitStr = (
  str: string,
  limit: number,
  defaultTail = "..."
): string => {
  if (!str) {
    return "";
  }
  if (limit === 0) {
    return "";
  }
  const innerLimit = limit * 2;

  if (typeof str === "string") {
    let count = 0;
    // 匹配双字节字符(包括汉字在内)：[^\x00-\xff]
    const doubleBitTextReg = /[^\x00-\xff]/;
    for (let i = 0; i < str.length; i++) {
      if (doubleBitTextReg.test(str[i])) {
        count += 2;
        if (count > innerLimit) {
          return str.substring(0, i) + defaultTail;
        }
      } else {
        count += 1;
        if (count > innerLimit) {
          return str.substring(0, i) + defaultTail;
        }
      }
    }
    if (count <= innerLimit) {
      return str;
    }
  }

  return "";
};
