class Template {
    id?: number = 0;
    name?: string = ''
    version?: String = ''
    json_schema?: Object = {}
    created_at?: Date | null = null
    updated_at?: Date | null = null

    constructor(
        id?: number,
        name?: string,
        version?: string,
        json_schema?: Object,
        created_at?: Date,
        updated_at?: Date) {
        this.id = id;
        this.name = name;
        this.version = version;
        this.json_schema = json_schema;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

}

export default Template