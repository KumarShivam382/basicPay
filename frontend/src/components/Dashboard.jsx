import { Appbar } from "./ui/Appbar";
import { Balance } from "./ui/Balance";
import { Users } from "./ui/Users";

export default function Dashboard() {
  return (
    <div>
      <Appbar />
      <Balance />
      <Users />
    </div>
  );
}
