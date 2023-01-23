import { isShero } from "~/utils";

export const LogoSvg = ({ size = 51 }: { size?: number }) => {
  const shero = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.1977 2.39881C25.5316 2.24401 26.9056 2.41626 28.1527 2.90726C29.9521 3.60583 31.4718 4.96416 32.3497 6.65303C33.2226 8.30614 33.4582 10.2662 33.02 12.0754C32.6089 13.8101 31.5698 15.3913 30.1365 16.4858C28.7892 17.5275 27.0936 18.1267 25.3771 18.1663C24.0511 18.2043 22.7159 17.9178 21.5311 17.3326C20.2275 16.6942 19.1082 15.7017 18.3279 14.4969C17.5391 13.2886 17.1008 11.8653 17.0728 10.4319C17.0331 8.88217 17.4736 7.32456 18.3265 6.01812C19.2276 4.62447 20.5842 3.51818 22.1502 2.90813C22.8054 2.65042 23.4962 2.47905 24.1977 2.39881ZM24.6306 5.64137C23.3269 5.77785 22.0972 6.47599 21.3285 7.51599C20.4025 8.72999 20.1495 10.4058 20.6925 11.8269C21.1557 13.1141 22.2353 14.1712 23.5501 14.6238C25.0016 15.1549 26.7123 14.9068 27.9523 14.0002C29.0596 13.2157 29.7869 11.9403 29.8817 10.6046C29.9619 9.61693 29.7014 8.60833 29.1571 7.7737C28.673 7.02368 27.9639 6.41363 27.1404 6.04341C26.3632 5.68541 25.484 5.54892 24.6306 5.64137Z"
        fill="#FFACA7"
      />
      <path
        d="M13.9292 18.9384C15.3584 18.5965 16.8598 18.6458 18.2962 18.9218C20.1464 19.2825 21.9097 19.9963 23.5527 20.895C24.1019 21.1985 24.6386 21.5242 25.1574 21.8761C26.6593 20.8636 28.305 20.0538 30.0362 19.4922C31.8802 18.9044 33.8613 18.5957 35.7911 18.9101C37.3326 19.1543 38.8033 19.8432 39.9355 20.9002C41.1389 22.0122 41.9633 23.4682 42.4827 24.9944C43.0038 26.5529 43.1534 28.206 43.1476 29.8377C43.1655 32.5627 42.509 35.2876 41.2659 37.7244C39.5903 41.0288 36.8227 43.7895 33.4791 45.4902C31.6085 46.4508 29.5606 47.077 27.4659 47.3417C24.7121 47.6866 21.8763 47.4067 19.2551 46.5066C16.7895 45.6716 14.5198 44.2941 12.6482 42.5154C10.1963 40.1946 8.43439 37.1788 7.66074 33.925C7.31868 32.5605 7.17571 31.1538 7.17215 29.7505C7.17082 28.8248 7.16681 27.8903 7.36634 26.9811C7.51733 26.0013 7.77298 25.035 8.17027 24.1223C8.68648 22.9144 9.40356 21.7732 10.3692 20.8593C11.3508 19.9208 12.5943 19.2502 13.9292 18.9384ZM14.1532 22.2913C13.2143 22.6379 12.4411 23.3313 11.9066 24.1533C11.2929 25.0934 10.8889 26.1613 10.7041 27.2611C10.5585 28.097 10.5206 28.9469 10.5348 29.7937C10.5188 32.0965 11.0778 34.4046 12.1663 36.448C13.5996 39.1777 15.9615 41.4217 18.7808 42.7613C17.6744 40.0324 17.2852 37.0315 17.6513 34.1181C17.9087 32.0359 18.5528 30.0004 19.5437 28.141C20.3272 26.6593 21.3369 25.2966 22.5118 24.0896C20.9971 23.1913 19.3549 22.46 17.6099 22.1225C16.4692 21.9115 15.2524 21.8775 14.1532 22.2913ZM32.8092 22.1757C31.0255 22.477 29.3352 23.1878 27.7893 24.097C29.3918 25.0712 31.1929 25.7423 33.0658 25.9895C34.2051 26.1386 35.3578 26.1849 36.506 26.1548C37.4088 26.112 38.3468 26.0309 39.161 25.6141C38.8291 24.7777 38.3686 23.9736 37.7108 23.3409C37.2222 22.8682 36.6187 22.5106 35.9631 22.31C34.9471 21.9891 33.8528 22.0083 32.8092 22.1757ZM21.1627 33.3603C20.7013 35.5166 20.7677 37.7767 21.3342 39.9073C21.7275 41.3764 22.3622 42.7827 23.2075 44.056C25.4906 44.3695 27.8498 44.1266 30.0238 43.3788C32.1621 42.6427 34.1191 41.4091 35.6905 39.81C37.4845 37.9965 38.7761 35.7097 39.3801 33.2543C39.7311 31.8367 39.8584 30.3663 39.7671 28.9111C38.6456 29.2935 37.4498 29.4108 36.2686 29.4331C34.2162 29.4558 32.1429 29.2892 30.1685 28.7123C28.3322 28.1825 26.605 27.3199 25.0479 26.2337C23.0877 28.1768 21.7195 30.6841 21.1627 33.3603Z"
        fill="#FFACA7"
      />
    </svg>
  );

  const luna = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.2582 21.6181C28.0959 27.6938 21.5067 31.8289 15.1037 31.1955C11.7657 30.7667 8.81382 29.3437 7.41721 26.741C7.32204 26.5238 7.54598 26.3304 7.72652 26.4846L7.98404 26.6457C10.709 28.4463 14.5116 28.8134 16.8433 28.1717C16.8797 28.1619 17.0673 28.0988 17.0687 27.9713C17.0701 27.8438 16.8923 27.8171 16.8629 27.8143C15.2856 27.6742 13.364 27.394 12.6642 26.8629C12.5634 26.7872 12.4221 26.6135 12.5102 26.4594C12.583 26.3304 12.7986 26.3585 13.0407 26.3613C26.1519 26.4608 30.4052 11.2196 22.0413 2.34977C21.8552 2.12697 21.9154 1.8229 22.1981 1.80469C22.324 1.80469 22.5354 1.88736 22.9175 2.14098C29.2351 6.52403 32.9132 14.2953 30.2582 21.6181Z"
        fill="#FFACA7"
      />
      <path
        d="M19.2049 19.654C19.1853 19.6148 19.1027 19.4929 18.8606 19.5868C15.2581 20.946 10.8956 20.3953 9.08039 18.7166C9.05411 18.6921 9.035 18.6609 9.02514 18.6263C9.01527 18.5917 9.01502 18.5551 9.0244 18.5204C9.05939 18.4279 9.17556 18.4504 9.20495 18.4574C10.0867 18.6858 11.4037 18.7993 12.0489 18.6942C12.2686 18.6592 12.3134 18.5835 12.3288 18.4938C12.3442 18.4041 12.319 18.2696 11.9817 18.0903C6.77109 15.4587 6.16508 7.1102 10.0223 3.03542C10.2028 2.85326 10.3022 2.71173 10.2266 2.57722C10.1511 2.4427 9.93692 2.45111 9.84455 2.47773C3.55907 4.29933 -0.323338 12.3116 3.20358 18.086C6.05031 22.8727 12.7851 24.2823 17.4792 21.449C18.8004 20.6475 19.3448 19.9413 19.2049 19.654Z"
        fill="#754BE4"
      />
    </svg>
  );
  return isShero() ? shero : luna;
};
