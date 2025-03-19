import type {Rule} from "~types/rule";
import {Storage} from "@plasmohq/storage";
const storage = new Storage()

export const getRewrittenPath = async (path: string) => {
    const rules = await storage.get<Rule[]>("rules")
    const rule = rules.filter(r=>r.enabled).find(r=>doesPathMatchRule(path, r))
    if (!rule) return path

    return `${rule.rewrite.to}${path.slice(rule.rewrite.from.length)}`
}

const doesPathMatchRule = (path: string, rule: Rule) => {
    return path.startsWith(rule.rewrite.from)
}