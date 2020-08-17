## 项目笔记

### css样式
为了让登录的表单在页面居中，可以使用margin, 设置左右为auto，这样相当于左右的边界等宽，从而表单在页面居中
```css
.loginf-form {
    max-width: 500px;
    margin: 0 auto;
}
```


### 表单校验
登录表单涉及到校验，主要是在表单的rules属性，在表单项中的prop属性和定义的校验规则名称要一一对应

表单的ref属性相当于这个表单的引用ID，用来唯一标识一个表单，在提交表单后的校验语法

```js
this.$refs['formName'].validate((valid) => {
    if(valid){
        //do sth
    }else {
        console.log('error');
        return false;
    }
})
```

### Vuex状态管理

[官方文档](https://vuex.vuejs.org/zh/)

用户登录后获取到token和userInfo，将这两个信息同步到状态中，同步方法是：
调用this.$store的commit方法

```js
    _this.$store.commit("SET_TOKEN", jwt)
    _this.$store.commit("SET_USERINFO", userInfo)
```

SET_TOKEN SET_USERINFO定义在store/index.js中，被称为mutations，也即对状态的修改方法都定义在这里，

store/index.js中的getter用来获取状态，mutation用来修改状态，state下面则定义了状态

```js
export default new Vuex.Store({
  state: {
    token: '',
    userInfo: JSON.parse(sessionStorage.getItem("userInfo"))
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      localStorage.setItem("token", token)
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
    },
    REMOVE_INFO: (state) => {
      state.token = ''
      state.userInfo = {}
      localStorage.setItem("token", '')
      sessionStorage.setItem("userInfo", JSON.stringify(''))
    }
  },
  actions: {
  },
  modules: {
  }
})
```

### axios拦截器
分为请求拦截器和响应拦截器，请求拦截器主要在请求中添加一些额外的信息，例如在请求header上带上token，
响应拦截器可以用户判断接口调用是否出错，或者判断是否未登录，并进行统一的消息提示。
