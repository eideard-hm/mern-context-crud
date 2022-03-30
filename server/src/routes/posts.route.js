import { Router } from 'express'
import { getPostById, getAll, create, update, deletePostById } from '../controllers/post.controller.js';

const router = Router()

// HTTP METHODS

router.get('/:id', getPostById)

router.get('/', getAll)

router.post('/', create)

router.put('/', update)

router.delete('/:id', deletePostById)

export default router
