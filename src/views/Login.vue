<template>
    <div>
        <el-container>
            <el-main>
                <el-form :model="formData" :rules="rules" ref="loginForm" label-width="100px" class="loginf-form">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="formData.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="formData.password"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="login()">登录</el-button>
                        <el-button @click="resetForm">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formData: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        login (){
            this.$refs['loginForm'].validate((valid) => {
                if(valid){
                    const _this = this
                    this.$axios.post('/login', _this.formData).then(res => {
                        console.log(res.data)
                        const jwt = res.headers['authorization']
                        const userInfo = res.data.data

                        _this.$store.commit("SET_TOKEN", jwt)
                        _this.$store.commit("SET_USERINFO", userInfo)

                        console.log(_this.$store.getters.userInfo)

                        _this.$router.push("/blogs")
                    })
                }else {
                    console.log('error submit!');
                    return false;
                }
            })
        },

        resetForm() {
            this.$refs('loginForm').resetFields();
        }


        
    }
}
</script>
<style scoped>
.el-main {
    text-align: center;
}
.loginf-form {
    max-width: 500px;
    margin: 0 auto;
}

</style>