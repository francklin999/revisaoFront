let cpfCliente = document.getElementById('pacienteCPF');

//validar
const validar = (elemento,tamanho) => {
    if (isNaN(elemento.value)) {
        elemento.value = elemento.value.substring(0,(elemento.value.length - 1))
    }
    if (elemento.value.length >= tamanho) {
        elemento.value = elemento.value.substring(0,tamanho)
    }
}

cpfCliente.addEventListener('keyup',()=>{

    validar(cpfCliente,11);
})
