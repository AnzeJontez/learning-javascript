
const ekipe = {
    ena: "maribor",
    dve: " Olimpija"

}
const sadje = ["Banana", "Jabolko", "Mango"];
let ekipa;

console.log(sadje[2]);

for (let i = 1; i < 11; i++) {
    if(i === 7) {
        ekipa = ekipe.ena;
     } else {
        ekipa= ekipe.dve;
     }
    console.log(ekipa + " sampijon");
  }
