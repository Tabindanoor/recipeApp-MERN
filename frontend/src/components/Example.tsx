import { useAnimate } from "framer-motion";
import  { useRef } from "react";
import hero from '../assets/hero.png'
import hung from '../assets/hung.png'
import chinese from '../assets/chinese.png'
import download from '../assets/download.png'
import burger from '../assets/burger.png'
import french from '../assets/french.png'
import noodles from '../assets/noodles.png'
import stcik from '../assets/sticks.png'
import order from '../assets/order.png'
import wingss from '../assets/wingss.png'
import pizza from '../assets/pizza.png'
import steak from '../assets/steak.png'
import msala from '../assets/msala.png'
import oburg from '../assets/oburg.png'
import rbbq from '../assets/rbbq.png'
import rburger from '../assets/rburger.png'
import rice from '../assets/rice.png'
import rnoodle from '../assets/rnoodle.png'
import rsalad from '../assets/rsalad.png'
import rtik from '../assets/rtik.png'
import rwings from '../assets/rwings.png'
import rpiza from '../assets/rpiza.png'


export const Example = () => {
  
  // const myImages = [
 
  //   rpiza,
  //   pizza,
  //   rbbq,
  //   msala,
  //   rburger,
  //   hero,
  //   rwings,
  //   wingss,
  //   oburg,
  //   hung,
  //   burger,
  //   rnoodle,
  //   steak,
  //   rice,
  //   french,
  //   rsalad,
  //   stcik,
  //   rtik,
  //   steak,
  //   order,
  //   noodles,
  //   chinese, 
  //   download
  // ];
  
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        rpiza,
    pizza,
    rbbq,
    msala,
    rburger,
    rwings,
    wingss,
    oburg,
    hung,
    burger,
    rnoodle,
    steak,
    rice,
    french,
    rsalad,
    stcik,
    rtik,
    steak,
    order,
    noodles,
    chinese, 
    download
       
      ]}
    >
      <section className="grid h-screen w-full place-content-center bg-orange-500">
        <p className="flex items-center gap-2 text-3xl font-bold uppercase text-black">
          {/* <FiMousePointer /> */}
          <span>Hover to see customer's Review</span>
        </p>
      </section>
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};