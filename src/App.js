import React, { createContext, useState } from "react";
// import DataContext from './CreateContext';
import Header from "./Header";
import Home from "./Home";
import FamilyDetails from "./FamilyDetails";
import EditProfile from "./ProfileNavbar/EditProfile";

export const Context = createContext();

function App() {
  
  const [state, setState] = useState({
    accountinfo: {
      profileFor: "", //done
      maritalStatus: "",
      kundliMatch: "",
      biodataFileName: "",
    },
    personalPage: {
      fullName: "",
      gotra: "", // done
      dob: "",
      birthPlace: "",
      birthTime: "",
    },
    personalInfo: {
      currentLocation: "",
      willingToRelocate: "", //done
      liveWithFamily: "",
    },
    careerInfo: {
      highestQualification: "", //done
      collegeName: "",
      workStatus: "",
    },
    bodyInfo: {
      height: "",
      weight: "", //done
      bodyType: "",
      complexion: "",
    },
    personalDiet: {
      diet: "",
      drink: "", //done
      smoke: "",
      hobbies: "",
      hasPet: "",
    },
    familyDetails: {
      fatherName: "",
      fatherJob: "",
      motherName: "",
      motherJob: "",      //done
      brothersCount: "",
      sistersCount: "",
      brotherName: "",
      brotherJob: "",
      marriedBrotherCount: "",
      unmarriedBrotherCount: "",
      sisterName: "",
      sisterJob: "",
      marriedSisterCount: "",
      unmarriedSisterCount: "",
    },
    socialInfo: {
      facebookLink: "",
      facebookPrivacy: "",
      instagramLink: "",
      instagramPrivacy: "", //done
      linkedinLink:"",
      linkedinPrivacy: "",
      whatsappNo: "",
      whatsappPrivacy: "",
      contactNo: "",
      contactPrivacy: "",
    },
    partnerPrefrence: {
      city: "",
      age: "",
      height: "",
      maritalStatus: "", //done
      excludedGotra: "",
      stateLivingIn: "",
      annualIncome: "",
    },
    successPage: {
      expressText: "", //done
      biodataFile: "",
      biodataFileName: "",
    },
 Setting:{
  email:"",
  password:"",
  convert:"",
 },
 searchInfo:{
  age:"",
  endAge:"",
  startHeight:"",
  endHeight:"",
  maritalStatus:"",
  childrenStatus:"",
  selectedReligion:"",
  selectedMotherTongue:"",
  selectedCommunity:"",
  selectedCountry:"",
  visibleToAll:"",
  protectedPhoto:"",
 }
  });

  return (
    <Context.Provider value={{ state, setState }}>
      {/* <Header /> */}
      <Home />
    </Context.Provider>
  );
}

export default App;

/*

*/
