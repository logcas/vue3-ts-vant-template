import { App } from 'vue';
import {
  Button,
} from 'vant';

const components = [Button];

export default {
  install(app: App): void {
    components.forEach((Comp) => app.use(Comp));
  },
};
