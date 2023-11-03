import Profile from "./Profile";

const Header = () => {
  return (
    <div className="flex items-center justify-between mx-auto">
      <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-md dark:text-white">
        STUDENT MANAGEMENT SYSTEM
      </h1>
      <hr className="flex-1 h-[0.05rem] mx-2 bg-gray-400 border-0 rounded dark:bg-gray-700"></hr>
      <Profile />
    </div>
  );
};

export default Header;
