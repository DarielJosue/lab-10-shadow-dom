class PosterAcoso extends HTMLElement {
    static observedAttributes = [
        "accent-1",
        "title-1",
        "title-2",
        "title-3",
        "accent-2",
        "subtitle-1",
        "subtitle-2",
        "qr-label",
        "logo-1",
        "logo-2",
        "logo-3",
        "image-src",
        "image-alt",
    ];

    #rendered = false;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        if (!this.#rendered) {
            this.render();
            this.#rendered = true;
        }

        this.#updateTexts();
    }

    attributeChangedCallback() {
        if (this.isConnected && this.shadowRoot?.children.length) {
            this.#updateTexts();
        }
    }

    #attr(name, fallback = "") {
        return this.getAttribute(name) ?? fallback;
    }

    #updateTexts() {
        const root = this.shadowRoot;
        if (!root) return;

        const setText = (selector, value) => {
            const el = root.querySelector(selector);
            if (el) el.textContent = value;
        };

        setText(".exc1", this.#attr("accent-1", "¡"));
        setText(".titulo-1", this.#attr("title-1"));
        setText(".titulo-2", this.#attr("title-2"));
        setText(".titulo-3", this.#attr("title-3"));
        setText(".exc2", this.#attr("accent-2", "!"));
        setText(".sub-titulo1", this.#attr("subtitle-1"));
        setText(".sub-titulo2", this.#attr("subtitle-2"));
        setText(".qr-label", this.#attr("qr-label"));
        setText(".logo-1", this.#attr("logo-1"));
        setText(".logo-2", this.#attr("logo-2"));
        setText(".logo-3", this.#attr("logo-3"));

        const image = root.querySelector(".people-img");
        if (image) {
            image.src = this.#attr("image-src", "./assets/images/imagen.png");
            image.alt = this.#attr("image-alt", "Personas");
        }
    }

    render() {
        this.shadowRoot.setHTMLUnsafe(`
      <style>
        :host {
          display: block;
          width: 100%;
          max-width: 800px;
          font-family: "Montserrat", "Poppins", "Inter", system-ui, sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .poster {
          width: 100%;
          background: linear-gradient(
            180deg,
            var(--color-naranja, #f27a1a) 0%,
            var(--color-naranja, #f27a1a) 70%,
            var(--color-negro-gradiente, #1a0f0a) 100%
          );
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 40px -15px rgba(0, 0, 0, 0.5);
          position: relative;
        }

        .title-block {
          padding: 2.5rem 1.5rem 1rem 1.5rem;
          text-align: center;
        }

        .title-line {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 0.5rem;
        }

        .title-line span {
          display: inline-block;
          font-weight: 900;
          font-size: clamp(2rem, 8vw, 3.8rem);
          text-transform: uppercase;
          letter-spacing: -0.02em;
          padding: 0.2rem 0.6rem;
          line-height: 1;
        }

        .titulo-1 {
          background-color: var(--color-azul-claro, #4aa3df);
          color: var(--color-blanco, #ffffff);
          transform: rotate(-5deg);
        }

        .titulo-2 {
          background-color: var(--color-blanco, #ffffff);
          color: var(--color-naranja, #f27a1a);
          transform: rotate(5deg) translateX(8px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .titulo-3 {
          background-color: var(--color-morado, #9b5fc0);
          color: var(--color-blanco, #ffffff);
          transform: rotate(-5deg);
        }

        .exc1 {
          background-color: var(--color-blanco, #ffffff);
          color: var(--color-naranja, #f27a1a);
          text-transform: uppercase;
          transform: rotate(10deg);
          font-size: clamp(1.6rem, 5vw, 2.2rem);
        }

        .exc2 {
          background-color: var(--color-blanco, #ffffff);
          color: var(--color-morado, #9b5fc0);
          text-transform: uppercase;
          transform: rotate(10deg);
          font-size: clamp(1.6rem, 5vw, 2.2rem);
        }

        .title-line span:hover {
          animation: letterBounce 0.25s forwards cubic-bezier(0.2, 0.9, 0.4, 1.1);
          opacity: 1;
        }

        .message-block {
          text-align: center;
          padding: 1rem 1.5rem;
          margin: 0.5rem 0;
        }

        .sub-titulo1 {
          font-size: clamp(1.2rem, 5vw, 1.8rem);
          font-weight: 700;
          color: var(--color-morado, #9b5fc0);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.75rem;
        }

        .sub-titulo2 {
          font-size: clamp(1.6rem, 7vw, 2.6rem);
          font-weight: 900;
          color: var(--color-morado, #9b5fc0);
          text-transform: uppercase;
          display: inline-block;
          padding: 0.2rem 1rem;
          border-radius: 60px;
          letter-spacing: -0.5px;
        }

        .qr-section {
          text-align: center;
          padding: 0.5rem 1.5rem 1.5rem;
        }

        .qr-label {
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-blanco, #ffffff);
          display: inline-block;
          padding: 0.2rem 1rem;
          border-radius: 30px;
          margin-bottom: 1rem;
        }

        .qr-css {
          display: inline-block;
          background: var(--color-blanco, #ffffff);
          padding: 8px;
          border-radius: 16px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          width: 140px;
          height: 140px;
        }

        .qr-grid {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          position: relative;
          background:
            repeating-linear-gradient(
              90deg,
              var(--color-negro-qr, #000) 0px,
              var(--color-negro-qr, #000) 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              0deg,
              var(--color-negro-qr, #000) 0px,
              var(--color-negro-qr, #000) 3px,
              transparent 3px,
              transparent 8px
            );
          background-size: 12px 12px;
          background-blend-mode: normal;
          opacity: 0.9;
        }

        .qr-grid::after {
          content: "";
          position: absolute;
          top: 4px;
          left: 4px;
          width: 25px;
          height: 25px;
          background: black;
          border-radius: 4px;
          box-shadow:
            95px 0 0 black,
            0 95px 0 black,
            95px 95px 0 black;
          pointer-events: none;
        }

        .image-container {
          position: relative;
          width: 100%;
          margin-top: auto;
          line-height: 0;
        }

        .people-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .logos-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(
            0deg,
            rgba(26, 15, 10, 0.9) 0%,
            rgba(26, 15, 10, 0.5) 100%
          );
          backdrop-filter: blur(4px);
          padding: 1rem 1.2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-weight: bold;
          color: white;
          text-shadow: 0 1px 2px black;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .logo-item {
          background: rgba(0, 0, 0, 0.5);
          padding: 0.3rem 0.8rem;
          border-radius: 40px;
          backdrop-filter: blur(2px);
          font-weight: 700;
        }

        @keyframes letterBounce {
          0% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-4px);
          }
          70% {
            transform: translateY(2px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @media (max-width: 550px) {
          .title-line span {
            font-size: 1.8rem;
            padding: 0.1rem 0.4rem;
          }

          .logos-overlay {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.5rem;
          }

          .qr-css {
            width: 110px;
            height: 110px;
          }

          .sub-titulo2 {
            font-size: 1.4rem;
          }
        }
      </style>

      <div class="poster" part="poster">
        <div class="title-block" part="title-block">
          <div class="title-line" part="title-line-1">
            <span class="exc1" part="accent-1"></span>
            <span class="titulo-1" part="title-1"></span>
          </div>

          <div class="title-line" part="title-line-2">
            <span class="titulo-2" part="title-2"></span>
            <span class="titulo-3" part="title-3"></span>
            <span class="exc2" part="accent-2"></span>
          </div>
        </div>

        <div class="message-block" part="message-block">
          <p class="sub-titulo1" part="subtitle-1"></p>
          <p class="sub-titulo2" part="subtitle-2"></p>
        </div>

        <div class="qr-section" part="qr-section">
          <p class="qr-label" part="qr-label"></p>

          <slot name="qr">
            <div class="qr-css" part="qr" aria-label="Código QR generado con CSS">
              <div class="qr-grid"></div>
            </div>
          </slot>
        </div>

        <div class="image-container" part="image-container">
          <slot name="hero-image">
            <img
              src="./assets/images/imagen.png"
              alt="Personas"
              class="people-img"
              part="image"
            />
          </slot>

          <div class="logos-overlay" part="logos">
            <slot name="logo-1">
              <div class="logo-item logo-1" part="logo-1"></div>
            </slot>
            <slot name="logo-2">
              <div class="logo-item logo-2" part="logo-2"></div>
            </slot>
            <slot name="logo-3">
              <div class="logo-item logo-3" part="logo-3"></div>
            </slot>
          </div>
        </div>
      </div>
    `);
    }
}

customElements.define("poster-acoso", PosterAcoso);