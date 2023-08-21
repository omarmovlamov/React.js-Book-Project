//React Nedir ?

import { Link } from "react-router-dom";

function Page1({ lang }) {
  console.log(lang);

  if (lang === "tr") {
    return (
      <div>
        <div className="panel book">
          <h1 className="is-size-2" style={{ textAlign: "center" }}>
            JSX (JavaScript XML) Nedir ? JSX Yazım Kuralları
          </h1>
          <p>
            JSX, JavaScript ve HTML'i birleştiren bir yapıdır. Örneğin, bir
            <code className="has-text-white has-background-dark m-2">
              {"<div>"}
            </code>
            elementini JSX içinde şu şekilde kullanabilirsiniz:
            <code className="has-text-white has-background-dark ml-3">
              {"const element = <div>Hello, JSX!</div>;"}
            </code>
          </p>
          <br />
          <p>
            <b> JSX, şu temel kurallara sahiptir:</b>
          </p>
          <br />
          <ol>
            <li>
              <b> Tek Bir Üst Eleman: </b> JSX ifadeleri, bir üst seviyede tek
              bir üst eleman içermelidir. Bu nedenle, birden fazla üst seviye
              elementi bir araya getirmek için bir konteyner {" <div> "} veya
              {" <Fragment> "}
              kullanılabilir.
            </li>
            <li>
              <b>JavaScript Değişkenleri: </b> JSX içinde JavaScript
              değişkenleri
              {" { } "}
              içinde kullanabilirsiniz. Bu, dinamik içerik oluşturmanıza olanak
              tanır.
              <br />
              <code className="has-text-white has-background-dark">
                {"const ad = John"}
              </code>
              <br />
              <code className="has-text-white has-background-dark">
                {"const element = <p>Merhaba, {ad}</p>;"}
              </code>
            </li>
            <li>
              <b>Özellikler (Props): </b>JSX içinde HTML elementlerine
              özellikler (props) ekleyebilirsiniz <br />
              <code className="has-text-white has-background-dark">
                {"const element = <img src=resim.jpg alt=Açıklama />"}
              </code>
            </li>
            <li>
              <b>Kapanmayan Etiketler:</b> Kendi başına kapanmayan HTML
              etiketleri JSX içinde {"<etiket />"} biçiminde kullanılabilir.
              <br />
              <code className="has-text-white has-background-dark">
                {"const element = <br />;"}
              </code>
            </li>
            <li>
              <b> JSX İfadesi: </b> JSX ifadeleri, JavaScript ifadeleri gibi
              kullanılabilir ve değişkenlere atanabilir veya fonksiyonlardan
              döndürülebilir.
              <br />
              <code className="has-text-white has-background-dark">
                {"function selam() {return <p>Merhaba</p>;}"}
              </code>
              <br />
              <code className="has-text-white has-background-dark">
                {"const element = selam();"}
              </code>
            </li>
          </ol>
          <br />
          <p>
            JSX, React uygulamalarının okunabilirliğini artırırken, aynı zamanda
            JavaScript koduyla entegrasyonu kolaylaştırır. JSX kurallarını
            anlayarak, React bileşenlerinizi daha etkili bir şekilde
            tasarlayabilirsiniz.
          </p>
          <footer>
            <div className="left-side is-size-7">Sayfa 3</div>
            <div className="right-side is-size-7">
              <Link to="/page-2" className="button is-warning mr-4">
                Önceki sayfa
              </Link>
              <Link to="/page-1" className="button is-primary">
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
            What is JSX (JavaScript XML)? JSX Spelling Rules
          </h1>
          <p>
            JSX is a construct that combines JavaScript and HTML. For example,
            you can use a
            <code className="has-text-white has-background-dark m-2">
              {"<div>"}
            </code>
            element in JSX like this:
            <code className="has-text-white has-background-dark ml-3">
              {"const element = <div>Hello, JSX!</div>;"}
            </code>
          </p>
          <br />
          <p>
            <b> JSX has these ground rules:</b>
          </p>
          <br />
          <ol>
            <li>
              <b> A Single Top Element: </b> JSX expressions are only one level
              higher must contain a parent element. Therefore, more than one
              level a container {" <div> "} to assemble the element, or
              {" <Fragment> "}
              available.
            </li>
            <li>
              <b>JavaScript Variables: </b> JavaScript variables in JSX
              {" { } "}
              You can use in This allows you to create dynamic content.
              recognizes.
              <br />
              <code className="has-text-white has-background-dark">
                {"const name = John"}
              </code>
              <br />
              <code className="has-text-white has-background-dark">
                {"const element = <p>Hello, {name}</p>;"}
              </code>
            </li>
            <li>
              <b>Features (Props): </b> Using properties (Props) of HTML
              elements in JSX <br />
              <code className="has-text-white has-background-dark">
                {"const element = <img src=photo.jpg alt=Description />"}
              </code>
            </li>

            <li>
              <b>Non-Close Tags:</b> HTML tags that don't close by themselves
              JSX It can be used in {"<ticket />"} format.
              <br />
              <code className="has-text-white has-background-dark">
                {"const element = <br />;"}
              </code>
            </li>
            <li>
              <b> JSX Expression: </b> Like JSX expressions, JavaScript
              expressions can be used and assigned to variables or from
              functions. can be rotated.
              <br />
              <code className="has-text-white has-background-dark">
                {"function hello() {return <p>Hi</p>;}"}
              </code>
              <br />
              <code className="has-text-white has-background-dark">
                {"const element = hello();"}
              </code>
            </li>
          </ol>
          <br />
          <p>
            JSX improves the readability of React applications while at the same
            time It simplifies integration with JavaScript code. JSX rules By
            understanding, you can use your React components more effectively.
            you can design.
          </p>
          <footer>
            <div className="left-side is-size-7">Page 3</div>
            <div className="right-side is-size-7">
              <Link to="/page-2" className="button is-warning mr-4">
                Previous page
              </Link>
              <Link to="/page-1" className="button is-primary">
                Next Page
              </Link>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Page1;
