/*Name this external file gallery.js*/

function upDate(previewPic) {
    // Verificar se o evento está sendo acionado
    console.log("Evento onmouseover acionado");

    // Verificar o alt e o src (fonte) da imagem de pré-visualização
    console.log("Alt da imagem: " + previewPic.alt);
    console.log("Fonte da imagem: " + previewPic.src);

    // Usar document.getElementById para alterar o texto da div com id "image"
    var imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt;
    console.log("Texto atualizado na div 'image': " + previewPic.alt);

    // Usar document.getElementById para alterar a imagem de fundo da div com id "image"
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    console.log("Imagem de fundo atualizada para: " + previewPic.src);
}
   
function unDo() {
    // Verificar se o evento onmouseout está sendo acionado
    console.log("Evento onmouseout acionado");

    // Restaurar o texto original da div com id "image"
    var imageDiv = document.getElementById('image');
    imageDiv.innerHTML = "Passe o mouse sobre uma imagem abaixo para exibir aqui.";
    console.log("Texto restaurado para o original.");

    // Restaurar a imagem de fundo da div com id "image"
    imageDiv.style.backgroundImage = "none";
    console.log("Imagem de fundo restaurada para o valor original.");
}