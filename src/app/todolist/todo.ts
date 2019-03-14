export class Todo {
    name: string;
    id: number;
    completed: boolean = false; //default
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}