const listaCandidatos = [
    { id: 1, nome: 'Ana Laura', taxa: 85.00, isento: true },
    { id: 2, nome: 'Juliana Silva', taxa: 85.00, isento: false },
    { id: 3, nome: 'Luís Souza', taxa: 85.00, isento: true },
    { id: 4, nome: 'João Lima', taxa: 85.00, isento: false },
    { id: 5, nome: 'Eduarda Oliveira', taxa: 85.00, isento: true },
];

///Filter - Candidatos "Isentos de Taxa"
const candidatosIsentos = listaCandidatos.filter(candidato =>candidato.isento);
console.log(candidatosIsentos);

//Map - Calcular custo subsidiado pela escola
const custoSubsididado = candidatosIsentos.map(candidato => {
    return {
        ...candidato,
        custoFinal: candidato.taxa
    };
});

console.log(custoSubsididado);

////Reduce - Somar total de subsídio
const totalSubsidio = custoSubsididado.reduce((total, candidato) => {
    return total + candidato.custoFinal;
}, 0);

console.log(`Total de subsídio: R$ ${totalSubsidio.toFixed(2)}`);



