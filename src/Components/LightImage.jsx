import React from 'react';

const LightImage = ({fill, ...props}) => {
    return (
        <svg {...props} width="25" height="25" viewBox="0 0 25 25" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.25 2.91667V1.25C11.25 0.918479 11.3817 0.600537 11.6161 0.366117C11.8505 0.131696 12.1685 0 12.5 0C12.8315 0 13.1495 0.131696 13.3839 0.366117C13.6183 0.600537 13.75 0.918479 13.75 1.25V2.91667C13.75 3.24819 13.6183 3.56613 13.3839 3.80055C13.1495 4.03497 12.8315 4.16667 12.5 4.16667C12.1685 4.16667 11.8505 4.03497 11.6161 3.80055C11.3817 3.56613 11.25 3.24819 11.25 2.91667ZM19.5833 12.5C19.5833 13.901 19.1679 15.2704 18.3896 16.4353C17.6112 17.6001 16.505 18.508 15.2107 19.0441C13.9164 19.5803 12.4921 19.7205 11.1181 19.4472C9.74408 19.1739 8.48195 18.4993 7.49133 17.5087C6.50071 16.5181 5.82608 15.2559 5.55277 13.8819C5.27946 12.5079 5.41973 11.0836 5.95585 9.78932C6.49197 8.49502 7.39986 7.38875 8.56471 6.61042C9.72956 5.8321 11.099 5.41667 12.5 5.41667C14.378 5.4186 16.1786 6.16549 17.5065 7.49346C18.8345 8.82142 19.5814 10.622 19.5833 12.5ZM17.0833 12.5C17.0833 11.5935 16.8145 10.7074 16.3109 9.95364C15.8073 9.19991 15.0915 8.61245 14.254 8.26555C13.4165 7.91865 12.4949 7.82789 11.6058 8.00473C10.7168 8.18158 9.90008 8.6181 9.25909 9.25909C8.6181 9.90008 8.18158 10.7168 8.00473 11.6058C7.82789 12.4949 7.91865 13.4165 8.26555 14.254C8.61245 15.0915 9.19991 15.8073 9.95364 16.3109C10.7074 16.8145 11.5935 17.0833 12.5 17.0833C13.7152 17.082 14.8801 16.5986 15.7394 15.7394C16.5986 14.8801 17.082 13.7152 17.0833 12.5ZM4.53229 6.30104C4.64857 6.41732 4.7866 6.50955 4.93852 6.57248C5.09044 6.63541 5.25327 6.66779 5.41771 6.66779C5.58215 6.66779 5.74497 6.63541 5.89689 6.57248C6.04881 6.50955 6.18685 6.41732 6.30312 6.30104C6.4194 6.18477 6.51163 6.04673 6.57456 5.89481C6.63749 5.74289 6.66988 5.58006 6.66988 5.41563C6.66988 5.25119 6.63749 5.08836 6.57456 4.93644C6.51163 4.78452 6.4194 4.64648 6.30312 4.53021L5.05312 3.28021C4.8183 3.04538 4.4998 2.91346 4.16771 2.91346C3.83561 2.91346 3.51712 3.04538 3.28229 3.28021C3.04746 3.51504 2.91554 3.83353 2.91554 4.16563C2.91554 4.49772 3.04746 4.81621 3.28229 5.05104L4.53229 6.30104ZM4.53229 18.6969L3.28229 19.9469C3.16602 20.0632 3.07378 20.2012 3.01086 20.3531C2.94793 20.505 2.91554 20.6679 2.91554 20.8323C2.91554 20.9967 2.94793 21.1596 3.01086 21.3115C3.07378 21.4634 3.16602 21.6014 3.28229 21.7177C3.51712 21.9525 3.83561 22.0845 4.16771 22.0845C4.33215 22.0845 4.49497 22.0521 4.64689 21.9891C4.79881 21.9262 4.93685 21.834 5.05312 21.7177L6.30312 20.4677C6.53795 20.2329 6.66988 19.9144 6.66988 19.5823C6.66988 19.2502 6.53795 18.9317 6.30312 18.6969C6.0683 18.462 5.7498 18.3301 5.41771 18.3301C5.08561 18.3301 4.76712 18.462 4.53229 18.6969ZM19.5833 6.66667C19.7475 6.6668 19.9102 6.63457 20.0619 6.57184C20.2136 6.5091 20.3515 6.41708 20.4677 6.30104L21.7177 5.05104C21.834 4.93477 21.9262 4.79673 21.9891 4.64481C22.0521 4.49289 22.0845 4.33006 22.0845 4.16563C22.0845 4.00119 22.0521 3.83836 21.9891 3.68644C21.9262 3.53452 21.834 3.39648 21.7177 3.28021C21.6014 3.16393 21.4634 3.0717 21.3115 3.00877C21.1596 2.94585 20.9967 2.91346 20.8323 2.91346C20.6679 2.91346 20.505 2.94585 20.3531 3.00877C20.2012 3.0717 20.0632 3.16393 19.9469 3.28021L18.6969 4.53021C18.521 4.70504 18.4011 4.92823 18.3525 5.17139C18.3038 5.41455 18.3286 5.66668 18.4236 5.89573C18.5186 6.12477 18.6797 6.32037 18.8862 6.45766C19.0927 6.59494 19.3354 6.66769 19.5833 6.66667ZM20.4677 18.699C20.2329 18.4641 19.9144 18.3322 19.5823 18.3322C19.2502 18.3322 18.9317 18.4641 18.6969 18.699C18.462 18.9338 18.3301 19.2523 18.3301 19.5844C18.3301 19.9165 18.462 20.235 18.6969 20.4698L19.9469 21.7198C20.1817 21.9546 20.5002 22.0865 20.8323 22.0865C21.1644 22.0865 21.4829 21.9546 21.7177 21.7198C21.9525 21.485 22.0845 21.1665 22.0845 20.8344C22.0845 20.5023 21.9525 20.1838 21.7177 19.949L20.4677 18.699ZM4.16667 12.5C4.16667 12.1685 4.03497 11.8505 3.80055 11.6161C3.56613 11.3817 3.24819 11.25 2.91667 11.25H1.25C0.918479 11.25 0.600537 11.3817 0.366117 11.6161C0.131696 11.8505 0 12.1685 0 12.5C0 12.8315 0.131696 13.1495 0.366117 13.3839C0.600537 13.6183 0.918479 13.75 1.25 13.75H2.91667C3.24819 13.75 3.56613 13.6183 3.80055 13.3839C4.03497 13.1495 4.16667 12.8315 4.16667 12.5ZM12.5 20.8333C12.1685 20.8333 11.8505 20.965 11.6161 21.1994C11.3817 21.4339 11.25 21.7518 11.25 22.0833V23.75C11.25 24.0815 11.3817 24.3995 11.6161 24.6339C11.8505 24.8683 12.1685 25 12.5 25C12.8315 25 13.1495 24.8683 13.3839 24.6339C13.6183 24.3995 13.75 24.0815 13.75 23.75V22.0833C13.75 21.7518 13.6183 21.4339 13.3839 21.1994C13.1495 20.965 12.8315 20.8333 12.5 20.8333ZM23.75 11.25H22.0833C21.7518 11.25 21.4339 11.3817 21.1994 11.6161C20.965 11.8505 20.8333 12.1685 20.8333 12.5C20.8333 12.8315 20.965 13.1495 21.1994 13.3839C21.4339 13.6183 21.7518 13.75 22.0833 13.75H23.75C24.0815 13.75 24.3995 13.6183 24.6339 13.3839C24.8683 13.1495 25 12.8315 25 12.5C25 12.1685 24.8683 11.8505 24.6339 11.6161C24.3995 11.3817 24.0815 11.25 23.75 11.25Z"
                fill={fill}/>
        </svg>
    );
};

export default LightImage;
