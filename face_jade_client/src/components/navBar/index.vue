<view>
  <view v-for="item in tarBarList"></view>
</view>
<script>
export default {
  data() {
    return {
      tarBarList: [
        {name:'首页',icon:"xxx",path:""}
      ]
    }
  },
  onLoad() {

  },
  methods: {

  }
}
</script>
<style scoped>

</style>