export const doResult = {
  template: await (await fetch("./templates/do-result.html")).text(),
  props: ["kode", "data"]
};
