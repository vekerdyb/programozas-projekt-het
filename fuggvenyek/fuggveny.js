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
  document.body.appendChild(vaszon);
  k = vaszon.getContext("2d");
  console.log("Vászon beállítva.");
}

/** Egy pontot rajzol a vászonra
 *
 * A canvas (0, 0) koordinátája a bal felső sarok! x jobbra, y balra nő.
 *
 * @param x - a pont x coordinátája
 * @param y - a pont y coordinátája
 * @param szin - a pont színe. Opcionális. lehetséges értékek: http://www.w3schools.com/html/html_colornames.asp,
 *               vagy hexa RGB kód. Ha nem adod meg, fekete az alapértelmezett szín
 */
function pont(x, y, szin) {
  // kitöltő szín
  k.fillStyle = szin || "black";
  // a "négyzet"
  k.fillRect(x, y, 1, 1)
  console.log("Pont kirajzolva: x:", x, "y:", y, "szín:", szin);
}

/** Egy vonalat rajzol a vászonra
 *
 * A canvas (0, 0) koordinátája a bal felső sarok! x jobbra, y balra nő.
 *
 * @param x1 - a vonal kezdő x coordinátája
 * @param y1 - a vonal kezdő y coordinátája
 * @param x2 - a vonal végének x coordinátája
 * @param y2 - a vonal végének y coordinátája
 * @param szin - a vonal színe. Opcionális. lehetséges értékek: http://www.w3schools.com/html/html_colornames.asp,
 *               vagy hexa RGB kód. Ha nem adod meg, fekete az alapértelmezett szín
 */
function vonal(x1, y1, x2, y2, szin) {
  // vonal szín
  k.strokeStyle = szin || "black";
  // a vonal
  k.beginPath();
  k.moveTo(x1, y1);
  k.lineTo(x2, y2);
  k.stroke();
  console.log("Vonal kirajzolva: kezdőpont:", x1, y1, "vége:", x2, y2, "szín:", szin);
}


// Ezek lefutnak betöltéskor, törölheted őket
vaszontKeszit(300, 300);

pont(20, 40);
pont(21, 40);
pont(22, 40);

pont(25, 61, "green");
pont(25, 62, "green");
pont(25, 63, "green");
pont(25, 64, "green");
pont(25, 65, "green");

vonal(10, 10, 100, 150);
vonal(10, 100, 150, 10, "red");