const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

produtosJson.map(function (item, index) {
    let produtos = c('.produto .produto-item').cloneNode(true);
    produtos.setAttribute('data-key', index);
    produtos.querySelector('.produto-item--img img').src = item.img;
    produtos.querySelector('.produto-item--name').innerHTML = item.name;
    produtos.querySelector('.produto-item--price').innerHTML = `R$ ${item.price.fixed(2)}`;
    
    produtos.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        c( '')
    })

    c('.Produto-see').append(produtos);
  });

  function executar(){
      let texto= document.getElementById('search-txt').value;
      let historico= document.getElementById('historico');
      let adicionar= true;

      var opt = document.createElement('option');
    
      for(i=0; i<historico.options.lenght;i++){
        if(texto==historico.options[i].value){
            adicionar=false;
        }
      }
        if(adicionar==true){
            opt.value=texto;
            historico.appendChild(opt);
        }
  }

