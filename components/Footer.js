import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={`mb-4 max-w-5xl lg:mx-auto max-lg:px-4 lg:px-0 flex max-lg:flex-col max-lg:justify-center max-lg:items-center lg:justify-between items-center`}>
      <div className={`max-lg:text-center max-lg:mb-4`}>
        <p>Copyright &copy; { new Date().getFullYear() } <Link href="/" className={`underline`}>Blurryface</Link>.</p>
        <p>This website is <Link href="https://github.com/blryface/Website" className={`underline`}>open source</Link>.</p>
      </div>

      <div>
        <ul className={`flex gap-1`}>
          <li className={`p-1`}>
            <Link href="https://github.com/blryface" target="_blank" title="GitHub" className={`transition opacity-60 hover:opacity-100`}>
              <svg width="28px" height="28px" viewBox="0 0 24 24" className={`accent-white`}>
                <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
            </Link>
          </li>
          <li className={`p-1`}>
            <a href="https://tech.lgbt/@blurryface" target="_blank" title="Mastodon" className={`transition opacity-60 hover:opacity-100`}>
              <svg width="28px" height="28px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20.94,14C20.66,15.41 18.5,16.96 15.97,17.26C14.66,17.41 13.37,17.56 12,17.5C9.75,17.39 8,16.96 8,16.96V17.58C8.32,19.8 10.22,19.93 12.03,20C13.85,20.05 15.47,19.54 15.47,19.54L15.55,21.19C15.55,21.19 14.27,21.87 12,22C10.75,22.07 9.19,21.97 7.38,21.5C3.46,20.45 2.78,16.26 2.68,12L2.67,8.57C2.67,4.23 5.5,2.96 5.5,2.96C6.95,2.3 9.41,2 11.97,2H12.03C14.59,2 17.05,2.3 18.5,2.96C18.5,2.96 21.33,4.23 21.33,8.57C21.33,8.57 21.37,11.78 20.94,14M18,8.91C18,7.83 17.7,7 17.15,6.35C16.59,5.72 15.85,5.39 14.92,5.39C13.86,5.39 13.05,5.8 12.5,6.62L12,7.5L11.5,6.62C10.94,5.8 10.14,5.39 9.07,5.39C8.15,5.39 7.41,5.72 6.84,6.35C6.29,7 6,7.83 6,8.91V14.17H8.1V9.06C8.1,8 8.55,7.44 9.46,7.44C10.46,7.44 10.96,8.09 10.96,9.37V12.16H13.03V9.37C13.03,8.09 13.53,7.44 14.54,7.44C15.44,7.44 15.89,8 15.89,9.06V14.17H18V8.91Z" />
              </svg>
            </a>
          </li>
          <li className={`p-1`}>
            <a href="https://youtube.com/@blrryface" target="_blank" title="YouTube" className={`transition opacity-60 hover:opacity-100`}>
              <svg width="28px" height="28px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
              </svg>
            </a>
          </li>
          <li className={`p-1`}>
            <a href="https://twitch.tv/faceblrry" target="_blank" title="Twitch" className={`transition opacity-60 hover:opacity-100`}>
              <svg width="28px" height="28px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M11.64 5.93H13.07V10.21H11.64M15.57 5.93H17V10.21H15.57M7 2L3.43 5.57V18.43H7.71V22L11.29 18.43H14.14L20.57 12V2M19.14 11.29L16.29 14.14H13.43L10.93 16.64V14.14H7.71V3.43H19.14Z" />
              </svg>
            </a>
          </li>
          <li className={`p-1`}>
            <a href="https://discord.pridecraft.gay/" target="_blank" title="Discord" className={`transition opacity-60 hover:opacity-100`}>
              <svg width="28px" height="28px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19.6361 5.39641C18.1907 4.73466 16.6648 4.26519 15.0974 4C14.8829 4.38343 14.6888 4.77793 14.516 5.18185C12.8463 4.93025 11.1484 4.93025 9.47883 5.18185C9.30589 4.77797 9.11182 4.38348 8.89742 4C7.32898 4.26743 5.80206 4.73802 4.35518 5.39987C1.48276 9.64968 0.704089 13.7939 1.09342 17.8793C2.77559 19.1222 4.65841 20.0674 6.66004 20.6739C7.11075 20.0677 7.50957 19.4246 7.85227 18.7515C7.20136 18.5083 6.57312 18.2084 5.97481 17.8551C6.13228 17.7409 6.28628 17.6232 6.43509 17.509C8.17602 18.3278 10.0762 18.7523 12 18.7523C13.9238 18.7523 15.8239 18.3278 17.5649 17.509C17.7154 17.6319 17.8694 17.7496 18.0252 17.8551C17.4257 18.209 16.7963 18.5095 16.1442 18.7532C16.4865 19.426 16.8854 20.0686 17.3365 20.6739C19.3398 20.0699 21.2241 19.1251 22.9065 17.8811C23.3634 13.1433 22.1261 9.03712 19.6361 5.39641ZM8.34543 15.3668C7.26048 15.3668 6.36415 14.3823 6.36415 13.171C6.36415 11.9597 7.22934 10.9665 8.34197 10.9665C9.4546 10.9665 10.344 11.9597 10.325 13.171C10.3059 14.3823 9.45114 15.3668 8.34543 15.3668ZM15.6545 15.3668C14.5679 15.3668 13.675 14.3823 13.675 13.171C13.675 11.9597 14.5402 10.9665 15.6545 10.9665C16.7689 10.9665 17.6514 11.9597 17.6324 13.171C17.6133 14.3823 16.7602 15.3668 15.6545 15.3668Z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}