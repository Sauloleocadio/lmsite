import toast from "react-hot-toast";

function sendWhatsapp(text: string = "Olá quero conhecer a LM") {
  return `https://wa.me/send?phone=5585997066104&text=${text}`;
}

function sendWaze() {
  return "https://ul.waze.com/ul?place=EkNSLiBGaXNjYWwgU2FyYWl2YSwgNzIgLSBTaXF1ZWlyYSwgRm9ydGFsZXphIC0gQ0UsIDYwNzMyLTE1MCwgQnJhemlsIjASLgoUChIJDcuj6HZNxwcRvJskSBVjJ0EQSCoUChIJ5zXf-3ZNxwcRcBR2BRpEu5E&ll=-3.81647390%2C-38.61448390&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location";
}

function sendMaps() {
  return "https://maps.app.goo.gl/s4ZmAoMWcR8ZzA5R8";
}

function sendInstagram() {
  return "https://instagram.com/lavajatolm.ce/";
}

function copyLink(href: string): string {
  const mainUrl = window.location.origin;
  navigator.clipboard
    .writeText(`${mainUrl}/${href}`)
    .then(() => {
      toast.success("Link copiado com sucesso, compartilhe com os amigos!", {
        duration: 5000,
      });
    })
    .catch(() => {
      toast.error("Ocorreu um erro tente novamente!", {
        duration: 5000,
      });
    });
  return `${mainUrl}/${href}`;
}

export { copyLink, sendInstagram, sendMaps, sendWaze, sendWhatsapp };
