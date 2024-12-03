<template>
  <view>
    <banner :list="list"></banner> <u-button>ss</u-button
    ><u-button
      class="u-reset-button save-btn"
      type="primary"
      text="确定"
      size="small"
    ></u-button>
    <u-button @click="testInternet">网络测试</u-button>
  </view>
</template>
<script>
import Banner from "@/components/banner/index.vue";
import { test } from "@/api/comfy-ui";

export default {
  name: "index",
  components: { Banner },
  data() {
    return {
      list: [
        { image: "/static/images/tabbar/tabbar_cart.png", title: "xxx22x" },
        { image: "/static/images/tabbar/tabbar_home.png", title: "xx33xx" },
        { image: "/static/images/tabbar/tabbar_cart.png", title: "xx444xx" },
      ],
    };
  },

  methods: {
    testInternet() {
      test({ id: "99999" })
        .then((res) => {
          console.log(res, 100000);
        })
        .catch((err) => {
          console.log(err, 99997);
        });
    },
  },
};
</script>

<style scoped></style>
