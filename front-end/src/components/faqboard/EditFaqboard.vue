<template>
  <!--    기존 회원이 있을 경우 currentCustomer != null -->
  <div class="container mt-5 pt-5" v-if="currentFaqboard">
    <!--    mb-3 : m(margin), p(padding) : l(left), r(right), b(bottom) , 1 : 25px, 2 50px -->
    <div>
      <h1>Q&A 수정</h1>
      <br />
    </div>
    <div class="mb-3">
      <label for="no" class="form-label">No</label>
      <input
        type="text"
        class="form-control"
        id="no"
        required
        name="no"
        v-model="currentFaqboard.no"
      />
    </div>
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        required
        name="title"
        v-model="currentFaqboard.title"
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">Content</label>
      <input
        type="text"
        class="form-control"
        id="content"
        required
        name="content"
        v-model="currentFaqboard.content"
      />
    </div>
    <div class="mb-3">
      <label for="writer" class="form-label">Writer</label>
      <input
        type="text"
        class="form-control"
        id="writer"
        required
        name="writer"
        v-model="currentFaqboard.writer"
      />
    </div>
    <div class="mb-3">
      <button @click="updateFaqboard" class="btn btn-primary me-3">
        Update
      </button>
      <button @click="deleteFaqboard" class="btn btn-danger">Delete</button>
    </div>
    <!--    수정버튼을 클릭후 성공했을때 아래가 보임 -->
    <div class="alert alert-success" role="alert" v-if="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
// 화면 설명 : 회원정보 수정 /삭제 화면
import FaqboardDataService from "@/services/FaqboardDataService";

export default {
  name: "edit-faqboard",
  data() {
    return {
      // 객체 ( 회원정보 )
      currentFaqboard: null,
      message: "",
    };
  },
  methods: {
    // id에 해당하는 회원정보를 조회하는 서비스를 요청(springboot)
    getFaqboard(no) {
      // axios 통신이용 서비스 호출( springboot )
      FaqboardDataService.get(no)
        // 성공하면 then으로 결과 데이터가 들어옴( response.data )
        .then((response) => {
          this.currentFaqboard = response.data;
        })
        //  실패하면 catch로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    //  회원정보 수정 서비스 요청( springboot )
    updateFaqboard() {
      //  axios 통신으로 수정 서비스 요청( springboot )
      FaqboardDataService.update(this.currentFaqboard.no, this.currentFaqboard)
        //  성공하면 then 으로 결과 데이터가 들어옴
        .then(() => {
          this.message = "The Q&A was updated successfully!";
        })
        //  실패하면 catch 로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    //  회원삭제 서비스 요청(springboot)
    deleteFaqboard() {
      //  axios 이용해서 회원 삭제 요청( springboot )
      FaqboardDataService.delete(this.currentFaqboard.no)
        //  성공하면 then으로 결과 데이터가 들어옴
        .then(() => {
          // router/index.js 안에 name
          // 화면 이동 : customers 화면으로 이동됨
          this.$router.push({ name: "faqboards" });
        })
        //  실패하면 catch로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
  },
  //  화면이 뜨면 실행되는 이벤트
  //  http://localhost:8080/:no
  //  $route : router/index.js , params.no
  mounted() {
    this.getFaqboard(this.$route.params.no);
  },
};
</script>
