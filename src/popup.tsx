import { Container, CssBaseline, Tab, Tabs, ThemeProvider } from "@mui/material"
import React from "react"

import { darkTheme } from "~theme"
import { TabPanel } from "~ui/components/TabPanel"
import { OpenInIdeProvider } from "~ui/OpenInIDEContext"
import { NewRuleTab } from "~ui/tabs/NewRuleTab"
import { RulesForHostTab } from "~ui/tabs/RulesForHostTab"

function IndexOptions() {
  const [tab, setTab] = React.useState(0)
  const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab)
  }

  return (
    <OpenInIdeProvider>
      <Container sx={{ minWidth: "25em" }}>
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="Add rule" />
          <Tab label="Rules for host" />
          <Tab label="All rules" />
        </Tabs>
        <TabPanel index={0} value={tab}>
          <NewRuleTab />
        </TabPanel>
        <TabPanel index={1} value={tab}>
          <RulesForHostTab />
        </TabPanel>
      </Container>
    </OpenInIdeProvider>
  )
}

export default IndexOptions
