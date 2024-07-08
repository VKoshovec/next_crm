import AddCompanyButton from "./componenets/add-company-button";
import MagicButton from "./componenets/magic-button";
import StatusLabel, { Status } from "./componenets/status-label";


export default function Home() {
  return (
    <main>
      <h1 className="italic font-bold">HomePage</h1>
      <StatusLabel status={Status.active}>Active</StatusLabel>
      <StatusLabel status={Status.notactive}>Not Active</StatusLabel>
      <StatusLabel status={Status.pending}>Pending</StatusLabel>
      <StatusLabel status={Status.suspended}>Suspended</StatusLabel>
      <div className="p-10">
        <AddCompanyButton/>
        <MagicButton/>
      </div>
      
    </main>
  );
}
