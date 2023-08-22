//React Nedir ?

import { Link } from "react-router-dom";

function Page4({ lang }) {
  if (lang === "tr") {
    return (
      <div>
        <div className="panel book">
          <h1 className="is-size-2" style={{ textAlign: "center" }}>
            <a
              href="https://legacy.reactjs.org/docs/components-and-props.html"
              target="blanked"
            >
              Props (Özellikler){" "}
            </a>
            Kullanımı
          </h1>
          <p>
            React bileşenlerinin gücü, onları esnek ve yeniden kullanılabilir
            kılan "props" veya "properties" adı verilen özelliklerde
            yatmaktadır. Props, bir bileşene dışarıdan veri veya yapılandırma
            bilgileri aktarmak için kullanılır. Bu, bileşenlerin dinamik ve
            farklı verilerle çalışabilmesini sağlar.
          </p>
          <br />
          <p>
            Props, bir bileşenin işlevselliğini ve görünümünü özelleştirmek için
            kullanılır. Örneğin, bir <code>{"<Button>"}</code> bileşeni
            oluşturduğunuzu ve bu bileşenin rengini ve metnini dışarıdan
            ayarlamak istediğinizi düşünelim. İşte props kullanımına örnek:
          </p>
          <br />
          <code className="has-text-white has-background-dark">
            {"function Button(props) {"}
          </code>
          <br />
          <code className="has-text-white has-background-dark">
            {
              "return <button style={{ backgroundColor: props.color }}>{props.text}</button>;}"
            }
          </code>
          <br />
          <p>
            Bu örnekte, Button bileşeni color ve text adında iki props alır. Bu
            props'lar, bileşenin stilini ve içeriğini özelleştirmek için
            kullanılır. Kullanımı şu şekildedir:
          </p>
          <br />
          <p>
            <code className="has-text-white has-background-dark">
              {"<Button color=blue text=Click />"}
            </code>
            <br />
            <code className="has-text-white has-background-dark">
              {"<Button color=green text=Confirm />"}
            </code>
          </p>
          <p>
            Props, bileşenler arasında veri paylaşımını kolaylaştırır. Üst düzey
            bir bileşen, alt bileşenlere veri sağlamak için props kullanabilir.
            Örneğin, bir uygulamanın üst düzey bileşeni bir API'den veri alır ve
            bu veriyi alt düzey bileşenlere props aracılığıyla iletir.
          </p>
          <br />
          <p>
            Props, React bileşenlerinin reaktivitesini korur. Bir props değeri
            değiştirildiğinde, React otomatik olarak bileşeni yeniden çizer ve
            güncel veriyi yansıtır. Bu, uygulamanızın güncel ve kullanıcı dostu
            olmasını sağlar
          </p>
          <p>
            Sonuç olarak, React'ta props kullanımı, bileşenlerin esnekliğini ve
            tekrar kullanılabilirliğini artırır. Props, React uygulamalarının
            dinamik ve veri odaklı olmasını sağlayarak güçlü bir araçtır.
          </p>
          <footer>
            <div className="left-side is-size-7">Sayfa 4</div>
            <div className="right-side is-size-7">
              <Link to="/page-3" className="button is-warning mr-4">
                Önceki sayfa
              </Link>
              <Link to="/page-5" className="button is-primary">
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
            Usage of{" "}
            <a
              href="https://legacy.reactjs.org/docs/components-and-props.html"
              target="blanked"
            >
              Props
            </a>
          </h1>
          <p>
            The strength of React components lies in their flexibility and
            reusability, which is greatly facilitated by "props" or
            "properties." Props are used to pass data or configuration
            information from outside into a component. This allows components to
            work with dynamic and varying data.
          </p>
          <br />
          <p>
            Props are employed to customize the functionality and appearance of
            a component. For instance, consider creating a{" "}
            <code>{"<Button>"}</code> component and wanting to set its color and
            text from the outside. Here's an example of using props:
          </p>
          <br />
          <code className="has-text-white has-background-dark">
            {"function Button(props) {"}
          </code>
          <br />
          <code className="has-text-white has-background-dark">
            {
              "return <button style={{ backgroundColor: props.color }}>{props.text}</button>;}"
            }
          </code>
          <br />
          <p>
            In this example, the Button component takes two props: color and
            text. These props are used to customize the style and content of the
            button. You can use it like this:
          </p>
          <br />
          <p>
            <code className="has-text-white has-background-dark">
              {"<Button color=blue text=Click />"}
            </code>
            <br />
            <code className="has-text-white has-background-dark">
              {"<Button color=green text=Confirm />"}
            </code>
          </p>
          <p>
            Props make data sharing between components easy. A higher-level
            component can use props to provide data to lower-level components.
            For example, a top-level component might fetch data from an API and
            pass it to lower-level components via props.
          </p>
          <br />
          <p>
            Props maintain the reactivity of React components. When a prop value
            changes, React automatically re-renders the component, reflecting
            the updated data. This ensures that your application stays
            up-to-date and user-friendly.
          </p>
          <p>
            In conclusion, the use of props in React enhances the flexibility
            and reusability of components. Props are a powerful tool in React
            applications, making them dynamic and data-centric
          </p>
          <footer>
            <div className="left-side is-size-7">Page 4</div>
            <div className="right-side is-size-7">
              <Link to="/page-2" className="button is-warning mr-4">
                Previous page
              </Link>
              <Link to="/page-5" className="button is-primary">
                Next Page
              </Link>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Page4;
