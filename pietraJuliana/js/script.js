document.addEventListener('DOMContentLoaded', function () {
    function calcularTempoPassado(ano, mes, dia) {
        const dataInicio = new Date(ano, mes - 1, dia);
        const dataAtual = new Date();
  
        let anos = dataAtual.getFullYear() - dataInicio.getFullYear();
        let meses = dataAtual.getMonth() - dataInicio.getMonth();
        let dias = dataAtual.getDate() - dataInicio.getDate();
  
        if (meses < 0) {
            anos--;
            meses += 12;
        }
  
        if (dias < 0) {
            meses--;
            const ultimoDiaMesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
            dias += ultimoDiaMesAnterior;
        }
  
        return { anos, meses, dias };
    }
  
    const resultado = calcularTempoPassado(2015, 8, 10);
    document.getElementById('timeTogether').innerHTML = `Melhores amigas há ${resultado.anos} anos, ${resultado.meses} meses e ${resultado.dias} dias...`;
  });

  function calculateLove() {
    document.getElementById("medidor-amor").innerHTML = `
        <div>Carregando meu amor por você...</div>
        <div class="spinner-border spinner-border-sm text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    `;

    setTimeout(() => {
        document.getElementById("medidor-amor").innerHTML = `
            <div class="alert alert-info mt-2">Meu amor por você é infinito! ❤️</div>
        `;
    }, 3000);
} 