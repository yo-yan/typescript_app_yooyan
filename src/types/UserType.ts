
//課題２
export type MondaiType = {
    id: number;
    name: string;
    url: string;
    isStart: false;
}
let mondai: MondaiType = { id: 1, name: "hashimoto", url: "https://mondai.com", isStart: false }

export interface MondaiInterface {
    id: number;
    name: string;
    url: string;
    isStart: false;
}
let mondai1: MondaiInterface = { id: 1, name: "hashimoto", url: "https://mondai.com", isStart: false }

//EXTRA課題
type ExtraType = {
    id: number;
    name: string;
    url: string;
    email: string;
}
