import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo_E from './assets/logo-e.svg?react';
import Logo_V from './assets/logo-v.svg?react';
import Logo_R from './assets/logo-r.svg?react';
import Logo_M from './assets/logo-m.svg?react';
import Logo_A from './assets/logo-a.svg?react';
import Logo_D from './assets/logo-d.svg?react';

const TheLogo = () => {

    // Define the logo element reference for GSAP
    const the_logo = useRef();

    // Define the interactivity state for logo
    const [ lettersInteractive, setLettersInteractive ] = useState(false)

    useGSAP(() => {

        // Get logo and each individual letter width
        const logoWidth = the_logo.current.getBoundingClientRect().width;
        const letterWidth = (logoWidth / 8) / 100;

        const logoHeight = the_logo.current.getBoundingClientRect().height;

        // Get SVG bounding client rect offset values
        const svgOffsetTop = the_logo.current.getBoundingClientRect().top;
        const svgOffsetLeft = the_logo.current.getBoundingClientRect().left;

        console.log(logoHeight)

        // Define the X axis dynamic transformation unit. Calculates the value based on the letter width + logo offset to the window side
        const alluUnitX = (value) => {

            let calculatedValue = 0;

            // Define the positive and negative values
            if (value >= 0) {
                calculatedValue = (value * letterWidth) + svgOffsetLeft;
            } else {
                calculatedValue = (value * letterWidth) - svgOffsetLeft;
            }

            return calculatedValue;
        }
        

        // Define the Y axis dynamic transformation unit. Calculates the value based on the value given multiplied with the offset to the top of the window
        const alluUnitY = (value) => {
            return (value / 100) * svgOffsetTop;
        }




        // THE MAIN TIMELINE
        const timeline = gsap.timeline({
            onComplete: () => {
                console.log("complete")
                finalJumpTimeline()
            }
        });


        // Letter number 1 - E
        const evermade01Timeline = (letter) => {
            const tl = gsap.timeline({ 
                defaults: { ease: "power4.out", transformOrigin: "50% 100%" }
            });

            tl.set(letter, { duration: 0, scaleX: 0, scaleY: 0, rotation: -30 }, "+=0.0")

            // Balloon inflation effect
            tl.to(letter, { 
                duration: 1.4, scaleX: 1, scaleY: 1, ease: "elastic.out(0.2, 0.13)"
            }, "+=5.0");
            tl.to(letter, { duration: 1.4, rotation: 20 }, "-=1.2");
            tl.to(letter, { duration: 1.6, rotation: -8 }, "-=1.0");
            tl.to(letter, { duration: 2.2, rotation: 0  }, "-=1.0");

            return tl;
        }


        // Letter number 2 - V
        const evermade02Timeline = (letter) => {

            const tl = gsap.timeline({ defaults: { transformOrigin: "50% 50%" }});

            tl.set(letter, { duration: 0, x: alluUnitX(-400), rotation: 160 }, "-=0.1")

            // Slide from side
            tl.to(letter, { duration: 1.2,  x: "13%"      }, "-=0.1");
            tl.to(letter, { duration: 0.7,  rotation: 205 }, "-=1.4");
            tl.to(letter, { duration: 0.22, rotation: 180 }, "+=0.1");
            tl.to(letter, { duration: 0.3,  x: 0          }, "-=0.2");

            // Bounce effect
            tl.to(letter, { duration: 0.4, y: alluUnitY(-25), ease: "power2.out" }, "+=1.1");
            tl.to(letter, { duration: 0.4, y: 0,              ease: "power2.in"  }, "+=0.0");
            tl.to(letter, { duration: 0.7, rotation: 0,       ease: "power2.out" }, "-=0.7");
            tl.to(letter, { duration: 0.2, scaleY: 0.9, y: 7, ease: "power1.out" }, "-=0.0");
            tl.to(letter, { duration: 0.2, scaleY: 1.0, y: 0, ease: "power1.out" }, "-=0.0");

            return tl;
        }


        // Letter number 3 - E
        const evermade03Timeline = (letter) => {
            const tl = gsap.timeline({ defaults: { ease: "elastic.out(0.2, 0.13)" }});

            tl.set(letter, { duration: 0, x: alluUnitX(-300) }, "-=0.1")

            // Slide from side
            tl.to(letter, { duration: 2.8, x: 0 });
            tl.from(letter, { duration: 2.8, rotation: "-480" } , "-=2.8");

            return tl;
        }


        // Letter number 4 - R
        const evermade04Timeline = (letter) => {
            const tl = gsap.timeline({ defaults: { ease: "elastic.out(0.2, 0.13)" }});

            tl.set(letter, { duration: 0, rotation: 450, rotationY: 180 }, "-=0.0")

            // Jump from top corner
            tl.fromTo(letter, 
                { y: alluUnitY(-80) },
                { duration: 1.0, y: 0, ease: "bounce" }
            )

            // Jump from side
            tl.fromTo(letter,
                { x: alluUnitX(550) },
                { duration: 1.6, x: "0", rotation: 0, ease: "power3" }, "-=1.0"
            )

            // Rolling effect
            tl.to(letter, { duration: 1.5, rotationY: 0 }, "+=2.4")

            return tl;
        }


        // Letter number 5 - M
        const evermade05Timeline = (letter) => {
            const tl = gsap.timeline({ 
                defaults: { ease: "power3.out", transformOrigin: "50% 100%" }
            });

            // Dropdown
            tl.fromTo(letter, { y: alluUnitY(-160) }, { duration: 1.1, y: "0", ease: "power3.in" }, "-=0.0");
            tl.to(letter, { duration: 0.6, y: alluUnitY(-35)         }, "+=0.15");
            tl.to(letter, { duration: 0.6, y: "0", ease: "power2.in" }, "-=0.15");
            tl.to(letter, { duration: 0.4, y: alluUnitY(-8)          }, "+=0.15");
            tl.to(letter, { duration: 0.4, y: "0", ease: "power2.in" }, "-=0.2");

            // Bouncy scaling effect
            tl.to(letter, { duration: 0.25, scaleX: 1.30, scaleY: 0.70 }, "1.1");
            tl.to(letter, { duration: 0.20, scaleX: 0.95, scaleY: 1.10 }, "1.25");
            tl.to(letter, { duration: 1.60, scaleX: 1.00, scaleY: 1.00 }, "1.30");
            tl.to(letter, { duration: 0.25, scaleX: 1.10, scaleY: 0.90 }, "2.30");
            tl.to(letter, { duration: 0.25, scaleX: 1.00, scaleY: 1.00 }, "2.40");
            tl.to(letter, { duration: 0.25, scaleX: 1.00, scaleY: 0.96 }, "3.05");
            tl.to(letter, { duration: 0.25, scaleX: 1.00, scaleY: 1.00 }, "3.20");

            return tl;
        }


        // Letter number 6 - A
        const evermade06Timeline = (letter) => {
            const tl = gsap.timeline({ defaults: { ease: "elastic.out(0.5, 0.5)" }});

            tl.set(letter, { duration: 0, rotation: 180 }, "-=0.0")

            // Spinning effect
            tl.from(letter, { duration: 0.2, autoAlpha: 0 } , "=0.0")
            tl.fromTo(letter, { rotationY: "0" }, {
                duration: 5.0, rotationY: "-1080"
            }, "-=0.2");
            tl.fromTo(letter, { rotation: 180 }, {
                duration: 1.0, rotation: 0, ease: "back.out(1.7)"
            } , "-=4.2")

            return tl;
        }


        // Letter number 7 - D
        const evermade07Timeline = (letter) => {
            const tl = gsap.timeline({
                defaults: { ease: "power2.out", transformOrigin: "-10% 15%" }
            });
            
            // Jumping
            tl.to(letter,{ duration: 0.3, ease: "power3.out", y: alluUnitY(-30) }, "-=0.0");
            tl.to(letter,{ duration: 0.3, ease: "power3.in",  y: 0              }, "-=0.0");
            tl.to(letter,{ duration: 0.3, ease: "power3.out", y: alluUnitY(-30) }, "+=0.1");
            tl.to(letter,{ duration: 0.3, ease: "power3.in",  y: 0              }, "-=0.0");
            tl.to(letter,{ duration: 0.3, ease: "power3.out", y: alluUnitY(-30) }, "+=0.1");
            tl.to(letter,{ duration: 0.3, ease: "power3.in",  y: 0              }, "-=0.0");
            tl.to(letter,{ duration: 0.3, ease: "power3.out", y: alluUnitY(-30) }, "+=0.1");
            tl.to(letter,{ duration: 0.3, ease: "power3.in",  y: 0              }, "-=0.0");
            
            // Move from the side
            tl.from(letter, {
                duration: 3.3, x: alluUnitX(320), ease: "power1.out"
            }, "0.0");

            // Jumping rotation effect
            tl.to(letter,{ duration: 0.20, scaleY: 1.05, rotation: "-20" }, "0.00");
            tl.to(letter,{ duration: 0.45, scaleY: 0.95, rotation: "30"  }, "0.20");
            tl.to(letter,{ duration: 0.20, scaleY: 1.05, rotation: "-20" }, "0.65");
            tl.to(letter,{ duration: 0.45, scaleY: 0.95, rotation: "30"  }, "0.85");
            tl.to(letter,{ duration: 0.20, scaleY: 1.05, rotation: "-20" }, "1.30");
            tl.to(letter,{ duration: 0.45, scaleY: 0.95, rotation: "30"  }, "1.50");
            tl.to(letter,{ duration: 0.20, scaleY: 1.05, rotation: "-20" }, "1.95");
            tl.to(letter,{ duration: 0.45, scaleY: 0.95, rotation: "30"  }, "2.15");
            tl.to(letter,{ duration: 0.50, scaleY: 1.03, rotation: "-10" }, "2.60");
            tl.to(letter,{ duration: 0.30, scaleY: 1.00, rotation: "0"   }, "3.30");

            return tl;
        }


        // Letter number 8 - E
        const evermade08Timeline = (letter) => {
            const tl = gsap.timeline({ defaults: { ease: "power2.out", transformOrigin: "60% 60%" }});

            tl.set(letter, { duration: 0, x: alluUnitX(150), rotationY: "0", scaleY: 1.0 }, "-=0.1")

            // Peak from side
            tl.to(letter, 
                { duration: 0.7, x: alluUnitX(45), rotation: "-20"
            }, "+=0.1");

            // Look left and right
            tl.to(letter, { duration: 0.4, rotationY: "-20" }, "-=0.0");
            tl.to(letter, { duration: 0.4, rotationY: "20"  }, "-=0.1");
            tl.to(letter, { duration: 0.4, rotationY: "0"   }, "-=0.0");

            // Retreat slightly back to side
            tl.to(letter, 
                { duration: 0.7, x: alluUnitX(70), rotation: "0"
            }, "-=0.4");

            // Lean slightly forward
            tl.to(letter, 
                { duration: 0.6, scaleY: 0.9, rotation: "-25", ease: "power1.out"
            }, "-=0.0");

            // Sneak wiggling effect
            tl.fromTo(letter, { rotationY: "0"  }, { duration: 0.15, rotationY: "-5" }, "-=0.5");
            tl.fromTo(letter, { rotationY: "-5" }, { duration: 0.15, rotationY: "5"  }, "-=0.1");
            tl.fromTo(letter, { rotationY: "0"  }, { duration: 0.15, rotationY: "-5" }, "-=0.0");
            tl.fromTo(letter, { rotationY: "-5" }, { duration: 0.15, rotationY: "5"  }, "-=0.1");
            tl.fromTo(letter, { rotationY: "0"  }, { duration: 0.15, rotationY: "-5" }, "-=0.0");
            tl.fromTo(letter, { rotationY: "-5" }, { duration: 0.15, rotationY: "5"  }, "-=0.1");
            tl.fromTo(letter, { rotationY: "0"  }, { duration: 0.15, rotationY: "-5" }, "-=0.0");
            tl.fromTo(letter, { rotationY: "-5" }, { duration: 0.15, rotationY: "5"  }, "-=0.1");
            tl.fromTo(letter, { rotationY: "0"  }, { duration: 0.15, rotationY: "-5" }, "-=0.0");
            tl.fromTo(letter, { rotationY: "-5" }, { duration: 0.15, rotationY: "5"  }, "-=0.1");
            tl.fromTo(letter, { rotationY: "0"  }, { duration: 0.15, rotationY: "-5" }, "-=0.0");
            tl.fromTo(letter, { rotationY: "-5" }, { duration: 0.15, rotationY: "5"  }, "-=0.1");
            tl.fromTo(letter, { rotationY: "0"  }, { duration: 0.15, rotationY: "-5" }, "-=0.0");
            tl.fromTo(letter, { rotationY: "-5" }, { duration: 0.15, rotationY: "5"  }, "-=0.1");
            tl.fromTo(letter, { rotationY: "0"  }, { duration: 0.15, rotationY: "-5" }, "-=0.0");
            tl.fromTo(letter, { rotationY: "-5" }, { duration: 0.15, rotationY: "0"  }, "-=0.1");

            // Move from the side
            tl.to(letter, 
                { duration: 2.2, x: 0, ease: "power1.inOut"
            }, "-=2.1");

            // Stand right back up
            tl.to(letter, { duration: 0.8, scaleY: 1.0, rotation: "0" }, "-=0.2");

            return tl;
        }

        // All letter animation timelines
        timeline.add(evermade03Timeline("#logo_three"), "+=1.0");
        timeline.add(evermade04Timeline("#logo_four"), "-=2.4");
        timeline.add(evermade05Timeline("#logo_five"), "-=5.3");
        timeline.add(evermade06Timeline("#logo_six"), "-=4.0");
        timeline.add(evermade02Timeline("#logo_two"), "-=4.4");
        timeline.add(evermade07Timeline("#logo_seven"), "-=6.2");
        timeline.add(evermade08Timeline("#logo_eight"), "-=5.4");
        timeline.add(evermade01Timeline("#logo_one"), "0.0");
        timeline.play(0);



        // Final jump timeline
        const finalJumpTimeline = () => {
            const theTimeline = gsap.timeline({
                defaults: { transformOrigin: "50% 100%" },
                onComplete: () => {
                    console.log("finalJumpTimeline complete")
                    setLettersInteractive(true)
                },
            });

            // Jump effect
            theTimeline.to(".logo-letter", {
                duration: 0.3, y: alluUnitY(-15), scaleY: 1.15, stagger: 0.075, ease: "power2.out"
            }, "+=0.0");
            theTimeline.to(".logo-letter", {
                duration: 0.3, y: 0, scaleY: 1.0, stagger: 0.075, ease: "power2.in"
            }, "-=0.5");

            // Landing bounce effect
            theTimeline.to(".logo-letter", {
                duration: 0.2, scaleY: 0.9, stagger: 0.075, ease: "power2.out"
            }, "-=0.55");
            theTimeline.to(".logo-letter", {
                duration: 0.2, scaleY: 1, stagger: 0.075, ease: "power2.out"
            }, "-=0.55");
        }

    }, { scope: the_logo });




    // Remove letter with animation on letter click
    const removeFromScene = (e, direction) => {

        const letter = e.target;

        if (lettersInteractive) {

            const tl = gsap.timeline({ defaults: { transformOrigin: "50% 50%" } });

            tl.set(letter, { duration: 0, x: 0, y: 0, rotation: 0 }, "-=0.0")
            
            // Jump effect
            tl.to(letter, { duration: 0.5, y: "-35vh", ease: "power2.out" }, "-=0.0")
            tl.to(letter, { duration: 0.5, y: "50vh",  ease: "power2.in" }, "-=0.05")

            // Move to side and rotate. Change direction based on "direction" parameter
            if (direction === "left") {
                tl.to(letter, { duration: 1.2, x: "-30vw", rotation: 500, ease: "power1.out" }, "-=0.95")
            } else {
                tl.to(letter, { duration: 1.2, x: "30vw", rotation: 500, ease: "power1.out" }, "-=0.95")
            }

            // Hide letter with auto alpha
            tl.to(letter, { duration: 0.25, autoAlpha: 0 }, "-=0.4")

            return tl;
        }
    }

    // Define the interactivity class
    const interactivity = lettersInteractive ? "interactive" : "";

    return (
        <div ref={the_logo} id="the-logo">
            <Logo_E className={`logo-letter ${interactivity}`} id="logo_one"   onClick={(e) => removeFromScene(e, "right")} />
            <Logo_V className={`logo-letter ${interactivity}`} id="logo_two"   onClick={(e) => removeFromScene(e, "left")}  />
            <Logo_E className={`logo-letter ${interactivity}`} id="logo_three" onClick={(e) => removeFromScene(e, "right")} />
            <Logo_R className={`logo-letter ${interactivity}`} id="logo_four"  onClick={(e) => removeFromScene(e, "left")}  />
            <Logo_M className={`logo-letter ${interactivity}`} id="logo_five"  onClick={(e) => removeFromScene(e, "right")} />
            <Logo_A className={`logo-letter ${interactivity}`} id="logo_six"   onClick={(e) => removeFromScene(e, "left")}  />
            <Logo_D className={`logo-letter ${interactivity}`} id="logo_seven" onClick={(e) => removeFromScene(e, "right")} />
            <Logo_E className={`logo-letter ${interactivity}`} id="logo_eight" onClick={(e) => removeFromScene(e, "left")}  />
        </div>
    )
}

export default TheLogo;