$(document).ready(function(){
    $("#gerar_assinatura").click(function(event){
        event.preventDefault();
        var nome = $('#input_nome').val().toUpperCase();
        $('#nome').text(nome);

        var cargo = $('#input_cargo').val();
        $('#cargo').text(' | ' + cargo);

        if($('#input_setor').val()){
          var setor = $('#input_setor').val();
          $('#setor').text(setor);
        }else{
          var funcao = $('#input_funcao').val();
          $('#setor').text(funcao);
        }

        var ramal = $('#input_ramal').val();
        $('#ramal').text(ramal);

        var infos = $('#text_infoadicional').val().replace(/\n/g, '<br />');
        $('#infos').html(infos);

        
        //console.log($('#visualizacao').html());

        var value=$('#visualizacao').html();
        $("#copy").html(value);

    });

    $('input[type=radio][name=funcao_radio]').change(function() {
           if (this.value == 'option_sim_funcao') {
                $('#input_cargo').val('');
               $('#input_cargo').prop('disabled', true);
               $('#input_setor').val('');
               $('#input_setor').prop('disabled', true);
               $('#input_funcao').prop('disabled', false);
               $('#cargo').hide();
               $('#setor').text("Função")
           }
           else if (this.value == 'option_nao_funcao') {
             $('#input_cargo').prop('disabled', false);
             $('#input_setor').prop('disabled', false);
             $('#input_funcao').prop('disabled', true);
             $('#cargo').show();
             $('#setor').text("Setor ou Coordenadoria")
           }
       });


});


