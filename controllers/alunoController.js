import * as AlunoModel from '../models/alunoModel.js';

export const listarAlunos = (req, res) => {
    const alunos = AlunoModel.listarAlunos();
    res.status(200).json(alunos);
};

export const buscarPorTurma = (req, res) => {
    const turma = req.params.turma.trim();
    const alunosTurma = AlunoModel.buscarPorTurma(turma);

    if (alunosTurma.length > 0) {
        res.status(200).json(alunosTurma);
    } else {
        res.status(404).json({
            mensagem: `Nenhum aluno encontrado na turma ${turma}`
        });
    }
};

export const calcularMedia = (req, res) => {
    const ra = parseInt(req.params.ra);
    const media = AlunoModel.calcularMedia(ra);

    if (media === null) {
        return res.status(404).json({
            mensagem: `Aluno com RA ${ra} não encontrado.`
        });
    }

    res.status(200).json({
        mensagem: `Média do aluno com RA ${ra} = ${media}`,
        ra,
        media
    });
};

export const buscarPorRA = (req, res) => {
    const ra = parseInt(req.params.ra);
    const aluno = AlunoModel.buscarPorRA(ra);

    if (aluno) {
        res.status(200).json(aluno);
    } else {
        res.status(404).json({
            mensagem: `Aluno com RA ${ra} não encontrado`
        });
    }
};

export const novoAluno = (req, res) => {
    const { aluno, ra, turma, nota1, nota2 } = req.body;

    if (!aluno || ra === undefined || !turma || nota1 === undefined || nota2 === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (aluno, ra, turma, nota1, nota2) são obrigatórios.'
        });
    }

    const alunoCriado = AlunoModel.novoAluno({ aluno, ra: Number(ra), turma, nota1, nota2 });
    res.status(201).json(alunoCriado);
};


export const atualizarAluno = (req, res) => {
    const ra = parseInt(req.params.ra);
    const { aluno, turma, nota1, nota2 } = req.body;

    if (!aluno || !turma || nota1 === undefined || nota2 === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (aluno, turma, nota1, nota2) devem ser informados.'
        });
    }

    const alunoAtualizado = AlunoModel.atualizarAluno(ra, { aluno, turma, nota1, nota2 });

    if (!alunoAtualizado) {
        return res.status(404).json({
            mensagem: `Aluno com RA ${ra} não encontrado para atualização.`
        });
    }

    res.status(200).json(alunoAtualizado);
};

export const removerAlunos = (req, res) => {
    const ra = parseInt(req.params.ra);
    const alunoRemovido = AlunoModel.removerAlunos(ra);

    if (!alunoRemovido) {
        return res.status(404).json({
            mensagem: `Aluno com RA ${ra} não encontrado para exclusão.`
        });
    }

    res.status(200).json({
        mensagem: `Aluno com RA ${ra} removido com sucesso.`,
        aluno: alunoRemovido
    });
};