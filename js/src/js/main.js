const reversa = (palabra) => palabra.length > 0 ? palabra.split('').reverse().join('') : null
const palindromo = (palabra) => palabra == reversa(palabra)

function impares(){
    let a = parseInt(document.getElementById('valora').value)
    let b = parseInt(document.getElementById('valorb').value)
    const $textarea = document.getElementById('resultado')
    let resultado = ""
    
    if(a < b) {
        for(let i = a; i < b; i++) {
            if(i % 2 != 0) {
                resultado += `${i}\r\n` //salto de linea en textarea, necesita los dos
            }
        }
    }
    else {
        resultado = 'El valor de A debe ser menor que B\r\nA: valor minimo - B: valor maximo'
    }
    $textarea.innerHTML = resultado
}

function limpiar(){
    document.getElementById('resultado').innerHTML = ''
    document.getElementById('valora').value = ''
    document.getElementById('valorb').value = ''
}

function invertirPalabra() {
    let word = document.getElementById('word').value
    const $textarea = document.getElementById('out')

    $textarea.innerHTML = reversa(word)
}

function comprobar() {
    let word = document.getElementById('word').value.toLowerCase()
    const $out = document.getElementById('out')
    if(palindromo(word)){
        $out.innerHTML = 'Es palindromo'
    }
    else {
        $out.innerHTML = 'No es palindromo'
    }
}

function fibonacci(num) {
    let fibonacciSequence = [1, 1]
    for(let i = 0; i < num - 2 ; i++) {
        fibonacciSequence.push(fibonacciSequence[i] + fibonacciSequence[i+1])
    }
    return fibonacciSequence
}

function generarFibonacci() {
    let num = parseInt(document.getElementById('num').value)
    const $textarea = document.getElementById('sucesion')
    $textarea.innerHTML = ''
    if(num > 0) {
        fibonacci(num).forEach((n) => $textarea.innerHTML += `- ${n}\n`)
    }
    else {
        $textarea.innerHTML = 'Ingresa un numero mayor que cero...'
    }
}

function knowDate() {
    const date = document.getElementById('fecha').value
    const $answer = document.getElementById('answer')

    let d = new Date(date)
    let aux = new Date(date)

    d.setDate(aux.getDate() - (aux.getDate() - 1))
    $answer.innerHTML = `<p><b>Fecha del primer dia: </b>${d.toUTCString()}</p>`
    for (let i = 31; i > 27; i--) {
        d.setDate(i)
        if (d.getMonth() > aux.getMonth()) {
            d = new Date(date);
        }
        else {
            $answer.innerHTML += `<p><b>Fecha del ultimo dia: </b>${d.toUTCString()}</p>`
            break
        }
    }
}

