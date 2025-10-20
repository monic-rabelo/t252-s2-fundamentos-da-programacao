// Você possui uma lista de filmes favoritos, cada um com um título e uma nota atribuída.

type Filme = {
    titulo: string,
    nota: number
}

const filmes: Filme[] = [
  { titulo: "Interestelar", nota: 9 },
  { titulo: "Matrix", nota: 8 },
  { titulo: "A criada", nota: 9 },
  { titulo: "Auto da Compadecida", nota: 8 },
  { titulo: "Blue", nota: 6},
  { titulo: "Deus e o Diabo na Terra do Sol", nota: 10},
  { titulo: "Como treinar seu dragão", nota: 7},
  { titulo: "Blue 2", nota: 8}
];

// O campeonato será realizado em 3 fases:
// Primeira partida:
// Os filmes do início da lista competem com os filmes do final.
// Para cada confronto, o filme com a nota mais alta avança para a próxima fase.
// Em caso de empate, o vencedor será definido pela ordem alfabética do título.
function compararNota(filme1: Filme, filme2: Filme): Filme {
  if(filme1.nota > filme2.nota) {
    return filme1
  } else if(filme1.nota < filme2.nota){
    return filme2
  } else {
    return filme1.titulo.localeCompare(filme2.titulo) < 0 ? filme1: filme2
  }
}

function primeiraPartida(filmes: Filme[]): Filme[] {
  let vencedores: Filme[] = [] // lista que será atribuido os filmes vencedores da primeira partida
  for (let i = 0; i < filmes.length / 2; i++) {
    let primeiroFilme = filmes[i]
    let ultimoFilme = filmes[filmes.length - i - 1]

    let comparadorFilmes = compararNota(primeiroFilme!, ultimoFilme!)
      vencedores.push(comparadorFilmes)
  }

  return vencedores
}

function segundaPartida(filmes: Filme[]): Filme[] {
  let vencedores: Filme[] = [] // lista que será atribuido os filmes vencedores da primeira partida
  
  for (let i = 0; filmes.length / 2; i++) {
    let primeiroFilme = filmes[i]
    let ultimoFilme = filmes[filmes.length - i - 1]

    let comparadorFilmes = compararNota(primeiroFilme!, ultimoFilme!)
      vencedores.push(comparadorFilmes) 
  }

  return vencedores
}

function iniciarPartida(filmes: Filme[]): Filme [] {
  let semiFinalistas = primeiraPartida(filmes)
  let finalistas = segundaPartida(semiFinalistas)

  
  return finalistas
}

iniciarPartida(filmes)

// let letras = ['A', 'B', 'C', 'D', 'E', 'G', 'H']
//   for (let i = 0; i < letras.length / 2; i++) {
//     console.log("POSICAO DO I " + i)
//     let primeira = letras[i];
//     let ultima = letras[letras.length - i - 1]
//     console.log(ultima)
//   }
