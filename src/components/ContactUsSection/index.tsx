import React from "react";
import ContactForm from "./ContactForm";
import RichText from "../Commons/RichText";
import { ContactUsSectionType } from "../../../lib/sanity/types/page";
import ShareButtons from "../Commons/ShareButtons";
import Link from "../Commons/Link";
import Image from "../Commons/Image";

const ContactUsSection: React.FC<ContactUsSectionType> = (block) => {
  const { title, image, companyEmailId, companyPhoneNumber } = block || {};

  return (
    <section className="s(767):pt-12 s(999):pt-14 s(1280):pt-24 py-28">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between s(1100):gap-20 gap-8">
          <div className="w-full s(1100):max-w-full max-w-[598px] ">
            <div className="[&>h1]:s(767):text-[2.875rem] [&>h1]:s(1100):text-52 [&>h1]:text-64 w-full  max-w-[412px] [&>h1]:s(767):leading-[50px] [&>h1]:leading-[64px] [&>h1]:font-normal flex flex-col gap-8 [&>h1]:text-theme-black">
              {title?.custom_rich_text && <RichText block={title} />}
              <div className="flex flex-col gap-y-3">
                <div className="flex items-center">
                  <Image
                    src={"/assets/images/mail-simple-icon.svg"}
                    alt="mail"
                    width={22}
                    height={22}
                  />
                  {companyEmailId && (
                    <Link
                      to={`mailto:${companyEmailId}`}
                      className="text-theme-black text-18 font-normal ml-2"
                    >
                      {companyEmailId}
                    </Link>
                  )}
                </div>
                <div className="flex items-center">
                  <Image
                    src={"/assets/images/phone-simple-icon.svg"}
                    alt="mail"
                    width={22}
                    height={22}
                  />
                  {companyPhoneNumber && (
                    <Link
                      to={`tel:${companyPhoneNumber}`}
                      className="text-theme-black text-18 font-normal ml-2"
                    >
                      {companyPhoneNumber}
                    </Link>
                  )}
                </div>
              </div>
              {title?.custom_rich_text && <ShareButtons />}
            </div>
            {title?.custom_rich_text && <ContactForm />}
          </div>
          {title?.custom_rich_text && (
            <div>
              <svg
                width={736}
                height="100%"
                viewBox="0 0 736 940"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full  s(1280):max-w-[550px] max-w-[600px] s(1280):max-h-[750px] max-h-[800px] h-full object-cover"
              >
                <g clipPath="url(#clip0_715_647)">
                  <path
                    d="M0 0H736V572C736 775.241 571.241 940 368 940C164.759 940 0 775.241 0 572V0Z"
                    fill="#333333"
                    className="svg-elem-1"
                  />
                  <rect
                    x={320}
                    y="721.496"
                    width="183.495"
                    height="183.495"
                    transform="rotate(-90 320 721.496)"
                    fill="#FCFC62"
                    className="svg-elem-2"
                  />
                  <path
                    d="M92 590.001C142.671 590.001 183.748 631.078 183.748 681.749C183.748 732.419 142.671 773.496 92 773.496L92 717.848C111.937 717.848 128.1 701.686 128.1 681.749C128.1 661.811 111.937 645.649 92 645.649L92 590.001Z"
                    fill="#E84A5F"
                    className="svg-elem-3"
                  />
                  <path
                    d="M277.748 723.495C227.077 723.495 186 682.418 186 631.748C186 581.077 227.077 540 277.748 540L277.748 595.648C257.81 595.648 241.648 611.81 241.648 631.748C241.648 651.685 257.81 667.847 277.748 667.847L277.748 723.495Z"
                    fill="#F5BD33"
                    className="svg-elem-4"
                  />
                  <path
                    d="M250 824.749C250 875.419 291.077 916.496 341.748 916.496L433.495 824.749L341.748 733.001C291.077 733.001 250 774.078 250 824.749Z"
                    fill="#E55733"
                    className="svg-elem-5"
                  />
                  <path
                    d="M715.495 599.748L623.748 508L532 599.748L623.748 691.495L715.495 599.748Z"
                    fill="#E55733"
                    className="svg-elem-6"
                  />
                  <path
                    d="M160.196 367.726C185.531 393.061 185.748 435.765 185.748 435.765C185.748 435.765 144.887 437.395 119.552 412.06C94.2166 386.726 94 344.021 94 344.021C94 344.021 134.86 342.392 160.196 367.726Z"
                    fill="#FF8966"
                    className="svg-elem-7"
                  />
                  <path
                    d="M211.299 367.726C185.964 393.061 185.748 435.765 185.748 435.765C185.748 435.765 226.608 437.395 251.943 412.06C277.278 386.726 277.495 344.021 277.495 344.021C277.495 344.021 236.635 342.392 211.299 367.726Z"
                    fill="#FF8966"
                    className="svg-elem-8"
                  />
                  <path
                    d="M160.196 503.769C185.531 478.434 185.748 435.73 185.748 435.73C185.748 435.73 144.887 434.1 119.552 459.435C94.2166 484.769 94 527.474 94 527.474C94 527.474 134.86 529.103 160.196 503.769Z"
                    fill="#FF8966"
                    className="svg-elem-9"
                  />
                  <path
                    d="M211.299 503.769C185.964 478.434 185.748 435.73 185.748 435.73C185.748 435.73 226.608 434.1 251.943 459.435C277.278 484.769 277.495 527.474 277.495 527.474C277.495 527.474 236.635 529.103 211.299 503.769Z"
                    fill="#FF8966"
                    className="svg-elem-10"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M617.748 76.466C580.589 76.466 550.466 106.589 550.466 143.748C550.466 180.906 580.589 211.029 617.748 211.029C654.906 211.029 685.029 180.906 685.029 143.748C685.029 106.589 654.906 76.466 617.748 76.466ZM526 143.748C526 93.0768 567.077 52 617.748 52C668.418 52 709.495 93.0768 709.495 143.748C709.495 194.418 668.418 235.495 617.748 235.495C567.077 235.495 526 194.418 526 143.748Z"
                    fill="#E84A5F"
                    className="svg-elem-11"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M617.748 119.378C604.288 119.378 593.377 130.289 593.377 143.749C593.377 157.208 604.288 168.119 617.748 168.119C631.207 168.119 642.118 157.208 642.118 143.749C642.118 130.289 631.207 119.378 617.748 119.378ZM569.007 143.749C569.007 116.83 590.829 95.0078 617.748 95.0078C644.666 95.0078 666.488 116.83 666.488 143.749C666.488 170.668 644.666 192.49 617.748 192.49C590.829 192.49 569.007 170.668 569.007 143.749Z"
                    fill="#FCFC62"
                    className="svg-elem-12"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M220.946 156.323C198.351 148.551 198.351 116.946 220.946 109.174L226.752 107.176L223.602 101.955C211.345 81.6363 231.885 57.4257 254.245 65.8364L259.991 67.9978L260.971 61.9953C264.787 38.6377 296.255 33.1495 307.918 53.8079L310.915 59.1166L315.567 55.1419C333.67 39.6746 361.343 55.4768 356.851 78.7166L355.697 84.6887L361.844 84.6015C385.763 84.2619 396.692 113.96 378.148 128.907L373.383 132.749L378.148 136.59C396.692 151.537 385.764 181.235 361.844 180.896L355.697 180.808L356.851 186.781C361.343 210.02 333.67 225.823 315.567 210.355L310.915 206.381L307.918 211.689C296.255 232.348 264.787 226.86 260.971 203.502L259.991 197.499L254.245 199.661C231.885 208.071 211.345 183.861 223.602 163.542L226.752 158.321L220.946 156.323ZM249.208 132.749C260.253 138.73 265.147 152.03 260.574 163.633C272.922 161.194 285.314 168.271 289.352 180.067C297.226 170.348 311.318 167.891 322.078 174.36C321.793 161.909 330.991 151.067 343.438 149.182C335.128 139.825 335.128 125.672 343.438 116.315C330.991 114.43 321.793 103.588 322.078 91.1376C311.318 97.6066 297.226 95.1489 289.352 85.4303C285.314 97.2264 272.922 104.303 260.574 101.864C265.147 113.467 260.253 126.767 249.208 132.749Z"
                    fill="#FCFC62"
                    className="svg-elem-13"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M126.896 248.895L126.896 248.895L126.895 248.895L126.896 248.895ZM126.896 248.895L139.175 154L114.617 154L126.896 248.895L126.895 248.895L126.893 248.893L90.0816 160.58L68.8145 172.858L126.886 248.887L50.8527 190.814L38.5741 212.081L126.89 248.893L126.891 248.894L32 236.616L32 261.173L126.892 248.895L126.893 248.897L38.5746 285.71L50.8532 306.977L126.893 248.898L126.895 248.9L126.895 248.903L68.8145 324.945L90.0816 337.223L126.895 248.904L114.617 343.792H139.175L126.897 248.903L163.711 337.223L184.978 324.945L126.897 248.902L126.897 248.901L126.899 248.898L202.939 306.977L215.218 285.71L126.9 248.897L126.901 248.895L221.792 261.173V236.616L126.902 248.894L126.903 248.893L215.218 212.081L202.94 190.814L126.907 248.887L184.978 172.858L163.711 160.58L126.9 248.893L126.897 248.895L126.896 248.895ZM126.897 248.895L126.896 248.895L126.896 248.895L126.895 248.895L126.894 248.895L126.894 248.896L126.896 248.895L126.894 248.897L126.896 248.9L126.896 248.896L126.897 248.9L126.898 248.897L126.896 248.895L126.898 248.896L126.899 248.895L126.897 248.895L126.896 248.895L126.897 248.895ZM126.893 248.895L126.893 248.894L126.894 248.895L126.893 248.895Z"
                    fill="#99B898"
                    className="svg-elem-14"
                  />
                  <path
                    d="M600 688H550.667V737.333H501.333V786.667H452V836H600V688Z"
                    fill="#F5BD33"
                    className="svg-elem-15"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M382.585 305.585C382.585 298.635 376.95 293 370 293C363.049 293 357.415 298.635 357.415 305.585V319.382L350.599 307.387C347.165 301.344 339.482 299.229 333.439 302.663C327.396 306.097 325.281 313.78 328.715 319.823L336.47 333.469L322.822 325.713C316.779 322.279 309.097 324.394 305.663 330.437C302.229 336.48 304.344 344.163 310.387 347.597L322.39 354.418H308.585C301.635 354.418 296 360.052 296 367.003C296 373.953 301.634 379.588 308.585 379.588H322.373L310.386 386.399C304.344 389.834 302.229 397.516 305.663 403.559C309.097 409.602 316.779 411.717 322.822 408.283L336.474 400.525L328.715 414.178C325.281 420.221 327.396 427.904 333.439 431.338C339.482 434.772 347.165 432.657 350.599 426.614L357.415 414.619V428.415C357.415 435.365 363.049 441 370 441C376.95 441 382.585 435.365 382.585 428.415V414.619L389.401 426.614C392.835 432.657 400.518 434.772 406.561 431.338C412.604 427.904 414.719 420.221 411.285 414.178L403.526 400.525L417.178 408.283C423.221 411.717 430.903 409.602 434.337 403.559C437.771 397.516 435.656 389.834 429.613 386.399L417.627 379.588H431.415C438.365 379.588 444 373.953 444 367.003C444 360.052 438.365 354.418 431.415 354.418H417.61L429.613 347.597C435.656 344.163 437.771 336.48 434.337 330.437C430.903 324.394 423.221 322.279 417.178 325.713L403.53 333.469L411.285 319.823C414.719 313.78 412.604 306.097 406.561 302.663C400.518 299.229 392.835 301.344 389.401 307.387L382.585 319.382V305.585Z"
                    fill="#FCFC62"
                    className="svg-elem-16"
                  />
                  <path
                    d="M518.553 395C495.634 405.537 481 421.576 481 439.54C481 471.274 526.667 497 583 497C639.333 497 685 471.274 685 439.54C685 421.576 670.366 405.537 647.447 395C670.366 384.463 685 368.424 685 350.46C685 318.726 639.333 293 583 293C526.667 293 481 318.726 481 350.46C481 368.424 495.634 384.463 518.553 395Z"
                    fill="#F5BD33"
                    className="svg-elem-17"
                  />
                  <rect
                    x={412}
                    y={260}
                    width={120}
                    height={120}
                    transform="rotate(-90 412 260)"
                    fill="#FF8966"
                    className="svg-elem-18"
                  />
                  <path
                    d="M462 570L402 510L342 570H462Z"
                    fill="#99B898"
                    className="svg-elem-19"
                  />
                  <path
                    d="M462 630L402 570L342 630H462Z"
                    fill="#99B898"
                    className="svg-elem-20"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_715_647">
                    <path
                      d="M0 0H736V572C736 775.241 571.241 940 368 940C164.759 940 0 775.241 0 572V0Z"
                      fill="white"
                      className="svg-elem-21"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className=" bg-black "></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
