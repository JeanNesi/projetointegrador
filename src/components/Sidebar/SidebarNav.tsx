import { Stack } from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";
import { BsFillCalculatorFill } from "react-icons/bs";

import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={BsFillCalculatorFill} href="/dashboard">
          Calcular
        </NavLink>
      </NavSection>
    </Stack>
  );
}
