const botaoesCarrossel = document.querySelectorAll(".botao")
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")

botaoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desativarBotaoSelecionado()

    marcarBotaoSelecionado(botao)
    esconderImagemAtiva()
    mostrarImagemDeFundo(indice)
    esconderInformacoesAtivas()
    mostrarInfomacoes(indice)
  })
})

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado")
  botaoSelecionado.classList.remove("selecionado")
}

function marcarBotaoSelecionado(botao) {
  botao.classList.add("selecionado")
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa")
  imagemAtiva.classList.remove("ativa")
}

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add("ativa")
}

function esconderInformacoesAtivas() {
  const informacaoAtiva = document.querySelector(".informacoes.ativo")
  informacaoAtiva.classList.remove("ativo")
}

function mostrarInfomacoes(indice) {
  informacoes[indice].classList.add("ativo")
}
