


function changeWidth(c1,c2) {
    document.getElementById("coluna1").style.width = c1+"px";
    document.getElementById("coluna2").style.width = c2+"px";
    let max = 0;
    max =(parseInt(c1)+parseInt(c2)+160);
    document.getElementById("visualizacao").style.width = max+"px";
}
var slider = document.getElementById("c1");
var output = document.getElementById("coluna1").style.width;
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
 }


    
    function CopyToClipboard(id)
	{
	var r = document.createRange();
	r.selectNode(document.getElementById(id));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(r);
	document.execCommand('copy');
    alert("Assinatura copiada para o clipboard, fazer o 'CTRL + V' no editor de assinatura do seu e-mail.\n\nObs: Caso algum texto esteja descendo de linha, deixe um espaço em branco maior entre as colunas.");
    window.getSelection().removeAllRanges();  
	}


    $("#gerar_assinatura").click(function(event){
        CopyToClipboard('visualizacao'); 
    });



    $("#sigla").on("input", (e) => {
        if (e.target.value != null && e.target.value != undefined) $("#viewSigla").prop("innerHTML", e.target.value.toUpperCase());   
    });
    $("#setor1").on("input", (e) => {
        if (e.target.value != null && e.target.value != undefined) $("#viewSetor1").prop("innerHTML", e.target.value);
    });
    $("#setor2").on("input", (e) => {
        if (e.target.value != null && e.target.value != undefined) $("#viewSetor2").prop("innerHTML", e.target.value);
    });
    $("#setor3").on("input", (e) => {
        if (e.target.value != null && e.target.value != undefined) $("#viewSetor3").prop("innerHTML", e.target.value);
    });
    
    $("#nome").on("input", (e) => {
        if (e.target.value != null && e.target.value != undefined) $("#viewNome").prop("innerHTML", e.target.value);
    });
    $("#cargo").on("input", (e) => {
        if (e.target.value != null && e.target.value != undefined) $("#viewCargo").prop("innerHTML", e.target.value);
    });
    $("#funcao").on("input", (e) => {
        if (e.target.value != null && e.target.value != undefined) $("#viewFuncao").prop("innerHTML", e.target.value);
    });
    $("#contato").on("input", (e) => {
        if (e.target.value != null && e.target.value != undefined) $("#viewContato").prop("innerHTML", e.target.value);
    });
