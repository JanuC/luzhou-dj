
// 根据状态值返回对应的状态

export const filterStatus = (status) => {
  const statusObj = {
    class: "status-normal",
    text: "待开始",
  }
  if (status === 1) { // 进行中
    statusObj.class = "status-in",
      statusObj.text = "进行中"
  }
  if (status === 2) { // 即将开始
    statusObj.class = "status-soon",
      statusObj.text = "即将开始"
  }
  if (status === -1) { // 已结束
    statusObj.class = "status-out",
      statusObj.text = "已结束"
  }
  return statusObj;
}
