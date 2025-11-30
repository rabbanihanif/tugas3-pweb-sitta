export const stockForm = {
  template: await (await fetch("./templates/stock-form.html")).text(),

  props: ["editData"],
  inject: ["getData"],

  data() {
    return {
      data: {},

      form: {
        kode: "",
        judul: "",
        kategori: "",
        upbjj: "",
        lokasiRak: "",
        pengiriman: "",
        paket: "",
        harga: 0,
        qty: 0,
        safety: 0,
        catatan: ""
      }
    };
  },

  created() {
    // ambil master data (kategoriList, upbjjList, pengirimanList, paket)
    this.data = this.getData();

    // Jika edit → isi form dari data lama
    if (this.editData) {
      this.form = { ...this.editData };
    }
  },

  methods: {
    updateHarga() {
      const selected = this.data.paket.find(p => p.kode === this.form.paket);

      // Harga dipaksa override dengan harga paket
      this.form.harga = selected ? selected.harga : 0;
    },

    submitForm() {
      // kirim data ke component parent
      this.$emit("save", { ...this.form });

      // tutup modal
      this.$emit("close");
    }
  }
};
