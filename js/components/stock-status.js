export const stockStatus = {
  template: await (await fetch("./templates/stock-status.html")).text(),

  props: ["qty", "safety"],

  computed: {
    statusLabel() {
      if (this.qty === 0) return "Kosong";
      if (this.qty < this.safety) return "Menipis";
      return "Aman";
    }
  }
};
