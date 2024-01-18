import React from "react";
import "./style.css";
import { useMyContext } from "../../Hooks/MyContext";
import { socialMediaLinks } from "../../utils";

const Contact: React.FC = () => {
  const { contactRef } = useMyContext();
  return (
    <div id="contact_main_content" ref={contactRef}>
      <div id="contact_main">
        <span id="contact_next">What’s Next?</span>
        <h2 id="contact_intouch">Get In Touch</h2>
        <span id="contact_brief">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </span>
        <p id="contact_hello">
          <a href="mailto:hemanthraaj31@gmail.com">Say Hello</a>
        </p>

        <div id="contact_social_media_link_container">
          <div id="contact_social_media_links">
            {socialMediaLinks.map((media, index) => (
              <a
                href={media.link}
                target="_blank"
                key={index}
                rel="noopener noreferrer"
              >
                <img
                  src={media.src}
                  alt={`Social Media ${index}`}
                  className={`icons ${media.className}`}
                />
              </a>
            ))}
          </div>
        </div>
        <div id="built_by">
          <p>Built by Hemanth Raaj @ 2024 💗</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
