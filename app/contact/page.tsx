import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/components/Form";
import Lamp from "@/components/Lamp";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 mb-6">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let&apos;s Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Are you looking for a new website or do you have a project in
              mind? Use this well-lit form to email me or give me a call and
              let&apos;s discuss how we can work together.
            </p>
          </div>
          {/* lamp */}
          <div className="hidden xl:block">
            <Lamp />
          </div>
        </div>

        {/* info text & form */}
        <div className="grid lg:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-4 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>axelzwaans@hotmail.com</div>
            </div>
            {/* location */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Moray, Scotland</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+44 7737 882 336</div>
            </div>
          </div>
          <div className="mt-8 lg:mt-[-200px]">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
