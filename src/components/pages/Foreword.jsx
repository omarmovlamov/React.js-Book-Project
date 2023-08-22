import { Link } from "react-router-dom";

function Foreword({ lang }) {
  if (lang === "tr") {
    return (
      <div className="panel book">
        <h1 className="is-size-2" style={{ textAlign: "center" }}>
          Ön Söz
        </h1>
        <div className="circle"></div>
        <p>
          <b>React.js</b>, modern web geliştirmenin heyecan verici bir
          parçasıdır. Bu kitap, React.js'i öğrenmeye başlamak veya mevcut
          bilgilerinizi derinleştirmek isteyen herkese yöneliktir. React.js, web
          uygulamaları geliştirmenin en güçlü araçlarından biri haline geldi ve
          bu kitap, bu güçlü kütüphanenin kullanımını kavramanıza yardımcı
          olacak bir rehber sunmayı amaçlıyor.
        </p>
        <br />
        <p>
          React.js'i öğrenmek, modern web uygulamaları geliştirmenin kapılarını
          açar. Bu kitap, React temellerinden başlayarak, bileşen tabanlı
          geliştirmenin mantığını ve React ekosisteminin önemli parçalarını
          keşfetmenize yardımcı olacaktır. Her bölüm, somut örneklerle ve adım
          adım açıklamalarla desteklenmiştir, böylece React'i anlamak ve
          kullanmak çok daha kolay hale gelir.
        </p>
        <br />
        <p>
          Kitap boyunca, React.js'in yanı sıra ilgili teknolojiler ve araçlar
          hakkında da bilgi edineceksiniz. React Router, Redux gibi konulara da
          değinerek, bir web geliştiricisi olarak becerilerinizi nasıl
          geliştirebileceğinizi göstereceğiz.
        </p>
        <br />
        <p>
          Bu kitap, öğrenmeye ve keşfetmeye hevesli herkese yöneliktir. Sizlere,
          React.js'i öğrenirken keyif almanızı ve başarılı bir şekilde
          kullanmanızı dilerim. React yolculuğuna hoş geldiniz!
        </p>
        <footer>
          <div className="left-side is-size-7">Sayfa 1</div>
          <div className="right-side is-size-7">
            <Link to="/page-2" className="button is-primary">
              Sonraki Sayfa
            </Link>
          </div>
        </footer>
      </div>
    );
  } else {
    return (
      <div className="panel book">
        <h1 className="is-size-2" style={{ textAlign: "center" }}>
          Foreword
        </h1>
        <div className="circle"></div>
        <p>
          <b>React.js</b> is an exciting part of modern web development. is part
          of it. This book is for starting or existing learning React.js. It is
          intended for anyone who wants to deepen your knowledge. React.js, web
          It has become one of the most powerful tools for developing
          applications and This book will help you understand the use of this
          powerful library. It aims to provide a guide that will
        </p>
        <br />
        <p>
          Learning React.js unlocks the doors to developing modern web
          applications. opens. This book is component-based, starting with the
          basics of React. the logic of development and important parts of the
          React ecosystem. It will help you discover. Each chapter, with
          concrete examples and step by step supported with step by step
          explanations so to understand React and it becomes much easier to use.
        </p>
        <br />
        <p>
          Throughout the book, React.js as well as related technologies and
          tools You will also learn about Also on topics such as React Router,
          Redux. How do you improve your skills as a web developer? We'll show
          you how you can improve.
        </p>
        <br />
        <p>
          This book is for anyone who is eager to learn and explore. to you,
          Enjoy and successfully learn React.js I hope you use it. Welcome to
          the React journey!
        </p>
        <footer>
          <div className="left-side is-size-7">Page 1</div>
          <div className="right-side is-size-7">
            <Link to="/page-2" className="button is-primary">
              Next Page
            </Link>
          </div>
        </footer>
      </div>
    );
  }
}

export default Foreword;
