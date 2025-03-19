import {Card, CardContent, CardHeader, Container, IconButton, Tab, Tabs} from "@mui/material";
import {TabPanel} from "~ui/components/TabPanel";
import {NewRuleTab} from "~ui/tabs/NewRuleTab";
import {RulesForHostTab} from "~ui/tabs/RulesForHostTab";
import React from "react";
import {useOpenInIde} from "~ui/OpenInIDEContext";
import {Icon} from "@iconify/react";

export const Main = () => {
    const {tab, setTab, currentUrl} = useOpenInIde()

    return  <Card sx={{ minWidth: "25em" }}>
        <CardHeader title="Open in IDE" subheader={`host: ${currentUrl.host}`} action={<IconButton size={"medium"} ><Icon icon="mdi:settings"/></IconButton>}/>
        <CardContent>
            <Tabs value={tab} onChange={(e, newTab)=>setTab(newTab)}>
                <Tab label="Add rule" />
                <Tab label="Rules for host" />
            </Tabs>
            <TabPanel index={0} value={tab}>
                <NewRuleTab />
            </TabPanel>
            <TabPanel index={1} value={tab}>
                <RulesForHostTab />
            </TabPanel>
        </CardContent>
    </Card>
}