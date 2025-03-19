import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack, Switch,
    Table, TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material"
import React, { useMemo, useState } from "react"

import { useStorage } from "@plasmohq/storage/dist/hook"

import { useCurrentUrl } from "~ui/hooks/useCurrentUrl"
import { useRules } from "~ui/hooks/useRules"

export const RulesForHostTab = () => {
  const { rules } = useRules()
  const url = useCurrentUrl()

  const ruleRows = useMemo(
    () => rules.filter(rule=>rule.host==url.host).map((rule) => <TableRow key={rule.id}>
      <TableCell>{rule.host}</TableCell>
      <TableCell>{rule.ide}</TableCell>
      <TableCell>{rule.rewrite.from}</TableCell>
      <TableCell>{rule.rewrite.to}</TableCell>
      <TableCell><Switch size="small" value={rule.enabled}/></TableCell>
    </TableRow>),
    [rules]
  )

  return (
    <Box>
      <Typography variant="h6">Rules for {url.host}</Typography>
      <Table size="small">
        <TableHead>
          <TableCell>host</TableCell>
          <TableCell>ide</TableCell>
          <TableCell>from</TableCell>
          <TableCell>to</TableCell>
          <TableCell>enabled</TableCell>
        </TableHead>
        <TableBody>
          {ruleRows.length > 0 && ruleRows}
        </TableBody>
      </Table>
      {ruleRows.length == 0 && (<Typography variant="caption" textAlign="center">No rules added yet</Typography>)}
    </Box>
  )
}
