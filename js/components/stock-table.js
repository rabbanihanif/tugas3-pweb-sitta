export const stockTable = {
  template: await (await fetch("./templates/stock-table.html")).text(),

  inject: ["getData"],

  data() {
    return {
      data: null,
      filterUpbjj: "",
      filterKategori: "",
      filterMenipis: false,
      filterKosong: false,
      sortBy: "",
      showForm: false,
      editData: null,
    };
  },

  created() {
    this.data = this.getData();
  },

  computed: {
    filteredAndSorted() {
      let items = [...this.data.stok];

      if (this.filterUpbjj) items = items.filter(i => i.upbjj === this.filterUpbjj);
      if (this.filterKategori) items = items.filter(i => i.kategori === this.filterKategori);
      if (this.filterMenipis) items = items.filter(i => i.qty < i.safety);
      if (this.filterKosong) items = items.filter(i => i.qty === 0);

      if (this.sortBy === "judul") items.sort((a, b) => a.judul.localeCompare(b.judul));
      if (this.sortBy === "qty") items.sort((a, b) => a.qty - b.qty);
      if (this.sortBy === "harga") items.sort((a, b) => a.harga - b.harga);

      return items;
    }
  },

  methods: {
    resetFilter() {
      this.filterUpbjj = "";
      this.filterKategori = "";
      this.filterMenipis = false;
      this.filterKosong = false;
      this.sortBy = "";
    },

    openCreateForm() {
      this.editData = null;
      this.showForm = true;
    },

    openEditForm(item) {
      this.editData = { ...item };
      this.showForm = true;
    },

    closeForm() {
      this.showForm = false;
    },

    saveData(formData) {
      if (this.editData) {
        const index = this.data.stok.findIndex(i => i.kode === formData.kode);
        if (index !== -1) this.data.stok[index] = formData;
      } else {
        this.data.stok.push(formData);
      }
      this.showForm = false;
    },

    confirmDelete(item) {
      if (confirm(`Hapus data ${item.judul}?`)) {
        this.data.stok = this.data.stok.filter(i => i.kode !== item.kode);
      }
    }
  }
};
