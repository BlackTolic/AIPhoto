<template>
  <view
    >09999 <banner :list="list"></banner> <u-button>ss</u-button
    ><u-button
      class="u-reset-button save-btn"
      type="primary"
      text="确定"
      size="small"
    ></u-button
  ></view>
</template>
<script>
import Banner from "@/components/banner/index.vue";

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
};
</script>

<style scoped></style>
