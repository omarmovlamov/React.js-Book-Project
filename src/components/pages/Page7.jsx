//React Nedir ?

import { Link } from "react-router-dom";

function Page7({ lang }) {
  if (lang === "tr") {
    return (
      <div>
        <div className="panel book">
          <h1 className="is-size-2" style={{ textAlign: "center" }}>
            <a
              href="https://react.dev/reference/react/useContext"
              target="blanked"
            >
              UseContext{" "}
            </a>
            Kullanımı
          </h1>
          <p>
            React uygulamalarında, verilerin bileşenler arasında iletilmesi
            gereken durumlar sık sık ortaya çıkar. <b>useContext</b>, bu tür
            veri iletişimini kolaylaştıran bir React hook'udur. Bu, bir
            bileşenin alt bileşenlere veri iletmek için kullanılırken durumların
            hiyerarşik bir şekilde iletilmesini sağlar.
          </p>
          <br />
          <p>
            <b>useContext</b> kullanmak için, öncelikle bir <b>createContext</b>
            işlevi ile bir bağlam (context) oluşturmalısınız. Bu bağlam,
            paylaşılan verilerin ana deposu olarak işlev görür. Ardından, bu
            bağlamı kullanarak verileri paylaşmak ve almak istediğiniz
            bileşenlere bu bağlamı sağlamalısınız. Örnek:
          </p>
          <div className="code mt-1">
            <code className="has-text-white has-background-dark">
              {"import React, { useContext } from 'react';"}
            </code>
            <br />
            <code className="has-text-success has-background-dark">
              {"// Bağlamı oluşturun"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-1">
              {"const MyContext = React.createContext();"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-1">
              {"function ParentComponent() {"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {" return ("}
            </code>
            <br />
            <code className="has-text-success has-background-dark ml-4">
              {" // Bağlamı sağlayın"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-5">
              {"<MyContext.Provider value=Paylaşılan Veri>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-5">
              {"  </MyContext.Provider>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-4">
              {");"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"}"}
            </code>
            <br />
            <br />
            <code className="has-text-white has-background-dark ml-1">
              {" function ChildComponent() {"}
            </code>
            <br />
            <code className="has-text-success has-background-dark ml-2">
              {"// Bağlamı kullanarak veriyi alın"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {"const sharedData = useContext(MyContext);"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"return <p>{sharedData}</p>;"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-1">
              {"}"}
            </code>
          </div>
          <br />
          <p>
            Yukarıdaki örnekte,<b>ParentComponent</b> ,<b>MyContext</b>
            bağlamını oluşturur ve paylaşılan veriyi içine koyar.{" "}
            <b>ChildComponent </b>
            ise bu veriyi
            <b> useContext</b> kullanarak alır ve görüntüler. Bu, veri
            paylaşımını kolaylaştırır ve bileşenler arasında veri aktarımını
            hiyerarşik bir şekilde yönetir.
          </p>
          <footer>
            <div className="left-side is-size-7">Sayfa 7</div>
            <div className="right-side is-size-7">
              <Link to="/page-6" className="button is-warning mr-4">
                Önceki sayfa
              </Link>
              <Link to="/page-8" className="button is-primary">
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
              href="https://react.dev/reference/react/useContext"
              target="blanked"
            >
              useContext
            </a>
          </h1>
          <p>
            In React applications, situations often arise where data needs to be
            passed between components. <b>useContext</b> is a React hook that
            facilitates this kind of data communication. It allows a component
            to pass data to its child components while managing the hierarchy of
            data transmission.
          </p>
          <br />
          <p>
            To use <b>useContext</b>, you first create a context with the
            <b> createContext </b>
            function. This context serves as the central store for shared data.
            Then, you provide this context to the components that want to share
            and consume data from it. For example:
          </p>

          <div className="code mt-1">
            <code className="has-text-white has-background-dark">
              {"import React, { useContext } from 'react';"}
            </code>
            <br />
            <code className="has-text-success has-background-dark">
              {"// Create a context"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-1">
              {"const MyContext = React.createContext();"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-1">
              {"function ParentComponent() {"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {" return ("}
            </code>
            <br />
            <code className="has-text-success has-background-dark ml-4">
              {" // Provide the context"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-5">
              {"<MyContext.Provider value=Shared Data>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-5">
              {"  </MyContext.Provider>"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-4">
              {");"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"}"}
            </code>
            <br />
            <br />
            <code className="has-text-white has-background-dark ml-1">
              {" function ChildComponent() {"}
            </code>
            <br />
            <code className="has-text-success has-background-dark ml-2">
              {"// Consume the data using useContext"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-2">
              {"const sharedData = useContext(MyContext);"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-3">
              {"return <p>{sharedData}</p>;"}
            </code>
            <br />
            <code className="has-text-white has-background-dark ml-1">
              {"}"}
            </code>
          </div>

          <br />
          <p>
            In the above example, <b>ParentComponent</b> creates the
            <b> MyContext </b>
            context and places the shared data within it. <b>ChildComponent </b>
            then consumes this data using <b>useContext</b> and displays it.
            This simplifies data sharing and hierarchically manages data
            transfer between components.
          </p>
          <footer>
            <div className="left-side is-size-7">Page 7</div>
            <div className="right-side is-size-7">
              <Link to="/page-6" className="button is-warning mr-4">
                Previous page
              </Link>
              <Link to="/page-8" className="button is-primary">
                Next Page
              </Link>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Page7;
