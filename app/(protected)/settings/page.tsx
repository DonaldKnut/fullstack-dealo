// "use client";
import ServerPage from "../server/page";

const SettingsPage = async () => {
  // const user = useCurrentUser();

  return (
    // <div className="text-white">
    //   {JSON.stringify(user)}
    //   <form
    //     action={async () => {
    //       "use server";
    //       await signOut();
    //     }}
    //   >
    //     <button type="submit">Signout</button>
    //   </form>
    // </div>
    <>
      <ServerPage />
    </>
  );
};

export default SettingsPage;
