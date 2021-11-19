/* eslint-disable prettier/prettier */
module.exports = {
  defaultServiceType: 1,
  defaultExtensionType: 1,
  availableTypes: () => {
    return ["GET", "POST", "PUT", "DELETE"];
  },
  availableExtensions: (option) => {
    return option && option.includes("*") ? ["js", "ts", "jsx", "tsx"] : ["js", "ts"];
  },
  helpers: (plop) => {
    plop.setHelper("switch", function (value, options) {
      this.switch_value = value;
      this.switch_break = false;
      return options.fn(this);
    });
    plop.setHelper("upperCase", function (text) {
      return text.toUpperCase();
    });
    plop.setHelper("lowerCase", function (text) {
      return text.toLowerCase();
    });
    plop.setHelper("extensionSplit", function (text) {
      return text.includes("x") ? text.split("x")[0] : text;
    });
    plop.setHelper("case", function (value, options) {
      if (value === this.switch_value) {
        this.switch_break = true;
        return options.fn(this);
      }
    });
    plop.setHelper("default", function (value, options) {
      if (this.switch_break === false) {
        return value;
      }
    });
    return;
  },
};
