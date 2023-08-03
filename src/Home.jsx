import React, { useState } from "react";
import "./Home.css";
import AccountInformation from "./AccountInformation";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
import Footer from "./Footer";
import CopyRightPage from "./CopyRightPage";
import Header from "./Header";
import Inbox from "./Inbox Folder/Inbox";
import SubHomePage from "./Deshboard/SubHomePage";
import EditProfile from "./EditProfiles/EditProfile";
import SettingPage from "./SettingPage/SettingPage";
import Search from "./Search Folder/Search";
import PartnerProfile from "./PartnerProfile/PartnerProfile";
import LoginPage from "./Login Folder/LoginPage";


function Home({  currentPage, setCurrentPage }) {
  const [homeView, setHomeView] = useState(false);

  const viewFormate = () => {
    setHomeView(true);
  };

  return(homeView=== true?(
  <>
  {/* <LoginPage/> */}
{/* <SubHomePage/> */}
<PartnerProfile/>  
 {/* <SettingPage/> */}
{/* <EditProfile/> */}
 {/* <Inbox/> */}
{/* <Header/> */}
{/* <Search/> */}
  </>):(
        <>
          <div className="fake-header">&nbsp;</div>
          <div className="page-title">
            <h1>Create your Profile</h1>
          </div>
          <AccountInformation viewFormate={viewFormate} />

          <Footer />
          <CopyRightPage />
        </>
      )
    
  );
}

export default Home;
