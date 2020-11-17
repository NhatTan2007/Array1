let heightCaro = parseInt(prompt("Nhập vào chiều cao bàn cờ caro"));
let widthCaro = parseInt(prompt("Nhập vào chiều dài bàn cờ caro"));

caroTable = [];

//create array 2d with heightCaro input;
for (let x = 0; x < heightCaro; x++) {
      caroTable[x] = new Array();
}

//fill full elements of careTable 2d Array;
for (let x = 0; x < heightCaro; x++) {
      for (let y = 0; y < widthCaro; y++) {
            caroTable[x][y] = "O";
      }
}

//write elements to mainCaro;

for (let x = 0; x < heightCaro; x++) {
      let stringPrint = "<tr>";
      for (let y = 0; y < widthCaro; y++) {
            stringPrint += `<td id="caroTable_${x}_${y}" style="border: 1px solid black; width: 30px; height: 30px; text-align:center;">${caroTable[x][y]}</td>`;
      }
      document.getElementById("mainCaro").innerHTML += `${stringPrint}</tr>`;
}

document.getElementById("btnPlay").addEventListener("click",function addFunction() {addEvent(document.getElementById("btnPlay").innerHTML);});

function addEvent(typeMenu) {
      if (typeMenu === "Play game") {
            document.getElementById("btnPlay").innerHTML = "Reset";
            for (let x = 0; x < heightCaro; x++) {
                  for (let y = 0; y < widthCaro; y++) {
                        document.getElementById(`caroTable_${x}_${y}`).addEventListener("click", function changeOtoX() {
                              document.getElementById(`caroTable_${x}_${y}`).innerHTML = "X";
                        })
                  }
            }
      }

      if (typeMenu === "Reset") {
            document.getElementById("btnPlay").innerHTML = "Play game";
            for (let x = 0; x < heightCaro; x++) {
                  for (let y = 0; y < widthCaro; y++) {
                        // document.getElementById(`caroTable_${x}_${y}`).addEventListener("click", function changeOtoX() {});
                        document.getElementById(`caroTable_${x}_${y}`).innerHTML = "O";
                  }
            }
      }

}

