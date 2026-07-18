var x = 20;
export let y = 30;
const h = 40;

export function sum(a, b) {
  return a + b;
}

console.log(x, y, h);

function main() {
  document.body.append(
    (document.createElement("h3").innerHTML = "Run the app"),
  );
}
export default main;
