export type Rule = {
    host: string
    rewrite:{
        from: string;
        to: string;
    }
    enabled: boolean
}