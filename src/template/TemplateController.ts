import { Response, Request } from 'express'
import Template from './Template'

interface TemplateController {
    getTemplates(request: Request, response: Response): Promise<Response>;
    getById(request: Request, response: Response): Promise<Response>;
}

export default TemplateController