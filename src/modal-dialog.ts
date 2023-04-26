export default class ModalDialog extends HTMLElement {
  public constructor() {
    super();
    this.style.display = 'contents';
  }

  public connectedCallback(): void {
    this.addEventListener('click', this.onClick);
  }

  /**
   * If a child dialog backdrop was clicked, close dialog.
   */
  private onClick = (event: MouseEvent) => {
    const dialog = document.querySelector('dialog');
    if (!dialog || !dialog.open) {
      return;
    }

    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;

    if (!isInDialog) {
      dialog.close();
    }
  };
}

if (typeof window !== 'undefined' && !window.customElements.get('modal-dialog')) {
  window.customElements.define('modal-dialog', ModalDialog);
}