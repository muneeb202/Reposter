import React from 'react'
import "./sixth-section-creator-landing-design.scss";

import chatMethodImg from "@/assets/chat-method-img.jpg";

const SixthSectionCreatorLandingDesign = () => {
    return (
        <section>
            <div className="main-div-section-sixths-container">
                <div className="main-div-section-sixths-text">
                    <div>
                        <h2 className="sixth-first-side-main-heading h22">
                            Schedule your workload and track your content approval the post for rent app will always notify you what to do next.
                        </h2>
                        <h3 className="fourt-second-side-child-heading add-padding-t">Negotiate your fee</h3>
                        <p className='fourt-second-side-child-description'>Negotiate your price with push of a button and suggest a higher price by placing your bid.</p>
                    </div>
                    <hr className="hr-section-f" />
                    <div>
                        <h3 className="fourt-second-side-child-heading add-padding-t">Chat with brands directy</h3>
                        <p className='fourt-second-side-child-description'>Reach out to advertisers through our  built-in chat if you have any questions about the deliverables.</p>
                    </div>
                    <hr className="hr-section-f" />
                    <div>
                        <h3 className="fourt-second-side-child-heading add-padding-t">Easy content upload</h3>
                        <p className='fourt-second-side-child-description'>Upload all your content along with the insights, let our AI do the rest for you.</p>
                    </div>
                    <hr className="hr-section-f" />
                </div>
                <div className='multiple-img-container'>
                    <img src={chatMethodImg} alt="" className='chat-sixth-img' />
                </div>
            </div>
        </section>
    )
}

export default SixthSectionCreatorLandingDesign