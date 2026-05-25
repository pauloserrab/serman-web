import logoSerman from "./assets/logo-serman.svg";
import heroMaquina from "./assets/hero-maquina.jpg";
import producto1 from "./assets/producto-1.png";
import producto2 from "./assets/producto-2.png";
import producto3 from "./assets/producto-3.png";
import producto4 from "./assets/producto-4.png";

const categories = [
  "Tarjetas",
  "Folletos",
  "Marcalibros",
  "Invitaciones",
  "Partes",
  "Postales",
];

const productImages = [producto1, producto2, producto3, producto4];

const products = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  image: productImages[index % productImages.length],
  name: "NOMBRE",
}));

function Logo({ color = "white" }) {
  const logoColor = color === "blue" ? "#2fa7bd" : "#ffffff";

  return (
    <div
      aria-label="Serman Impresiones"
      className="h-[50px] w-[170px]"
      style={{
        backgroundColor: logoColor,
        WebkitMaskImage: `url(${logoSerman})`,
        maskImage: `url(${logoSerman})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

function SidebarBox() {
  return (
    <aside className="w-full border border-[#abc3c9] bg-white">
      <div className="bg-[#d9d9d9] px-6 py-4 text-2xl font-black text-[#15596a]">
        Papelería
      </div>

      <ul className="space-y-3 px-6 py-4 font-bold text-[#15596a]">
        {categories.map((category) => (
          <li
            key={category}
            className="flex items-center justify-between text-sm"
          >
            <span>{category}</span>
            <span>›</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function ProductCard({ product }) {
  return (
    <article className="group flex h-[195px] flex-col justify-between rounded-xl border-2 border-[#176778] bg-[#35a9bf] p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-1 items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-[125px] w-full object-contain drop-shadow-lg"
        />
      </div>

      <button className="mx-auto flex items-center gap-1 text-sm font-black tracking-wide text-white">
        {product.name}
        <span>›</span>
      </button>
    </article>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#15596a]">
      <header>
        <div className="bg-[#2c9fb6] px-6 py-3">
          <div className="mx-auto flex max-w-7xl items-center gap-8">
            <div className="w-48 shrink-0">
              <Logo />
            </div>

            <label className="relative mx-auto hidden w-full max-w-[460px] md:block">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-700">
                🔍
              </span>

              <input
                className="h-10 w-full rounded-full bg-white px-12 text-sm font-bold text-slate-700 outline-none"
                placeholder="Buscar"
              />
            </label>

            <a
              className="hidden items-center gap-2 text-sm font-bold leading-tight text-white lg:flex"
              href="#contacto"
            >
              <span className="text-2xl">▤</span>
              <span>
                Cotiza
                <br />
                con nosotros
              </span>
            </a>

            <div className="ml-auto flex gap-3 text-white">
              <span className="font-bold">in</span>
              <span>◎</span>
            </div>
          </div>
        </div>

        <nav className="border-b border-slate-100 bg-white px-6 py-5">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-11 gap-y-4 text-sm font-black tracking-wide text-[#15596a]">
            {[
              "IMPRESION DIGITAL",
              "LETREROS",
              "PENDONES",
              "LETREROS",
              "PLOTEO",
              "IMAGEN CORPORATIVA",
              "SUBLIMACIÓN",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="flex items-center gap-1 hover:text-[#2c9fb6]"
              >
                {item}
                <span>▼</span>
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(255,255,255,0.95) 0%,
              rgba(255,255,255,0.85) 35%,
              rgba(255,255,255,0.25) 65%,
              rgba(255,255,255,0) 100%
            ),
            url(${heroMaquina})
          `,
        }}
      >
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h1 className="max-w-lg text-5xl font-black leading-[0.95] tracking-[0.18em] text-[#3db1c7] md:text-6xl">
            SOLUCIONES
            <br />
            GRÁFICAS
            <br />
            PARA TI
          </h1>

          <a
            href="#contacto"
            className="mt-7 inline-flex items-center gap-3 rounded-md bg-[#2ca6bd] px-8 py-4 text-lg font-black text-white shadow-lg transition hover:bg-[#16879d]"
          >
            COTIZA
            <span>▶</span>
          </a>
        </div>
      </section>

      <main className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[250px_1fr]">
        <div className="space-y-10">
          <SidebarBox />
          <SidebarBox />
          <SidebarBox />
        </div>

        <section className="grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>

      <footer id="contacto" className="mt-20 bg-[#e9f5f7] px-6 py-12">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[1.2fr_1fr_1.4fr]">
          <Logo color="blue" />

          <div className="text-xs leading-relaxed">
            <h3 className="mb-1 text-lg font-black">Información:</h3>
            <p>
              Compra online y retira GRATIS en nuestra tienda en Independencia.
            </p>
            <p>
              Consulta por la instalación de gráficas corporativas en empresas.
            </p>
            <p>Envíos a regiones.</p>
            <p>Tiempo de producción: Aproximadamente 2 a 5 días hábiles.</p>
          </div>

          <div className="text-xs leading-relaxed">
            <h3 className="mb-1 text-lg font-black">Contacto:</h3>
            <p>N° de Contacto: +569 3084 2940</p>
            <p>Horario de Atención:</p>
            <p>Lunes a Viernes de 10:00hrs -18:00hrs.</p>
            <p>Correo: Serman@contacto.cl</p>
            <p>Ubicación: Los nidos 1820, Independencia, RM.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}