<template>
  <view>
    999
    <button size="small" @click="postWebSocket">websocket</button>
    <button size="small" @click="clickPrompt">执行生成任务prompt</button>
    <button size="small" @click="clickView">查看任务信息</button>
    <button size="small" @click="preview">预览</button>
    <img :src="imgSrc" />
  </view>
</template>

<script>
import { createTask, preview, viewIMGInfoById } from "@/api/comfy-ui";

export default {
  name: "index",
  data() {
    return {
      id: "617938514",
      promptId: "",
      filename: "",
      type: "",
      imgSrc: "",
    };
  },

  methods: {
    postWebSocket() {
      const { id } = this;
      const ws = new WebSocket(`ws://localhost:8188/ws?client_id=${id}`);
      ws.onopen = function () {
        console.log("ws onopen");
        ws.send("from client: hello");
      };
      ws.onmessage = function (e) {
        console.log("ws onmessage");
        console.log("from server: " + e.data);
      };
    },

    async clickPrompt() {
      const { id } = this;
      try {
        const res = await createTask(id);
        const { prompt_id, node_errors, number } = res?.data ?? {};
        this.promptId = prompt_id;
        console.log(this.promptId, "this.promptId ");
      } catch (err) {
        console.log(err);
      }
    },

    clickView() {
      const { promptId } = this;
      if (!promptId) throw new Error("无promptId");

      viewIMGInfoById(promptId);
      console.log(999);
    },

    preview() {
      preview("ComfyUI_00004_.png", "output");
      this.imgSrc =
        "http://127.0.0.1:8188/view?filename=ComfyUI_00004_.png&type=output";
    },
  },
};
</script>

<style scoped></style>
