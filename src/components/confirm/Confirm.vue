<template>
  <transition name="confirm">
    <div class="mask" @click.self="close" v-if="isVisible">
      <div class="box">
        <header class="box_header">
          <div>{{title}}</div>
          <svg @click="close" t="1619522738802" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1128" width="25" height="25"><path d="M517.08411984 479.11475483L301.90637831 263.93753776a26.85237631 26.85237631 0 1 0-37.98667221 37.95153335l215.17669262 215.19504873L263.91970607 732.27864411a26.85237631 26.85237631 0 1 0 37.96936504 37.96884057l215.19504878-215.17669264 215.19504866 215.17669264a26.85237631 26.85237631 0 1 0 37.9688406-37.95100889l-215.17669262-215.2123559 215.17669262-215.1772171a26.85237631 26.85237631 0 1 0-37.9688406-37.96936505L517.10195147 479.11475483z" fill="#A4A6AB" p-id="1129"></path></svg>
        </header>
        <section class="box_content">
          <svg t="1619522988844" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2999" width="20" height="20"><path d="M512 64C264.64 64 64 264.64 64 512c0 247.424 200.64 448 448 448 247.488 0 448-200.576 448-448C960 264.64 759.488 64 512 64zM512 768c-26.432 0-48-21.504-48-48S485.568 672 512 672c26.624 0 48 21.504 48 48S538.624 768 512 768zM560 528C560 554.56 538.624 576 512 576 485.568 576 464 554.56 464 528l0-224C464 277.44 485.568 256 512 256c26.624 0 48 21.44 48 48L560 528z" p-id="3000" data-spm-anchor-id="a313x.7781069.0.i7" class="" fill="#E6A23C"></path></svg>
          <p>{{msg}}</p>
        </section>
        <footer class="box_btns">
          <div class="btns cancel" @click="close">{{cancelButtonText}}</div>
          <div class="btns confirm" @click="close('confirm')">{{confirmButtonText}}</div>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Confirm',
};
</script>

<style>
.mask {
  width: 100vw;
  height: 100vh;
  background-color: #00000050;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
}
.box {
  width: 420px;
  padding-bottom: 10px;
  vertical-align: middle;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  font-size: 18px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.box_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  color: #303133;
  padding: 15px 15px 10px;
}
.box_header > .icon {
  cursor: pointer;
}
.box_content {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #606266;
  padding: 10px 15px;
}
.box_content > .icon {
  margin-right: 10px;
}
.box_btns {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 15px 0;
  font-size: 12px;
}
.btns {
  padding: 9px 15px;
  border: 1px;
  border-radius: 3px;
  cursor: pointer;
}
.cancel {
  color: #606266;
  border: 1px solid #dcdfe6;
  background: #fff; 
}
.cancel:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.confirm {
  color: #fff;
  border: 1px solid #409eff;
  background: #409eff;
  margin-left: 10px;
}
.confirm:hover {
  border-color: #66b1ff;
  background-color: #66b1ff;
}
</style>
