(root => {
  let isOpen = false;
  const body = document.querySelector("body");

  const toogleMenu = () => {
    const menu = document.querySelector("#menu");
    const overlay = document.querySelector("#overlay");

    if (!isOpen) {
      menu.classList.remove("menu-hide");
      overlay.style = null;
      body.style = "overflow-y: hidden;";
    } else {
      menu.classList.add("menu-hide");
      overlay.style = "display: none;";
      body.style = "overflow-y: auto;";
    }

    isOpen = !isOpen;
  };

  const Menu = () => `
    <div class="menu menu-hide" id="menu">
        <div class="menu-header">
          <div class="logo">
            <svg
              width="149"
              height="37"
              viewBox="0 0 149 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <path
                  d="M18.9817 14.7031H10.263L8.63795 24H4.05983L8.01295 1.25H22.4192L21.7473 5.04688H11.9348L10.9036 10.9219H19.6536L18.9817 14.7031ZM26.0911 24H21.513L25.4505 1.25H30.0286L26.0911 24ZM45.0755 22.5156L48.2317 25.6094L45.1067 28.0625L41.1223 24.1875C40.5286 24.2812 39.9765 24.3177 39.4661 24.2969C37.1952 24.276 35.3619 23.5052 33.9661 21.9844C32.5702 20.4635 31.7942 18.4167 31.638 15.8438C31.5442 14.5625 31.638 13.1354 31.9192 11.5625C32.2005 9.97917 32.6692 8.52604 33.3255 7.20312C33.9817 5.88021 34.7838 4.74479 35.7317 3.79688C36.69 2.84896 37.7786 2.13021 38.9973 1.64062C40.2161 1.14062 41.5077 0.90625 42.8723 0.9375C44.3932 0.96875 45.7265 1.32812 46.8723 2.01562C48.0182 2.70312 48.9244 3.69271 49.5911 4.98438C50.2577 6.27604 50.638 7.75521 50.7317 9.42188C50.7838 10.3281 50.7577 11.2344 50.6536 12.1406L50.388 13.9375C49.69 17.8125 47.9192 20.6719 45.0755 22.5156ZM46.138 10.5156C46.2109 8.58854 45.9452 7.16667 45.3411 6.25C44.7473 5.32292 43.8515 4.83854 42.6536 4.79688C40.7473 4.73438 39.2317 5.57812 38.1067 7.32812C36.9921 9.07812 36.3619 11.526 36.2161 14.6719C36.1119 16.5156 36.3567 17.9375 36.9505 18.9375C37.5442 19.9271 38.4661 20.4427 39.7161 20.4844C41.3515 20.5573 42.7057 19.9219 43.7786 18.5781C44.8515 17.224 45.5546 15.3125 45.888 12.8438C46.0234 11.8438 46.1067 11.0677 46.138 10.5156ZM72.7786 1.25L70.2161 16.25C69.8619 18.7604 68.8202 20.7448 67.0911 22.2031C65.3619 23.6615 63.2161 24.3698 60.6536 24.3281C59.0494 24.2969 57.6536 23.9479 56.4661 23.2812C55.289 22.6042 54.4192 21.6562 53.8567 20.4375C53.2942 19.2083 53.1015 17.8177 53.2786 16.2656L55.8255 1.25H60.4036L57.8567 16.2812C57.7838 16.8646 57.7786 17.4115 57.8411 17.9219C58.0494 19.6094 59.0546 20.4844 60.8567 20.5469C62.1484 20.5885 63.2057 20.2344 64.0286 19.4844C64.8515 18.7344 65.3827 17.6615 65.6223 16.2656L68.1848 1.25H72.7786ZM87.638 14.1406H78.9192L77.8567 20.2344H88.1067L87.4505 24H72.6223L76.5755 1.25H91.3723L90.7005 5.04688H80.4973L79.5442 10.4688H88.2942L87.638 14.1406ZM105.169 14.7031H96.4505L94.8255 24H90.2473L94.2005 1.25H108.607L107.935 5.04688H98.1223L97.0911 10.9219H105.841L105.169 14.7031ZM112.279 24H107.7L111.638 1.25H116.216L112.279 24ZM136.075 5.04688H129.325L126.044 24H121.466L124.747 5.04688H118.075L118.747 1.25H136.747L136.075 5.04688ZM140.966 17.0156H137.294L139.513 1.25H144.216L140.966 17.0156ZM135.841 21.9531C135.82 21.2656 136.039 20.6875 136.497 20.2188C136.956 19.7396 137.539 19.4896 138.247 19.4688C138.914 19.4479 139.492 19.6562 139.982 20.0938C140.471 20.5208 140.726 21.0833 140.747 21.7812C140.768 22.4688 140.549 23.0521 140.091 23.5312C139.633 24.0104 139.044 24.2604 138.325 24.2812C137.596 24.2812 136.997 24.0521 136.529 23.5938C136.07 23.1354 135.841 22.5885 135.841 21.9531Z"
                  fill="#2D132C"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0.0598297"
                  y="0.934692"
                  width="148.156"
                  height="35.1278"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div class="name-user">Olá, <span id="user-name"></span>!</div>
        </div>
        <nav class="menu-body">
          <div class="options">
            <div class="option option-active">
              Listagem de Exercícios
            </div>
            <div class="option" onClick="window.location.href = './myprogress.html'">
              Meu Progresso
            </div>
            <div class="option" onClick="window.location.href = './tips.html'">
              Dicas
            </div>
            <div class="option" onClick="window.location.href = './config.html'">
              Configurações
            </div>
            <div class="option" onClick="window.location.href = '../index.html'">
              Sair
            </div>
          </div>
        </nav>
      </div>`;

  body.innerHTML = body.innerHTML + Menu();
  root.toogleMenu = toogleMenu;
})(window);
