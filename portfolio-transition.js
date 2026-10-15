// Runs in the head so both documents opt in before their first render.
(() => {
  const home = (url) => url.pathname === "/";
  const detail = (url) => /^\/projects\/aveline\/?$/.test(url.pathname);
  const current = new URL(location.href);
  if (!home(current) && !detail(current)) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const pair = (from, to) => {
    if (!from || !to) return false;
    const a = new URL(from), b = new URL(to);
    return a.origin === b.origin && ((home(a) && detail(b)) || (detail(a) && home(b)));
  };
  const style = document.createElement("style");
  style.textContent = `@view-transition { navigation: auto; }
    ::view-transition-old(root), ::view-transition-new(root) { animation-duration: 300ms; animation-timing-function: ease-in-out; }
    @media (prefers-reduced-motion: reduce) { @view-transition { navigation: none; } }`;
  document.head.append(style);
  addEventListener("pageswap", (event) => {
    event.viewTransition?.ready?.catch(() => {});
    if (event.viewTransition && (reduced.matches || !pair(event.activation?.from?.url, event.activation?.entry?.url))) event.viewTransition.skipTransition();
  });
  addEventListener("pagereveal", (event) => {
    event.viewTransition?.ready?.catch(() => {});
    if (event.viewTransition && (reduced.matches || !pair(window.navigation?.activation?.from?.url, location.href))) event.viewTransition.skipTransition();
  });
})();
