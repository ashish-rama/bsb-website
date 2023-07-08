'use client';

import { Popover } from '@headlessui/react';

export function Header() {
  return (
    <div className="flex justify-between items-center h-24">
      <div className="flex justify-start">
        <div className="hidden lg:block">
          <a aria-label="Tremor  Logo and Home Link" href="/">
            <div className="-mt-1">
              <svg
                width="429.00000000000006"
                height="56.76384485528456"
                viewBox="0 0 370.3333333333333 49.00126778105761"
                className="css-1j8o68f h-8 w-auto"
              >
                <defs id="SvgjsDefs6137"></defs>
                <g
                  id="SvgjsG6138"
                  key="symbolFeature-0"
                  transform="matrix(0.5185185185185186,0,0,0.5185185185185186,-2.592592592592593,-1.592592592592593)"
                  fill="#2563eb"
                >
                  <g xmlns="http://www.w3.org/2000/svg">
                    <path d="M69,32.5c9.9-7.7,16.3,1.6,16.4,1.4c-0.1-7.2-5-17.7-14.4-16.6C63.5,18.3,60.2,15,55.5,11c-0.5-0.4-1.2-0.1-1.2,0.5v20.9   c0,0.7,0.5,1.2,1,1.7C60.7,39.5,65.8,35,69,32.5z"></path>
                    <path d="M41.5,79.7c0,1.2,3.8,2.1,8.5,2.1c4.7,0,8.5-0.9,8.5-2.1c0-1-3-1.9-7-2.1V6.2c0-0.7-0.6-1.2-1.3-1.2H50   c-0.7,0-1.3,0.6-1.3,1.2v71.4C44.6,77.8,41.5,78.6,41.5,79.7z"></path>
                    <path d="M54,67.5v1.9c21.1,0.5,37.7,4.9,37.7,10.2c0,5.7-18.6,10.3-41.6,10.3S8.4,85.3,8.4,79.6c0-5.3,16.3-9.7,37.2-10.2v-1.9   C19.7,68.1,5,73.4,5,80.7c0,7.8,20.1,14,45,14s45-6.3,45-14C95,73.3,80.2,68,54,67.5z"></path>
                    <path d="M54,67.5v1.9c21.1,0.5,37.7,4.9,37.7,10.2c0,5.7-18.6,10.3-41.6,10.3S8.4,85.3,8.4,79.6c0-5.3,16.3-9.7,37.2-10.2v-1.9   C19.7,68.1,5,73.4,5,80.7c0,7.8,20.1,14,45,14s45-6.3,45-14C95,73.3,80.2,68,54,67.5z"></path>
                  </g>
                </g>
                <g
                  id="SvgjsG6139"
                  key="nameFeature-0"
                  transform="matrix(1.2413617883957746,0,0,1.2413617883957746,62.465554148043196,-12.412625813589289)"
                  fill="#2563eb"
                >
                  <path d="M18.809 25.098 c3.1836 0.87891 5.3125 2.9688 5.3125 6.9922 c0 4.7656 -2.8906 7.9102 -8.8477 7.9102 l-11.621 0 l0 -28.223 l9.1406 0 c6.0938 0 9.2969 2.9297 9.2969 7.7344 c0 2.4805 -1.0742 4.5117 -3.2813 5.5859 z M12.852 16.641 l-3.5547 0 l0 6.6406 l3.8086 0 c2.5 0 3.5938 -1.4844 3.5938 -3.3984 c0 -1.875 -1.2305 -3.2422 -3.8477 -3.2422 z M14.18 34.9805 c3.1641 0 4.2578 -1.6992 4.2578 -3.5352 c0 -1.875 -1.0742 -3.6523 -4.375 -3.6523 l-4.7656 0 l0 7.1875 l4.8828 0 z M39.0088515625 19.922 l5.625 0 l0 20.078 l-5.332 0 l-0.13672 -2.4219 c-1.4063 1.7773 -3.6328 2.8125 -6.3867 2.8125 c-4.8242 0 -7.4805 -2.5195 -7.4805 -6.9531 l0 -13.516 l5.6445 0 l0 12.305 c0 2.6563 1.6602 3.6328 3.6133 3.6328 c2.3242 0 4.4336 -1.1719 4.4531 -4.8633 l0 -11.074 z M60.713203125 19.922 l5.7617 0 l-12.383 29.531 l-5.7031 0 l4.5898 -10.273 l-8.2617 -19.258 l6.1328 0 l4.7852 13.203 z M73.6279609375 40.39063 c-4.5117 0 -8.0078 -1.7773 -8.7305 -5.5859 l4.707 -1.3281 c0.60547 2.1484 2.1289 2.9883 4.0234 2.9883 c1.3867 0 2.8906 -0.42969 2.8516 -2.0117 c-0.019531 -2.0898 -3.1836 -2.2656 -6.3672 -3.3984 c-2.4023 -0.83984 -4.707 -2.1289 -4.707 -5.5078 c0 -4.1211 3.418 -6.0156 7.8711 -6.0156 c3.9063 0 7.168 1.4844 7.9492 5.3125 l-4.3555 0.97656 c-0.60547 -1.875 -1.9336 -2.5391 -3.5742 -2.5391 c-1.4844 0 -2.7539 0.52734 -2.7539 1.7773 c0 1.582 2.3242 1.8945 4.8438 2.5781 c3.1055 0.83984 6.5039 2.1875 6.5039 6.4844 c0 4.6094 -3.9258 6.2695 -8.2617 6.2695 z M85.91801875 16.914 c-1.7773 0 -3.2617 -1.4453 -3.2617 -3.2422 c0 -1.7773 1.4844 -3.2227 3.2617 -3.2227 c1.7383 0 3.2227 1.4453 3.2227 3.2227 c0 1.7969 -1.4844 3.2422 -3.2227 3.2422 z M83.04691875 40 l0 -20.078 l5.6641 0 l0 20.078 l-5.6641 0 z M105.8833515625 10 l5.625 0 l0 30 l-5.332 0 l-0.13672 -2.6172 c-1.1523 1.9727 -3.5742 3.0859 -6.3086 3.0859 c-5.293 0 -9.668 -3.9063 -9.668 -10.469 s4.3945 -10.469 9.668 -10.469 c2.6367 0 4.9609 0.99609 6.1523 2.8125 l0 -12.344 z M101.0203515625 35.8008 c2.9883 0 5.3125 -2.2852 5.3125 -5.8008 s-2.3438 -5.8203 -5.3125 -5.8203 c-2.9883 0 -5.332 2.207 -5.332 5.8203 c0 3.5938 2.3438 5.8008 5.332 5.8008 z M133.330203125 29.668 l-0.058594 1.3477 l-14.883 0 c0.23438 3.3398 2.4609 4.9414 5.1367 4.9414 c2.0117 0 3.5742 -0.9375 4.3359 -2.7148 l5.1563 0.76172 c-1.3281 4.0625 -4.9414 6.3867 -9.4531 6.3867 c-6.4844 0 -10.723 -3.8281 -10.723 -10.43 s4.3555 -10.469 10.547 -10.469 c5.6836 0 9.9219 3.1445 9.9414 10.176 z M123.428203125 23.477 c-2.5586 0 -4.3359 1.1914 -4.8828 3.8672 l9.2188 0 c-0.29297 -2.5586 -2.0313 -3.8672 -4.3359 -3.8672 z M158.12540625 25.098 c3.1836 0.87891 5.3125 2.9688 5.3125 6.9922 c0 4.7656 -2.8906 7.9102 -8.8477 7.9102 l-11.621 0 l0 -28.223 l9.1406 0 c6.0938 0 9.2969 2.9297 9.2969 7.7344 c0 2.4805 -1.0742 4.5117 -3.2813 5.5859 z M152.16840625 16.641 l-3.5547 0 l0 6.6406 l3.8086 0 c2.5 0 3.5938 -1.4844 3.5938 -3.3984 c0 -1.875 -1.2305 -3.2422 -3.8477 -3.2422 z M153.49640625 34.9805 c3.1641 0 4.2578 -1.6992 4.2578 -3.5352 c0 -1.875 -1.0742 -3.6523 -4.375 -3.6523 l-4.7656 0 l0 7.1875 l4.8828 0 z M174.3802578125 40.39063 c-6.3867 0 -10.996 -3.8867 -10.996 -10.449 c0 -6.5234 4.5703 -10.41 10.996 -10.41 c6.4648 0 11.016 3.8867 11.016 10.41 c0 6.5625 -4.5703 10.449 -11.016 10.449 z M174.3212578125 35.918 c3.2617 0 5.4883 -2.3828 5.4883 -5.9766 s-2.2266 -5.9766 -5.4883 -5.9766 c-3.1445 0 -5.3516 2.3828 -5.3516 5.9766 s2.207 5.9766 5.3516 5.9766 z M200.517296875 19.922 l5.3516 0 l0 18.574 c0 7.8125 -4.2383 10.977 -10.645 10.977 c-5.7617 0 -8.8867 -2.4219 -10.352 -6.2305 l4.668 -1.9922 c1.1328 2.5977 2.7734 3.8477 5.4688 3.8477 c3.5547 0 5.2148 -2.2266 5.2148 -6.1914 l0 -2.3438 c-1.1719 1.6016 -3.4766 2.7344 -6.0938 2.7344 c-4.9805 0 -9.1602 -3.9258 -9.1602 -9.9219 c0 -6.0156 4.1992 -9.8438 9.1992 -9.8438 c2.8125 0 5.1172 1.25 6.2109 3.0469 z M195.576296875 34.7461 c2.9297 0 5.1953 -2.3828 5.1953 -5.3711 c0 -3.0078 -2.2266 -5.3906 -5.1953 -5.3906 c-2.9492 0 -5.1758 2.2852 -5.1758 5.3906 c0 3.0664 2.2656 5.3711 5.1758 5.3711 z M227.7100859375 29.668 l-0.058594 1.3477 l-14.883 0 c0.23438 3.3398 2.4609 4.9414 5.1367 4.9414 c2.0117 0 3.5742 -0.9375 4.3359 -2.7148 l5.1563 0.76172 c-1.3281 4.0625 -4.9414 6.3867 -9.4531 6.3867 c-6.4844 0 -10.723 -3.8281 -10.723 -10.43 s4.3555 -10.469 10.547 -10.469 c5.6836 0 9.9219 3.1445 9.9414 10.176 z M217.8080859375 23.477 c-2.5586 0 -4.3359 1.1914 -4.8828 3.8672 l9.2188 0 c-0.29297 -2.5586 -2.0313 -3.8672 -4.3359 -3.8672 z M242.24640625 19.922 l5.7617 0 l-12.383 29.531 l-5.7031 0 l4.5898 -10.273 l-8.2617 -19.258 l6.1328 0 l4.7852 13.203 z"></path>
                </g>
              </svg>
            </div>
          </a>
        </div>
        <div className="lg:hidden">
          <a href="/">
            <div className="-mt-1">
              <svg
                width="429.00000000000006"
                height="56.76384485528456"
                viewBox="0 0 370.3333333333333 49.00126778105761"
                className="css-1j8o68f h-8 w-auto"
              >
                <defs id="SvgjsDefs6137"></defs>
                <g
                  id="SvgjsG6138"
                  key="symbolFeature-0"
                  transform="matrix(0.5185185185185186,0,0,0.5185185185185186,-2.592592592592593,-1.592592592592593)"
                  fill="#2563eb"
                >
                  <g xmlns="http://www.w3.org/2000/svg">
                    <path d="M69,32.5c9.9-7.7,16.3,1.6,16.4,1.4c-0.1-7.2-5-17.7-14.4-16.6C63.5,18.3,60.2,15,55.5,11c-0.5-0.4-1.2-0.1-1.2,0.5v20.9   c0,0.7,0.5,1.2,1,1.7C60.7,39.5,65.8,35,69,32.5z"></path>
                    <path d="M41.5,79.7c0,1.2,3.8,2.1,8.5,2.1c4.7,0,8.5-0.9,8.5-2.1c0-1-3-1.9-7-2.1V6.2c0-0.7-0.6-1.2-1.3-1.2H50   c-0.7,0-1.3,0.6-1.3,1.2v71.4C44.6,77.8,41.5,78.6,41.5,79.7z"></path>
                    <path d="M54,67.5v1.9c21.1,0.5,37.7,4.9,37.7,10.2c0,5.7-18.6,10.3-41.6,10.3S8.4,85.3,8.4,79.6c0-5.3,16.3-9.7,37.2-10.2v-1.9   C19.7,68.1,5,73.4,5,80.7c0,7.8,20.1,14,45,14s45-6.3,45-14C95,73.3,80.2,68,54,67.5z"></path>
                    <path d="M54,67.5v1.9c21.1,0.5,37.7,4.9,37.7,10.2c0,5.7-18.6,10.3-41.6,10.3S8.4,85.3,8.4,79.6c0-5.3,16.3-9.7,37.2-10.2v-1.9   C19.7,68.1,5,73.4,5,80.7c0,7.8,20.1,14,45,14s45-6.3,45-14C95,73.3,80.2,68,54,67.5z"></path>
                  </g>
                </g>
                <g
                  id="SvgjsG6139"
                  key="nameFeature-0"
                  transform="matrix(1.2413617883957746,0,0,1.2413617883957746,62.465554148043196,-12.412625813589289)"
                  fill="#2563eb"
                >
                  <path d="M18.809 25.098 c3.1836 0.87891 5.3125 2.9688 5.3125 6.9922 c0 4.7656 -2.8906 7.9102 -8.8477 7.9102 l-11.621 0 l0 -28.223 l9.1406 0 c6.0938 0 9.2969 2.9297 9.2969 7.7344 c0 2.4805 -1.0742 4.5117 -3.2813 5.5859 z M12.852 16.641 l-3.5547 0 l0 6.6406 l3.8086 0 c2.5 0 3.5938 -1.4844 3.5938 -3.3984 c0 -1.875 -1.2305 -3.2422 -3.8477 -3.2422 z M14.18 34.9805 c3.1641 0 4.2578 -1.6992 4.2578 -3.5352 c0 -1.875 -1.0742 -3.6523 -4.375 -3.6523 l-4.7656 0 l0 7.1875 l4.8828 0 z M39.0088515625 19.922 l5.625 0 l0 20.078 l-5.332 0 l-0.13672 -2.4219 c-1.4063 1.7773 -3.6328 2.8125 -6.3867 2.8125 c-4.8242 0 -7.4805 -2.5195 -7.4805 -6.9531 l0 -13.516 l5.6445 0 l0 12.305 c0 2.6563 1.6602 3.6328 3.6133 3.6328 c2.3242 0 4.4336 -1.1719 4.4531 -4.8633 l0 -11.074 z M60.713203125 19.922 l5.7617 0 l-12.383 29.531 l-5.7031 0 l4.5898 -10.273 l-8.2617 -19.258 l6.1328 0 l4.7852 13.203 z M73.6279609375 40.39063 c-4.5117 0 -8.0078 -1.7773 -8.7305 -5.5859 l4.707 -1.3281 c0.60547 2.1484 2.1289 2.9883 4.0234 2.9883 c1.3867 0 2.8906 -0.42969 2.8516 -2.0117 c-0.019531 -2.0898 -3.1836 -2.2656 -6.3672 -3.3984 c-2.4023 -0.83984 -4.707 -2.1289 -4.707 -5.5078 c0 -4.1211 3.418 -6.0156 7.8711 -6.0156 c3.9063 0 7.168 1.4844 7.9492 5.3125 l-4.3555 0.97656 c-0.60547 -1.875 -1.9336 -2.5391 -3.5742 -2.5391 c-1.4844 0 -2.7539 0.52734 -2.7539 1.7773 c0 1.582 2.3242 1.8945 4.8438 2.5781 c3.1055 0.83984 6.5039 2.1875 6.5039 6.4844 c0 4.6094 -3.9258 6.2695 -8.2617 6.2695 z M85.91801875 16.914 c-1.7773 0 -3.2617 -1.4453 -3.2617 -3.2422 c0 -1.7773 1.4844 -3.2227 3.2617 -3.2227 c1.7383 0 3.2227 1.4453 3.2227 3.2227 c0 1.7969 -1.4844 3.2422 -3.2227 3.2422 z M83.04691875 40 l0 -20.078 l5.6641 0 l0 20.078 l-5.6641 0 z M105.8833515625 10 l5.625 0 l0 30 l-5.332 0 l-0.13672 -2.6172 c-1.1523 1.9727 -3.5742 3.0859 -6.3086 3.0859 c-5.293 0 -9.668 -3.9063 -9.668 -10.469 s4.3945 -10.469 9.668 -10.469 c2.6367 0 4.9609 0.99609 6.1523 2.8125 l0 -12.344 z M101.0203515625 35.8008 c2.9883 0 5.3125 -2.2852 5.3125 -5.8008 s-2.3438 -5.8203 -5.3125 -5.8203 c-2.9883 0 -5.332 2.207 -5.332 5.8203 c0 3.5938 2.3438 5.8008 5.332 5.8008 z M133.330203125 29.668 l-0.058594 1.3477 l-14.883 0 c0.23438 3.3398 2.4609 4.9414 5.1367 4.9414 c2.0117 0 3.5742 -0.9375 4.3359 -2.7148 l5.1563 0.76172 c-1.3281 4.0625 -4.9414 6.3867 -9.4531 6.3867 c-6.4844 0 -10.723 -3.8281 -10.723 -10.43 s4.3555 -10.469 10.547 -10.469 c5.6836 0 9.9219 3.1445 9.9414 10.176 z M123.428203125 23.477 c-2.5586 0 -4.3359 1.1914 -4.8828 3.8672 l9.2188 0 c-0.29297 -2.5586 -2.0313 -3.8672 -4.3359 -3.8672 z M158.12540625 25.098 c3.1836 0.87891 5.3125 2.9688 5.3125 6.9922 c0 4.7656 -2.8906 7.9102 -8.8477 7.9102 l-11.621 0 l0 -28.223 l9.1406 0 c6.0938 0 9.2969 2.9297 9.2969 7.7344 c0 2.4805 -1.0742 4.5117 -3.2813 5.5859 z M152.16840625 16.641 l-3.5547 0 l0 6.6406 l3.8086 0 c2.5 0 3.5938 -1.4844 3.5938 -3.3984 c0 -1.875 -1.2305 -3.2422 -3.8477 -3.2422 z M153.49640625 34.9805 c3.1641 0 4.2578 -1.6992 4.2578 -3.5352 c0 -1.875 -1.0742 -3.6523 -4.375 -3.6523 l-4.7656 0 l0 7.1875 l4.8828 0 z M174.3802578125 40.39063 c-6.3867 0 -10.996 -3.8867 -10.996 -10.449 c0 -6.5234 4.5703 -10.41 10.996 -10.41 c6.4648 0 11.016 3.8867 11.016 10.41 c0 6.5625 -4.5703 10.449 -11.016 10.449 z M174.3212578125 35.918 c3.2617 0 5.4883 -2.3828 5.4883 -5.9766 s-2.2266 -5.9766 -5.4883 -5.9766 c-3.1445 0 -5.3516 2.3828 -5.3516 5.9766 s2.207 5.9766 5.3516 5.9766 z M200.517296875 19.922 l5.3516 0 l0 18.574 c0 7.8125 -4.2383 10.977 -10.645 10.977 c-5.7617 0 -8.8867 -2.4219 -10.352 -6.2305 l4.668 -1.9922 c1.1328 2.5977 2.7734 3.8477 5.4688 3.8477 c3.5547 0 5.2148 -2.2266 5.2148 -6.1914 l0 -2.3438 c-1.1719 1.6016 -3.4766 2.7344 -6.0938 2.7344 c-4.9805 0 -9.1602 -3.9258 -9.1602 -9.9219 c0 -6.0156 4.1992 -9.8438 9.1992 -9.8438 c2.8125 0 5.1172 1.25 6.2109 3.0469 z M195.576296875 34.7461 c2.9297 0 5.1953 -2.3828 5.1953 -5.3711 c0 -3.0078 -2.2266 -5.3906 -5.1953 -5.3906 c-2.9492 0 -5.1758 2.2852 -5.1758 5.3906 c0 3.0664 2.2656 5.3711 5.1758 5.3711 z M227.7100859375 29.668 l-0.058594 1.3477 l-14.883 0 c0.23438 3.3398 2.4609 4.9414 5.1367 4.9414 c2.0117 0 3.5742 -0.9375 4.3359 -2.7148 l5.1563 0.76172 c-1.3281 4.0625 -4.9414 6.3867 -9.4531 6.3867 c-6.4844 0 -10.723 -3.8281 -10.723 -10.43 s4.3555 -10.469 10.547 -10.469 c5.6836 0 9.9219 3.1445 9.9414 10.176 z M217.8080859375 23.477 c-2.5586 0 -4.3359 1.1914 -4.8828 3.8672 l9.2188 0 c-0.29297 -2.5586 -2.0313 -3.8672 -4.3359 -3.8672 z M242.24640625 19.922 l5.7617 0 l-12.383 29.531 l-5.7031 0 l4.5898 -10.273 l-8.2617 -19.258 l6.1328 0 l4.7852 13.203 z"></path>
                </g>
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <div
          id="menu-items"
          className="text-slate-500 relative hidden lg:flex justify-center text-base font-medium space-x-8"
        >
          <a href="/#about">
            <span className="hover:text-slate-700 transition-all">About</span>
          </a>
          <a href="/#features">
            <span className="inline-flex space-x-1">
              <span className="hover:text-slate-700 transition-all">
                Features
              </span>
            </span>
          </a>
          <a href="/#faq">
            <span className="inline-flex space-x-1">
              <span className="hover:text-slate-700 transition-all">FAQ</span>
            </span>
          </a>
          <a href="/contact">
            <span className="inline-flex space-x-1">
              <span className="hover:text-slate-700 transition-all">
                Contact
              </span>
            </span>
          </a>
        </div>

        <div className="lg:border-r py-4"></div>

        <div className="hidden lg:flex justify-end">
          <div className="flex space-x-3.5">
            <a
              href="https://mjkcbhiln9o.typeform.com/to/I6Lo0PRY"
              rel="noopener noreferrer"
              target="_blank"
              className="w-full bg-blue-600 flex items-center justify-center border border-transparent rounded-lg py-2 px-4 text-base font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
            >
              Join the Waitlist →
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-50 lg:hidden flex items-center space-x-4">
        <Popovers />
      </div>
    </div>
  );
}

export function Popovers() {
  return (
    <Popover className="relative">
      {({ open, close }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Popover.Button
            className={`${
              open ? '' : 'text-opacity-90'
            }} bg-slate-100 rounded-md p-2 text-slate-400 hover:text-slate-500`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </Popover.Button>
          {/* <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          > */}
          <Popover.Panel className="absolute z-10">
            <div
              className="fixed inset-x-0 top-0 z-50 m-1 opacity-100 scale-100"
              id="headlessui-popover-panel-:ra:"
              tabIndex={-1}
              data-headlessui-state="open"
            >
              <div className="rounded-xl shadow-lg ring-tremor bg-white m-2">
                <div
                  id="mobile-nav-header"
                  className="flex justify-between items-center py-3 px-5"
                >
                  <div className="flex justify-start lg:w-1/4">
                    <a href="/">
                      <div className="-mt-1">
                        <svg
                          width="429.00000000000006"
                          height="56.76384485528456"
                          viewBox="0 0 370.3333333333333 49.00126778105761"
                          className="css-1j8o68f h-8 w-auto"
                        >
                          <defs id="SvgjsDefs6137"></defs>
                          <g
                            id="SvgjsG6138"
                            key="symbolFeature-0"
                            transform="matrix(0.5185185185185186,0,0,0.5185185185185186,-2.592592592592593,-1.592592592592593)"
                            fill="#2563eb"
                          >
                            <g xmlns="http://www.w3.org/2000/svg">
                              <path d="M69,32.5c9.9-7.7,16.3,1.6,16.4,1.4c-0.1-7.2-5-17.7-14.4-16.6C63.5,18.3,60.2,15,55.5,11c-0.5-0.4-1.2-0.1-1.2,0.5v20.9   c0,0.7,0.5,1.2,1,1.7C60.7,39.5,65.8,35,69,32.5z"></path>
                              <path d="M41.5,79.7c0,1.2,3.8,2.1,8.5,2.1c4.7,0,8.5-0.9,8.5-2.1c0-1-3-1.9-7-2.1V6.2c0-0.7-0.6-1.2-1.3-1.2H50   c-0.7,0-1.3,0.6-1.3,1.2v71.4C44.6,77.8,41.5,78.6,41.5,79.7z"></path>
                              <path d="M54,67.5v1.9c21.1,0.5,37.7,4.9,37.7,10.2c0,5.7-18.6,10.3-41.6,10.3S8.4,85.3,8.4,79.6c0-5.3,16.3-9.7,37.2-10.2v-1.9   C19.7,68.1,5,73.4,5,80.7c0,7.8,20.1,14,45,14s45-6.3,45-14C95,73.3,80.2,68,54,67.5z"></path>
                              <path d="M54,67.5v1.9c21.1,0.5,37.7,4.9,37.7,10.2c0,5.7-18.6,10.3-41.6,10.3S8.4,85.3,8.4,79.6c0-5.3,16.3-9.7,37.2-10.2v-1.9   C19.7,68.1,5,73.4,5,80.7c0,7.8,20.1,14,45,14s45-6.3,45-14C95,73.3,80.2,68,54,67.5z"></path>
                            </g>
                          </g>
                          <g
                            id="SvgjsG6139"
                            key="nameFeature-0"
                            transform="matrix(1.2413617883957746,0,0,1.2413617883957746,62.465554148043196,-12.412625813589289)"
                            fill="#2563eb"
                          >
                            <path d="M18.809 25.098 c3.1836 0.87891 5.3125 2.9688 5.3125 6.9922 c0 4.7656 -2.8906 7.9102 -8.8477 7.9102 l-11.621 0 l0 -28.223 l9.1406 0 c6.0938 0 9.2969 2.9297 9.2969 7.7344 c0 2.4805 -1.0742 4.5117 -3.2813 5.5859 z M12.852 16.641 l-3.5547 0 l0 6.6406 l3.8086 0 c2.5 0 3.5938 -1.4844 3.5938 -3.3984 c0 -1.875 -1.2305 -3.2422 -3.8477 -3.2422 z M14.18 34.9805 c3.1641 0 4.2578 -1.6992 4.2578 -3.5352 c0 -1.875 -1.0742 -3.6523 -4.375 -3.6523 l-4.7656 0 l0 7.1875 l4.8828 0 z M39.0088515625 19.922 l5.625 0 l0 20.078 l-5.332 0 l-0.13672 -2.4219 c-1.4063 1.7773 -3.6328 2.8125 -6.3867 2.8125 c-4.8242 0 -7.4805 -2.5195 -7.4805 -6.9531 l0 -13.516 l5.6445 0 l0 12.305 c0 2.6563 1.6602 3.6328 3.6133 3.6328 c2.3242 0 4.4336 -1.1719 4.4531 -4.8633 l0 -11.074 z M60.713203125 19.922 l5.7617 0 l-12.383 29.531 l-5.7031 0 l4.5898 -10.273 l-8.2617 -19.258 l6.1328 0 l4.7852 13.203 z M73.6279609375 40.39063 c-4.5117 0 -8.0078 -1.7773 -8.7305 -5.5859 l4.707 -1.3281 c0.60547 2.1484 2.1289 2.9883 4.0234 2.9883 c1.3867 0 2.8906 -0.42969 2.8516 -2.0117 c-0.019531 -2.0898 -3.1836 -2.2656 -6.3672 -3.3984 c-2.4023 -0.83984 -4.707 -2.1289 -4.707 -5.5078 c0 -4.1211 3.418 -6.0156 7.8711 -6.0156 c3.9063 0 7.168 1.4844 7.9492 5.3125 l-4.3555 0.97656 c-0.60547 -1.875 -1.9336 -2.5391 -3.5742 -2.5391 c-1.4844 0 -2.7539 0.52734 -2.7539 1.7773 c0 1.582 2.3242 1.8945 4.8438 2.5781 c3.1055 0.83984 6.5039 2.1875 6.5039 6.4844 c0 4.6094 -3.9258 6.2695 -8.2617 6.2695 z M85.91801875 16.914 c-1.7773 0 -3.2617 -1.4453 -3.2617 -3.2422 c0 -1.7773 1.4844 -3.2227 3.2617 -3.2227 c1.7383 0 3.2227 1.4453 3.2227 3.2227 c0 1.7969 -1.4844 3.2422 -3.2227 3.2422 z M83.04691875 40 l0 -20.078 l5.6641 0 l0 20.078 l-5.6641 0 z M105.8833515625 10 l5.625 0 l0 30 l-5.332 0 l-0.13672 -2.6172 c-1.1523 1.9727 -3.5742 3.0859 -6.3086 3.0859 c-5.293 0 -9.668 -3.9063 -9.668 -10.469 s4.3945 -10.469 9.668 -10.469 c2.6367 0 4.9609 0.99609 6.1523 2.8125 l0 -12.344 z M101.0203515625 35.8008 c2.9883 0 5.3125 -2.2852 5.3125 -5.8008 s-2.3438 -5.8203 -5.3125 -5.8203 c-2.9883 0 -5.332 2.207 -5.332 5.8203 c0 3.5938 2.3438 5.8008 5.332 5.8008 z M133.330203125 29.668 l-0.058594 1.3477 l-14.883 0 c0.23438 3.3398 2.4609 4.9414 5.1367 4.9414 c2.0117 0 3.5742 -0.9375 4.3359 -2.7148 l5.1563 0.76172 c-1.3281 4.0625 -4.9414 6.3867 -9.4531 6.3867 c-6.4844 0 -10.723 -3.8281 -10.723 -10.43 s4.3555 -10.469 10.547 -10.469 c5.6836 0 9.9219 3.1445 9.9414 10.176 z M123.428203125 23.477 c-2.5586 0 -4.3359 1.1914 -4.8828 3.8672 l9.2188 0 c-0.29297 -2.5586 -2.0313 -3.8672 -4.3359 -3.8672 z M158.12540625 25.098 c3.1836 0.87891 5.3125 2.9688 5.3125 6.9922 c0 4.7656 -2.8906 7.9102 -8.8477 7.9102 l-11.621 0 l0 -28.223 l9.1406 0 c6.0938 0 9.2969 2.9297 9.2969 7.7344 c0 2.4805 -1.0742 4.5117 -3.2813 5.5859 z M152.16840625 16.641 l-3.5547 0 l0 6.6406 l3.8086 0 c2.5 0 3.5938 -1.4844 3.5938 -3.3984 c0 -1.875 -1.2305 -3.2422 -3.8477 -3.2422 z M153.49640625 34.9805 c3.1641 0 4.2578 -1.6992 4.2578 -3.5352 c0 -1.875 -1.0742 -3.6523 -4.375 -3.6523 l-4.7656 0 l0 7.1875 l4.8828 0 z M174.3802578125 40.39063 c-6.3867 0 -10.996 -3.8867 -10.996 -10.449 c0 -6.5234 4.5703 -10.41 10.996 -10.41 c6.4648 0 11.016 3.8867 11.016 10.41 c0 6.5625 -4.5703 10.449 -11.016 10.449 z M174.3212578125 35.918 c3.2617 0 5.4883 -2.3828 5.4883 -5.9766 s-2.2266 -5.9766 -5.4883 -5.9766 c-3.1445 0 -5.3516 2.3828 -5.3516 5.9766 s2.207 5.9766 5.3516 5.9766 z M200.517296875 19.922 l5.3516 0 l0 18.574 c0 7.8125 -4.2383 10.977 -10.645 10.977 c-5.7617 0 -8.8867 -2.4219 -10.352 -6.2305 l4.668 -1.9922 c1.1328 2.5977 2.7734 3.8477 5.4688 3.8477 c3.5547 0 5.2148 -2.2266 5.2148 -6.1914 l0 -2.3438 c-1.1719 1.6016 -3.4766 2.7344 -6.0938 2.7344 c-4.9805 0 -9.1602 -3.9258 -9.1602 -9.9219 c0 -6.0156 4.1992 -9.8438 9.1992 -9.8438 c2.8125 0 5.1172 1.25 6.2109 3.0469 z M195.576296875 34.7461 c2.9297 0 5.1953 -2.3828 5.1953 -5.3711 c0 -3.0078 -2.2266 -5.3906 -5.1953 -5.3906 c-2.9492 0 -5.1758 2.2852 -5.1758 5.3906 c0 3.0664 2.2656 5.3711 5.1758 5.3711 z M227.7100859375 29.668 l-0.058594 1.3477 l-14.883 0 c0.23438 3.3398 2.4609 4.9414 5.1367 4.9414 c2.0117 0 3.5742 -0.9375 4.3359 -2.7148 l5.1563 0.76172 c-1.3281 4.0625 -4.9414 6.3867 -9.4531 6.3867 c-6.4844 0 -10.723 -3.8281 -10.723 -10.43 s4.3555 -10.469 10.547 -10.469 c5.6836 0 9.9219 3.1445 9.9414 10.176 z M217.8080859375 23.477 c-2.5586 0 -4.3359 1.1914 -4.8828 3.8672 l9.2188 0 c-0.29297 -2.5586 -2.0313 -3.8672 -4.3359 -3.8672 z M242.24640625 19.922 l5.7617 0 l-12.383 29.531 l-5.7031 0 l4.5898 -10.273 l-8.2617 -19.258 l6.1328 0 l4.7852 13.203 z"></path>
                          </g>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <button
                    className="bg-slate-100 rounded-md p-2 text-slate-400 hover:text-slate-500 hover:bg-slate-100"
                    onClick={async () => {
                      close();
                    }}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-7 w-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div id="mobile-nav-items" className="py-3 px-5 text-lg">
                  <a
                    href="/#about"
                    onClick={async () => {
                      close();
                    }}
                  >
                    <span
                      className="text-slate-700 font-medium inline-block w-full py-4"
                      aria-hidden="true"
                    >
                      About
                    </span>
                  </a>
                  <a
                    href="/#features"
                    onClick={async () => {
                      close();
                    }}
                  >
                    <span
                      className="text-slate-700 font-medium w-full py-4 inline-flex space-x-1"
                      aria-hidden="true"
                    >
                      <span>Features</span>
                    </span>
                  </a>
                  <a
                    href="/#faq"
                    onClick={async () => {
                      close();
                    }}
                  >
                    <span
                      className="text-slate-700 font-medium inline-block w-full py-4"
                      aria-hidden="true"
                    >
                      FAQ
                    </span>
                  </a>
                  <a
                    href="/contact"
                    onClick={async () => {
                      close();
                    }}
                  >
                    <span
                      className="text-slate-700 font-medium inline-block w-full py-4"
                      aria-hidden="true"
                    >
                      Contact
                    </span>
                  </a>
                </div>
                <div className="flex items-center text-center px-5 rounded-b-xl bg-slate-50 py-4 space-x-6">
                  <a
                    href="https://mjkcbhiln9o.typeform.com/to/I6Lo0PRY"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="w-full bg-blue-600 flex items-center justify-center border border-transparent rounded-lg py-2 px-4 text-base font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
                  >
                    Join the Waitlist →
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
          {/* </Transition> */}
        </>
      )}
    </Popover>
  );
}
