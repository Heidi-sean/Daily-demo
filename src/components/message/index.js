/* eslint-disable no-mixed-operators */
import Vue from 'vue';
// 导入的message对象为message.vue的配置项
import message from './Message';
// 将组件message.vue的配置项，作为Message类（VUe类,Vue构造器）的默认配置项，
const Message = Vue.extend(message);// 使用基础 Vue 构造器，创建一个“子类”

const vmArr = [];
function $message(opts) {
  // 接收参数，传递给message类，覆盖默认值  比如：提示文字/自动关闭时间/主题颜色
  // eslint-disable-next-line no-underscore-dangle
  const _message = new Message({
    data() {
      return {
        msg: opts.message || '默认提示',
        type: opts.type,
        isVisible: false,
        // eslint-disable-next-line no-mixed-operators
        top: `${vmArr.length * 68 + 20}px`,
      };
    },
    methods: {
      show() {
        this.isVisible = true;
        vmArr.push(this);
      },
      hide() {
        this.isVisible = false;
        vmArr.shift();
        vmArr.forEach((item, index) => {
          // eslint-disable-next-line no-param-reassign
          item.top = `${index * 68 + 20}px`;
        });
      },
    },
    mounted() {
      this.show();
      setTimeout(() => {
        this.hide();
      }, 3000);
    },
  });// 实例化组件
  // 模板编译到实例的$el属性
  _message.$mount();
  // 手动挂载到指定节点body
  document.body.appendChild(_message.$el);
}

export default {
  // eslint-disable-next-line no-shadow
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$message = $message;
  },
};
