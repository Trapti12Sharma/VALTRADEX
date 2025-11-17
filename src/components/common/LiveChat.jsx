import { useEffect } from "react";

export default function LiveChat() {
  useEffect(() => {
    if (window.Tawk_API) return; // Prevent double loading

    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/691aa74581fa391959801bfe/1ja81qr07";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    document.body.appendChild(s1);
  }, []);

  return null;
}
