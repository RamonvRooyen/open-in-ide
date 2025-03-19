import { rule } from "postcss"

import { useStorage } from "@plasmohq/storage/dist/hook"

import type { Rule } from "~types/rule"
import {useEffect} from "react";

export const useRules = () => {
  const [rules, setRules] = useStorage<Rule[]>("rules", (v) =>
    v === undefined ? [] : v
  )

  const add = (rule: Rule) => {
    return setRules((rules) => [...rules, rule])
  }

  const remove = (rule: Rule) => {
    return setRules((rules) => [...rules.filter(it=>it.id !== rule.id)])
  }

  const set = (rule: Rule) => {
    console.log("setting rule", rule)
    return setRules((rules) => [...rules.filter(it=>it.id !== rule.id), rule])
  }

  return {
    rules,
    add,
    remove,
    set
  }
}
