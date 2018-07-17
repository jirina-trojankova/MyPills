let temp = {
  fn1: function(a) {
    return a + this.diff;
  },
  fn2: (a) => {
    return a + this.diff;
  },
  diff: 1,
};
this.diff = 2;
temp.fn2 = (a) => {
  return a + this.diff;
};
temp.fn1(2);
temp.fn2(2);
const fn1_local = temp.fn1;
fn1_local(2)