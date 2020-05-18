import Template from "./Template";
import BaseRepository from "../core/BaseRepository";

interface TemplateRepository extends BaseRepository {

    fetchTemplate(id: number): Promise<Template>;

}

export default TemplateRepository