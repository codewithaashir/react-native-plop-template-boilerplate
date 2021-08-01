module.exports = {
  defaultServiceType: 1,
  availableTypes: () => {
    return ['GET', 'POST', 'PUT', 'DELETE'];
  },
  helpers: plop => {
    plop.setHelper('switch', function (value, options) {
      this.switch_value = value;
      this.switch_break = false;
      return options.fn(this);
    });
    plop.setHelper('case', function (value, options) {
      if (value === this.switch_value) {
        this.switch_break = true;
        return options.fn(this);
      }
    });
    plop.setHelper('default', function (value, options) {
      if (this.switch_break === false) {
        return value;
      }
    });
    return;
  },
};
