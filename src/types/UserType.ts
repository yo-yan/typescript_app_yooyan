
//課題２
export type MondaiType = {
    id: number;
    name: string;
    url: string;
    isStart: false;
}

export interface MondaiInterface {
    id: number;
    name: string;
    url: string;
    isStart: false;
}
let mondai1: MondaiInterface = { id: 1, name: "hashimoto", url: "https://mondai.com", isStart: false }

//EXTRA課題

const str: string = "https://jsonplaceholder.typicode.com/users"

type ExtraType = {
    id: number;
    name: string;
    email: string;
    city: string;
}
//let extra: ExtraType[] = ["https://jsonplaceholder.typicode.com/users"];
