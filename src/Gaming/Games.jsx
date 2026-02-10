import React from 'react'

function Games() {
  return (
    <>
    <div className='continer'>
        <nav className='menu'>
          <img src='https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-lzuIEBk10XXfaTYgeEUGDNqgzZRPvZ.png&w=1000&q=75' alt="Gaming" width='70px' height="60px"/>
          <ul type="none">
            <li><a href="#Home" className='link'>HOME</a></li>
            <li><a href="#About" className='link'>ABOUT</a></li>
            <li><a href="#Update" className='link'>UPDATE</a></li>
            <li><a href="#Roster" className='link'>ROSTER</a></li>
            <li><a href="#Contact" className='link'>CONTACT</a></li>
          </ul>
        </nav>
    </div>

    <div className='home'>
     <div id='Home'>
      <h1>Revolutionizing <br/>the T-Gaming World</h1>
      <h3>Official Home of T-Gaming Competitive Gaming</h3>
    </div>
    </div>

    <div id='About'>
    <div className='about'>
      <div className='subabout'>
      <img src="https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg" alt='Gamers'/>
      <div className='text'>
      <h2>About Us</h2>
      <p>A Competitive Gaming Center is a modern space designed for gamers to experience high-performance play in a professional environment. Equipped with advanced gaming PCs, high-refresh monitors, fast internet, and organized team areas, it creates the perfect setting for both casual players and aspiring esports athletes. These centers host tournaments, training sessions, and community events, helping players improve their skills, build teamwork, and compete at higher levels. With a vibrant atmosphere and top-tier equipment, a Competitive Gaming Center brings together passion, technology, and competition under one roof.</p>
    </div>
      </div>

        <div id='Update'>
        <h1>Latest Updates</h1>
        </div>
        <div className='update1'>
          <div className='card1'>
        <img src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/bo7/bo7-launch-blog/BO7-LAUNCH-TOUT.jpg" alt='COD'/>
        <p>Black Ops 7 is now live! Experience the brand-new Co-Op Campaign and its replayable Endgame, deploy across 18 Multiplayer maps, and brave the Dark Aether alongside the original crew in Round-Based Zombies.</p>
        <button className='btn1'><a href="https://www.callofduty.com/blog/2025/11/call-of-duty-black-ops-7-live-worldwide-play-now" target="_blank" rel="noopener noreferrer">Update</a></button>
        </div>

        <div className='card1'>
        <img src='https://www.battlegroundsmobileindia.com/data/board/2/873/3_6_Web_banner.png' alt='BGMI'/>
        <p>The recent BGMI 4.1 update, released on November 13, 2025, adds the Frosty Funland winter theme, which includes snow-covered areas, new locations like Penguinville, and winter-themed items. Key features include new tactical gear like the Fish Rocket Launcher and Ice Gadgets, the A16 Royale Pass with winter rewards</p>
        <button className='btn1'><a href="https://www.battlegroundsmobileindia.com/" target="_blank" rel="noopener noreferrer">Update</a></button>
         </div>

         <div className='card1'>
        <img src='https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/202210/75bbce47a03c336c3f40227c0dd28b54.jpg' alt='FFM'/>
        <p>Free Fire MAX has been upgraded to Unity 5, which could mean better graphics, smoother gameplay, and more stability. Also: a mic bug was reported on some devices, like the Motorola Edge 50 Fusion — players said their mic doesn’t work properly unless they adjust volume mid-match. </p>
        <button className='btn1'><a href="https://ff.garena.com/en/" target="_blank" rel="noopener noreferrer">Update</a></button>
        </div>
        </div>
      </div>

      <div id='Roster'>
        <div className='roster1'>
          <img src="https://wallpapers.com/images/hd/4k-gaming-phone-rainbow-six-siege-44fx7gx0luh30dps.jpg" alt="Rosters"/>
        <h1>Roster</h1>
          <p> 🎮The perception of a "gamer" has shifted dramatically. It's no longer a niche hobby but a massive, <br/> global cultural and economic force.</p>
          <p>My extensive experience as a dedicated gamer is the foundation of my training expertise. Years spent mastering complex game mechanics, from high-stakes real-time strategy to coordinating large-scale raids in Massively Multiplayer Online Role-Playing Games (MMORPGs), have honed a practical understanding of critical thinking, rapid decision-making, and high-pressure team communication. This knowledge allows me to move beyond theoretical concepts and design training programs that are engaging, rewarding, and built on the core principle of 'learning by doing'—where immediate feedback, clear objectives, and progressive difficulty create a structured path to mastery. I leverage game design principles like progression systems, instant feedback loops, and meaningful challenges to ensure all training delivered is not just comprehensive, but genuinely effective and memorable.</p>
        </div>
      </div>

      <div id='Contact'>
        <div className='contact1'>
          <h1>Join Our Mailing List</h1>
          <p>Be the First to Hear All the Latest Revo News</p>
        </div>
        <div className='info'>
          <form>
            <label htmlFor="name">Name*</label> <br/>
            <input id="name" type="text" placeholder='Enter Your FullName....'/><br/>
            <label htmlFor="email">Email*</label> <br/>
            <input id="email" type="email" placeholder='Enter Your Email....'/><br/>
            <label htmlFor="number">Number*</label> <br/>
            <input id="number" type="number" placeholder='Enter Your Number....'/>
            <br/>
            <p>Yes, Subscribe me to newsletter. *</p>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <hr/>
      <div id='Copy'>
        <footer className='copy'>
            <p>&copy; 2026 T-Gaming World. All rights reserved.</p>
            <button>
            <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" rel="noopener noreferrer"><img src='https://cdn-icons-png.flaticon.com/128/1384/1384015.png' alt=''/></a>
            </button>
            <button>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><img src='https://cdn-icons-png.flaticon.com/128/739/739257.png' alt=''/></a>  
            </button>
            <button>
            <a href="https://www.google.com/?zx=1766555920036&no_sw_cr=1" target="_blank" rel="noopener noreferrer"><img src='https://cdn-icons-png.flaticon.com/128/6244/6244710.png' alt=''/> </a>
            </button>
            <button>
            <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer"><img src='https://cdn-icons-png.flaticon.com/128/2168/2168281.png' alt=''/> </a>
            </button>
          </footer>
      </div>
      </div>
    </>
  )
}

export default Games