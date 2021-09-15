import axios from "axios";

export default {
  install(app) {
    app.config.globalProperties.$fetch = options => axios(options);
  }
}
