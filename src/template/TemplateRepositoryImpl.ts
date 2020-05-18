import { PrismaClient } from "@prisma/client";
import TemplateRepository from "./TemplateRepository";
import Template from "./Template";

class TemplateRespositoryImpl implements TemplateRepository {
    private _prisma: PrismaClient;

    constructor() {
        this._prisma = new PrismaClient();
    }

    async fetchTemplate(id: number): Promise<Template> {
        try {
            const _template = await this._prisma.template.findOne({
                where: {
                    id: id
                }
            })
            await this._prisma.disconnect()

            return new Template(
                _template?.id,
                _template?.name,
                _template?.version,
                _template?.json_schema
            )
        } catch (error) {
            throw error
        }
    }

    async save() {
        //implements
    }

    async fetch(word: any) {
        try {
            const templateList = await this._prisma.template.findMany({
                where: {
                    name: {
                        contains: word
                    }
                }
            })
            await this._prisma.disconnect()

            return templateList
        } catch (error) {
            throw error
        }
    }

    async delete() {
        throw new Error("Method not implemented.");
    }

    async update() {
        throw new Error("Method not implemented.");
    }


}

export default TemplateRespositoryImpl