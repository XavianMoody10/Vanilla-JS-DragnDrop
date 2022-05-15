const items = document.querySelectorAll(".item");

items.forEach((item) => {
  // needs a polyfill for Safari 14
  item.addEventListener("pointerdown", (e) => {
    item.classList.add("draggable");
    item.setPointerCapture(e.pointerId);

    const up = (e) => {
      item.classList.remove("draggable");
      item.releasePointerCapture(e.pointerId);

      item.removeEventListener("pointerup", up);
      item.removeEventListener("pointermove", move);
    };

    const move = (e) => {};

    item.addEventListener("pointerup", up);
    item.addEventListener("pointermove", move);
  });
});
