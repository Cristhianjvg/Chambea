import React, { useEffect } from 'react';
import {BrowserRouter as 
  Router, 
  Routes, 
  Route  
} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

import ProtectedRoute from './components/ProtectedRoute';

// Import pages
import UsersTabs from './pages/community/UsersTabs';
import UsersTiles from './pages/community/UsersTiles';
import Profile from './pages/community/Profile';
import Feed from './pages/community/Feed';
import Forum from './pages/community/Forum';
import ForumPost from './pages/community/ForumPost';
import Meetups from './pages/community/Meetups';
import MeetupsPost from './pages/community/MeetupsPost';
import JobListing from './pages/job/JobListing';
import JobPost from './pages/job/JobPost';
import CompanyProfile from './pages/job/CompanyProfile';
import Messages from './pages/Messages';
import Inbox from './pages/Inbox';
import Calendar from './pages/Calendar';
import Account from './pages/settings/Account';
import Notifications from './pages/settings/Notifications';
import Apps from './pages/settings/Apps';
import Plans from './pages/settings/Plans';
import Billing from './pages/settings/Billing';
import Feedback from './pages/settings/Feedback';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Onboarding01 from './pages/Onboarding01';
import Onboarding02 from './pages/Onboarding02';
import Onboarding03 from './pages/Onboarding03';
import Onboarding04 from './pages/Onboarding04';
import PageNotFound from './pages/utility/PageNotFound';


function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route 
          path="/"
          element={
            <ProtectedRoute>
              <UsersTabs />
            </ProtectedRoute>
            }
        />
        <Route 
          path="/community/users-tabs" 
          element={
            <ProtectedRoute>
              <UsersTabs />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/community/users-tiles" 
          element={
            <ProtectedRoute>
              <UsersTiles />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/community/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/community/feed" 
          element={
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/community/forum" 
          element={
            <ProtectedRoute>
              <Forum />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/community/forum-post" 
          element={
            <ProtectedRoute>
              <ForumPost />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/community/meetups" 
          element={
            <ProtectedRoute>
              <Meetups />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/community/meetups-post" 
          element={
            <ProtectedRoute>
              <MeetupsPost />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/job/job-listing" 
          element={
            <ProtectedRoute>
              <JobListing />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/job/job-post" 
          element={
            <ProtectedRoute>
              <JobPost />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/job/company-profile" 
          element={
            <ProtectedRoute>
              <CompanyProfile />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/messages" 
          element={
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/inbox" 
          element={
            <ProtectedRoute>
              <Inbox />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/calendar" 
          element={
            <ProtectedRoute>
              <Calendar />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/settings/account" 
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/settings/notifications" 
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/settings/apps" 
          element={
            <ProtectedRoute>
              <Apps />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/settings/plans" 
          element={
            <ProtectedRoute>
              <Plans />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/settings/billing" 
          element={
            <ProtectedRoute>
              <Billing />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/settings/feedback" 
          element={
            <ProtectedRoute>
              <Feedback />
            </ProtectedRoute>
          } 
        />
        
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/onboarding-01" element={<Onboarding01 />} />
        <Route path="/onboarding-02" element={<Onboarding02 />} />
        <Route path="/onboarding-03" element={<Onboarding03 />} />
        <Route path="/onboarding-04" element={<Onboarding04 />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
