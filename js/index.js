function calcular()
{
    var primerNumero = document.getElementById("primerNumero");
    var segundoNumero = document.getElementById("segundoNumero");
    var resultado = document.getElementById("resultado");
    var resultadoNumerico = Number(primerNumero.value) +
                            Number(segundoNumero.value);

    resultado.innerHTML = "El resultado es " + resultadoNumerico;

}
