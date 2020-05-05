export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    id?: number;
}

export enum MyWorkerType {
    programmer,
    designer,
    copywriter,
    manager
}

export let MyWorkersDataBase: MyWorker[] = [
    { id: 1, name: 'Иван', surname: 'Иванов', type: 0 },
    { id: 2, name: 'Петр', surname: 'Петровов', type: 1 },
    { id: 3, name: 'Сидор', surname: 'Сидоров', type: 2 },
    { id: 4, name: 'Василий', surname: 'Васильев', type: 3 }
]