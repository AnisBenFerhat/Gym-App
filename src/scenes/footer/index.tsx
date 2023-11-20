import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Evogym, founded in 2005, has a rich history of providing top-quality fitness services to the community. 
            Our mission is to empower individuals to achieve their fitness goals and lead healthier lives.
          </p>
          <p>© Evogym. All rights reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Blog</p>
          <p className="my-5">Nutriton</p>
          <p>Our Sponsors</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact</h4>
          <p className="my-5">
            15 Place du Tertre, Paris 75001
          </p>
          <p>Phone: 01 23 45 67 89</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
