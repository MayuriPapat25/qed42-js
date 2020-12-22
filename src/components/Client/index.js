import React, {useEffect, useRef}  from 'react';
import NOVARTIS from '../../images/novartis-client-logo (1).png'
import MGM from '../../images/mgm-client-logo.png'
import ACQUIA from  '../../images/acquia-client-logo.png';
import NESTLE from '../../images/nestle-client-logo.png';
import STANFORD_UNIVERSITY from '../../images/stanford-client-logo.png';
import AAMAADMI from '../../images/aamc-client-logo.png';
import ARIA from '../../images/aria-client-logo.png';
import ASHOKA from '../../images/ashoka-logo.png';
import FILA from '../../images/fila-client-logo.png';
import HP from '../../images/hp-client-logo.png';
import ILAO from '../../images/ilao-client-logo.png';
import INTEL from '../../images/intel-client-logo.png';
import NRDC from '../../images/nrdc-client-logo.png';
import NYC from '../../images/nyc-client-logo.png';
import PWC from '../../images/pwc-client-logo.png';
import SAB_MILLAR from '../../images/sabmiller-client-logo.png';
import SONY from '../../images/sony-client-logo.png';
import TISS from '../../images/tiss-client-logo.png';
import UBM from '../../images/ubm-client-logo.png';
import UNITARIAN from '../../images/unitarian-client-logo.png';
import WARNER from '../../images/warner-client-logo.png';
import IITB from '../../images/iitb-logo.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './style.css';

gsap.registerPlugin(ScrollTrigger)

export default function Client() {

  const headerRef = useRef(null);
  const imageRef = useRef([]);
  imageRef.current = []
  console.log("imageRef",imageRef);

  useEffect( () =>{
    gsap.from(headerRef.current,{
      duration: 0.7,
      autoAlpha:0,
      ease: 'none',
      delay: 1
    })


    gsap.fromTo("#one",
      {opacity: 0},
      {
      duration: 0.7,
      opacity: 1,
      yPercent: 0,
      ease: 'none',
      scrollTrigger :{
        trigger: "#one",
        scrub: true,
        start: "center bottom",
        toggleActions:'play none none reverse',
      }
    })

    gsap.fromTo("#two",
      {opacity: 0},
      {
        duration: 0.7,
        opacity: 1,
        yPercent: 0,
        ease: 'none',
        scrollTrigger :{
          trigger: "#two",
          scrub: true,
          start: "center bottom",
          toggleActions:'play none none reverse',
      }
    })

    gsap.fromTo("#three",
      {opacity: 0},
      {
      duration: 0.7,
      opacity: 1,
      yPercent: 0,
      ease: 'none',
      scrollTrigger :{
        trigger: "#three",
        scrub: true,
        start: "center bottom",
        toggleActions:'play none none reverse',
      }
    })
 
    gsap.fromTo("#four",
      {opacity: 0},
      {
      duration: 0.7,
      opacity: 1,
      yPercent: 0,
      ease: 'none',
      scrollTrigger :{
        trigger: "#four",
        scrub: true,
        start: "center bottom",
        toggleActions:'play none none reverse',
      }
    })

    gsap.fromTo("#five",
      {opacity: 0},
      {
      duration: 0.7,
      opacity: 1,
      yPercent: 0,
      ease: 'none',
      scrollTrigger :{
        trigger: "#five",
        scrub: true,
        start: "center bottom",
        toggleActions:'play none none reverse',
      }
    })

    gsap.fromTo("#six",
      {opacity: 0},
      {
      duration: 0.7,
      opacity: 1,
      yPercent: 0,
      ease: 'none',
      scrollTrigger :{
        trigger: "#six",
        scrub: true,
        start: "center bottom",
        toggleActions:'play none none reverse',
      }
    })

    gsap.fromTo("#seven",
      {opacity: 0},
      {
        duration: 0.7,
        opacity: 1,
        yPercent: 0,
        ease: 'none',
        scrollTrigger :{
          trigger: "#seven",
          scrub: true,
          start: "center bottom",
          toggleActions:'play none none reverse',
        }
    })

    gsap.fromTo("#eight",
      {opacity: 0},
      {
      duration: 0.7,
      opacity: 1,
      yPercent: 0,
      ease: 'none',
      scrollTrigger :{
        trigger: "#eight",
        scrub: true,
        start: "center bottom",
        toggleActions:'play none none reverse',
      }
  })

    gsap.fromTo("#nine",
      {opacity: 0},
      {
        duration: 0.7,
        opacity: 1,
        yPercent: 0,
        ease: 'none',
        scrollTrigger :{
          trigger: "#nine",
          scrub: true,
          start: "center bottom",
          toggleActions:'play none none reverse',
        }
    })


    gsap.fromTo("#ten",
      {opacity: 0},
      {
      duration: 0.7,
      opacity: 1,
      yPercent: 0,
      ease: 'none',
      scrollTrigger :{
        trigger: "#ten",
        scrub: true,
        start: "center bottom",
        toggleActions:'play none none reverse',
      }
    })


    gsap.fromTo("#eleven",
      {opacity: 0},
      {
      duration: 0.7,
      opacity: 1,
      yPercent: 0,
      ease: 'none',
      scrollTrigger :{
        trigger: "#eleven",
        scrub: true,
        start: "center bottom",
        toggleActions:'play none none reverse',
      }
    })


    gsap.fromTo("#twelve",
      {opacity: 0},
      {
      duration: 0.7,
      opacity: 1,
      yPercent: 0,
      ease: 'none',
      scrollTrigger :{
        trigger: "#twelve",
        scrub: true,
        start: "center bottom",
        toggleActions:'play none none reverse',
      }
    })

    gsap.fromTo("#thirteen",
      {opacity: 0},
      {
      duration: 0.7,
      opacity: 1,
      yPercent: 0,
      ease: 'none',
      scrollTrigger :{
        trigger: "#thirteen",
        scrub: true,
        start: "center bottom",
        toggleActions:'play none none reverse',
      }
    })

},[])

  return (
    <div 
      ref={headerRef}  
      className='content-wrapper'  >
      <div ref={imageRef} className='content-images' >
        <div className="content-image-wrapper" id="one" >
          <img 
            className="element"
            src={NOVARTIS}  
          />
        </div>
        <div className="content-image-wrapper" id="two" >
          <img 
            className="element"
            src={MGM}    
          />
        </div>
        <div className="content-image-wrapper" id="three" >
          <img 
            className="element"
            src={NESTLE}   
          />
        </div>
        <div className="content-image-wrapper" id="four">
          <img 
            className="element"
            src={AAMAADMI}   
          />
        </div>
      </div>
      <div className='content-images' >
        <div className="content-image-wrapper" id="five">
          <img 
            className="element" 
            src={ACQUIA}  
          />
        </div>
        <div className="content-image-wrapper" id="six">
          <img 
            className="element" 
            src={WARNER}   
          />
        </div>
        <div className="content-image-wrapper" id="seven">
          <img 
            className="element" 
            src={STANFORD_UNIVERSITY}
          />
        </div>
        <div className="content-image-wrapper" id="eight">
          <img 
            className="element" 
            src={UNITARIAN}   
          />
        </div>
      </div>
      <div className='content-images' >
        <div className='content-image-wrapper' id="nine">
          <img 
            className="element" 
            src={FILA}  
          />
        </div>
        <div className='content-image-wrapper' id="ten">
          <img 
            className="element" 
            src={INTEL} 
          />
        </div>
       {/* <div className='content-image-wrapper' id="eleven">
          <img 
            src={SAB_MILLAR} className="element"  
            // style={{ animation:'stretch 3s ease-out 220s 2 alternate'}}
          />
        </div> */}
        <div className='content-image-wrapper' id="twelve">
          <img 
            className="element" 
            src={ILAO} 
          />
        </div>
        <div className='content-image-wrapper' id="thirteen">
          <img 
            className="element" 
            src={ASHOKA} 
          />
        </div>
      </div>
    </div>
  );
}

