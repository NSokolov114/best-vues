import { createApp } from 'vue';

const app = createApp({
  data() {
    return {
      name: 'Sam',
      elements: [],
    };
  },
  methods: {
    changeName() {
      this.name = 'Vasya';
    },
    addElement() {
      this.elements.push(this.elements.length + 1);
    },
  },
});

app.mount('#app');

// new Vue({
//   el: '#app',
//   data: {
//     name: 'hey',
//   },
// });
