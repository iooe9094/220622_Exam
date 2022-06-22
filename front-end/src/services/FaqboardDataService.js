import http from "../http-common";

// springboot 연결하기 위한 메소드 정의
class FaqboardDataService {
  // 모든 회원 조회
  // TODO: getAll() -> getAll(params)
  getAll(params) {
    return http.get("/faqboards", { params });
  }
ß
  //    id로 회원 조회
  get(id) {
    return http.get(`/faqboards/${id}`);
  }

  //    회원 데이터를 생성(insert 문 호출)
  create(data) {
    return http.post("/faqboards", data);
  }

  //    회원 데이터를 수정 요청(update 문 호출)
  update(id, data) {
    return http.put(`/faqboards/${id}`, data);
  }

  //    회원 데이터를 삭제 요청(update 문 호출)
  delete(id) {
    return http.put(`/faqboards/deletion/${id}`);
  }
}

export default new FaqboardDataService();
