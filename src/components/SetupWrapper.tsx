import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
  btnTitle: string;
  onBtnClick: () => void;
  handleLearnMoreClick: () => void;
  isHasLearnMore: boolean;
  badge?: string;
};

const SetupWrapper = ({
  children,
  title,
  isHasLearnMore,
  badge,
  btnTitle,
  onBtnClick,
}: Props) => {
  return (
    <div className="h-full border-[#E2E8F0] border rounded-xl bg-white flex-grow min-w-[490px]">
      <header className="flex w-auto justify-between gap-2 items-center py-5 px-10 border-b bordder-[#E2E8F0] h-[10%]">
        <div className="flex items-center gap-4">
          <h2 className="text-[#0F172A] font-black text-lg">{title}</h2>
          {isHasLearnMore && <span className="text-[#1238CE] cursor-pointer">Learn more</span>}
        </div>

        <div className="flex items-center gap-6">
          {badge && (
            <div className="bg-[#ECF0FD] text-[#0F172A] uppercase px-2 py-1">
              {badge}
            </div>
          )}
          <button className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_507_4260)">
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  fill="white"
                  stroke="#94A3B8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-dasharray="1 3"
                />
                <path
                  d="M12.0065 11.3333C12.5339 11.3333 13.0495 11.1769 13.488 10.8839C13.9266 10.5909 14.2684 10.1744 14.4702 9.68716C14.672 9.19989 14.7248 8.66371 14.6219 8.14643C14.519 7.62914 14.2651 7.15399 13.8921 6.78105C13.5192 6.40811 13.044 6.15413 12.5268 6.05124C12.0095 5.94835 11.4733 6.00116 10.986 6.20299C10.4988 6.40482 10.0823 6.74662 9.78926 7.18515C9.49624 7.62368 9.33984 8.13925 9.33984 8.66667C9.33984 9.37391 9.62079 10.0522 10.1209 10.5523C10.621 11.0524 11.2993 11.3333 12.0065 11.3333ZM12.0065 7.33333C12.2702 7.33333 12.528 7.41153 12.7473 7.55804C12.9665 7.70455 13.1374 7.91279 13.2383 8.15642C13.3393 8.40006 13.3657 8.66815 13.3142 8.92679C13.2628 9.18543 13.1358 9.42301 12.9493 9.60948C12.7628 9.79595 12.5253 9.92293 12.2666 9.97438C12.008 10.0258 11.7399 9.99942 11.4963 9.89851C11.2526 9.79759 11.0444 9.62669 10.8979 9.40743C10.7514 9.18816 10.6732 8.93038 10.6732 8.66667C10.6732 8.31305 10.8137 7.97391 11.0637 7.72386C11.3137 7.47381 11.6529 7.33333 12.0065 7.33333ZM12.0065 12.6667C10.7688 12.6667 9.58185 13.1583 8.70668 14.0335C7.83151 14.9087 7.33984 16.0957 7.33984 17.3333C7.33984 17.5101 7.41008 17.6797 7.53511 17.8047C7.66013 17.9298 7.8297 18 8.00651 18C8.18332 18 8.35289 17.9298 8.47791 17.8047C8.60294 17.6797 8.67318 17.5101 8.67318 17.3333C8.67318 16.4493 9.02437 15.6014 9.64949 14.9763C10.2746 14.3512 11.1225 14 12.0065 14C12.8906 14 13.7384 14.3512 14.3635 14.9763C14.9887 15.6014 15.3398 16.4493 15.3398 17.3333C15.3398 17.5101 15.4101 17.6797 15.5351 17.8047C15.6601 17.9298 15.8297 18 16.0065 18C16.1833 18 16.3529 17.9298 16.4779 17.8047C16.6029 17.6797 16.6732 17.5101 16.6732 17.3333C16.6732 16.0957 16.1815 14.9087 15.3063 14.0335C14.4312 13.1583 13.2442 12.6667 12.0065 12.6667Z"
                  fill="#94A3B8"
                />
              </g>
              <defs>
                <clipPath id="clip0_507_4260">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Invite
          </button>
        </div>
      </header>
      <main className="h-[78%] overflow-y-auto">{children}</main>
      <footer className="h-[12%] border-t bordder-[#E2E8F0] py-3 px-10">
        <button
          onClick={onBtnClick}
          className="text-white bg-[#1238CE] px-4 py-3 rounded-lg text-sm"
        >
          {btnTitle}
        </button>
      </footer>
    </div>
  );
};

export default SetupWrapper;
