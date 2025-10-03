interface Estudante {
    nome: string,
    curso: string, 
    numeroMatricula: number,
    cursosMatriculados: string[],
    isActive: boolean,
    email: string,
    valorCurso: number
}

let estudantes: Estudante[] = [
    {
        nome: "Ana",
        curso: "Engenharia da Computação",
        numeroMatricula: 101,
        cursosMatriculados: ["Matemática Discreta", "Algoritmos", "Estruturas de Dados"],
        isActive: true,
        email: "ana@gmail.com",
        valorCurso: 1500
    },
    {
        nome: "Maria",
        curso: "Ciência de Dados",
        numeroMatricula: 102,
        cursosMatriculados: ["Estatística", "Machine Learning", "Banco de Dados"],
        isActive: false,
        email: "maria@gmail.com",
        valorCurso: 2000
    },
    {
        nome: "Cecília",
        curso: "Sistemas de Informação",
        numeroMatricula: 103,
        cursosMatriculados: ["Programação Web", "Redes de Computadores"],
        isActive: true,
        email: "cecilia@gmail.com",
        valorCurso: 1800
    }
];

//Filtrar estudantes que estão ativas
// for (let i = 0; i < estudantes.length; i++) { //enquanto o indice for menor que o tamanho da lista, continue percorrendo a lista (i < ...lenght)
//     if(estudantes[i]?.isActive) { // [i] pois vamos pegar os valores do indice
//         console.log(estudantes[i]?.nome)
//     }
// }

// //forEach - imprimir valores que contem na lista, sendo direto ou a partir de uma logica estipulada
// let filtrarForEachEstudantesAtivas = estudantes.forEach((estudantes, index, array) => {
//     if(estudantes.isActive) {
//         console.log(`${estudantes.nome} está na posição ${index}`)
//     }
// })

// filter - selecionar elementos que atenda a uma condição - retorna uma lista nova
let filtrarFilterEstudantesAtivas = estudantes.filter((estudantes, index, array) => estudantes.isActive == false)
console.log(filtrarFilterEstudantesAtivas)