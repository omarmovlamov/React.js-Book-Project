//React Nedir ?

import { Link } from "react-router-dom";

function Page2({ lang }) {
  console.log(lang);

  if (lang === "tr") {
    return (
      <div>
        <div className="panel book">
          <h1 className="is-size-2" style={{ textAlign: "center" }}>
            React Nedir?
          </h1>
          <p>
            <b>
              React, Facebook tarafından geliştirilen açık kaynaklı bir
              JavaScript kütüphanesidir
            </b>{" "}
            ve modern web uygulamaları ve kullanıcı arayüzleri (UI) oluşturmak
            için kullanılır. React, kullanımı kolay bileşen tabanlı bir yaklaşım
            sunar ve büyük ölçüde verimli ve yeniden kullanılabilir kod yazmayı
            hedefler. Bu sayede, geliştiricilere dinamik ve etkileyici kullanıcı
            arayüzleri oluşturmak için güçlü bir araç sunar.
          </p>
          <br />
          <p>
            React'ın temel felsefesi, bir web uygulamasının her bileşeninin
            bağımsız ve yeniden kullanılabilir olması gerektiğidir. Bu, her
            bileşenin, içerdiği verilere ve kullanıcı etkileşimlerine bağımsız
            olarak tepki vermesini ve çalışmasını sağlar. Buna
            <b> "bileşen tabanlı geliştirme" </b> denir ve büyük uygulamaları
            daha yönetilebilir ve bakımı daha kolay hale getirir.
          </p>
          <br />
          <p>
            React'ın en belirgin özelliği,
            <b> sanal DOM (Document Object Model) </b>adı verilen bir konsepti
            kullanmasıdır. Sanal DOM, web sayfasının gerçek DOM yapısının bir
            soyutlamasıdır. React, uygulamadaki değişiklikleri algıladığında, bu
            değişiklikleri önce sanal DOM üzerinde yapar ve ardından gerçek
            DOM'u günceller. Bu, uygulamanın daha hızlı ve verimli olmasını
            sağlar, çünkü gereksiz güncellemelerden kaçınılır.
          </p>
          <br />
          <p>
            React, bileşenlerin yönetimi, veri akışı ve durum
            <b>
              <i> (state) </i>
            </b>
            yönetimi için de kapsamlı bir destek sunar. Ayrıca, geniş bir
            topluluk ve ekosistem tarafından desteklenir, bu da yeni
            özelliklerin ve kütüphanelerin sürekli olarak eklenmesine olanak
            tanır.
          </p>
          <br />
          <p>
            Sonuç olarak, React, modern web geliştirme dünyasının vazgeçilmez
            bir parçasıdır ve kullanıcı arayüzü geliştirme süreçlerini büyük
            ölçüde kolaylaştırır. Bu kitap, React'ı baştan sona öğrenmenize ve
            ustalaşmanıza yardımcı olacak.
          </p>
          <footer>
            <div className="left-side is-size-7">Sayfa 2</div>
            <div className="right-side is-size-7">
              <Link to="/page-1" className="button is-warning mr-4">
                Önceki sayfa
              </Link>
              <Link to="/page-3" className="button is-primary">
                Sonraki Sayfa
              </Link>
            </div>
          </footer>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="panel book">
          <h1 className="is-size-2" style={{ textAlign: "center" }}>
            What is React?
          </h1>
          <p>
            <b>
              React is an open source software developed by Facebook. It is a
              JavaScript library
            </b>{" "}
            and building modern web applications and user interfaces (UI) using
            for. React, an easy-to-use component-based approach delivers and
            writes highly efficient and reusable code. targets. In this way,
            dynamic and impressive user It offers a powerful tool for creating
            interfaces.
          </p>
          <br />
          <p>
            React's core philosophy is that every component of a web application
            It should be independent and reusable. This is every independent of
            the data it contains and user interactions. It allows it to react
            and work. This It's called <b>"component-based development"</b> and
            its great applications makes it more manageable and easier to
            maintain.
          </p>
          <br />
          <p>
            React's most distinctive feature is A concept called{" "}
            <b>virtual DOM (Document Object Model)</b>
            is to use. The virtual DOM is a part of the real DOM structure of
            the web page. is the abstraction. When React detects changes in the
            app, it makes the changes first on the virtual DOM and then on the
            real Updates the DOM. This makes the application faster and more
            efficient. because it avoids unnecessary updates.
          </p>
          <br />
          <p>
            React, component management, dataflow and state
            <b>
              <i> (state) </i>
            </b>
            It also offers comprehensive support for management. Also, a wide
            supported by the community and ecosystem, which means new Allows
            continuous addition of features and libraries recognizes.
          </p>
          <br />
          <p>
            As a result, React is indispensable in the modern web development
            world. is a part of the user interface development processes.
            considerably easier. This book will help you learn React from start
            to finish and It will help you master it.
          </p>
          <footer>
            <div className="left-side is-size-7">Page 2</div>
            <div className="right-side is-size-7">
              <Link to="/page-1" className="button is-warning mr-4">
                Previous page
              </Link>
              <Link to="/page-3" className="button is-primary">
                Next Page
              </Link>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Page2;
