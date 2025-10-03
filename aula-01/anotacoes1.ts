//CASE TECNICO

// interface RespostaPesquisa {
//     id: number,
//     usuario: string,
//     notaSatisfacao: number,
//     duplicado: boolean,
//     comentario: string
// }

// const respostas: RespostaPesquisa[] = [
//   { id: 1, usuario: "Thais",    notaSatisfacao: 5, duplicado: false, comentario: "Amei o app!" },
//   { id: 2, usuario: "Jessica",  notaSatisfacao: 2, duplicado: false, comentario: "Poderia ser mais rápido." },
//   { id: 3, usuario: "Thais", notaSatisfacao: 5, duplicado: true,  comentario: "Registro duplicado." },
//   { id: 4, usuario: "Ana bia", notaSatisfacao: 4, duplicado: false, comentario: "Curti a navegação." },
//   { id: 5, usuario: "Carol", notaSatisfacao: 1, duplicado: false, comentario: "Muitos bugs." },
// ];

// function buscarUsuario (respostas: RespostaPesquisa[], nomeBuscado: string): string {
//     for (let resposta of respostas) {
//         if (resposta.usuario === nomeBuscado){
//             return `nota ${resposta.notaSatisfacao}, comentário ${resposta.comentario}`
//         }
//     }
//     return "Usuário não encontrado"
// }

// console.log(buscarUsuario(respostas, "Ana Bia"))


// type ItemEstoque = {
//     produto: string;
//     quantidade: number;
//     minimo: number;
// };

// let estoque: ItemEstoque[] = [
//     { produto: "Arroz", quantidade: 50, minimo: 20 },
//     { produto: "Feijão", quantidade: 15, minimo: 20 },
//     { produto: "Macarrão", quantidade: 5, minimo: 10 },
//     { produto: "Açúcar", quantidade: 30, minimo: 15 }
// ];

// let quantidadeMaiorQue20: ItemEstoque [] = []

// for (let i = 0; i < estoque.length; i++) { // para ler os produtos a partir do primero indice -  se i é 0 e o lenght é 3 i++ para percorrer o indice
//     console.log(estoque[i]?.produto) //puxando estoque e percorrendo os indices do array (os objetos)
//     let itens = estoque[i]
//     if(itens!.quantidade > 20) {
//         quantidadeMaiorQue20.push(itens!)
//     } //? = encadeador de cancelamento opcional (retorna undefiend se a expressao da esquerda for null, evita erro na execuçao)
// } 

// console.log(quantidadeMaiorQue20);