import http from "@/config/request";

/** 发表评论 */
export const addComment = (data) => {
  return new Promise((resolve, reject) => {
    http.post("/comment/add", data).then((res) => {
      resolve(res);
    });
  });
};

/** 回复评论 */
export const applyComment = (data) => {
  return new Promise((resolve, reject) => {
    http.post("/comment/apply", data).then((res) => {
      resolve(res);
    });
  });
};

/** 删除自己的评论 */
export const deleteComment = (id, parent_id = 0) => {
  return new Promise((resolve, reject) => {
    http.delete(`/comment/delete/${id}/${parent_id}`, {}).then((res) => {
      resolve(res);
    });
  });
};

/** 获取父级评论 */
export const frontGetParentComment = (data) => {
  return new Promise((resolve, reject) => {
    http.post("/comment/frontGetParentComment", data).then((res) => {
      resolve(res);
    });
  });
};

/** 获取子级评论 */
export const frontGetChildrenComment = (data) => {
  return new Promise((resolve, reject) => {
    http.post("/comment/frontGetChildrenComment", data).then((res) => {
      resolve(res);
    });
  });
};

// 获取评论总条数
export const frontGetCommentTotal = (data) => {
  return new Promise((resolve, reject) => {
    http.post("/comment/getCommentTotal", data).then((res) => {
      resolve(res);
    });
  });
};
