import { Response, Request } from 'express'
import TemplateRespositoryImpl from './TemplateRepositoryImpl'
import TemplateController from './TemplateController';


class TemplateControllerImpl implements TemplateController {

    private repository: TemplateRespositoryImpl;

    constructor() {
        this.repository = new TemplateRespositoryImpl();
    }

    getHelp(): Promise<Response<any>> {
        throw new Error("Method not implemented.");
    }

    async getTemplates(request: Request, response: Response): Promise<Response> {
        const _word = `${request.query.contains}`
        const templateList = await this.repository.fetch(_word)

        return response.status(200).json(templateList)
    }

    async getById(request: Request, response: Response): Promise<Response> {
        const id: number = parseInt(request.params.id)
        const template = await this.repository.fetchTemplate(id)

        return response.status(200).json(template)
    }

}

export default TemplateControllerImpl