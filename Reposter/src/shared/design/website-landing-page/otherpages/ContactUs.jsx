import React from 'react'
import './contact.css'
export default function ContactUs() {
  return (
    <div className='mainone'>  
        <div class="centainer">
    <div class="centent">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">Surkhet, NP12</div>
          <div class="text-two">Birendranagar 06</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+0098 9893 5647</div>
          <div class="text-two">+0096 3434 5678</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">reposter@gmail.com</div>
          <div class="text-two">info.reposter@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempora quae officiis facilis magnam nostrum possimus dolore soluta? Nisi officia nesciunt inventore, esse ipsam quasi neque ea quod maxime voluptate?</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box message-box">
          <textarea  placeholder="Message"></textarea>
        </div>
        <div class="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div></div>
  )
}
