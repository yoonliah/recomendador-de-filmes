
//Karate kid,10,Ação,Drama ,Esporte,Família=
//Mulher rei,16,Aventura,Drama,História
//Descendentes,LIVRE,Ação,Aventura,Comédia=
//Viuva negra,12,Ação,Aventura,Ficção Científica,Super-herói=
//Fuja,14,Suspense,Thriller=
//E o vento levou,LIVRE,Romance,Guerra
//Divergente,14,Aventura,Ficção,Científica,Mistério=
//Golpe Duplo,14,Comédia,Drama,Policia=
//Madagascar,12, Aventura,Comédia=
let campoIdade;
let campoFantasia;
let campoAventura;
function setup() {
  createCanvas(1000, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("10");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?")
}
function draw() {
  background("#D4F1F5");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76,0,110));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height /2 );}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 16) {
      return "Mulher rei"
    } else {
      if (idade >= 14) {
        if(gostaDeAventura) {
          return "Cruela";          
        } else{
         return "madagascar";
        }
      } else {
        if (gostaDeAventura) {
          return "Viuva Negra";
        } else {
          return "Karate kid";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Divertidamente";
    } else {
      return "Descendentes";
    }
  }
}
