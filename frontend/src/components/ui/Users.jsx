import { useState } from "react";
import { Button } from "../ui/button";

export const Users = () => {
  // api call
  const [users, setUsers] = useState([
    { firstName: "Kumar", lastName: "Shivam", _id: 1 },
  ]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search Users"
          className=" flex flex-col w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div>
        {users.map((user) => (
          <User user={user} key={user._id} />
        ))}
      </div>
    </>
  );
};

const User = ({ user }) => {
  return (
    <div className="flex justify-between mx-2 my-2">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full">
        <Button className="bg-green-500 " variant="destructive">
          Send Money
        </Button>
      </div>
    </div>
  );
};
