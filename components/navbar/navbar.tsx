import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header>
      <nav className="container mx-auto p-3 flex justify-between items-center">
        <div>Asmal</div>
        <div></div>
        <div>
          <Button>Login</Button>
        </div>
      </nav>
    </header>
  );
}
