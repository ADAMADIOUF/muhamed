import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container section-center'>
        <article className='footer-logo'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='81'
              height='81'
              viewBox='0 0 81 81'
              fill='none'
            >
              <path
                d='M79.9452 40.6523C79.9452 49.8423 76.7587 58.7481 70.9286 65.852C65.0985 72.956 56.9855 77.8187 47.9721 79.6116C38.9586 81.4045 29.6024 80.0166 21.4975 75.6845C13.3926 71.3523 7.04058 64.344 3.5237 55.8535C0.00682995 47.363 -0.457284 37.9157 2.21044 29.1214C4.87817 20.3271 10.5127 12.7299 18.1539 7.62416C25.7951 2.51845 34.9703 0.220183 44.1161 1.12096C53.2619 2.02174 61.8124 6.06583 68.3107 12.5642L63.9691 16.9058C58.4752 11.4119 51.2464 7.99287 43.5143 7.23133C35.7822 6.46978 28.0252 8.4128 21.5651 12.7293C15.1049 17.0458 10.3414 23.4688 8.08599 30.9038C5.83061 38.3387 6.22299 46.3257 9.19626 53.5038C12.1695 60.6819 17.5397 66.607 24.3918 70.2696C31.244 73.9321 39.154 75.1054 46.7743 73.5897C54.3945 72.0739 61.2534 67.9628 66.1824 61.9569C71.1113 55.951 73.8053 48.4218 73.8053 40.6523H79.9452Z'
                fill='white'
              />
              <path
                d='M25.8681 66.5121C19.8825 63.1942 15.2325 57.9036 12.7104 51.5416C10.1883 45.1796 9.95016 38.14 12.0365 31.6221C14.1229 25.1043 18.4047 19.5115 24.1524 15.7967C29.9001 12.0819 36.758 10.475 43.5577 11.2497C50.3573 12.0244 56.678 15.1329 61.4427 20.0454C66.2074 24.9579 69.1214 31.3706 69.6881 38.1907C70.2548 45.0108 68.4392 51.8165 64.5506 57.448C60.6621 63.0796 54.9411 67.1886 48.3626 69.075L47.1023 64.6798C52.664 63.085 57.5006 59.6111 60.7882 54.85C64.0757 50.089 65.6106 44.3353 65.1315 38.5693C64.6524 32.8034 62.1889 27.3819 58.1606 23.2287C54.1324 19.0755 48.7887 16.4476 43.0401 15.7926C37.2914 15.1376 31.4936 16.4962 26.6343 19.6368C21.775 22.7774 18.1551 27.5057 16.3912 33.0161C14.6273 38.5264 14.8286 44.478 16.9609 49.8566C19.0931 55.2352 23.0244 59.708 28.0847 62.513L25.8681 66.5121Z'
                fill='white'
              />
              <path
                d='M40.2228 19.5232C45.1111 19.5232 49.8482 21.2181 53.6269 24.3192C57.4056 27.4203 59.9922 31.7357 60.9459 36.5301C61.8995 41.3245 61.1613 46.3013 58.857 50.6124C56.5526 54.9235 52.8247 58.3022 48.3085 60.1729C43.7923 62.0436 38.7672 62.2904 34.0894 60.8714C29.4115 59.4524 25.3704 56.4554 22.6546 52.3909C19.9388 48.3264 18.7164 43.446 19.1955 38.5812C19.6746 33.7164 21.8257 29.1683 25.2823 25.7117L27.5917 28.0211C24.6694 30.9433 22.8508 34.7885 22.4457 38.9013C22.0406 43.0141 23.0741 47.1402 25.3702 50.5764C27.6662 54.0127 31.0826 56.5465 35.0374 57.7461C38.9922 58.9458 43.2406 58.7371 47.0587 57.1556C50.8769 55.5741 54.0285 52.7176 55.9767 49.0728C57.9248 45.4281 58.5489 41.2206 57.7427 37.1673C56.9364 33.114 54.7497 29.4656 51.555 26.8438C48.3604 24.222 44.3555 22.7891 40.2228 22.7891L40.2228 19.5232Z'
                fill='white'
              />
              <path
                d='M27.5946 33.7948C29.1807 30.8736 31.7307 28.5926 34.81 27.3407C37.8892 26.0888 41.3074 25.9433 44.4819 26.929C47.6564 27.9147 50.391 29.9707 52.2196 32.7465C54.0482 35.5224 54.8578 38.8465 54.5103 42.1523C54.1628 45.4582 52.6799 48.5413 50.3141 50.8763C47.9483 53.2113 44.846 54.6538 41.5359 54.958C38.2258 55.2621 34.9127 54.4091 32.1609 52.5443C29.4092 50.6795 27.3893 47.9183 26.4452 44.7312L28.7731 44.0416C29.5576 46.6902 31.2363 48.9848 33.523 50.5345C35.8097 52.0842 38.563 52.793 41.3138 52.5403C44.0645 52.2875 46.6426 51.0888 48.6086 49.1483C50.5746 47.2079 51.807 44.6458 52.0957 41.8985C52.3845 39.1513 51.7117 36.389 50.1921 34.0822C48.6725 31.7754 46.4 30.0668 43.7619 29.2477C41.1238 28.4285 38.2833 28.5494 35.7244 29.5898C33.1654 30.6302 31.0464 32.5257 29.7283 34.9533L27.5946 33.7948Z'
                fill='white'
              />
              <path
                d='M46.5126 44.9353C45.5222 46.3899 44.0581 47.4561 42.3696 47.9522C40.6812 48.4483 38.873 48.3437 37.2531 47.6561C35.6332 46.9685 34.3019 45.7405 33.4859 44.1813C32.6699 42.6221 32.4198 40.8282 32.7782 39.1053C33.1365 37.3824 34.0812 35.837 35.4512 34.7325C36.8213 33.6281 38.5319 33.0328 40.2916 33.0481C42.0513 33.0635 43.7513 33.6885 45.1018 34.8168C46.4524 35.945 47.3699 37.5066 47.6982 39.2355L46.2993 39.5011C46.0325 38.0958 45.2867 36.8266 44.1889 35.9095C43.0912 34.9925 41.7095 34.4845 40.2792 34.472C38.8489 34.4595 37.4585 34.9434 36.3449 35.8411C35.2313 36.7388 34.4635 37.9949 34.1722 39.3953C33.8809 40.7957 34.0842 42.2537 34.7475 43.521C35.4107 44.7883 36.4929 45.7865 37.8095 46.3454C39.1262 46.9042 40.5959 46.9893 41.9682 46.5861C43.3406 46.1828 44.5306 45.3162 45.3356 44.1339L46.5126 44.9353Z'
                fill='white'
              />
              <path
                d='M38.8804 36.6443C39.8075 36.334 40.8135 36.3549 41.727 36.7033C42.6405 37.0516 43.405 37.706 43.8901 38.5548C44.3752 39.4036 44.551 40.3943 44.3876 41.3582C44.2241 42.3221 43.7315 43.1995 42.9936 43.841C42.2558 44.4824 41.3184 44.8481 40.3411 44.8758C39.3638 44.9035 38.4072 44.5915 37.6341 43.993C36.8611 43.3945 36.3195 42.5464 36.1017 41.5933C35.8838 40.6402 36.0032 39.6411 36.4394 38.7661L37.9214 39.505C37.6561 40.0371 37.5835 40.6447 37.716 41.2243C37.8485 41.8039 38.1778 42.3197 38.6479 42.6837C39.118 43.0476 39.6998 43.2374 40.2941 43.2205C40.8884 43.2037 41.4585 42.9812 41.9072 42.5912C42.3559 42.2011 42.6555 41.6676 42.7549 41.0814C42.8543 40.4952 42.7474 39.8927 42.4524 39.3765C42.1574 38.8603 41.6925 38.4624 41.137 38.2505C40.5814 38.0387 39.9697 38.026 39.4058 38.2146L38.8804 36.6443Z'
                fill='white'
              />
              <circle
                cx='40.2252'
                cy='40.6548'
                r='0.845162'
                transform='rotate(-180 40.2252 40.6548)'
                fill='white'
              />
            </svg>
          </span>
          <h2>Portfolio</h2>
        </article>
        <article className='footer-contact'>
          <h3>Contacts</h3>
          <h6>No, 6 Olohunshogo, </h6>
          <h6>street Gaa Akanbi, Ilorin.</h6>
          <h6>+234 9013139157</h6>
          <h6>abdulsalammuhammed093@gmail.com</h6>
        </article>
        <article className='footer-links'>
          <h3>Follow Me On Social Media</h3>
          <p>
            I have an active and engaged Social Media Presence. Stay up to date
            on what’s going on and my works I do post!
          </p>
          <div className='footer-links-container'>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaInstagram />
            </span>
          </div>
        </article>
      </div>
      <hr />
      <p>Copyright © 2024 Muhammed Abdulsalam. All Rights Reserved.</p>
    </div>
  )
}

export default Footer