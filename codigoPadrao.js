const botaoesCarrossel = document.querySelectorAll(".botao")
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")

botaoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    const botaoSelecionado = document.querySelector(".selecionado")
    botaoSelecionado.classList.remove("selecionado")
    botao.classList.add("selecionado")

    const imagemAtiva = document.querySelector(".ativa")
    imagemAtiva.classList.remove("ativa")

    imagens[indice].classList.add("ativa")

    const informacaoAtiva = document.querySelector(".informacoes.ativo")
    informacaoAtiva.classList.remove("ativo")

    informacoes[indice].classList.add("ativo")
  })
})
