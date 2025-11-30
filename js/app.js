import { stockTable } from "./components/stock-table.js";
import { stockForm } from "./components/stock-form.js";
import { stockStatus } from "./components/stock-status.js";
import { stockTooltip } from "./components/stock-tooltip.js";

import { doSearch } from "./components/do-search.js";
import { doForm } from "./components/do-form.js";
import { doProgress } from "./components/do-progress.js";
import { doResult } from "./components/do-result.js";


const app = Vue.createApp({
  
  data() {
    return {
      page: "stok",
      rawData: null,
      isLoading: true,
    };
  },

  async created() {
    const r = await fetch("./data/dataBahanAjar.json");
    this.rawData = await r.json();
    this.isLoading = false;
  },

  provide() {
    return {
      getData: () => this.rawData
    };
  }

});

window.addEventListener("change-page", (e) => {
  vm.page = e.detail;
});


// REGISTER COMPONENTS
app.component("ba-stock-table", stockTable);
app.component("ba-stock-form", stockForm);
app.component("ba-stock-status", stockStatus);
app.component("ba-stock-tooltip", stockTooltip);

app.component("ba-do-search", doSearch);
app.component("ba-do-form", doForm);
app.component("ba-do-progress", doProgress);
app.component("ba-do-result", doResult);

const vm = app.mount('#app');
appRef = vm;

