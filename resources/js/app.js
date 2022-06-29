import { createApp } from 'vue'
import './bootstrap';

import ExampleComponent from './pages/ExampleComponent.vue';

const app = createApp({})

app.component('example-component', ExampleComponent)

app.mount('#app')