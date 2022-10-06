function calcular() {
   
    var txtv = window.document.querySelector(`input#txtvel`)//pega o id txtvel do HTML
    var res = window.document.querySelector(`div#res`)//pega id res do HTML
    var vel = Number(txtv.value)//transforma em numero a string
    
    if (vel >= 60 && vel <= 100) { 
        res.innerHTML = `<p class = "resp">Dirija sempre com cinto de segurança, respeite a sinalização e boa viajem!</p>`
    }
        else if (vel < 60) {
        res.innerHTML = `<p class = "resp">Voçê está em uma via de velocidade miníma de 60 km/h! <strong>ALTO RISCO DE COLISÃO!</strong> Aumente sua velocidade!</p>`
            }
            else if (vel > 100 && vel <= 350) {
                res.innerHTML = `<p class = "resp">Voçê está acima do limíte de velocidade! <strong>MULTADO!</strong></p>`
                console.log('Dados coletados para o sistema do Detran')
                    }
                    else if (vel > 350) {
                        res.innerHTML = `<p class="resp">Digite uma velocidade menor que 350 km/h.</p>`
                    }
}





