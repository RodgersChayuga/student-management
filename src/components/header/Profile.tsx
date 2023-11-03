const Profile = () => {
  return (
    <div className="flex items-center space-x-2">
      <img
        className="w-10 h-10 rounded-full"
        src="/assets/profile-icon.jpg"
        alt=""
      />
      <div className="font-medium dark:text-white">
        <div>Rodgers Chayuga</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Joined in August 2023
        </div>
      </div>
    </div>
  );
};

export default Profile;
