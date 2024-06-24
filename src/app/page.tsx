import ActiveLabe from "./componenets/active-label";
import NotActiveLabe from "./componenets/not-active-label";

export default function Home() {
  return (
    <main>
      <h1>HomePage</h1>
      <ActiveLabe>Active</ActiveLabe>
      <NotActiveLabe>NotActive</NotActiveLabe>
    </main>
  );
}
