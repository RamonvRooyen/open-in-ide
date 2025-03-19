import {
  Button,
  Container,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
  Typography
} from "@mui/material"
import React, { useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import { darkTheme } from "~theme"
import { TabPanel } from "~ui/components/TabPanel"
import { useCurrentUrl } from "~ui/hooks/useCurrentUrl"

function IndexOptions() {
  const [data, setData] = useState("")
  const [IDE, setIDE] = useStorage("IDE", "intellij")
  const [tab, setTab] = React.useState(0)
  const currentUrl = useCurrentUrl()

  const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container sx={{ minWidth: "25em" }}>
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="Add rule" />
          <Tab label="Rules for host" />
          <Tab label="All rules" />
        </Tabs>
        <TabPanel index={0} value={tab}>
          <Stack spacing={2}>
            <FormControl fullWidth>
              <InputLabel id="ide-label">IDE</InputLabel>
              <Select
                labelId="ide-label"
                label="IDE"
                value={IDE}
                onChange={(e) => setIDE(e.target.value)}>
                <MenuItem value="intellij">Intellij</MenuItem>
                <MenuItem disabled value="vscode">VScode</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="caption">Host: {currentUrl.host}</Typography>
            <TextField label="from" defaultValue={"/"} />
            <TextField label="to" defaultValue={"/src"} />
            <Button variant="contained">Add rule</Button>
          </Stack>
        </TabPanel>
      </Container>
    </ThemeProvider>
  )
}

export default IndexOptions
