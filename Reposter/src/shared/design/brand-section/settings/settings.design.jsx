import React from 'react';
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';
import * as materialModules from "@/shared/modules/material";
import "./settings.scss";

const SettingsDesign = () => {
    return (
        <>
            <div className="flex-container-admin">
                <div className="col-6-settings">
                    <DashboardDesign />
                </div>
                <div className="col-8-settings">
                    <h2 className="heading setting-heading">Settings</h2>
                    <div className="settings-form-data">
                        <div className="settings-forms-input">
                            <label htmlFor="name" className="label-class-settings">Name</label>
                            <div className="settings-forms-input">
                                <input
                                    id="name"
                                    type="text"
                                    variant="outlined"
                                    className="text-field-design-settings"
                                    style={{ borderRadius: '0 !important' }}
                                />
                                <p style={{ display: "none" }}>Change Name</p>
                            </div>
                        </div>
                    </div>

                    <div className="settings-form-data">
                        <div className="settings-forms-input">
                            <label htmlFor="email" className="label-class-settings">Email</label>
                            <div className="settings-forms-input">
                                <input
                                    id="email"
                                    type="email"
                                    variant="outlined"
                                    className="text-field-design-settings"
                                    style={{ borderRadius: '0 !important' }}
                                />
                                <p className="change-input-setting">change Email</p>
                            </div>
                        </div>
                    </div>

                    <div className="settings-form-data">
                        <div className="settings-forms-input">
                            <label htmlFor="password" className="label-class-settings">Password</label>
                            <div className="settings-forms-input">
                                <input
                                    id="password"
                                    type="password"
                                    variant="outlined"
                                    className="text-field-design-settings"
                                    style={{ borderRadius: '0 !important' }}
                                />
                                <p className="change-input-setting">change Password</p>
                            </div>
                        </div>
                    </div>

                    <div className="settings-form-data">
                        <div className="settings-forms-input">
                            <label htmlFor="unsubscribe" className="label-class-settings">Unsubscribe</label>
                            <div className="settings-forms-input">
                                <input
                                    id="unsubscribe"
                                    type="email"
                                    variant="outlined"
                                    className="text-field-design-settings"
                                    style={{ borderRadius: '0 !important' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="settings-form-data">
                        <div className="settings-forms-input">
                            <label htmlFor="verification" className="label-class-settings">Verification</label>
                            <div className="settings-forms-input">
                                <input
                                    id="verification"
                                    type="email"
                                    variant="outlined"
                                    className="text-field-design-settings"
                                    style={{ borderRadius: '0 !important' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="settings-form-data-btn">
                        <materialModules.Label className="label-class-settings-btn">Create new account</materialModules.Label>
                        <div className='btn-of-settings'>
                            <materialModules.Button className='heading-of-sample'>
                                <p className="btn-p-settings">Reposter</p>
                            </materialModules.Button>
                        </div>
                        <div className='btn-of-settings'>
                            <materialModules.Button className='heading-of-sample'>
                                <p className="btn-p-settings">Creator</p>
                            </materialModules.Button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SettingsDesign;
