import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-2xl text-center mb-8">
            Are you looking for a new member to join your team or interested in
            creating a website that&apos;s tailored to your needs?
          </h2>
          <Link href="/contact">
            <Button>Get in touch!</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
