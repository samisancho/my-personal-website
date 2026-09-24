// import React from 'react'

const contactme = () => {
  return (
    < >
        <div className="contactContainer">
            <h3 id='contactme' >Let's work together <a href="#home"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={30} height={30} className="uparrow" ><path d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7C149.8 291.2 170.1 291.2 182.6 278.7L288 173.3L288 544C288 561.7 302.3 576 320 576C337.7 576 352 561.7 352 544L352 173.3L457.4 278.7C469.9 291.2 490.2 291.2 502.7 278.7C515.2 266.2 515.2 245.9 502.7 233.4L342.7 73.4z"/></svg></a></h3> 
        
        <div className='contactme'>
            <h4>Have a project, role, or idea in mind? Send a message below and I'll get back to you within a day or two.</h4>
            <div>
            
            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Enter Your Name"/>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder="Enter Your Email"/>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="Enter Your Subject"/>
                <label htmlFor="message">Messages</label>
                <textarea id="message" name="message" required placeholder="Write Your Message Here"></textarea>
                <button type="submit" className="btn btn-primary m-3 align-content-center">Send Message</button>
            </form>
            </div>
           
            <div className='contactDetails'>
                 <p>Feel free to reach out to me via email or connect with me on social media.</p>
                <a href="mailto:samueldaba@example.com" className="flex align-items-center gap-2">
                    <svg className="iconWidth" width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z"/></svg>
                    <div >Email</div>
                    <div className="sample">samueldaba@example.com</div>
                </a>
                 <a className="flex align-items-center gap-2" href="https://www.linkedin.com/in/samueldaba" target="_blank" rel="noopener noreferrer">
                    <svg className="iconWidth" width={30}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/></svg>
                    <div >Linkedin</div>
                    <div className="sample">linkedin.com/in/samueldaba</div>
                 </a>
                <a className="flex align-items-center gap-2" href="https://github.com/samueldaba" target="_blank" rel="noopener noreferrer">
                    <svg className="iconWidth" width={30}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M280.5 426.5C214.5 418.5 168 371 168 309.5C168 284.5 177 257.5 192 239.5C185.5 223 186.5 188 194 173.5C214 171 241 181.5 257 196C276 190 296 187 320.5 187C345 187 365 190 383 195.5C398.5 181.5 426 171 446 173.5C453 187 454 222 447.5 239C463.5 258 472 283.5 472 309.5C472 371 425.5 417.5 358.5 426C375.5 437 387 461 387 488.5L387 540.5C387 555.5 399.5 564 414.5 558C505 523.5 576 433 576 321C576 179.5 461 64 319.5 64C178 64 64 179.5 64 321C64 432 134.5 524 229.5 558.5C243 563.5 256 554.5 256 541L256 501C249 504 240 506 232 506C199 506 179.5 488 165.5 454.5C160 441 154 433 142.5 431.5C136.5 431 134.5 428.5 134.5 425.5C134.5 419.5 144.5 415 154.5 415C169 415 181.5 424 194.5 442.5C204.5 457 215 463.5 227.5 463.5C240 463.5 248 459 259.5 447.5C268 439 274.5 431.5 280.5 426.5z"/></svg>
                    <div>GitHub</div>
                    <div className="sample">github.com/samueldaba</div>
                </a> 
            </div>
        </div>
        </div>
    </>
  )
}

export default contactme
