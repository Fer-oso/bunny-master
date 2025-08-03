import { Logo } from "../logo/Logo";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-xl mt-10">
      <div className="flex justify-center gap-10 mb-4">
      <Logo height="
      100px" />
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-6 ">
        <div>
          <i className="fi fi-sr-envelope m-2"></i>
          <strong>
            <a
              href="mailto:bunnyproducciones24@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-pink-500 hover:underline"
            >
              Email
            </a>
          </strong>
        </div>
        <div>
          <i className="text-green-600 fi fi-brands-whatsapp m-2"></i>
          <strong>
            <a
              href="https://wa.me/5493512008632"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-pink-500 hover:underline"
            >
              WhatsApp
            </a>
          </strong>
        </div>

        <div>
          <i
            className=
            "fi fi-brands-instagram m-2 text-red-600"
          ></i>
          <strong>
            <a href="https://www.instagram.com/bunnycreationsworld?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="hover:text-pink-500"
            target="_blank"
            rel="noopener noreferrer"
            >
            Instagram
            </a>
          </strong>
        </div>
      </div>
    </footer>
  );
}
