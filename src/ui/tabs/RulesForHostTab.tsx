import { Icon } from "@iconify/react"
import {
  Box,
  IconButton,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@mui/material"
import React, { useMemo } from "react"

import { useRules } from "~ui/hooks/useRules"
import { useOpenInIde } from "~ui/OpenInIDEContext"

export const RulesForHostTab = () => {
  const { rules, set, remove } = useRules()
  const { currentUrl } = useOpenInIde()

  const ruleRows = useMemo(
    () =>
      rules
        .filter((rule) => rule.host == currentUrl.host)
        .map((rule) => (
          <TableRow key={rule.id}>
            <TableCell>{rule.host}</TableCell>
            <TableCell>{rule.ide}</TableCell>
            <TableCell>{rule.rewrite.from}</TableCell>
            <TableCell>{rule.rewrite.to}</TableCell>
            <TableCell>
              <Switch
                size="small"
                defaultChecked={rule.enabled}
                checked={rule.enabled}
                onChange={(e, checked) => set({ ...rule, enabled: checked })}
              />
            </TableCell>
            <TableCell>
              <IconButton size="small" onClick={() => remove(rule)}>
                <Icon icon="mdi:trash" />
              </IconButton>
            </TableCell>
          </TableRow>
        )),
    [rules, currentUrl]
  )

  return (
    <Box>
      <Typography variant="h6">Rules for {currentUrl.host}</Typography>
      <Table size="small">
        <TableHead>
          <TableCell>host</TableCell>
          <TableCell>ide</TableCell>
          <TableCell>from</TableCell>
          <TableCell>to</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableHead>
        <TableBody>{ruleRows.length > 0 && ruleRows}</TableBody>
      </Table>
      {ruleRows.length == 0 && (
        <Typography variant="caption" textAlign="center">
          No rules added yet
        </Typography>
      )}
    </Box>
  )
}
