<template>
  <div class="container mt-5 pt-5">
    <div>
      <h1>Customer 게시판</h1>
      <br />
    </div>
    <div class="col-md-8">
      <div class="input-group mb-3">
        <!-- TODO: 수정 시작 #1 -->
        <input
          type="text"
          class="form-control"
          placeholder="Search by Email"
          v-model="searchEmail"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="
              page = 1;
              retrieveCustomers();
            "
          >
            Search
          </button>
        </div>
        <!-- TODO: 수정 끝 #1 -->
      </div>
    </div>

    <!-- TODO: PAGE BAR START -->
    <div class="'col-md-12">
      <div class="mb-3">
        Items per Page:
        <select v-model="pageSize" @change="handlePageSizeChange($event)">
          <!-- pageSizes : [3, 6, 9] -->
          <option v-for="size in pageSizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </div>
      <!-- page: 현재페이지, count: 총 데이터 건수 -->
      <!-- pageSize: 1페이지 당 개수(건수) -->
      <b-pagination
        v-model="page"
        :total-rows="count"
        :per-page="pageSize"
        prev-text="Prev"
        next-text="Next"
        @change="handlePageChange"
      >
      </b-pagination>
    </div>
    <!-- PAGE BAR END -->

    <div id="content">
      <table class="table table-striped table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <!--      조회 데이터 생성 부분-->
        <tbody v-for="(customer, index) in customers" :key="index">
          <tr>
            <td>{{ customer.firstName }}</td>
            <td>{{ customer.lastName }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.phone }}</td>
            <td>
              <a :href="'/customers/' + customer.id" class="btn btn-primary">
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CustomerDataService from "@/services/CustomerDataService";

/* eslint-disable */
export default {
  name: "customers",
  data() {
    // 변수 초기화
    return {
      customers: [],
      // TODO: title => searchEmail
      searchEmail: "",
      // TODO: 아래 변수 추가
      page: 1,
      count: 0,
      pageSize: 3,
      pageSizes: [3, 6, 9],
    };
  },
  methods: {
    // TODO: getRequestParams 추가
    // 역할: springboot로 매개변수(parameter) 전송
    // 웹 매개변수: http://localhost:8000/customers?page=1&Size=3
    getRequestParams(searchEmail, page, pageSize) {
      let params = {};

      // searchEmail 값이 있으면 params 객체에 email로 저장
      if (searchEmail) {
        params["email"] = searchEmail;
      }
      if (page) {
        params["page"] = page - 1;
      }
      if (pageSize) {
        params["size"] = pageSize;
      }
      // 3개가 다 들어왔다면 아래 형태로 springboot로 전송
      // params {
      //  "email" : "iooe9094@naver.com"
      //  "page" : 0,
      //  "pageSize" : 3
      // }
      return params;
    },
    // 모든 회원 조회 서비스 호출
    retrieveCustomers() {
      // TODO: getRequestParams 호출 추가
      const params = this.getRequestParams(
        this.searchEmail,
        this.page,
        this.pageSize
      );

      // TODO: getAll() -> getAll(params)
      // axios로 spring에 모든 회원 조회 요청
      CustomerDataService.getAll(params)
        // 성공하면 then으로 서버 데이터 전송
        // TODO: 아래 수정
        .then((response) => {
          // this.customers = response.data;
          const { customers, totalItems } = response.data;
          // springboot 받은 객체 정보
          this.customers = customers;
          // springboot에서 받은 페이지 총 개수
          this.count = totalItems;
        })
        // 실패하면 catch로 에러메세지 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    // TODO: 메소드 2개 추가, handlePageChange, handlePageSizeChange
    // 역할 : 현재 페이지 번호에 해당하는 데이터 다시 조회
    handlePageChange(value) {
      // 현재 페이지 변경
      this.page = value;
      // 다시 데이터 조회
      this.retrieveCustomers();
    },
    // 페이지 사이즈(3,6,9) 변경 시 호출되는 메소드
    handlePageSizeChange(event) {
      this.pageSize = event.target.value; // select박스의 값
      this.page = 1;
      // 재 조회
      this.retrieveCustomers();
    },
  },
  //화면이 뜨자마자 실행되는 이벤트(모든 회원조회가 실행됨)
  mounted() {
    this.retrieveCustomers();
  },
};
</script>
