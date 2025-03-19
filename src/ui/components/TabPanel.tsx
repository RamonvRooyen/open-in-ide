import { Box } from "@mui/material"
import React from "react"

type TabPanelProps = {
  children?: React.ReactNode
  index: number
  value: number
}

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    {...other}>
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
)
