import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-gray-300">
        <div>
          <h1 className="uppercase md:text-4xl text-2xl font-black font-zentry special-font">{title}</h1>
          {description && (
            <p className="mt-3 mb-3 w-full text-xl md:text-xl">{description}</p>
          )}
        </div>
          <img
        src={src}
        className=" object-fillrelative left-0 top-0 size-full object-cover object-center"
      />
      </div>

    </div>
  );
};

const Features = () => (
  <section className="bg-slate-800 ">
    <div className="container mx-auto px-3 md:px-10">
      <div className="pt-10 pb-10 flex flex-col items-center text-center gap-4">
        <p className="font-circular-web text-lg text-blue-50">
          Into the Impact Layer
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
        Step into a dynamic and transformative ecosystem where insightful reporting tools 
        seamlessly converge, empowering organizations to visualize, manage, and amplify their social impact on a global scale.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ">
        <BentoCard
          src="img/whyDegenero.webp"
          title={
            <>
              Why Choose De Genero for Your Reporting Needs?
            </>
          }
          description=
            
            "Our commitment to reliable solutions ensures timely, accurate data delivery within budget.
            Our user-friendly interface and customisable reports build trust, fostering long-lasting partnerships and empowering you to meet stakeholder expectations and achieve your goals efficiently."
            
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-auto pb-10 w-full grid-cols-auto grid-rows-auto gap-7 lg:grid-cols-2 lg:grid-rows-2">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-1">
          <BentoCard
            src="img/datamanagement.jpg"
            title={
              <>
                Efficient <b>D</b>ata Management
              </>
            }
            description="De Genero centralises and automates data collection, reducing manual effort and errors."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="img/Custom-Reports.png"
            title={
              <>
                Customise your <b>I</b>mpact Reports

              </>
            }
            description="Tailor your social impact reports to fit your needs. Customise data views and report formats to match your goals."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="img/dashboard.webp"
            title={
              <>
                Dashboard for <b>E</b>ffective Communication
              </>
            }
            description="Present complex data clearly, customise views to highlight key information, and generate comprehensive reports effortlessly."
            isComingSoon
          />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="img/attractInvestors.jpg"
            title={
              <>
                <b>M</b>aximise Your Funding Opportunities
              </>
            }
            description="Create detailed impact reports and use real-time data to attract investors. Enhance transparency and trust with accurate data."
            isComingSoon
          />
        </BentoTilt>


      </div>
    </div>
  </section>
);

export default Features;
