import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-full mx-auto bg-yellow-500 lg:px-72">
      <div className="flex item-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://links.papareact.com/yvf"
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center space-x-5">
        <div className="hidden xl:inline-flex space-x-5">
          <h3>Our story</h3>
          <h3>Membership</h3>
          <h3>Write</h3>
        </div>
        <div className="hidden sm:inline-flex items-center space-x-5">
          <h3>Sign In</h3>
          <h3 className="px-4 py-1 rounded-full bg-black text-white">
            Get Started
          </h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
