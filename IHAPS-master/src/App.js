

import React from "react";
import { Route, Routes } from 'react-router-dom';
import WorkGroups from "./WorkGroups";
import Home from "./Home"
import Curriculum from "./Curriculum";
import Academiccourse from "./Academiccourse";
import Academicprograms from "./Academicprograms";
import Appliedstudentlearning from "./Appliedstudentlearning";
import Communityengagement from "./Communityengagement";
import FacultySusResearchService from "./FacultySusResearchService";
import ResearchandScholorship from "./ResearchandScholorship";
import StudentSustain from "./StudentSustain";
import ContinuingEducationCourses from "./ContinuingEducationCourses";
import StaffDevelopment from "./StaffDevelopment";
import CommunityPartnerships from "./CommunityPartnerships";
import ContinuingEduPrograms from "./ContinuingEduPrograms";
import Peertopeeroutreach from "./Peertopeeroutreach";
import FoodAndWaste from "./FoodAndWaste";
import SusFoodandBeverage from "./SusFoodandBeverage";
import AirandTransportation from "./AirAndTransportation";
import Participation from './Participation'
import Login from "./Login"
import Register from "./Register"
import "./App.css";
import Workgroupsreport from "./Workgroupsreport"


const RoutesApp = () => {
  return (
      <Routes basename='/index.html'>
        <Route path="/"  element={<Home/>}/>
        <Route path="/WorkGroups" element={<WorkGroups/>}/>
        <Route path="/Curriculum" element={<Curriculum/>}/>
        <Route path="/Academiccourse"  element={<Academiccourse/>}/>
        <Route path="/Academicprograms" element={<Academicprograms/>}/>
        <Route path="/Appliedstudentlearning" element={<Appliedstudentlearning/>}/>
        <Route path="/Communityengagement" element={<Communityengagement/>}/>
        <Route path="/Peertopeeroutreach" element={<Peertopeeroutreach/>}/>
        <Route path="/StudentSustain" element={<StudentSustain/>}/>
        <Route path="/ContinuingEducationCourses" element={<ContinuingEducationCourses/>}/>
        <Route path="/StaffDevelopment" element={<StaffDevelopment/>}/>
        <Route path="/CommunityPartnerships" element={<CommunityPartnerships/>}/>
        <Route path="/ContinuingEduPrograms" element={<ContinuingEduPrograms/>}/>
        <Route path="/FacultySusResearchService" element={<FacultySusResearchService/>}/>
        <Route path="/ResearchandScholorship" element={<ResearchandScholorship/>}/>
        <Route path="/FoodAndWaste" element={<FoodAndWaste/>}/>
        <Route path="SusFoodandBeverage" element={<SusFoodandBeverage/>}/>
        <Route path="/AirAndTransportation" element={<AirandTransportation/>}/>
        <Route path="/Participation" element={<Participation/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Workgroupsreport" element={<Workgroupsreport/>}/>

      </Routes>
  )
}
function App() {
  return (
    <>
      <RoutesApp/>
    </>

  );
}

export default App;
