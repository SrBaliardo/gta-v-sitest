const botao=document.querySelector(".plataforma");
const conteudoPlataformas=document.querySelector(".plataforma .plataformas");

botao.addEventListener("click", () => {
    conteudoPlataformas.classList.toggle("ativo");
});