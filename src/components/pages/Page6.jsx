//React Nedir ?

import { Link } from "react-router-dom";

function Page6({ lang }) {
  if (lang === "tr") {
    return (
      <div>
        <div className="panel book">
          <h1 className="is-size-2" style={{ textAlign: "center" }}>
            <a
              href="https://react.dev/reference/react/useEffect"
              target="blanked"
            >
              UseEffect{" "}
            </a>
            Kullanımı
          </h1>
          <p>
            React uygulamaları, kullanıcı arayüzünü yönetirken sık sık asenkron
            işlemlerle, veri alma ve verileri güncelleme gibi etkileşimli
            görevlerle karşılaşır. Bu tür durumlar için <b>useEffect</b>,
            React'ta yan etkilere (side effects) izin verir ve bileşenlerin
            hayat döngüsüne müdahale eder.
          </p>
          <br />
          <p>
            <b>useEffect</b>, bileşenlerin her render işlemi sonrasında çalışan
            bir React hook'udur. Bu, asenkron işlemleri veya bileşenin durumu
            (state) üzerindeki değişiklikleri izlemek için kullanılabilir. Bu
            sayede, verilerin güncellenmesi veya temizlenmesi gibi işlemler
            bileşenin güncel kalmasını ve uygun şekilde tepki vermesini sağlar.
          </p>
          <br />
          <p>
            <b>useEffect</b> kullanmak için, bir işlevi ve izlemek istediğiniz
            bağımsız değişkenleri belirtmelisiniz. Örneğin:
          </p>
          <div className="code mt-1">
            <code className="has-text-white has-background-dark">
              {"import React, { useState, useEffect } from 'react';"}
            </code>
            <br />
            <code className="has-text-white has-background-dark">
              {"function Timer() {"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"const [count, setCount] = useState(0);"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {" useEffect(() => {"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-5">
              {"const timer = setInterval(() => {"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-5">
              {"setCount(count + 1);"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"}, 1000);"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {" return () => {"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-4">
              {"clearInterval(timer);"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {"};"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-1">
              {" }, [count]);"}
            </code>
            <br />
            <br />
            <code className="has-text-white has-background-dark ml-1">
              {"return ("}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {"<div>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"<p>Geçen Süre: {count} saniye</p>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {" </div>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {");"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-1">
              {"}"}
            </code>
          </div>
          <br />
          <p>
            Yukarıdaki örnekte,<b>useEffect</b> ile bir işlev tanımladık. Bu
            işlev, her saniyede bir <b>count</b> durumunu artırır. Ayrıca,
            bileşenin ayrılmasını sağlamak için temizleme işlemi yapar.
            <b>useEffect</b> içinde, izlenen değişkenlerin (bu durumda
            <b> count</b>) bir dizi olarak belirtilmesi gerekmektedir.
          </p>
          <footer>
            <div className="left-side is-size-7">Sayfa 6</div>
            <div className="right-side is-size-7">
              <Link to="/page-5" className="button is-warning mr-4">
                Önceki sayfa
              </Link>
              <Link to="/page-7" className="button is-primary">
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
            Using{" "}
            <a
              href="https://react.dev/reference/react/useEffect"
              target="blanked"
            >
              UseEffect
            </a>
          </h1>
          <p>
            In React, <b>useEffect</b> is a hook used to manage side effects and
            perform tasks that require interaction with the component lifecycle.
            It allows React components to perform asynchronous operations, fetch
            data, or update data in response to changes.
          </p>
          <br />
          <p>
            <b>useEffect</b> runs after every render of a component, making it
            suitable for tasks such as data fetching, DOM manipulation, or
            cleanup operations. It helps ensure that components stay up-to-date
            and respond appropriately to changes.
          </p>
          <br />
          <p>
            To use <b>useEffect</b>, you specify a function and an array of
            dependencies that you want to monitor for changes. For example:
          </p>
          <div className="code mt-1">
            <code className="has-text-white has-background-dark">
              {"import React, { useState, useEffect } from 'react';"}
            </code>
            <br />
            <code className="has-text-white has-background-dark">
              {"function Timer() {"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"const [count, setCount] = useState(0);"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {" useEffect(() => {"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-5">
              {"const timer = setInterval(() => {"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-5">
              {"setCount(count + 1);"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"}, 1000);"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {" return () => {"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-4">
              {"clearInterval(timer);"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {"};"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-1">
              {" }, [count]);"}
            </code>
            <br />
            <br />
            <code className="has-text-white has-background-dark ml-1">
              {"return ("}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {"<div>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"<p>Elapsed Time: {count} seconds</p>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {" </div>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {");"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-1">
              {"}"}
            </code>
          </div>

          <br />
          <p>
            In the above example, we define a function within <b>useEffect </b>
            that increments the <b>count</b> state every second. Additionally,
            it sets up a cleanup operation to clear the interval when the
            component unmounts. Inside <b>useEffect</b>, you specify the
            variables to watch for changes as an array, in this case
            <b> [count]</b>.
          </p>
          <footer>
            <div className="left-side is-size-7">Page 6</div>
            <div className="right-side is-size-7">
              <Link to="/page-5" className="button is-warning mr-4">
                Previous page
              </Link>
              <Link to="/page-7" className="button is-primary">
                Next Page
              </Link>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Page6;
