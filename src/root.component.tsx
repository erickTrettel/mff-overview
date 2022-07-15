import { OverviewContextProvider } from "./contexts/OverviewContext";
import { Overview } from "./pages/Overview";

export default function Root() {
  return (
    <OverviewContextProvider>
      <Overview />
    </OverviewContextProvider>
  );
}
