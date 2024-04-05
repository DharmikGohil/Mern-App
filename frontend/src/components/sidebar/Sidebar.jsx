import { useAuthContext } from "../../context/AuthContext";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className="border-r border-slate-500 p-4 flex flex-col">
        <div className="text-white text-2xl font-bold text-sky-500 decoration-slate-50	">
          <p>Hello {authUser.userName}👋🏻</p>
        </div>
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
        <LogoutButton />
      </div>
    </>
  );
};
export default Sidebar;
