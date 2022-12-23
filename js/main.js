var diccionario =
    {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat"
    };
var encrypt = document.querySelector("#encrypt");
var desencrypt = document.querySelector("#desencrypt");
var auto = document.querySelector("#auto");

function encriptar(texto) {
    var result = texto;
    for (const [key, value] of Object.entries(diccionario))
        result = result.replaceAll(key, value);
    return result;
}
function desencriptar(texto) {
    var result = texto;
    for (const [key, value] of Object.entries(diccionario))
        result = result.replaceAll(value, key);

    return result;
}

function getTexto(tipo) {
    if (tipo == 1) desencrypt.value = encriptar(encrypt.value);
    else if (tipo == 2) desencrypt.value = desencriptar(encrypt.value);
}
function getEncrypt()
{
    this.value = this.value.toLowerCase()
    if(auto.checked)
        desencrypt.value = encriptar(encrypt.value);
}
function getDesencrypt(){
    if (auto.checked)
        encrypt.value = desencriptar(desencrypt.value);
}
function copy() {
    navigator.clipboard.writeText(desencrypt.value)
}

encrypt.onkeyup = getEncrypt;
desencrypt.onkeyup = getDesencrypt;
encrypt.onchange = getEncrypt;
desencrypt.onchange = getDesencrypt;