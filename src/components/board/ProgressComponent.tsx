import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { IoMdPersonAdd } from "react-icons/io";
import { TfiCommentAlt } from "react-icons/tfi";
import { useMediaQuery } from "react-responsive";

type ProgressComponentProps = {};

const ProgressComponent: React.FC<ProgressComponentProps> = () => {
  let isTabletSm = useMediaQuery({ query: "(max-width: 430px)" });

  return (
    <div className="p-6 pl-6 pr-6 ">
      <div className="h-30 p-4 bg-theme rounded-md flex-col">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <button className="pl-3 pr-3 hidden lg:flex text-[#ffffff88] text-2xl">
              <BsArrowLeftCircleFill />
            </button>
            <div className="pl-2 flex-col">
              <div className="text-[#ffffff] text-xl">School November Task</div>
              <div className="text-[#ffffffad] pt-3 text-[10px] font-light">
                Created by Instructor Day on November 31, 2022
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden xl:flex items-center">
              <div className="pr-4">
                <div className="text-[#ffffff] text-sm">
                  Centered Material Arts
                </div>
                <div className="text-[#ffffffad] pt-1 text-[10px] font-light">
                  Sunnywale, Ca
                </div>
              </div>
              <div className="w-12 p-1 h-12  items-center justify-center rounded-md bg-[#ffffff]">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="logo 1" clip-path="url(#clip0_1_425)">
                    <g id="19. logo google marketing platform">
                      <path
                        id="Vector"
                        d="M36.905 36.9049C34.9345 38.8736 32.5933 40.4324 30.0168 41.491C27.4404 42.5497 24.6797 43.0873 21.8942 43.0728C19.1088 43.0583 16.3538 42.492 13.7885 41.4066C11.2231 40.3212 8.89834 38.7382 6.94836 36.7491C7.88998 37.6306 9.13365 38.1177 10.4235 38.1102C11.7133 38.1026 12.9512 37.601 13.8824 36.7085C14.8137 35.816 15.3674 34.6006 15.4297 33.3122C15.4921 32.0239 15.0583 30.7607 14.2175 29.7824C15.2395 30.8079 16.4538 31.6216 17.7909 32.1768C19.1279 32.732 20.5614 33.0178 22.0092 33.0178C23.457 33.0178 24.8905 32.732 26.2275 32.1768C27.5646 31.6216 28.7789 30.8079 29.8009 29.7824C28.8564 30.7269 28.3257 32.008 28.3257 33.3437C28.3257 34.6794 28.8564 35.9604 29.8009 36.9049C30.7454 37.8494 32.0264 38.3801 33.3621 38.3801C34.6978 38.3801 35.9789 37.8494 36.9234 36.9049H36.905Z"
                        fill="#FFCC66"
                      />
                      <path
                        id="Vector_2"
                        d="M37.1709 14.7492C36.1922 15.6581 34.8933 16.1423 33.5585 16.0959C32.2237 16.0495 30.9616 15.4763 30.0484 14.5017C28.0427 12.383 25.2775 11.1478 22.361 11.0678C19.4446 10.9879 16.6159 12.0698 14.4971 14.0755C12.3784 16.0812 11.1432 18.8464 11.0632 21.7628C10.9833 24.6792 12.0652 27.508 14.0709 29.6267C13.1451 28.7099 11.8998 28.1879 10.597 28.1705C9.29415 28.1532 8.03537 28.6417 7.08543 29.5335C6.13548 30.4252 5.56843 31.6507 5.50354 32.952C5.43866 34.2533 5.88101 35.5291 6.73754 36.5109C-5.97663 23.1734 3.52004 0.916716 22 0.916716C24.9335 0.911823 27.8354 1.52099 30.5193 2.70504C33.2031 3.88909 35.6094 5.6218 37.5834 7.79172C38.428 8.77951 38.857 10.0562 38.78 11.3536C38.7031 12.6511 38.1263 13.8681 37.1709 14.7492Z"
                        fill="#6FABE6"
                      />
                      <path
                        id="Vector_3"
                        d="M13.9609 36.7674C13.2384 37.463 12.3245 37.9268 11.3365 38.0994C10.3485 38.272 9.33151 38.1454 8.41597 37.7359C7.50044 37.3265 6.72813 36.6528 6.19814 35.8013C5.66816 34.9498 5.40468 33.9594 5.44151 32.9572C5.47833 31.9549 5.81379 30.9865 6.40484 30.1762C6.99588 29.366 7.81555 28.7508 8.75867 28.4096C9.7018 28.0684 10.7253 28.0168 11.698 28.2614C12.6706 28.506 13.548 29.0357 14.2176 29.7824C15.0858 30.7542 15.544 32.0244 15.4962 33.3266C15.4483 34.6289 14.8981 35.862 13.9609 36.7674Z"
                        fill="#9DCC6B"
                      />
                      <path
                        id="Vector_4"
                        d="M36.9051 36.9049C36.4374 37.3726 35.8822 37.7435 35.2711 37.9966C34.6601 38.2497 34.0052 38.38 33.3438 38.38C32.6824 38.38 32.0275 38.2497 31.4165 37.9966C30.8054 37.7435 30.2502 37.3726 29.7826 36.9049C29.3149 36.4372 28.9439 35.882 28.6908 35.271C28.4377 34.6599 28.3074 34.005 28.3074 33.3436C28.3074 32.6823 28.4377 32.0273 28.6908 31.4163C28.9439 30.8053 29.3149 30.2501 29.7826 29.7824C31.7829 27.7841 32.9369 25.0924 33.0052 22.2658C33.0735 19.4392 32.0507 16.6949 30.1492 14.6024C31.05 15.5167 32.2655 16.053 33.5481 16.102C34.8306 16.151 36.0836 15.7091 37.0515 14.8662C38.0194 14.0234 38.6295 12.8431 38.7573 11.566C38.885 10.2889 38.521 9.01115 37.7392 7.99323C41.3127 12.0101 43.2166 17.2405 43.0616 22.6147C42.9065 27.9888 40.7042 33.1007 36.9051 36.9049Z"
                        fill="#DB5669"
                      />
                      <path
                        id="Vector_5"
                        d="M43.0009 20.1665C42.675 23.9107 41.3541 27.4997 39.1751 30.562C36.9961 33.6242 34.0382 36.0482 30.6075 37.5832C29.9761 37.1757 29.444 36.632 29.0502 35.992C28.6564 35.352 28.4109 34.6319 28.3318 33.8846C28.2527 33.1374 28.3419 32.3818 28.593 31.6735C28.844 30.9653 29.2505 30.3222 29.7825 29.7915C31.7829 27.7933 32.9369 25.1015 33.0052 22.2749C33.0735 19.4483 32.0507 16.704 30.1492 14.6115C31.05 15.5258 32.2655 16.0621 33.5481 16.1111C34.8306 16.1601 36.0835 15.7182 37.0515 14.8753C38.0194 14.0325 38.6294 12.8522 38.7572 11.5751C38.885 10.298 38.5209 9.02028 37.7392 8.00235C40.7669 11.3785 42.6137 15.6482 43.0009 20.1665Z"
                        fill="#F26674"
                      />
                      <path
                        id="Vector_6"
                        d="M37.1709 14.7491C36.1922 15.658 34.8933 16.1422 33.5585 16.0958C32.2237 16.0494 30.9616 15.4762 30.0484 14.5016C28.0427 12.3829 25.2775 11.1477 22.361 11.0677C19.4446 10.9878 16.6159 12.0697 14.4971 14.0754C12.3784 16.0811 11.1432 18.8463 11.0632 21.7627C10.9833 24.6791 12.0652 27.5079 14.0709 29.6266C13.4613 29.0034 12.7006 28.5489 11.8629 28.3074C11.0253 28.066 10.1393 28.0458 9.29158 28.249C8.44383 28.4522 7.66324 28.8717 7.02602 29.4666C6.3888 30.0615 5.91672 30.8115 5.65587 31.6433C2.98125 28.3752 1.35792 24.3744 0.999207 20.1666C1.35465 16.0852 2.89151 12.1958 5.42189 8.97383C7.95228 5.75185 11.3666 3.33689 15.2474 2.02416C19.1282 0.711425 23.3074 0.557801 27.2742 1.58207C31.2409 2.60633 34.8233 4.7641 37.5834 7.79161C38.428 8.77941 38.857 10.0561 38.78 11.3535C38.7031 12.6509 38.1263 13.868 37.1709 14.7491Z"
                        fill="#82BCF4"
                      />
                      <path
                        id="Vector_7"
                        d="M13.09 37.4366C10.2054 36.0931 7.66346 34.1122 5.65588 31.6432C5.89883 30.8673 6.32615 30.1618 6.90129 29.5871C7.47642 29.0124 8.18224 28.5856 8.95834 28.3432C9.73444 28.1009 10.5577 28.0502 11.3577 28.1954C12.1577 28.3407 12.9105 28.6777 13.5519 29.1774C14.1932 29.6772 14.7039 30.3249 15.0402 31.0652C15.3765 31.8054 15.5285 32.6161 15.4831 33.4279C15.4377 34.2397 15.1963 35.0284 14.7796 35.7265C14.3628 36.4247 13.7831 37.0114 13.09 37.4366Z"
                        fill="#B5E08C"
                      />
                      <path
                        id="Vector_8"
                        d="M30.6075 37.5832C27.85 38.8232 24.8572 39.4529 21.8338 39.4291C18.8104 39.4054 15.8278 38.7288 13.09 37.4457C13.7204 37.0612 14.2583 36.5427 14.6658 35.927C15.0733 35.3112 15.3404 34.6134 15.448 33.8829C15.5556 33.1525 15.5011 32.4073 15.2885 31.7002C15.0758 30.9931 14.7102 30.3415 14.2175 29.7916C15.2395 30.8171 16.4538 31.6307 17.7909 32.1859C19.1279 32.7411 20.5614 33.0269 22.0092 33.0269C23.457 33.0269 24.8905 32.7411 26.2275 32.1859C27.5646 31.6307 28.7789 30.8171 29.8009 29.7916C29.2679 30.321 28.8602 30.963 28.6077 31.6705C28.3552 32.378 28.2643 33.133 28.3417 33.8802C28.4191 34.6274 28.6627 35.3478 29.0548 35.9886C29.4469 36.6294 29.9774 37.1742 30.6075 37.5832Z"
                        fill="#FFDE76"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_425">
                      <rect width="44" height="44" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <EllipsisVerticalIcon className="text-[#ffffff] h-5 pl-4" />
          </div>
        </div>
        <div className="pt-6 pb-0 lg:pl-10 flex flex-wrap items-start justify-between">
          <div className="flex flex-wrap justify-between items-start">
            <div className="relative">
              <span
                className={`rounded-md px-3 py-1 text-sm font-semibold mt-1 absolute -top-0`}
                style={{ left: `${1.1 * 0}rem` }}
              >
                <div className="h-7 flex items-center justify-center w-7 shadow-inner shadow-black bg-[#ffffff] rounded-full text-theme"></div>
              </span>
              <span
                className={`rounded-md px-3 py-1 text-sm font-semibold mt-1 absolute -top-0`}
                style={{ left: `${1.1 * 1}rem` }}
              >
                <div className="h-7 flex items-center justify-center w-7 shadow-inner shadow-black bg-[#ffffff] rounded-full text-theme"></div>
              </span>
              <span
                className={`rounded-md px-3 py-1 text-sm font-semibold mt-1 absolute -top-0`}
                style={{ left: `${1.1 * 2}rem` }}
              >
                <div className="h-7 flex items-center justify-center w-7 shadow-inner shadow-black bg-[#ffffff] rounded-full text-theme"></div>
              </span>
              <span
                className={`rounded-md px-3 py-1 text-sm font-semibold mt-1 absolute -top-0`}
                style={{ left: `${1.1 * 3}rem` }}
              >
                <div className="h-7 flex items-center justify-center w-7 shadow-inner shadow-black bg-[#ffffff] rounded-full text-theme"></div>
              </span>
              <span
                className={`rounded-md px-3 py-1 text-sm font-semibold mt-1 absolute -top-0`}
                style={{ left: `${1.1 * 4}rem` }}
              >
                <div className="h-7 flex items-center justify-center w-7 shadow-inner bg-pink rounded-full text-[10px] text-[#ffffff]">
                  +5
                </div>
              </span>
            </div>
            <div
              className={`${
                isTabletSm ? "pt-[40px]" : ""
              } flex flex-wrap justify-start items-start`}
            >
              <div
                className={`${isTabletSm ? "pl-3" : "pl-[130px]"} pt-2 pb-2`}
              >
                <div className="text-[#ffffff] hover:cursor-pointer items-center justify-center flex pt-2 pb-2 pl-3 pr-3 rounded-xl bg-selected">
                  <IoMdPersonAdd />
                  <text className="truncate pl-2 text-[13px]">
                    Invite People
                  </text>
                </div>
              </div>
              <div className="pl-3 pt-2 pb-2">
                <div className="text-[#ffffff] hover:cursor-pointer items-center justify-center flex p-2 rounded-xl bg-theme border-solid border-[0.5px] border-items">
                  <text className="pl-3 pr-3 text-[12px]">Private</text>
                </div>
              </div>
              <div className="pl-3 pt-2 pb-2">
                <div className="text-[#ffffff] hover:cursor-pointer items-center justify-center flex pt-2 pb-2 pl-3 pr-3  rounded-xl bg-items">
                  <text className="pl-2 pr-2 text-[13px]">Edit</text>
                </div>
              </div>
              <div className="pl-3 pt-2 pb-2">
                <div className="truncate text-[#ffffff] hover:cursor-pointer items-center justify-center flex p-2 rounded-xl bg-theme border-solid border-[0.5px] border-items">
                  <TfiCommentAlt className="text-[12px]" />
                  <text className="pl-2 text-[12px]">45 Coments</text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-wrap justify-start pt-2 pl-2">
            <div className="text-[#ffff] pr-3 pt-1 text-xs">
              Total Progerss 60%
            </div>
            <div className="my-2 h-2 w-[200px] bg-[#1E1C3A] overflow-hidden rounded-md">
              <div
                style={{
                  width: `${60}%`,
                }}
                className="flex h-6 items-center justify-center bg-selected transition-transform duration-100 ease-in"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProgressComponent;
