class 삼성 {

}

class 애플 {

}
class 핸드폰 {
  constructor({ 브랜드, 전화번호 }) {
    this.브랜드 = 브랜드
    this.유심 = 유심
  }

  통화(상대방_핸드폰) {
    console.log( )
  }
}

class 유심 {
  constructor({ 전화번호, 통신사}) {
    this.전화번호 = 전화번호
    this.통신사 = 통신사
  }
}

const 내_핸드폰 = new 핸드폰({
  브랜드: new 삼성(),
  유심: new 유심({ 전화번호: '010', 통신사: 'KT'}),
});

const 상대방_핸드폰 = new 핸드폰({
  브랜드: new 삼성(),
  유심: new 유심({ 전화번호: '070', 통신사: 'KT'}),
})

console.log(내_핸드폰);
console.log(상대방_핸드폰);
내_핸드폰.통화(상대방_핸드폰);
