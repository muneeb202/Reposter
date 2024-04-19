import React from 'react';
import "./reposter-umt-profile.scss"
import * as materialModules from "@/shared/modules/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddIcon from '@mui/icons-material/Add';
const ReposterUmtProfileDesign = () => {
    const [selectedValue, setSelectedValue] = React.useState('select-medium');
    const options = [
        { value: 'select-medium', label: 'Select Medium' },
    ];
    return (
        <div className="flex-container-creator-umt-profile">
            <div className="col-3-reposter-umt-profiles">
                <h2 className="heading">UMT Liink</h2>

            </div>
            <div className="col-6-reposter-umt-profiles">
                <div>
                    <materialModules.Label htmlFor="requirements2" className="label-class"
                    style={{ fontWeight: "bold" }}
                    >Enter Product Link</materialModules.Label>
                    <input
                        id="requirements2"
                        variant="outlined"
                        className="text-field-design-umt-profile"

                    />
                </div>
                <div style={{ marginTop: "15px" }}>
                    <materialModules.Label htmlFor="requirements2" className="label-class"
                    style={{ fontWeight: "bold" }}
                    >Select Source</materialModules.Label>
                    <div style={{ display: "flex", gap: "30px", marginTop: "15px" }}>
                        <FacebookIcon style={{ color: "#770CF1" }} />
                        <TwitterIcon style={{ color: "#770CF1" }} />
                        <PinterestIcon style={{ color: "#770CF1" }} />
                        <InstagramIcon style={{ color: "#770CF1" }} />
                    </div>
                </div>
                <div style={{ marginTop: "15px" }}>
                    <materialModules.Label htmlFor="requirements2" className="label-class"
                    style={{ fontWeight: "bold" }}
                    >Select Medium</materialModules.Label>
                    <materialModules.Select
                        id="requirements2"
                        value={selectedValue}
                        className="text-field-design-umt-profile"

                    >
                        {options.map((option) => (
                            <materialModules.MenuItem MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </materialModules.MenuItem>
                        ))}
                    </materialModules.Select>
                </div>
                <div style={{ marginTop: "15px" }}>
                    <materialModules.Label htmlFor="requirements2" className="label-class"
                    style={{ fontWeight: "bold" }}
                    >Enter Campaign Name</materialModules.Label>
                    <input
                        id="requirements2"
                        variant="outlined"
                        className="text-field-design-umt-profile"
                        placeholder='Campaign Name'
                    />
                </div>
                <div className="link-btn-div">
                    <materialModules.Button className="btn-admin-close-account">Amazon Link</materialModules.Button>

                    <materialModules.Button className="btn-admin-close-account">Shopify Link</materialModules.Button>
                </div>
            </div>
        </div>
    )
}

export default ReposterUmtProfileDesign;