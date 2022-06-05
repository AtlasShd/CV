// проверка поддержки webp браузером
export default function isWebp() {
  function testWebp(callback) {
    const webp = new Image();
    function f() {
      callback(webp.height === 2);
    }

    webp.onload = f;
    webp.onerror = f;
    webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  // добавление класса webp, no-webp
  testWebp((support) => {
    const className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}
