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