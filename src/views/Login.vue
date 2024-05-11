<template>
    <div id="app">
        <vue-particles
            id="tsparticles"
            :particlesInit="particlesInit"
            :particlesLoaded="particlesLoaded"
            :options="options"
        />
    </div>
    <div class = "formContainer">
        <h3>Enterprise portal management system</h3>
        <el-form
    ref="loginFormRef"
    style="max-width: 600px"
    :model="loginForm"
    status-icon
    :rules="loginRules"
    label-width="80px"
    class="loginForm"
  >
    <el-form-item label="username" prop="username">
      <el-input v-model="loginForm.username"  autocomplete="off" />
    </el-form-item>
    <el-form-item label="password" prop="password">
      <el-input v-model="loginForm.password" type="password" autocomplete="off" />
    </el-form-item>
    
    <el-form-item>
      <el-button type="primary" @click="submitForm()">
        Submit
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
    </div>
</template>
<script setup>
import { reactive,ref } from 'vue'
import {useRouter} from 'vue-router'
const loginForm = reactive({
    username: '',
    password: ''
})

const loginFormRef = ref()

const loginRules = reactive({
    username: [{
        required: true,
        message: 'Please input username',
        trigger: 'blur'
    }],
    password: [{
        required: true,
        message: 'Please input password',
        trigger: 'blur'
    }]
})
const router = useRouter()
const submitForm = ()=>{
    loginFormRef.value.validate((valid)=>{
        console.log(valid)
        if(valid){
            console.log(loginForm)
            localStorage.setItem('token', '123')
            router.push('/index')
        }
    })

}
const options = {
                    background: {
                        color: {
                            value: '#0d47a1'
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce'
                            },
                            random: false,
                            speed: 6,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        }
                    },
                    detectRetina: true
                }
// const handleLogin = () => {
//     localStorage.setItem('token', '123')
// }
</script>
<style lang="scss" scoped>
.formContainer{
    width: 500px;
    height: 300px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba($color: #000000, $alpha: 0.5);
    color:white;
    text-align: center;
    padding: 20px;
    h3{
        font-size: 25px;
    }
    .loginForm{
        margin-top: 20px;
    }
}
::v-deep .el-form-item__label{
    color: white;
}
</style>
