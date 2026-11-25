import { Router } from 'express';
import {
    listarAlunos,
    buscarPorTurma,
    calcularMedia,
    buscarPorRA,
    novoAluno,
    atualizarAluno,
    removerAlunos
} from '../controllers/alunoController.js';

const router = Router();

router.get('/', listarAlunos);
router.get('/turma/:turma', buscarPorTurma);
router.get('/:ra/media', calcularMedia);
router.get('/:ra', buscarPorRA);
router.post('/', novoAluno);
router.put('/:ra', atualizarAluno);
router.delete('/:ra', removerAlunos);

export default router;