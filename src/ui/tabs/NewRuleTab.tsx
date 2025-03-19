import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from "@mui/material"
import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

import { useRules } from "~ui/hooks/useRules"
import {ide} from "~types/ide";
import {useOpenInIde} from "~ui/OpenInIDEContext";

export const NewRuleTab = () => {
  const { add } = useRules()
  const {currentUrl, setTab} = useOpenInIde()

  const [IDE, setIDE] = useState<ide>(ide.intellij)
  const [from, setFrom] = useState("/")
  const [to, setTo] = useState("/src")

  const handleAddRule = () => {
    add({
      enabled: true,
      host: currentUrl.host,
      id: uuidv4(),
      ide: IDE,
      rewrite: { from, to }
    }).then(()=>{
      setTab(1)
    })
  }

  return (
    <Stack spacing={2}>
      <FormControl fullWidth>
        <InputLabel id="ide-label">IDE</InputLabel>
        <Select
          labelId="ide-label"
          label="IDE"
          value={IDE}
          onChange={(e) => setIDE(e.target.value as ide)}>
          <MenuItem value={ide.intellij}>Intellij</MenuItem>
          <MenuItem disabled value={ide.vscode}>
            VScode
          </MenuItem>
        </Select>
      </FormControl>
      <TextField label="from" value={from} onChange={(e)=>setFrom(e.target.value)} />
      <TextField label="to" value={to} onChange={(e)=>setTo(e.target.value)} />
      <Button variant="contained" onClick={handleAddRule}>Add rule</Button>
    </Stack>
  )
}
