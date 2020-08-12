<template>
  <div class="block">
    <span>日期天数差计算 </span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      value-format="yyyy-MM-dd"
      @change="getDayDiff"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker>
    相差 {{ dayDiff }} 天
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      dayDiff: '0',
    }
  },
  methods: {
    getDayDiff() {
      if (Array.isArray(this.value1) && this.value1.length == 2) {
        const startDate = this.value1[0]
        const endDate = this.value1[1]
        const url =
          '/api/dayDiff?startDate=' +
          startDate +
          '&endDate=' +
          endDate
        this.$axios.get(url).then((response) => {
          this.dayDiff = response.data.data
        })
      }
    },
  },
}
</script>
<style scoped></style>
