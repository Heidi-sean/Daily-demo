<template>
  <div class="container">
    <button @click="message('success')">成功提示</button>
    <button @click="message('info')">消息提示</button>
    <button @click="open">点击打开 Message Box</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    message(type) {
      this.$message({
        type,
        message: type === 'success' ? '恭喜你，这是一条成功消息' : '这是一条消息提示',
      });
    },
    open() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!',
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除',
        });
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  user-select: none;
}
.container{
 text-align: center;
 line-height: 800px;
}
</style>
