//React Nedir ?

import { Link } from "react-router-dom";

function Page8({ lang }) {
  if (lang === "tr") {
    return (
      <div>
        <div className="panel book">
          <h1 className="is-size-2" style={{ textAlign: "center" }}>
            <a
              href="https://react.dev/reference/react/useReducer"
              target="blanked"
            >
              UseReducer{" "}
            </a>
            Kullanımı
          </h1>
          <p>
            <b>useReducer</b> , React uygulamalarında durum yönetimini daha
            karmaşık ve yapılandırılabilir hale getiren bir React hook'udur. Bu
            hook, genellikle büyük ve karmaşık durumları yönetmek için
            kullanılır. State'in karmaşıklığı arttığında ve birden fazla state
            değeri içeren bileşenler geliştirildiğinde, <b>useState</b> yerine
            <b> useReducer</b> kullanmak daha uygun olabilir.
          </p>
          <br />
          <p>
            <b>useReducer</b> , öncelikle bir reducer işlevi (reducer function)
            ve başlangıç durumu (initial state) ile çağrılır. Reducer işlevi,
            mevcut durumu ve bir eylemi (action) alır ve yeni bir durumu
            hesaplar. Ayrıca, bu işlem sırasında yan etki (side effect)
            yaratılabilir.
          </p>
          <br />
          <p>
            İşte <b>useReducer</b>'ın temel kullanımı:
          </p>
          <div className="code mt-1">
            <code className="has-text-white has-background-dark">
              {"import React, { useReducer } from 'react';"}
            </code>
            <br />
            <code className="has-text-success has-background-dark">
              {"// Reducer işlevi"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-1">
              {"const counterReducer = (state, action) => {"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {" switch (action.type) {"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {" case 'INCREMENT':"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-4">
              {" return { count: state.count + 1 };"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"case 'DECREMENT':"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-4">
              {"  return { count: state.count - 1 };"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {" default:"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-4">
              {"return state;"}
            </code>
            <code className="has-text-white has-background-dark ml-2">
              {"}"}
            </code>
            <br />
            <code className="has-text-white has-background-dark">{"};"}</code>
            <br />
            <br />
            <code className="has-text-white has-background-dark ">
              {"function Counter() {"}
            </code>
            <br />
            <code className="has-text-success has-background-dark ml-2">
              {"// Reducer'ı kullanarak başlangıç durumu belirleyin"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {
                "const [state, dispatch] = useReducer(counterReducer, { count: 0 });"
              }
            </code>
            <br />
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {" return ("}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-5">
              {"<div>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-6">
              {" <p>Count: {state.count}</p>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-6">
              {
                "<button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>"
              }
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-6">
              {
                "<button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>"
              }
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-5">
              {"    </div>"}
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
            Yukarıdaki örnekte, <b>counterReducer</b> adında bir reducer işlevi
            tanımlarız. Bu işlev, <b>INCREMENT</b> veya <b>DECREMENT</b> gibi
            eylemlere yanıt verir ve state'i günceller. <b>useReducer</b> ile
            başlangıç durumunu ve reducer işlevini belirleriz. Ardından,
            <b>dispatch</b> işlevi ile eylemleri tetikleriz.
          </p>
          <footer>
            <div className="left-side is-size-7">Sayfa 8</div>
            <div className="right-side is-size-7">
              <Link to="/page-7" className="button is-warning mr-4">
                Önceki sayfa
              </Link>
              <Link to="/page-9" className="button is-primary">
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
              href="https://react.dev/reference/react/useReducer"
              target="blanked"
            >
              useReducer
            </a>
          </h1>
          <p>
            <b>useReducer</b> is a React hook that makes state management more
            sophisticated and configurable in React applications. This hook is
            typically used to manage complex states. When the complexity of
            state management increases and components involve multiple state
            values, using <b>useReducer</b> might be more suitable than
            <b> useState</b> .
          </p>
          <br />
          <p>
            <b>useReducer</b> is primarily called with a reducer function and an
            initial state. The reducer function takes the current state and an
            action, and calculates a new state. Additionally, it can create side
            effects during this process.
          </p>
          <br />
          <p>
            Here's the basic usage of <b>useReducer</b>:
          </p>
          <div className="code mt-1">
            <code className="has-text-white has-background-dark">
              {"import React, { useReducer } from 'react';"}
            </code>
            <br />
            <code className="has-text-success has-background-dark">
              {"// Reducer function"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-1">
              {"const counterReducer = (state, action) => {"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {" switch (action.type) {"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {" case 'INCREMENT':"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-4">
              {" return { count: state.count + 1 };"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"case 'DECREMENT':"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-4">
              {"  return { count: state.count - 1 };"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {" default:"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-4">
              {"return state;"}
            </code>
            <code className="has-text-white has-background-dark ml-2">
              {"}"}
            </code>
            <br />
            <code className="has-text-white has-background-dark">{"};"}</code>
            <br />
            <br />
            <code className="has-text-white has-background-dark ">
              {"function Counter() {"}
            </code>
            <br />
            <code className="has-text-success has-background-dark ml-2">
              {"// Define the initial state and use the reducer"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {
                "const [state, dispatch] = useReducer(counterReducer, { count: 0 });"
              }
            </code>
            <br />
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {" return ("}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-5">
              {"<div>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-6">
              {" <p>Count: {state.count}</p>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-6">
              {
                "<button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>"
              }
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-6">
              {
                "<button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>"
              }
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-5">
              {"    </div>"}
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
            In the above example, we define a reducer function called
            <b> counterReducer</b> . This function responds to actions like
            <b> INCREMENT</b> or
            <b> DECREMENT</b> and updates the state. We use <b>useReducer</b> to
            set the initial state and provide the reducer function. Then, we
            trigger actions using the <b>dispatch</b> function.
          </p>
          <footer>
            <div className="left-side is-size-7">Page 8</div>
            <div className="right-side is-size-7">
              <Link to="/page-7" className="button is-warning mr-4">
                Previous page
              </Link>
              <Link to="/page-9" className="button is-primary">
                Next Page
              </Link>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Page8;
