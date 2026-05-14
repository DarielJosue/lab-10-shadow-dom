class PosterAulas extends HTMLElement {
    static observedAttributes = [
        "line-1",
        "line-2",
        "line-3",
        "line-4",
        "line-5a",
        "line-5b",
        "footer",
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

        setText(".sign-text-1", this.#attr("line-1"));
        setText(".sign-text-2", this.#attr("line-2"));
        setText(".sign-text-3", this.#attr("line-3"));
        setText(".sign-text-4", this.#attr("line-4"));
        setText(".sign-text-double-1", this.#attr("line-5a"));
        setText(".sign-text-double-2", this.#attr("line-5b"));
        setText(".ucr-text", this.#attr("footer"));
    }

    render() {
        this.shadowRoot.setHTMLUnsafe(`
      <style>
        :host {
          display: block;
          width: 320px;
          max-width: 100%;
          font-family: "Inter", "Roboto", "Montserrat", system-ui, sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .sign-panel {
          width: 100%;
          background: #0a2647;
          border-radius: 0;
          box-shadow: 0 15px 25px -10px rgba(0, 0, 0, 0.5);
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          background-image:
            repeating-linear-gradient(
              45deg,
              rgba(255, 255, 255, 0.02) 0px,
              rgba(255, 255, 255, 0.02) 2px,
              transparent 2px,
              transparent 8px
            ),
            radial-gradient(circle at 20% 30%, rgba(0, 0, 0, 0.2) 0%, transparent 50%),
            linear-gradient(
              135deg,
              rgba(0, 0, 0, 0.1) 0%,
              rgba(255, 255, 255, 0.02) 100%
            );
          background-blend-mode: overlay;
        }

        .sign-panel::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at 70% 10%,
            rgba(0, 0, 0, 0.1) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        .sign-panel::after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 30%;
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, transparent 80%);
          pointer-events: none;
        }

        .sign-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.2rem;
          border-bottom: 1px solid #b0b8c5;
          position: relative;
        }

        .sign-row:last-of-type {
          border-bottom: none;
        }

        .sign-row:hover .sign-arrow {
          transform: translateX(3px);
        }

        .sign-text {
          font-size: 0.85rem;
          font-weight: 400;
          color: #e2e6ed;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
        }

        .sign-row-double {
          align-items: flex-start;
          padding: 0.9rem 1.2rem;
        }

        .sign-text-double {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .sign-text-double span {
          font-size: 0.85rem;
          font-weight: 400;
          color: #e2e6ed;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
        }

        .sign-arrow {
          font-size: 1.2rem;
          color: #cbd2dc;
          font-weight: 300;
          text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
          transition: transform 0.1s ease;
          margin-left: 0.8rem;
        }

        .sign-footer {
          background: #cfd7e2;
          padding: 1.2rem 0;
          text-align: center;
          margin-top: 0.2rem;
          position: relative;
          border-radius: 40px 40px 0 0;
          box-shadow:
            inset 0 4px 6px rgba(0, 0, 0, 0.05),
            0 -2px 4px rgba(0, 0, 0, 0.1);
        }

        .ucr-text {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: #0a2647;
          text-transform: uppercase;
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.3);
          font-family: inherit;
        }

        .sign-row:hover .letter {
          animation: letterBounce 0.25s forwards cubic-bezier(0.2, 0.9, 0.4, 1.1);
          opacity: 1;
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

        @media (max-width: 480px) {
          :host {
            width: 100%;
            max-width: 320px;
          }

          .sign-text,
          .sign-text-double span {
            font-size: 0.75rem;
          }

          .ucr-text {
            font-size: 1.8rem;
          }
        }
      </style>

      <div class="sign-panel" part="sign-panel">
        <div class="sign-row" part="row-1">
          <span class="sign-text sign-text-1" part="line-1"></span>
          <span class="sign-arrow" part="arrow">→</span>
        </div>

        <div class="sign-row" part="row-2">
          <span class="sign-text sign-text-2" part="line-2"></span>
          <span class="sign-arrow" part="arrow">→</span>
        </div>

        <div class="sign-row" part="row-3">
          <span class="sign-text sign-text-3" part="line-3"></span>
          <span class="sign-arrow" part="arrow">→</span>
        </div>

        <div class="sign-row" part="row-4">
          <span class="sign-text sign-text-4" part="line-4"></span>
          <span class="sign-arrow" part="arrow">→</span>
        </div>

        <div class="sign-row sign-row-double" part="row-5">
          <div class="sign-text-double">
            <span class="sign-text-double-1" part="line-5a"></span>
            <span class="sign-text-double-2" part="line-5b"></span>
          </div>
          <span class="sign-arrow" part="arrow">→</span>
        </div>

        <div class="sign-footer" part="footer">
          <slot name="footer">
            <span class="ucr-text" part="footer-text"></span>
          </slot>
        </div>
      </div>
    `);
    }
}

customElements.define("poster-aulas", PosterAulas);