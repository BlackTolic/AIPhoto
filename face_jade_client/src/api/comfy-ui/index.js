import http from "../request";
import axios from "axios";
import mockTask from "../../httpMock/taskMock/task1.json";
const getTask = (id) => {
  return {
    client_id: id,
    prompt: mockTask,
  };
};
export const createTask = (id) => http.post("prompt", getTask(id));

export const viewIMGInfoById = (promptId) => {
  return http.get(`history/${promptId}`);
};

export const preview = (filename, type) =>
  http.get(`view?filename=${filename}&type=${type}`);
