
/*
 * @Description:
 * @Autor: 吴浩舟
 * @Date: 2022-03-24 17:01:48
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-07-05 16:24:24
 */

/**
 * 
 * @param str 需要计算长度的字符
 * @returns 中文双字节算1个字符，英文及符号算0.5个字符，向上取整
 */
export const getStrLength = (str?: string): number | Error => {
  if (!str) {
    return 0;
  }
  if (typeof str === 'string') {
    let count = 0;
    // 匹配双字节字符(包括汉字在内)：[^\x00-\xff]
    /* eslint-disable */
    const doubleBitTextReg = /[^\x00-\xff]/;
    str.split('').forEach((i) => {
      if (doubleBitTextReg.test(i)) {
        count += 2;
      } else {
        count += 1;
      }
    });
    return Math.ceil(count / 2);
  }
  return new Error('输入有误，请输入字符串');
};
