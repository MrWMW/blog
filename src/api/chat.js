import http from "@/config/request";

/** 获取聊天信息 */
export const getChatList = (data) => {
  return new Promise((resolve, reject) => {
    http.post("/chat/getChatList", data).then((res) => {
      resolve(res);
    });
  });
};

/** 清空聊天记录 */
export const clearChat = (data) => {
  return new Promise((resolve, reject) => {
    http.post("/chat/delete", data).then((res) => {
      resolve(res);
    });
  });
};

/** 撤回单条聊天记录 */
export const deleteOneChat = (id) => {
  return new Promise((resolve, reject) => {
    http.delete("/chat/deleteOne/" + id, {}).then((res) => {
      resolve(res);
    });
  });
};
