

/** 安全解析json */
export function safeParseJson(jsonStr: string) {
  try {
    const parseResult = JSON.parse(jsonStr);
    return parseResult;
  } catch (error) {
    console.error('json转化失败',jsonStr)
    /** 只保证第一层级有效 */
    if (/^["']/.test(jsonStr)) {
      return [];
    }
    return {};
  }
}