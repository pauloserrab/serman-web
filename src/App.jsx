import { useState } from "react";

import logoHeader from "./assets/logo-serman-1.svg";
import logoFooter from "./assets/logo-serman-2.svg";
import linkedinIcon from "./assets/linkedin.svg";
import instagramIcon from "./assets/instagram.svg";
import carruselMenu from "./assets/carrusel.svg";

import heroDesktop from "./assets/header-dk.jpg";
import heroMobile from "./assets/header-mb.jpg";

import trabajo1 from "./assets/Nuestrotrabajo-1-dk.png";
import trabajo2 from "./assets/Nuestrotrabajo-2-dk.png";
import trabajo3 from "./assets/Nuestrotrabajo-3-dk.png";
import trabajo4 from "./assets/Nuestrotrabajo-4-dk.png";
import trabajo5 from "./assets/Nuestrotrabajo-5-dk.png";
import trabajo6 from "./assets/Nuestrotrabajo-6-dk.png";
import trabajo7 from "./assets/Nuestrotrabajo-7-dk.png";
import trabajo8 from "./assets/Nuestrotrabajo-8-dk.png";

import callcenterIcon from "./assets/callcenter.svg";
import produccionIcon from "./assets/produccion.svg";
import envioIcon from "./assets/envio.svg";
import trabajosExpressIcon from "./assets/trabajosexpres.svg";

const FORM_EMAIL = "paulo.serra.b@gmail.com";
const WHATSAPP_URL = "#";
const INSTAGRAM_URL = "https://www.instagram.com/sermanimpresorescl";
const LINKEDIN_URL = "https://www.linkedin.com/company/sermancl";

const trabajos = [
  trabajo1,
  trabajo2,
  trabajo3,
  trabajo4,
  trabajo5,
  trabajo6,
  trabajo7,
  trabajo8,
];

const beneficios = [
  {
    titleLines: ["Cotización", "en 10 minutos"],
    text: "Respuesta inmediata por WhatsApp por uno de nuestros ejecutivos.",
    icon: callcenterIcon,
  },
  {
    titleLines: ["Producción", "por volumen"],
    text: "Especialistas en grandes tirajes offset.",
    icon: produccionIcon,
  },
  {
    titleLines: ["Región", "Metropolitana"],
    text: "Despacho a todas las comunas de la Región.",
    icon: envioIcon,
  },
  {
    titleLines: ["Trabajos", "express"],
    text: "Trabajos urgentes, con tiempos de entrega optimizados.",
    icon: trabajosExpressIcon,
  },
];

function Header() {
  return (
    <header className="bg-white">
      <div className="bg-[#2ea9bf] px-5 py-5 md:px-9 md:py-6">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-5">
          <a href="#" aria-label="Ir al inicio" className="shrink-0">
            <img
              src={logoHeader}
              alt="Serman Impresores"
              className="h-auto w-[150px] md:w-[225px]"
            />
          </a>

          <div className="flex shrink-0 items-center gap-3 md:gap-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Serman"
            >
              <img
                src={linkedinIcon}
                alt=""
                className="h-7 w-7 object-contain md:h-8 md:w-8"
              />
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de Serman"
            >
              <img
                src={instagramIcon}
                alt=""
                className="h-7 w-7 object-contain md:h-8 md:w-8"
              />
            </a>
          </div>
        </div>
      </div>

      <MenuCarousel />
    </header>
  );
}

function MenuCarousel() {
  return (
    <nav
      className="menu-carousel-strip h-[58px] overflow-hidden border-b border-slate-100 bg-white md:h-[60px]"
      style={{ backgroundImage: `url(${carruselMenu})` }}
      aria-label="Categorías principales"
    />
  );
}

function QuoteForm() {
  const [formStatus, setFormStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setFormStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario");
      }

      form.reset();
      setFormStatus("success");
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-xl bg-white/75 px-7 py-6 shadow-[22px_0_35px_rgba(0,0,0,0.12)] backdrop-blur-sm md:max-w-[435px] md:px-8"
    >
      <input
        type="hidden"
        name="_subject"
        value="Nueva cotización desde sitio Serman"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <label className="mb-4 block">
        <span className="mb-2 block text-sm font-bold text-[#1b6170]">
          Nombre completo <span className="font-medium">(Obligatorio)</span>
        </span>
        <input
          name="Nombre completo"
          required
          className="h-9 w-full rounded-md bg-white px-3 text-[#1b6170] outline-none"
        />
      </label>

      <label className="mb-4 block">
        <span className="mb-2 block text-sm font-bold text-[#1b6170]">
          Correo electrónico <span className="font-medium">(Obligatorio)</span>
        </span>
        <input
          type="email"
          name="Correo electrónico"
          required
          className="h-9 w-full rounded-md bg-white px-3 text-[#1b6170] outline-none"
        />
      </label>

      <label className="mb-4 block">
        <span className="mb-2 block text-sm font-bold text-[#1b6170]">
          Teléfono de contacto
        </span>
        <input
          name="Teléfono de contacto"
          className="h-9 w-full rounded-md bg-white px-3 text-[#1b6170] outline-none"
        />
      </label>

      <label className="mb-4 block">
        <span className="mb-2 block text-sm font-bold text-[#1b6170]">
          Mensaje <span className="font-medium">(Obligatorio)</span>
        </span>
        <textarea
          name="Mensaje"
          required
          className="h-24 w-full resize-none rounded-md bg-white px-3 py-2 text-[#1b6170] outline-none md:h-[96px]"
        />
      </label>

      <button
        type="submit"
        disabled={formStatus === "sending"}
        className="mx-auto block h-9 w-[120px] rounded-md bg-black text-sm font-bold text-white transition hover:bg-[#1b6170] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {formStatus === "sending" ? "Enviando..." : "Enviar"}
      </button>

      {formStatus === "success" && (
        <p className="mt-3 text-center text-sm font-bold text-[#1b6170]">
          Mensaje enviado correctamente.
        </p>
      )}

      {formStatus === "error" && (
        <p className="mt-3 text-center text-sm font-bold text-red-600">
          No se pudo enviar. Inténtalo nuevamente.
        </p>
      )}
    </form>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#03acd4]">
      <picture className="absolute inset-0 block">
        <source media="(max-width: 767px)" srcSet={heroMobile} />
        <img
          src={heroDesktop}
          alt="Serman le da vida a tus ideas"
          className="h-full w-full object-cover object-center"
        />
      </picture>

      <div className="relative mx-auto flex min-h-[528px] max-w-[1280px] items-end px-7 pb-8 pt-[132px] md:min-h-[374px] md:items-center md:px-8 md:py-8">
        <div className="w-full max-w-[277px] md:max-w-[435px]">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

function WhatsAppCta() {
  return (
    <section className="bg-white px-6 py-11 text-center md:py-12">
      <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-black md:text-4xl">
        También puedes cotizar en nuestro WhatsApp
      </h2>
      <p className="mt-2 text-2xl text-black md:text-3xl">
        Obtén una respuesta más rápida
      </p>
      <a
        href={WHATSAPP_URL}
        className="mt-5 inline-flex h-[54px] min-w-[225px] items-center justify-center rounded-md bg-[#59c51c] px-8 text-xl font-bold text-white transition hover:bg-[#45a915]"
      >
        Ir a WhatsApp
      </a>
    </section>
  );
}

function WorkCard({ image, index }) {
  return (
    <article className="w-[236px] shrink-0 snap-start rounded-xl bg-white p-3 shadow-md ring-2 ring-[#078dab] md:w-[240px]">
      <div className="flex h-[236px] items-center justify-center border-2 border-[#28a8be] bg-white p-5 md:h-[232px]">
        <img
          src={image}
          alt={`Nuestro trabajo ${index + 1}`}
          className="max-h-full w-full object-contain drop-shadow-xl"
        />
      </div>
    </article>
  );
}

function WorksSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#2f9ed0] to-[#1eb4c7] px-0 py-12 md:py-12">
      <h2 className="mx-auto max-w-[540px] px-6 text-center text-3xl font-bold leading-tight text-white md:max-w-none md:text-3xl">
        Inspírate y <span className="font-light italic">conoce</span> algunos de nuestros trabajos
      </h2>

      <div className="mx-auto mt-8 max-w-[1280px] overflow-x-auto px-8 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max snap-x snap-mandatory gap-10 md:gap-9">
          {trabajos.map((image, index) => (
            <WorkCard key={`${index}-${image}`} image={image} index={index} />
          ))}
        </div>
      </div>

      <div className="mt-3 flex justify-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-white" />
        <span className="h-2.5 w-2.5 rounded-full bg-white" />
        <span className="h-2.5 w-2.5 rounded-full bg-white" />
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="bg-white px-8 py-16 md:py-20">
      <div className="mx-auto grid max-w-[1130px] grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {beneficios.map((beneficio) => (
          <article
            key={beneficio.titleLines.join(" ")}
            className="flex items-center gap-4"
          >
            <div className="flex h-[92px] w-[92px] shrink-0 items-center justify-center">
              <img
                src={beneficio.icon}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <div className="text-black">
              <h3 className="text-2xl font-bold leading-[0.9]">
                {beneficio.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
              <p className="mt-1 max-w-[155px] text-sm leading-tight">
                {beneficio.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#f0f0f0] px-8 py-12 md:py-14">
      <div className="mx-auto grid max-w-[900px] gap-10 md:grid-cols-[1.2fr_1fr_1.2fr] md:items-start">
        <div className="flex justify-center md:justify-start">
          <img
            src={logoFooter}
            alt="Serman Impresores"
            className="h-auto w-[270px]"
          />
        </div>

        <div className="hidden text-xs leading-relaxed text-[#135c6c] md:block">
          <h3 className="mb-1 text-lg font-bold">Información:</h3>
          <p>Compra online y retira GRATIS en nuestra tienda en Independencia.</p>
          <p>Consulta por la instalación de gráficas corporativas en empresas.</p>
          <p>Envíos a regiones.</p>
          <p>Tiempo de producción:</p>
          <p>Aproximadamente en 2 a 5 días hábiles.</p>
        </div>

        <div className="text-sm leading-relaxed text-[#135c6c] md:text-xs">
          <h3 className="mb-1 text-2xl font-bold md:text-lg">Contacto:</h3>
          <p>N° de Contacto: +569 3084 2940</p>
          <p>Horario de Atención:</p>
          <p>Lunes a Viernes de 10:00hrs – 18:00hrs.</p>
          <p>Correo: Serman@contacto.cl</p>
          <p>Ubicación: Los nidos 1820, Independencia, RM.</p>
        </div>
      </div>
    </footer>
  );
}

function GlobalStyles() {
  return (
    <style>{`
      @keyframes menu-carousel-background-right {
        from {
          background-position: 0 center;
        }

        to {
          background-position: 900px center;
        }
      }

      .menu-carousel-strip {
        background-repeat: repeat-x;
        background-position: 0 center;
        background-size: auto 18px;
        animation: menu-carousel-background-right 26s linear infinite;
      }

      @media (max-width: 767px) {
        .menu-carousel-strip {
          height: 58px;
          background-size: auto 17px;
          animation-duration: 18s;
        }
      }
    `}</style>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans">
      <Header />
      <Hero />
      <WhatsAppCta />
      <WorksSection />
      <BenefitsSection />
      <Footer />
      <GlobalStyles />
    </div>
  );
}
