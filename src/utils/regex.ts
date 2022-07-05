/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-07-05 16:30:39
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-07-05 16:31:40
 */

/**
 * 邮箱
 * @param {*} s
 */
 export function isEmail(s: string): boolean {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s);
  }
  
  /**
   * 手机号码
   * @param {*} s
   */
  export function isMobile(s: string): boolean {
    return /^1[0-9]{10}$/.test(s);
  }
  
  /**
   * 电话号码
   * @param {*} s
   */
  export function isPhone(s: string): boolean {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
  }
  
  /**
   * URL地址
   * @param {*} s
   */
  export function isURL(s: string): boolean {
    return /^http[s]?:\/\/.*/.test(s);
  }
  
