export const alunos = [
    {aluno:"vitória", ra:1123, turma:"2TDS4",nota1:0.5,nota2:5.5},
    {aluno:"galico cocô", ra:2123, turma:"2TDS4",nota1:10,nota2:10},
    {aluno:"josé gato", ra:3123, turma:"2TDS4",nota1:1,nota2:7},
    {aluno:"gabi musculos", ra:4123, turma:"2TDS4",nota1:7,nota2:6.5},
    {aluno:"lari do pipi", ra:5123, turma:"2TDS4",nota1:5.5,nota2:6.5}
]

export const listarAlunos = () => {
    return alunos
}

export const buscarPorRA = (ra) => {
    return alunos.find(a => a.ra === ra)
}

export const buscarPorTurma = (turma) => {
    return alunos.filter(a => a.turma === turma)
}

export const calcularMedia = (ra) => {
    const aluno = buscarPorRA(ra)

    if (!aluno) {
        return null
    }

    return (aluno.nota1 + aluno.nota2) / 2
}

export const novoAluno = ({ aluno, ra, turma, nota1, nota2}) => {
    const novoAluno = {
        ra,
        aluno,
        nota1: parseFloat(nota1),
        nota2: parseFloat(nota2),
        turma
    }

    alunos.push(novoAluno)
    return novoAluno
}

export const atualizarAluno = (ra,{ aluno, turma, nota1, nota2 }) => {
    const index = alunos.findIndex(a => a.ra === ra)
    if (index === -1) return null

    alunos[index] = {
        ra,
        aluno,
        nota2: parseFloat(nota2),
        nota1: parseFloat(nota1),
        turma
    }

    return alunos[index]
}

export const removerAlunos = (ra) => {
    const index = alunos.findIndex(a => a.ra === ra)
    if (index === -1) return null

    const [alunoRemovido] = alunos.splice (index, 1)
    return alunoRemovido
}


