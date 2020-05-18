import { Router } from 'express'
import TemplateControllerImpl from './template/TemplateControllerImpl'

const router = Router()
const templateController = new TemplateControllerImpl();

router.get('/template', function (req, res) {
    templateController.getTemplates(req, res)
})

router.get('/template/:id', function(req, res) {
    templateController.getById(req, res)
})


export default router