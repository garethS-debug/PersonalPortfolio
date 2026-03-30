import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const sendImgRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    botcheck: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // simple honeypot check
    if (form.botcheck) return;

    setLoading(true);

    // Web3Forms integration — uses an access key stored in Vite env: VITE_WEB3FORMS_ACCESS_KEY
    const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'your_access_key';

    try {
      const formData = new FormData();
      formData.append('access_key', ACCESS_KEY);
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('message', form.message);
      formData.append('subject', `New contact from ${form.name}`);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const json = await res.json();
      setLoading(false);

      if (json && json.success) {
        alert('Thank you. I will get back to you as soon as possible.');
        setForm({ name: '', email: '', message: '', botcheck: '' });
      } else {
        console.error('Web3Forms error', json);
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
          >
          {/* Honeypot for spam bots (hidden) */}
          <input
            type="text"
            name="botcheck"
            value={form.botcheck}
            onChange={handleChange}
            className="hidden"
            style={{ display: 'none' }}
            autoComplete="off"
          />
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              if (sendImgRef.current) sendImgRef.current.src = sendHover;
            }}
            onMouseOut={() => {
              if (sendImgRef.current) sendImgRef.current.src = send;
            }}>
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              ref={sendImgRef}
              className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
