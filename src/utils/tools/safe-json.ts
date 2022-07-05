/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-07-05 16:35:07
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-07-05 16:35:07
 */

/**
 * 安全解析json，并且提供预想的形式
 * @param jsonStr 
 * @param expect 
 * @returns 
 */
 export function safeParseJson(jsonStr: string, expect: any) {
    try {
      const parseResult = JSON.parse(jsonStr);
      return parseResult;
    } catch (error) {
      if (expect) { return expect; }
      /** 只保证第一层级有效 */
      if (/^["']/.test(jsonStr)) {
        return [];
      }
      return {};
    }
  }
  