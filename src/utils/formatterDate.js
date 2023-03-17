// 格式化日期时间

export const useFormatterDate = (date) => {
  date = new Date(date);
  let Y = date.getFullYear();
  let M = date.getMonth() + 1;
  let D = date.getDate();
  let h = date.getHours();
  let m = date.getMinutes();
  M = M >= 10 ? M : "0" + M;
  D = D >= 10 ? D : "0" + D;
  h = h >= 10 ? h : "0" + h;
  m = m >= 10 ? m : "0" + m;
  return `${Y}-${M}-${D}  ${h}:${m}`;
};
