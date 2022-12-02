import React, { SVGProps } from 'react';

export default ({ height, width, ...rest }: React.SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      d="M27.4165 25.9366C26.1226 27.0634 24.5067 28.4647 21.5767 28.4647H19.8245C17.7044 28.4647 15.775 27.7095 14.3957 26.3392C13.0472 24.9991 12.3045 23.1661 12.3045 21.1762V18.8241C12.3045 16.8341 13.0472 15.0011 14.3957 13.6619C15.775 12.2915 17.7044 11.5366 19.8245 11.5366H21.5767C24.5106 11.5366 26.1226 12.9366 27.4165 14.0636C28.7606 15.226 29.9191 16.2406 33.0103 16.2406C33.4819 16.2406 33.9526 16.2038 34.4183 16.1305L34.4067 16.1031C34.2222 15.652 34.0053 15.2143 33.7578 14.7931L31.6915 11.2818C30.76 9.6988 29.4203 8.38429 27.8069 7.47035C26.1936 6.55642 24.3635 6.07524 22.5006 6.0752H18.3676C16.5046 6.07512 14.6743 6.55623 13.0609 7.47018C11.4474 8.38412 10.1076 9.6987 9.17598 11.2818L7.10957 14.7933C6.17857 16.3767 5.68848 18.1726 5.68848 20.0007C5.68848 21.8287 6.17857 23.6246 7.10957 25.208L9.17598 28.7185C10.1076 30.3015 11.4474 31.6161 13.0609 32.53C14.6744 33.4439 16.5046 33.925 18.3676 33.9249H22.5006C24.3635 33.9248 26.1936 33.4437 27.8069 32.5298C29.4202 31.6159 30.76 30.3014 31.6915 28.7185L33.7578 25.2124C34.0055 24.7914 34.2224 24.3537 34.4067 23.9025L34.4183 23.8782C33.953 23.8013 33.4821 23.7622 33.0103 23.7614C29.9191 23.7614 28.7606 24.7706 27.4165 25.9377"
      fill="#3E64B8"
    />
    <path
      d="M21.5765 13.6677H19.8246C16.5974 13.6677 14.4763 15.9295 14.4763 18.8244V21.1764C14.4763 24.0721 16.5974 26.3329 19.8246 26.3329H21.5765C26.2788 26.3329 25.9099 21.6288 33.0102 21.6288C33.6829 21.6276 34.3542 21.688 35.0154 21.8093C35.231 20.6127 35.231 19.3881 35.0154 18.1915C34.3541 18.3121 33.6828 18.3725 33.0102 18.3717C25.9068 18.3717 26.2788 13.6677 21.5765 13.6677Z"
      fill="#3E64B8"
    />
    <path
      d="M39.0956 23.5287C37.8862 22.66 36.4918 22.0718 35.0173 21.8085V21.8434C34.8899 22.5368 34.6914 23.2158 34.4249 23.87C35.6432 24.0554 36.799 24.5225 37.7969 25.2328C37.7969 25.2423 37.7911 25.2535 37.7873 25.2646C34.8247 34.6767 24.6448 39.9519 15.0514 37.0449C5.4581 34.138 0.0817426 24.1494 3.04574 14.7362C6.00829 5.32327 16.1873 0.048268 25.7806 2.95609C28.6078 3.81264 31.1793 5.33338 33.2716 7.38626C35.364 9.43915 36.9141 11.9621 37.7873 14.7362C37.7873 14.7467 37.793 14.7588 37.7969 14.7683C36.7991 15.4784 35.6432 15.9449 34.4249 16.129C34.6914 16.7843 34.8898 17.4642 35.0173 18.1585C35.0164 18.1695 35.0164 18.1805 35.0173 18.1915C36.4916 17.9281 37.8859 17.3404 39.0956 16.4726C40.2581 15.6279 40.0329 14.6731 39.8566 14.1089C36.5404 3.55602 25.1345 -2.36029 14.3796 0.892646C3.62446 4.14668 -2.40629 15.3391 0.910231 25.8919C4.22643 36.444 15.6332 42.3603 26.3872 39.1073C29.5595 38.1475 32.4448 36.4418 34.7922 34.1386C37.1396 31.8355 38.8781 29.0045 39.8566 25.8919C40.0329 25.3268 40.2581 24.3731 39.0956 23.5287Z"
      fill="#3E64B8"
    />
    <path
      d="M34.4179 16.1295C33.953 16.2057 33.4814 16.2444 33.0098 16.2463C29.9198 16.2463 28.7599 15.2361 27.4181 14.0689C26.1223 12.9411 24.5101 11.54 21.5772 11.54H19.824C17.7031 11.54 15.7757 12.2963 14.3954 13.6666C13.0467 15.0056 12.3049 16.8386 12.3049 18.8286V21.1816C12.3049 23.1718 13.0467 25.0037 14.3954 26.3439C15.7757 27.7141 17.7031 28.4693 19.824 28.4693H21.5772C24.5101 28.4693 26.1223 27.0681 27.4181 25.9413C28.7599 24.7798 29.9198 23.765 33.0098 23.765C33.4814 23.765 33.953 23.8019 34.4179 23.8751C34.6853 23.2212 34.8837 22.5421 35.0101 21.8486V21.8127C34.3484 21.6933 33.677 21.6331 33.0042 21.6331C25.9009 21.6331 26.2728 26.339 21.5706 26.339H19.8184C16.5913 26.339 14.4711 24.0763 14.4711 21.1816V18.8241C14.4711 15.9301 16.5913 13.6675 19.8184 13.6675H21.5706C26.2728 13.6675 25.9037 18.3717 33.0042 18.3717C33.6771 18.3726 34.3486 18.3122 35.0101 18.1911V18.159C34.8829 17.4647 34.6845 16.7847 34.4179 16.1295Z"
      fill="#65CCD5"
    />
    <path
      d="M34.4179 16.1295C33.953 16.2057 33.4814 16.2444 33.0098 16.2463C29.9198 16.2463 28.7599 15.2361 27.4181 14.0689C26.1223 12.9411 24.5101 11.54 21.5772 11.54H19.824C17.7031 11.54 15.7757 12.2963 14.3954 13.6666C13.0467 15.0056 12.3049 16.8386 12.3049 18.8286V21.1816C12.3049 23.1718 13.0467 25.0037 14.3954 26.3439C15.7757 27.7141 17.7031 28.4693 19.824 28.4693H21.5772C24.5101 28.4693 26.1223 27.0681 27.4181 25.9413C28.7599 24.7798 29.9198 23.765 33.0098 23.765C33.4814 23.765 33.953 23.8019 34.4179 23.8751C34.6853 23.2212 34.8837 22.5421 35.0101 21.8486V21.8127C34.3484 21.6933 33.677 21.6331 33.0042 21.6331C25.9009 21.6331 26.2728 26.339 21.5706 26.339H19.8184C16.5913 26.339 14.4711 24.0763 14.4711 21.1816V18.8241C14.4711 15.9301 16.5913 13.6675 19.8184 13.6675H21.5706C26.2728 13.6675 25.9037 18.3717 33.0042 18.3717C33.6771 18.3726 34.3486 18.3122 35.0101 18.1911V18.159C34.8829 17.4647 34.6845 16.7847 34.4179 16.1295Z"
      fill="#65CCD5"
    />
  </svg>
);
