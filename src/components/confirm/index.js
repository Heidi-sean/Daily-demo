import Vue from 'vue';
import confirm from './Confirm';

const Confirm = Vue.extend(confirm);

function $confirm(msg, title, opts) {
  return new Promise((resolve, reject) => {
    const _confirm = new Confirm({
      data() {
        return {
          msg,
          title,
          isVisible: false,
          confirmButtonText: opts.confirmButtonText,
          cancelButtonText: opts.cancelButtonText,
          type: opts.type,
        };
      },
      methods: {
        show() {
          this.isVisible = true;
        },
        close(flag) {
          this.isVisible = false;
          flag === 'confirm' ? resolve() : reject();
        },
      },
      mounted() {
        this.show();
      },
    });
    _confirm.$mount();
    document.body.appendChild(_confirm.$el);
  });
}

export default {
  install(Vue) {
    Vue.prototype.$confirm = $confirm;
  },
};
