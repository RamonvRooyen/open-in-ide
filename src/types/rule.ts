import {ide} from "~types/ide";

export type Rule = {
    host: string
    id: string
    ide: ide
    rewrite:{
        from: string;
        to: string;
    }
    enabled: boolean
}