function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    //Obtém os dados inseridos no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //Se o campo pesquisa for uma string vazia, não mostrar nada
    if(!campoPesquisa) {
      section.innerHTML = "<p class='item-resultado'>O campo de pesquisa está vazio. Por favor digite algo!</p>"
      return
    };

    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    let genero = "";
    let musicas = ""
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      //Deixando o campo pesquisa com letra minuscula
      titulo = dado.titulo.toLocaleLowerCase()
      descricao = dado.descricao.toLocaleLowerCase()
      tags = dado.tags.toLocaleLowerCase()
      genero = dado.genero.toLocaleLowerCase()
      musicas = dado.musicas.toLocaleLowerCase()
       
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) || genero.includes(campoPesquisa) || musicas.includes(campoPesquisa)){
        // Cria um novo elemento
        resultados += `
          <div class="item-resultado">
            <a href="#" target="_blank"><img src="${dado.imagem}" alt="Imagem"></a>
            <h2>              
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
          </div>
        `;
      }
    }
    
    //Valida uma mensagem caso deigite algo no campo que não contenha no banco de dados
    if (!resultados){
      resultados = "<p class='item-resultado'>Nenhum resultado encontrado. Digite alguma palavra que esteja ligada ao artista. <br> EX: Nome do artista, musicas, estilo musical, etc.</p>"
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }