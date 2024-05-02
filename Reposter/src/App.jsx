import React, { useState } from 'react'
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignupDesignComponent from './shared/design/signup/signup.design';
import SigninDesignComponent from './shared/design/signin/signin.design';
import TalentHuntDesign from './shared/design/brand-section/talent-hunt/talent-hunt.design';
import JobPostingDesign from './shared/design/brand-section/job-posting/job-posting.design';
import MessagesDesign from './shared/design/brand-section/messages/messages.design';
import ReportDesign from './shared/design/brand-section/reports/report.design';
import BrandDashboardDesign from './shared/design/brand-section/brand-dashboard/brand-dashboard.design';
import ProjectsDesign from './shared/design/brand-section/projects/projects.design';
import BrandUploadDesign from './shared/design/brand-section/brand-upload/brand-upload.design';
import SettingsDesign from './shared/design/brand-section/settings/settings.design';
import ProfileDesign from './shared/design/brand-section/profile/profile.design';
import PackagesDesign from './shared/design/brand-section/packages/package.design';
import ApplicantDesign from './shared/design/brand-section/applicant/applicant.design';
import ProposalOnJobDesign from './shared/design/brand-section/prposal-on-jobs/prposal-on-job.design';
import TransactionHistoryDesign from './shared/design/brand-section/transaction-history/transaction-history.design';
import HeaderDesign from './shared/design/header/header.design';
import FooterDesign from './shared/design/footer/footer.design';
import ProjectDetailDesign from './shared/design/brand-section/project-detail/project-detail.design';
import CompletedProjectDetailDesign from './shared/design/brand-section/completed-project-detail/completed-project-detail';
import CompletedProjectDesign from './shared/design/brand-section/completed-projects/completed-projects.design';
import BrandSupportDesign from './shared/design/brand-section/brand-support/brand-support.design';
import RequestFormDesign from './shared/design/brand-section/request-form/request-form.design';
import RequestTableDesign from './shared/design/brand-section/request-table/request-table.design';
import SupportChatboxDesign from './shared/design/brand-section/support-chatbox/support-chatbox.design';
import OrderProcessingDesign from './shared/design/brand-section/order-processing/order-processing.design';
import PaymentMethodsDesign from './shared/design/brand-section/payment-methods/payment-methods.design';
import PaymentDetailDesign from './shared/design/brand-section/payment-detail/payment-detail.design';
import AdminBrandProfilePages from './modules/admin/pages/adimn-brand-profile/admin-brand-profile.pages';
import AdminOrderManagementPage from './modules/admin/pages/order-management/admin-order-management';
import AdminRequesTablePage from './modules/admin/pages/admin-request-table/admin-request-table.page';
import AdminOverallStatisticPage from './modules/admin/pages/admin-dashboard/admin-overall-statistic.pages';
import AdminCreatorReposterProfilePage from './modules/admin/pages/admin-ceator-reposter-profile/admin-creator-reposter-profile.page';
import AdminFindJobsPage from './modules/admin/pages/admin-find-job/admin-find-jobs.page';
import CreatorProfilePage from './modules/creators/pages/creator-profile/creator-profile.page';
import CreatorSettingPage from './modules/creators/pages/creator-settings/creator-setting.page';
import CreatorPackagesDesign from './shared/design/creator-section/creator-packages/creator-packages.design';
import CreatorIncomeReportPage from './modules/creators/pages/creator-income-report/creator-income-report.page';
import CreatorSchedulePostDesign from './shared/design/creator-section/creator-schedule-post/creator-schedule-post.design';
import CreatorTransactionHistoryPage from './modules/creators/pages/creator-transion-history/creator-transaction-history.page';
import CreatorProjectDetailPage from './modules/creators/pages/creator-project-detail/creator-project-detail.page';
import ReposterUmtProfilePage from './modules/reposter/reposter-umt-profile/reposter-umt-profile.page';
import ReposterIncomeReportPage from './modules/reposter/reposter-income-report/repostor-income-report.page';
import ReposterPackagesPage from './modules/reposter/reposter-packages/reposter-packages.page';
import CreatorMessagesPage from './modules/creators/pages/creator-messages/creator-messages.page';
import ReposterMessagesPage from './modules/reposter/reposter-messages/reposter-messages.page';
import CreatorPaymentDetailPage from './modules/creators/pages/creator--payment-detail/creator-payment-detail.page';
import AdminTalentHuntPage from './modules/admin/pages/admin-talent-hunt/admin-talent-hunt.page';
import AdminSupportChatboxPage from './modules/admin/pages/admin-support-chatbox/admin-support-chatbox.page';
import LandingPageDesign from './shared/design/landing-page/landing-page';
import CreatorViewScheduledMeetingDesign from './shared/design/creator-section/creator-view-scheduled-meeting/creator-view-scheduled-meeting.design';
import BrandDashboardStateDesign from './shared/design/brand-section/brand-dashboard-state/brand-dashboard-state.design';
import LandingHeaderDesign from './shared/design/landing-header/landing-header.design';
import { useLocation, useNavigate } from 'react-router-dom';
import MainBrandLandingPage from './modules/pages/landing-pages/brand/main-brand-landing-page/main-brand-landing.page';
import MainCreatorsLandingPage from './modules/pages/landing-pages/creators/main-creators-landing-page';
import ContactUs from './shared/design/website-landing-page/otherpages/ContactUs';
import PrivacyPolicy from './shared/design/website-landing-page/otherpages/PrivacyPolicy';
import Footer from './shared/design/website-landing-page/landing-footer/landing-footer.design';
import Pricing from './shared/design/website-landing-page/otherpages/Pricing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, createTheme } from '@mui/material';
// import section1 from "./shared/design/website-landing-page/brands/first-section-brand-landing-design/first-section-brand-landing.design"
// import section2 from "./shared/design/website-landing-page/brands/second-section-brand-landing-design/second-section-brand-landing.design"
// import section3 from "./shared/design/website-landing-page/brands/third-section-brand-landing-design/third-section-brand-landing.design"
// import section31 from "./shared/design/website-landing-page/brands/third-section-brand-landing-design/third-child-animated-component"

// import section4 from "./shared/design/website-landing-page/brands/fourth-section-brand-landing-design/fourth-section-brand-landing.design"
// import section5 from "./shared/design/website-landing-page/brands/first-section-brand-landing-design/first-section-brand-landing.design"
// import section6 from "./shared/design/website-landing-page/brands/first-section-brand-landing-design/first-section-brand-landing.design"
// import section7 from "./shared/design/website-landing-page/brands/first-section-brand-landing-design/first-section-brand-landing.design"

import { GoogleOAuthProvider } from '@react-oauth/google';

const theme = createTheme({
  palette: {
      mode: 'light',
      primary: {
          main: '#770cf1',
      },
      secondary: {
          main: '#8331D6',
      },
      red: { main: '#FF5733' }
  },
  typography: {
      fontFamily: 'Lato, sans-serif',
  }
});

const App = () => {
  const [currentView, setCurrentView] = useState('brand');
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const handleViewChange = (view) => {
    setIsHeaderOpen(false)
    setCurrentView(view);
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Router>
        <HeaderDesign />
        <LandingHeaderDesign onSelectView={handleViewChange} currentView={currentView}
          isHeaderOpen={isHeaderOpen} setIsHeaderOpen={setIsHeaderOpen}
        />
        {/* {currentView === 'brand' && <MainBrandLandingPage />} */}
        {currentView === 'talent' && <MainCreatorsLandingPage />}
        {currentView === 'privacy' && <PrivacyPolicy />}
        {currentView === 'contactus' && <ContactUs />}
        {currentView === 'pricing' && <Pricing />}
        <Routes>
          {/* <Route path="/" element={<LandingPageDesign />} />
          <Route path="/brand/landing/page" element={<SecondLandingPageDesign />} /> */}
          <Route path="/signup/*" element={<GoogleOAuthProvider clientId="618449538805-mdoaetdp7eg7sspadhk9n6lj6vkalhsp.apps.googleusercontent.com"><SignupDesignComponent /></GoogleOAuthProvider>} />
          <Route path="/" element={<GoogleOAuthProvider clientId="618449538805-mdoaetdp7eg7sspadhk9n6lj6vkalhsp.apps.googleusercontent.com"><SigninDesignComponent /></GoogleOAuthProvider>} />
          {/** admin section routes */}
          <Route path="/admin/brand/profile" element={<AdminBrandProfilePages />} />
          <Route path="/admin/order/management" element={<AdminOrderManagementPage />} />
          <Route path="/admin/talent/hunt" element={<AdminTalentHuntPage />} />
          <Route path="/admin/request/table" element={<AdminRequesTablePage />} />
          <Route path="/admin/dasboard" element={<AdminOverallStatisticPage />} />
          <Route path="/admin/creator/profile" element={<AdminCreatorReposterProfilePage />} />
          <Route path="/admin/find/job" element={<AdminFindJobsPage />} />
          <Route path="/admin/support" element={<AdminSupportChatboxPage />} />
          {/** end admin section routes */}

          {/* brand section routes */}
          <Route path="/brand/talent-hunt" element={<TalentHuntDesign />} />
          <Route path="/brand/job-posting" element={<JobPostingDesign />} />
          <Route path="/brand/chat" element={<MessagesDesign />} />
          <Route path="/brand/reports" element={<ReportDesign />} />
          <Route path="/brand/dashboard" element={<BrandDashboardDesign />} />
          <Route path="/brand/project" element={<ProjectsDesign />} />
          <Route path="/brand/completed-Projects" element={<CompletedProjectDesign />} />
          <Route path="/brand/assets" element={<BrandUploadDesign />} />
          <Route path="/brand/settings" element={<SettingsDesign />} />
          <Route path="/brand/profile" element={<ProfileDesign />} />
          <Route path="/brand/package" element={<PackagesDesign />} />
          <Route path="/brand/applicant" element={<ApplicantDesign />} />
          <Route path="/brand/prposal-on-job" element={<ProposalOnJobDesign />} />
          <Route path="/brand/overall-statistics" element={<TransactionHistoryDesign />} />
          <Route path="/brand/project-detail/1" element={<ProjectDetailDesign />} />
          <Route path="/brand/completed-project-detail/1" element={<CompletedProjectDesign />} />
          <Route path="/brand/support" element={<BrandSupportDesign />} />
          <Route path="/brand/request-form" element={<RequestFormDesign />} />
          <Route path="/brand/request-table" element={<RequestTableDesign />} />
          <Route path="/brand/chatbox" element={<SupportChatboxDesign />} />
          <Route path="/brand/order-processing" element={<OrderProcessingDesign />} />
          <Route path="/brand/payment-method" element={<PaymentMethodsDesign />} />
          <Route path="/brand/payment-detail" element={<PaymentDetailDesign />} />
          <Route path="/brand/dashboard/state" element={<BrandDashboardStateDesign />} />
          {/* end brand section routes */}

          {/** creator section routes */}
          <Route path="/creator/profile" element={<CreatorProfilePage />} />
          <Route path="/creator/setting" element={<CreatorSettingPage />} />
          <Route path="/creator/package" element={<CreatorPackagesDesign />} />
          <Route path="/creator/payment" element={<CreatorPaymentDetailPage />} />/
          <Route path="/creator/report" element={<CreatorIncomeReportPage />} />
          <Route path="/creator/schedule-post" element={<CreatorSchedulePostDesign />} />
          <Route path="/creator/transaction/history" element={<CreatorTransactionHistoryPage />} />
          <Route path="/creator/project/detail/1" element={<CreatorProjectDetailPage />} />
          <Route path="/creator/message" element={<CreatorMessagesPage />} />
          <Route path="/creator/view/schedule/meeting" element={<CreatorViewScheduledMeetingDesign />} />
          {/** end creator section routes */}

          {/** reposter section routes */}
          <Route path="/reposter/umt/profile" element={<ReposterUmtProfilePage />} />
          <Route path="/reposter/report" element={<ReposterIncomeReportPage />} />
          <Route path="/reposter/package" element={<ReposterPackagesPage />} />
          <Route path="/reposter/message" element={<ReposterMessagesPage />} />

          {/* <Route path="/creator/setting" element={<CreatorSettingPage />} /> */}
          {/** end reposter section routes */}

        </Routes>
        <Footer onSelectView={handleViewChange} currentView={currentView}
          isHeaderOpen={isHeaderOpen} setIsHeaderOpen={setIsHeaderOpen} />
      </Router>
    </ThemeProvider>
  )
}
export default App
