export const doForm = {
  template: await (await fetch("./templates/do-form.html")).text(),

  inject: ["getData"],

  data() {
    const data = this.getData();
    const year = new Date().getFullYear();
    const seq = String(data.tracking.length + 1).padStart(3, "0");

    return {
      data,
      form: {
        kode: `DO${year}-${seq}`,
        nim: "",
        nama: "",
        ekspedisi: "",
        paket: "",
        tanggalKirim: "",
      },
      selectedPackage: null,
    };
  },

  methods: {
    changePackage() {
      this.selectedPackage = this.data.paket.find(p => p.kode === this.form.paket);
    },

    submitForm() {
      const total = this.selectedPackage?.harga ?? 0;

      const newDO = {
        [this.form.kode]: {
          nim: this.form.nim,
          nama: this.form.nama,
          status: "Dalam Perjalanan",
          ekspedisi: this.form.ekspedisi,
          tanggalKirim: this.form.tanggalKirim,
          paket: this.form.paket,
          total,
          perjalanan: []
        }
      };

      this.data.tracking.push(newDO);

      this.$emit("saved");
      this.$emit("close");
    }
  }
};
