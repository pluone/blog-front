<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="getPrice">获取币价</el-button>

    <div
      v-for="currency in info"
      :key="currency.code"
    >
    <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: null
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  methods: {
    getPrice() {
      this.$axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(reponse => (this.info = reponse.data.bpi))
      .catch(error => {
        this.$message.error('接口请求异常')
      })
    }
  }
}
</script>