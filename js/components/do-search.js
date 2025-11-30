export const doSearch = {
  template: await (await fetch("./templates/do-search.html")).text(),

  inject: ["getData"],

  data() {
    return {
      searchText: "",
      result: null,
      showForm: false,
      showProgressForm: false,
      selectedKode: null,
    };
  },

  methods: {
    performSearch() {
      const db = this.getData().tracking;

      let found = null;

      for (let item of db) {
        const kode = Object.keys(item)[0];
        const data = item[kode];

        if (
          kode.toLowerCase().includes(this.searchText.toLowerCase()) ||
          data.nim.includes(this.searchText)
        ) {
          found = { kode, data };
          break;
        }
      }

      this.result = found;
    },

    resetSearch() {
      this.searchText = "";
      this.result = null;
    },

    openAddForm() {
      this.showForm = true;
    },

    openProgressForm(kode) {
      this.selectedKode = kode;
      this.showProgressForm = true;
    },

    reloadTracking() {
      this.performSearch();
    }
  }
};
