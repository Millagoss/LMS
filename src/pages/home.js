import React, { useRef, useEffect } from 'react';

import {
  FaBars,
  FaAddressBook,
  FaClock,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaFacebookMessenger,
  FaAngleDown,
} from 'react-icons/fa';

import powerLogo from '../Assets/power.png';
import OzLogo from '../Assets/oz-lotto.png';

import winnerLogo from '../Assets/winner.png';

import { ReactComponent as Visa } from '../Assets/cc-visa.svg';
import { ReactComponent as Mastercard } from '../Assets/mastercard.svg';
import { ReactComponent as BitCoin } from '../Assets/bitcoin.svg';
import { ReactComponent as LiteCoin } from '../Assets/litecoin.svg';

import banner from '../Assets/ctv.png';
import locker from '../Assets/comodo.png';

import skrill from '../Assets/skrill-inverted.png';
import star from '../Assets/star.png';

import { data1 } from '../Assets/data/data1';
import Block from '../components/block.component';
import { data2 } from '../Assets/data/data2';
import SecondBlock from '../components/second-block.component';
import { data3 } from '../Assets/data/data3';
import Button from '../components/button.component';
import { useState } from 'react';

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showOffer, setShowOffer] = useState(false);
  const navLinks = useRef();

  const toggleMenu = () => {
    console.log(showMenu);
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowOffer(true);
    }, 3000);
  }, []);

  return (
    <main>
      <div className='center-main'>
        <div className='nav-links' ref={navLinks}>
          <div
            className={`${showMenu ? 'show-menu nav-center' : 'nav-center'}`}
          >
            <h3 className='logo'>LMS</h3>
            <div className='page-links'>
              <h4 className='nav-link'>HOME</h4>
              <h4 className='nav-link'>ABOUT</h4>
              <h4 className='nav-link'>NEW EVENTS</h4>
            </div>
            <h4 className='nav-link contact-btn'>CONTACT US</h4>
          </div>
          <nav>
            <FaBars onClick={toggleMenu} className='bars' />
            <FaAddressBook className='contact' />
          </nav>
        </div>
        <div className='hero-container'>
          <div className='hero'></div>
          <div className='headlines'>
            <h1>Sales Training Core LMS</h1>
            <h3>Get high standard training, and make your life easier </h3>
            <button className='calls-to-action-button'>start now</button>
          </div>
        </div>
        <section className='benefits'>
          <div className='image-container'>
            <img src='.' alt='' />
          </div>
          <div className='benefit-desc'>
            <h3>what do you get from this</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              pariatur?
            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </section>
        <div className='underline'></div>
        <div className='f-block'>
          <h2>upcoming</h2>
          <section className='first-block-contianer'>
            {data1.map((data, index) => {
              return <Block data={data} key={index} index={index} />;
            })}
          </section>
        </div>
        <section className='second-block-container'>
          <h3 className='header'>OUR PLAN</h3>
          <div className='offer-container'>
            {data2.map((item, index) => {
              const imgUrl = [OzLogo, powerLogo, powerLogo];
              return (
                <SecondBlock
                  item={item}
                  index={index}
                  key={index}
                  imgUrl={imgUrl}
                />
              );
            })}
          </div>
        </section>
        <div className='underline'></div>
        <h3 className='second-header play'>offers</h3>
        <section className='third-block-container'>
          {data3.map((item, index) => {
            return (
              <section key={index} className='third-block'>
                <img src={powerLogo} alt='' className='block-logo' />
                <div>
                  <h4>Lorem, ipsum.</h4>
                </div>
                <h3>$99</h3>
                <span>
                  <FaClock />
                  1:22:01
                </span>
                <Button />
              </section>
            );
          })}
        </section>
        <p className='second-link'>Lorem, ipsum.... </p>
        <div className='winners-section-container'>
          <section className='winners'>
            <div className='header-section'>
              <img src={star} alt='' />
              <h3>
                <span>get it now</span>
              </h3>
            </div>
            <div className='certified'></div>
            <h4 className='seven-container'>
              <span>07</span>
              <span>07</span>
              <span>07</span>
              <span>07</span>
              <span>07</span>
            </h4>
            <h3>Certificate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              magni laboriosam repellendus doloremque minus dolorum amet enim
              odit asperiores, veniam harum et ut consequuntur animi dolores
              maiores accusamus! Provident excepturi a nostrum? Iure beatae
              repudiandae commodi iste consequatur magni ipsam animi eligendi
            </p>
            <h3 className='blue-text'>Read the full story</h3>
            <Button label='get yours now' />
          </section>

          <section className='price'>
            <h3 className='second-header'>our students</h3>
            <h4>Total students</h4>
            <h3>more than 1000</h3>
            <h2>more than 500 gradutes</h2>

            <section className='fourth-section'>
              {data3.map((item, index) => {
                return (
                  <div className='fourth-sec' key={index}>
                    <img src={winnerLogo} alt='' />
                    <div>
                      <p>20.11.2022</p>
                      <p>J.J won P175</p>
                      <p>in </p>
                    </div>
                  </div>
                );
              })}
            </section>
          </section>
        </div>
        <section className='faq'>
          <h2>FREQUENTLY ASKED QUESTION(F.A.Q)</h2>
          <div className='dropdown'>
            <div>
              <p className='dropdown-p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                exercitationem?
              </p>
              <FaAngleDown />
            </div>
            <div>
              <p className='dropdown-p'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <FaAngleDown />
            </div>
            <div>
              <p className='dropdown-p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <FaAngleDown />
            </div>
          </div>
        </section>
        <section className='second-hero'>
          <div></div>
        </section>
        <div className='footer'>
          <section className='useful-links'>
            <div>
              <h3>USEFUL LINKS</h3>
              <h4>home</h4>
              <h4>Lottery resultes & winners</h4>
              <h4>lottery promotions</h4>
              <h4>about us</h4>
              <h4>contact us</h4>
            </div>
            <div>
              <h4>terms and conditions</h4>
              <h4>secutity</h4>
              <h4>privacy policy</h4>
              <h4>acceptale ue policy</h4>
              <h4>website ues policy</h4>
              <h3>affiltiate program</h3>
            </div>
          </section>

          <footer className='footer-section'>
            <h3>LOREM</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, soluta voluptatibus. Quis molestiae enim nemo eveniet
              omnis temporibus aliquid corrupti officia facilis nostrum dolorum
              modi, dicta animi nobis. Illum doloremque vero amet quod dolores.
              Voluptates consectetur sequi blanditiis soluta quo distinctio
              voluptatibus quam placeat, incidunt labore quasi, sunt commodi
              voluptatem!
            </p>
            <p>our registered business address i</p>
            <p>Unit 6158, PO Box 6945, London, W1A 6US, united kingdom.</p>
          </footer>

          <section className='payment-methods'>
            <div>
              <h3 className='payment-methods-header'>PAYMENT METHODS</h3>
              <div>
                <Visa className='payment-card' />
                <BitCoin className='payment-card' />
                <LiteCoin className='payment-card' />
                <BitCoin className='payment-card' />
                <Mastercard className='payment-card' />
                <img src={skrill} className='payment-card' alt='' />
              </div>
            </div>
            <div className='right-side'>
              <h3>SECURITY & TRUST</h3>
              <div>
                <img src={banner} alt='' />
                <img src={locker} alt='' />
              </div>
              <div className='second-social-icon-container'>
                <FaFacebook className='social-icon' />
                <FaTwitter className='social-icon' />
                <FaFacebookMessenger className='social-icon' />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={`${showOffer && 'show-offer'} web-offer`}>
        <div className='graduate'></div>
        <h2>what the business offers</h2>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
          quos?
        </h4>
        <ol>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
        </ol>
        <div className='close-btn' onClick={() => setShowOffer(false)}>
          close
        </div>
      </div>
    </main>
  );
};

export default Home;
