<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

// 声明一个变量来保存定时器句柄
let redirectTimer: ReturnType<typeof setTimeout>

// 如果进入到404页面，500毫秒后跳转到dashboard页面
function handleRedirect() {
  clearTimeout(redirectTimer) // 清除可能存在的旧定时器（防止重复跳转）

  redirectTimer = setTimeout(() => {
    router.push('/dashboard')
  }, 500)
}

// 在组件挂载时触发跳转逻辑
onMounted(handleRedirect)
</script>

<template>
  <el-empty description="404页面"/>
</template>

<style scoped>

</style>
