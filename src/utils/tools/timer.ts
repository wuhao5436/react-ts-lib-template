/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-07-05 16:42:22
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-07-05 16:42:23
 */

export const showLeftTime = function (pre: Date, endCallback?: () => void) {
  const nowtime = new Date(), //获取当前时间
    endtime = new Date(pre); //定义结束时间

  const lefttime = endtime.getTime() - nowtime.getTime(); //距离结束时间的毫秒数
  formatDurTime(lefttime, "ms");
  return endCallback && endCallback();
};

/**
 *
 * @param time 时间区间长度
 * @param type 类型
 */
export const formatDurTime = (time: number, type: "s" | "ms"): string => {
  let dur = time;
  if (type === "ms") {
    dur = Math.floor(time / 1000);
  }
  if (dur > 0) {
    const leftd = Math.floor(dur / (60 * 60 * 24)), //计算天数
      lefth = Math.floor((dur / (60 * 60)) % 24), //计算小时数
      leftm = Math.floor((dur / 60) % 60), //计算分钟数
      lefts = Math.floor(dur % 60); //计算秒数
    return (
      leftd +
      "天" +
      (lefth < 10 ? `0${lefth}` : lefth) +
      ":" +
      (leftm < 10 ? `0${leftm}` : leftm) +
      ":" +
      (lefts < 10 ? `0${lefts}` : lefts)
    ); //返回倒计时的字符串
  }
  return "";
};
