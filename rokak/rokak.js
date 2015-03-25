// Globális változó a canvas context tárolásához
var k;

/** Létrehoz egy canvas-t, hozzáadja a html bodyhoz, és a globális k változót beállítja a context-re
*
* @param szelesseg - a vászon kívánt szélessége (pixelben)
* @param magassag - a vászon kívánt magasssága (pixelben)
**/
function vaszontKeszit(szelesseg, magassag) {
  var vaszon = document.createElement("canvas");
  vaszon.width = szelesseg;
  vaszon.height = magassag;
  vaszon.style.border = "1px solid black";
  document.body.appendChild(vaszon);
  k = vaszon.getContext("2d");
  console.log("Vászon beállítva.");
}

/** Egy négyzetet rajzol a vászonra
 *
 * A canvas (0, 0) koordinátája a bal felső sarok! x jobbra, y balra nő.
 *
 * @param x - a bal felső sarok x coordinátája
 * @param y - a bal felső sarok y coordinátája
 * @param meret - a négyzet mérete
 * @param szin - a négyszet színe. lehetséges értékek: http://www.w3schools.com/html/html_colornames.asp,
 *               vagy hexa RGB kód
 */
function negyzet(x, y, meret, szin) {
  // kitöltő szín
  k.fillStyle = szin;
  // a négyzet
  k.fillRect(x, y, meret, meret)
  console.log("Négyzet kirajzolva: x:", x, "y:", y, "meret:", meret, "szín:", szin);
}

// Ezek lefutnak betöltéskor:
vaszontKeszit(300, 300);
negyzet(20, 40, 10, "green");