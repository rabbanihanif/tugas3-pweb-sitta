export const stockTooltip = {
  template: await (await fetch("./templates/stock-tooltip.html")).text(),

  props: ["html"]
};
