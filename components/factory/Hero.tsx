import React from "react";
import Button from "../factory/Button";

interface Heroprops {
  buttonText?: string;
  buttonHref?: string;
  buttonOnClick?: () => void;
  heroText?: string;
}

const Hero: React.FC<Heroprops> = ({
  buttonText = "Create my account",
  buttonHref = "#",
  buttonOnClick,
  heroText = "Calling all Presec - Legon '99 alumni, come back to where it all began."
}) => {
  return (
		<div className='p-4 md:p-8'>
			<div className='hero-top h-[50dvh]'>
				<div className='hero-text leading-tight font-extrabold max-w-5xl '>
					{heroText}
				</div>
				<Button
					text={buttonText}
					href={buttonHref}
					onClick={buttonOnClick}
				/>
			</div>
		</div>
  );
};

export default Hero;
