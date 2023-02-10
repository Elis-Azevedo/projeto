function id(el) {
    return document.getElementById(el);
  }
  function mostra(element) {
    if (element) {
      id(element.value).style.display = 'block';
    }
  }
  function esconde_todos($element, tagName) {
    var $elements = $element.getElementsByTagName(tagName),
        i = $elements.length;
    while(i--) {
      $elements[i].style.display = 'none';
    }
  }
  window.addEventListener('load', function() {
    var $Masculino = id('pf'),
        $Feminino = id('pj'),
        $pessoa  = id('sel-pessoa');
  
    //mostrando no onload da página
    esconde_todos(id('tpessoa'), 'div');
    mostra(document.querySelector('input[name="rd-pessoa"]:checked'));
    
    //mostrando ao clicar no radio
    var $radios = document.querySelectorAll('input[name="rd-pessoa"]');
    $radios = [].slice.call($radios);
  
    $radios.forEach(function($each) {
      $each.addEventListener('click', function() {
        esconde_todos(id('tpessoa'), 'div');
        mostra(this);
      });
    });
  });
function mascara_cpf(){
  var cpf = document.getElementById('cpf')
  if(cpf.value.length == 3 || cpf.value.length == 7) {
    cpf.value += "."
  } else if(cpf.value.length == 11) {
    cpf.value += "-"
  }
}
function mascara_cnpj(){
  var cnpj = document.getElementById('cnpj')
  if(cnpj.value.length == 2 || cnpj.value.length == 6) {
    cnpj.value += "."
  } else if(cnpj.value.length == 10) {
    cnpj.value += "/"
  } else if(cnpj.value.length == 15) {
    cnpj.value += "-"
  }
  }
   
