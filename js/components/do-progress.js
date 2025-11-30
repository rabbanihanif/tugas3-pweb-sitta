export const doProgress = {
  template: await (await fetch("./templates/do-progress.html")).text(),

  inject: ["getData"],

  props: ["kode"],

  data() {
    return {
      keterangan: ""
    };
  },

  methods: {
    submitProgress() {
      const db = this.getData().tracking;

      for (let item of db) {
        if (item[this.kode]) {
          item[this.kode].perjalanan.push({
            waktu: new Date().toLocaleString("id-ID"),
            keterangan: this.keterangan
          });
        }
      }

      this.$emit("saved");
      this.$emit("close");
    }
  }
};
