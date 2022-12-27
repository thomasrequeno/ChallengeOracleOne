var diccionario = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};
var encrypt = document.querySelector("#encrypt");
var desencrypt = document.querySelector("#desencrypt");
var auto = document.querySelector("#auto");
var copyInfo = document.querySelector("#copy");

/*
 * Funcion encriptar
 * texto (string)
 * return @result (encript)
 */
function encriptar(texto) {
  var result = texto;
  for (const [key, value] of Object.entries(diccionario))
    result = result.replaceAll(key, value);
  return result;
}
/*
 * Funcion desencriptar
 * texto (string)
 * return @result (desencript)
 */
function desencriptar(texto) {
  var result = texto;
  for (const [key, value] of Object.entries(diccionario))
    result = result.replaceAll(value, key);

  return result;
}

/*
 * Funcion getTexto
 * tipo (integer) [Tipo de accion: 1 encriptar, 2 desencryptar]
 * return @result (desencript)
 */
function getTexto(tipo) {
  if (tipo == 1) desencrypt.value = encriptar(encrypt.value);
  else if (tipo == 2) desencrypt.value = desencriptar(encrypt.value);

  changeBackground();
}

/*
 * Funcion changeBackground
 * [Cambia el background del textarea desencryptar]
 */
function changeBackground() {
  if (desencrypt.value.length > 0)
    desencrypt.classList.replace("imagen", "blanco");
  else desencrypt.classList.replace("blanco", "imagen");
}
/*
 * Funcion getEncrypt
 * [Listener para encriptar de forma automatica]
 */
function getEncrypt() {
  this.value = this.value.toLowerCase();
  if (auto.checked) desencrypt.value = encriptar(encrypt.value);
  changeBackground();
}
/*
 * Funcion getDesencrypt
 * [Listener para desencriptar de forma automatica]
 */
function getDesencrypt() {
  if (auto.checked) encrypt.value = desencriptar(desencrypt.value);
  changeBackground();
}

/*
 * Funcion copy
 * [Copia el contenido del textarea desencriptar al clipboard]
 */
function copy() {
  if (desencrypt.value.length > 0) {
    navigator.clipboard.writeText(desencrypt.value);
    copyInfo.classList.replace("danger", "info");
    copyInfo.innerHTML = "Copy";
  } else {
    copyInfo.classList.replace("info", "danger");
    copyInfo.innerHTML = "¡Nada para copiar!";
  }

  copyInfo.style.display = "block";
  setInterval(() => {
    copyInfo.style.display = "none";
  }, 2500);
}

encrypt.onkeyup = getEncrypt;
desencrypt.onkeyup = getDesencrypt;
encrypt.onchange = getEncrypt;
desencrypt.onchange = getDesencrypt;
