import React from 'react'
import './pricing.css'
export default function Pricing() {
  return (
    <div><div id="pricing-table">
    <div class="plan plan1">
        <div class="header">Enterprise</div>
        <div class="price">$59</div>  
        <div class="monthly">per month</div>      
        <ul>
            <li><b>10GB</b> Disk Space</li>
            <li><b>100GB</b> Monthly Bandwidth</li>
            <li><b>20</b> Email Accounts</li>
      <li><b>Unlimited</b> subdomains</li>      
        </ul>
        <a class="signup" href="">Sign up</a>         
    </div >
    <div class="plan plan2 popular-plan">
        <div class="header">Professional</div>
        <div class="price">$29</div>
        <div class="monthly">per month</div>  
        <ul>
            <li><b>5GB</b> Disk Space</li>
            <li><b>50GB</b> Monthly Bandwidth</li>
            <li><b>10</b> Email Accounts</li>
      <li><b>Unlimited</b> subdomains</li>      
        </ul>
        <a class="signup" href="">Sign up</a>            
    </div>
    <div class="plan plan3">
        <div class="header">Standard</div>
        <div class="price">$19</div>
        <div class="monthly">per month</div>
        <ul>
            <li><b>3GB</b> Disk Space</li>
            <li><b>25GB</b> Monthly Bandwidth</li>
            <li><b>5</b> Email Accounts</li>
      <li><b>Unlimited</b> subdomains</li>      
        </ul>
        <a class="signup" href="">Sign up</a>        
    </div>
    <div class="plan plan4">
        <div class="header">Basic</div>
        <div class="price">$9</div>
        <div class="monthly">per month</div>
        <ul>
            <li><b>1GB</b> Disk Space</li>
            <li><b>10GB</b> Monthly Bandwidth</li>
            <li><b>2</b> Email Accounts</li>
      <li><b>Unlimited</b> subdomains</li>      
        </ul>
        <a class="signup" href="">Sign up</a>        
    </div>  
</div></div>
  )
}
