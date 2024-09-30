const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-5 md:px-6 max-w-7xl mx-auto lg:px-8 mt-20 border-t border-neutral-300">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div>
          <h4 className="font-semibold mb-5">Our research</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Index
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Latest advancements
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                OpenAI o1
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                GPT-5
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                GPT-5o mini
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                DALL·E 4
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sora
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-5">ChatGPT</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                For Everyone
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                For Teams
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                For Enterprises
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                ChatGPT login <span className="inline-block rotate-55">↗</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Download
              </a>
            </li>
          </ul>

          <h4 className="font-semibold my-5">API</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Platform overview
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Documentation <span className="inline-block rotate-55">↗</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                API login <span className="inline-block rotate-55">↗</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h4 className="font-semibold mb-5">Safety overview</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Safety overview
              </a>
            </li>
          </ul>
          <h4 className="font-semibold mt-8 mb-5">Explore more</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                OpenAI for business
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Stories
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-5">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Charter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Security
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Residency
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-5">Terms & policies</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Terms of use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Brand guidelines
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Other policies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
