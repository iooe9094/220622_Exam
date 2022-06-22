<template>
  <div id="app">
    <!-- sticky-top / sticky-bottom -> 메뉴 바 고정하는 부트스트랩 -->
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      id="mainNav"
    >
      <div class="container">
        <a class="navbar-brand ml-0" href="/home">
          <img
            src="@/assets/Test2/img/appleicon.png"
            alt=""
            width="30"
            height="24"
          />
          Boseok
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mr-0" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <!-- dropdown #1 시작 -->
            <li class="nav-item">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </a>
              <div class="dropdown">
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <router-link to="/home" class="dropdown-item">
                    Home
                  </router-link>
                </div>
              </div>
            </li>
            <!-- dropdown #1 끝 -->

            <!-- dropdown #2 시작 -->
            <li class="nav-item">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Customer Manager
              </a>
              <div class="dropdown">
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <router-link to="/customers" class="dropdown-item">
                    Customer List
                  </router-link>
                  <router-link to="/add-customer" class="dropdown-item">
                    Add New Customer
                  </router-link>
                </div>
              </div>
            </li>
            <!-- dropdown #2 끝 -->

            <!-- dropdown #3 시작 -->
            <li class="nav-item">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Q&A게시판
              </a>
              <div class="dropdown">
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <router-link to="/faqboards" class="dropdown-item">
                    Q&A 목록
                  </router-link>
                  <router-link to="/add-faqboard" class="dropdown-item">
                    Q&A 글쓰기
                  </router-link>
                </div>
              </div>
            </li>
            <!-- dropdown #3 끝 -->
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <div class="container mt-3 mb-5">
      <a href="https://www.flaticon.com/free-icons/apple" title="apple icons"
        >Apple icons created by Freepik - Flaticon</a
      >
    </div>
    <div class="container">
      <!-- 위의 router-link 있는 메뉴 화면이 아래위치에 표시 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
