//React Nedir ?

import { Link } from "react-router-dom";

function Page5({ lang }) {
  if (lang === "tr") {
    return (
      <div>
        <div className="panel book">
          <h1 className="is-size-2" style={{ textAlign: "center" }}>
            <a
              href="https://react.dev/reference/react/useState"
              target="blanked"
            >
              UseState
            </a>{" "}
            Kullanımı
          </h1>
          <p>
            React, kullanıcı arayüzlerini oluşturmak ve yönetmek için kullanılan
            bir kütüphanedir. React uygulamaları, bileşenlerden oluşur ve bu
            bileşenler, genellikle değişken durumlarına ihtiyaç duyar. Bu
            nedenle, React geliştiricilerine durum yönetimi için çeşitli araçlar
            sunar. Bunlardan biri de <b>useState</b> hooks'u'dur.
          </p>
          <br />
          <p>
            useState, bir bileşende durum <b>(state)</b> yönetimini
            kolaylaştırmak için kullanılan bir React hook'udur. Bu hook,
            bileşenlerin içinde durum değerlerini tanımlamanızı ve bu değerleri
            güncellemenizi sağlar. Aynı zamanda bileşenlerin yeniden render
            edilmesini tetikler.
          </p>
          <br />
          <p>
            Bir bileşende <b>useState</b> kullanmak için, bu hook'u içeri
            aktarmalı ve bir başlangıç durumu (initial state) değeri ile
            çağırmalısınız. Örneğin:
          </p>
          <div className="code mt-1">
            <code className="has-text-white has-background-dark">
              {"import React, { useState } from 'react';"}
            </code>
            <br />
            <code className="has-text-white has-background-dark">
              {"function Counter() {"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"const [count, setCount] = useState(0);"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"return ( <div>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-5">
              {"<p>Sayaç Değeri: {count}</p>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-5">
              {"<button onClick={() => setCount(count + 1)}>Artır</button>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"</div>"}
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
            Yukarıdaki örnekte,<b>useState</b> ile <b>count</b> adında bir durum
            değişkeni tanımladık. Bu değişken, başlangıçta 0 değerine sahiptir.
            Ardından,<b>setCount</b> fonksiyonunu kullanarak bu değeri
            güncelleyebiliriz. Bu güncelleme işlemi, "Artır" düğmesine
            tıkladığımızda gerçekleşir ve bileşenin yeniden render edilmesini
            tetikler.
          </p>
          <footer>
            <div className="left-side is-size-7">Sayfa 5</div>
            <div className="right-side is-size-7">
              <Link to="/page-4" className="button is-warning mr-4">
                Önceki sayfa
              </Link>
              <Link to="/page-6" className="button is-primary">
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
            Use of "
            <a
              href="https://react.dev/reference/react/useState"
              target="blanked"
            >
              UseState
            </a>
            " in React
          </h1>
          <p>
            React is a library for building and managing user interfaces. React
            apps are made up of components, and these components often need
            mutable states. Therefore, React offers its developers a variety of
            tools for state management. One of them is the useState hooks.
          </p>
          <br />
          <p>
            In React,<b> useState</b> is a hook used to facilitate state
            management within a component. This hook allows developers to define
            and update state values within components, triggering re-renders as
            needed.
          </p>
          <br />
          <p>
            To use <b>useState</b> within a component, you first import it and
            then call it with an initial state value. For example:
          </p>
          <div className="code mt-1">
            <code className="has-text-white has-background-dark">
              {"import React, { useState } from 'react';"}
            </code>
            <br />
            <code className="has-text-white has-background-dark">
              {"function Counter() {"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"const [count, setCount] = useState(0);"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"return ( <div>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-5">
              {"<p>Counter Value: {count}</p>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-5">
              {"<button onClick={() => setCount(count + 1)}>Increment</button>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"</div>"}
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
            In the above example, we use <b>useState</b> to define a state
            variable named <b>count</b> initially set to 0. We then use the
            <b> setCount </b>
            function to update this value. This update occurs when we click the
            "Increment" button, triggering a re-render of the component
          </p>
          <footer>
            <div className="left-side is-size-7">Page 5</div>
            <div className="right-side is-size-7">
              <Link to="/page-4" className="button is-warning mr-4">
                Previous page
              </Link>
              <Link to="/page-6" className="button is-primary">
                Next Page
              </Link>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Page5;
