// 过滤会议

export const filterMeet = (meetList, type) => {
  return meetList.filter(item => type.includes(item.status))
}
