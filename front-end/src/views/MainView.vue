<template>
  <div id="page-top">
    <!-- Navigation-->
    <!--    bootstrap : m(margin), l(left), r(right), t(top), b(bottom) -1,2,3,4,5 -->
    <a class="menu-toggle rounded mt-5" href="#" id="sidemenu">
      <i class="fas fa-bars"></i>
    </a>

    <nav id="sidebar-wrapper">
      <ul class="sidebar-nav">
        <li class="sidebar-brand"><a href="#page-top">Start Bootstrap</a></li>
        <li class="nav-item">
          <a class="nav-link" href="#services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#portfolio">Portfolio</a>
        </li>
        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
    <HeaderCom></HeaderCom>
    <SectionCom></SectionCom>
    <FooterCom></FooterCom>
    <PortfolioCom></PortfolioCom>
  </div>
</template>

<script>
import loadWin from "@/assets/Test2/js/scripts";
import loadWin2 from "@/assets/Test2/js/scripts2";
import HeaderCom from "@/components/main/HeaderCom.vue";
import SectionCom from "@/components/main/SectionCom.vue";
import FooterCom from "@/components/main/FooterCom.vue";
import PortfolioCom from "@/components/main/PortfolioCom.vue";

export default {
  name: "Test2View",
  components: { HeaderCom, SectionCom, FooterCom, PortfolioCom },
  mounted() {
    loadWin();
    loadWin2();
  },
};
</script>

<style></style>
