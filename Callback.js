setTimeout(function () {
  console.log(`This is a Callback Function with 5 Second Delay `);
}, 3000);

function x(y) {
  console.log(`x time without Delay`);
   y()
}
x(function y() {
  console.log(`Without Delay..... `);
});
