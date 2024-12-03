import http from "../request";
import mockTask from "../../httpMock/taskMock/task1.json";

const getTask = (id) => {
  return {
    client_id: id,
    prompt: mockTask,
  };
};
export const createTask = (id) => http.post("prompt", getTask(id));

export const viewIMGInfoById = (promptId) => http.get(`history/${promptId}`);

export const preview = (filename, type) =>
  http.get(`view?filename=${filename}&type=${type}`);

export const test = (data) => http.post("/api/test", data);
