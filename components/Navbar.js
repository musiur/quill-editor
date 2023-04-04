import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-[800px] mx-auto">
      <div className="flex items-center justify-between gap-2 py-4">
        <div>/editor</div>
        <div className="flex items-center justify-end gap-4">
          <Link href="/">Home</Link>
          <Link href="/blogs">Blogs</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
