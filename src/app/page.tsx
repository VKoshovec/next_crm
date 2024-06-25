import StatusLabel, { Status } from "./componenets/status-label";


export default function Home() {
  return (
    <main>
      <h1>HomePage</h1>
      <StatusLabel status={Status.active}>Active</StatusLabel>
      <StatusLabel status={Status.notactive}>Not Active</StatusLabel>
      <StatusLabel status={Status.pending}>Pending</StatusLabel>
      <StatusLabel status={Status.suspended}>Suspended</StatusLabel>
    </main>
  );
}
