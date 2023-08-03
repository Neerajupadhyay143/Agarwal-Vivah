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
      linkedinLink: "",
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
    Setting: {
      email: "",
      password: "",
      convert: "",
    },
    searchInfo: {
      age: "",
      endAge: "",
      startHeight: "",
      endHeight: "",
      maritalStatus: "",
      childrenStatus: "",
      selectedReligion: "",
      selectedMotherTongue: "",
      selectedCommunity: "",
      selectedCountry: "",
      visibleToAll: "",
      protectedPhoto: "",
    },
    partnerPref: {
      maritalStatus: "",
      diet: "",
      religion: "",
      motherTongue: "",
      ageRange: "12 to 180",
      heightRange: "",
      country: "",
      states: "",
      city: "",
      education: "",
      professionArea: "",
      profileCreatedBy: "",
      annualIncome: "",
      workingWith: "",
      workingAs: "",
    },
    aboutMyself: {

      himselfage:"",
      himselfmaritalStatus:"",
      himselfPosted:"",
      himselfreligion:"",
      himselflocation:"",
      himselfmotherTongue:"",
      selectedFile:"",
      electedFile: "",
      completedProfile: "",
      name: "",
      rofileID: "",
      age: "",
      dateOfBirth: "",
      maritalStatus: "",
      height: "",
      grewUpIn: "",
      diet: "",
      personalValues: "",
      sunSign: "",
      bloodGroup: "",
      healthInfo: '',
      disability: "",
      religion: "",
      communit: "",
      subCommunity: "",
      gothra: "",
      motherTongue: "",
      canSpeak: "",
      manglik: "",
      timeOfBirth: "",
      cityOfBirth: "",
      fatherStatus: "",
      motherStatus: "",
      familyLocation: "",
      nativePlace: "",
      numberOfBrothers: "",
      numberOfSisters: "",
      familyType: "",
      familyValues: "",
      familyAffluence: "",
      highestQualification: "",
      collegesAttended: "",
      annualIncome: "",
      workingWith: "",
      workingAs: "",
      employerName: "",
      currentResidence: "",
      stateOfResidence: "",
      residencyStatus: "",
      zipCode: "",
      mobile: "",
      contactPerson: "",
      relationship: "",
      convenientTime: "",
      displayOption: "",


    },
    partnerProfile:{
       age:"", 
       height:"", 
       maritalStatus:"", 
       excludeGotra:"", 
       stateLivingIn:"", 
       qualification:"", 
       workingWith:"", 
       profession:"",
       annualIncome:"",
       profileCreatedBy:"",
       diet:"", 
    },
    SubHomePage:{
       pendingInvitations:"",
       acceptedInvitations:"", 
       recentVisitors:"",
       contactsViewed:"", 
       newMatches:"",
       chatsInitiated:"", 
       notifications:"",
       name:"neeraj",
       age:"21",
       height:"5.3",
       language:"hindi",
       location:"jaipur",
       profession:"develpoer",

    }

  });

  return (
    <Context.Provider value={{ state, setState }}>
      <Header />
      <Home />
    </Context.Provider>
  );
}

export default App;

/*

*/
