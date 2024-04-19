import React from 'react'
import FirstSectionBrandLandingDesign from '@/shared/design/website-landing-page/brands/first-section-brand-landing-design/first-section-brand-landing.design'
import SecondSectionBrandLandingDesign from '@/shared/design/website-landing-page/brands/second-section-brand-landing-design/second-section-brand-landing.design'
import ThirdSectionBrandLandingDesign from '@/shared/design/website-landing-page/brands/third-section-brand-landing-design/third-section-brand-landing.design'
import Third1SectionBrandLandingDesign from '@/shared/design/website-landing-page/brands/third1-section-brand-landing-design/third1-section-brand-landing.design'
import FourthSectionBrandLandingDesign from '@/shared/design/website-landing-page/brands/fourth-section-brand-landing-design/fourth-section-brand-landing.design'
import FifthSectionBrandLandingDesign from '@/shared/design/website-landing-page/brands/fifth-section-brand-landing-design/fifth-section-brand-landing.design'
import SixthSectionBrandLandingDesign from '@/shared/design/website-landing-page/brands/sixth-setion-brand-landing-design/sixth-section-brand-landing.design'
import SevenSectionBrandLandingDesign from '@/shared/design/website-landing-page/brands/seven-section-brand-landing-design/seven-section-brand-landing.design'
import EightSectionBrandLandingDesign from '@/shared/design/website-landing-page/brands/eight-section-brand-landing-design/eight-section-brand-landing.design'
import LandingFooterDesign from '@/shared/design/website-landing-page/landing-footer/landing-footer.design'
import Features from  "@/shared/design/website-landing-page/brands/featuresection/Features"
import Flow from  "@/shared/design/website-landing-page/brands/featuresection/Flow"
import FAQ from  "@/shared/design/website-landing-page/brands/featuresection/FAQ"
import Test from  "@/shared/design/website-landing-page/brands/featuresection/Testimonials"
import Integration from '@/shared/design/website-landing-page/brands/featuresection/Integration'

const MainBrandLandingPage = () => {
    return (
        <div>
            <FirstSectionBrandLandingDesign />
            <Features/>
            <SecondSectionBrandLandingDesign />
            <SevenSectionBrandLandingDesign></SevenSectionBrandLandingDesign>
            <ThirdSectionBrandLandingDesign />
            <Flow></Flow>
            <FAQ></FAQ>
            <Test></Test>
            {/* <FifthSectionBrandLandingDesign />
            <SixthSectionBrandLandingDesign />
            <SevenSectionBrandLandingDesign />
    <EightSectionBrandLandingDesign />*/}
            {/* <LandingFooterDesign />  */}
        </div>
    )
}

export default MainBrandLandingPage