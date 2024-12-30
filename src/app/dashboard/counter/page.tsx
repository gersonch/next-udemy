import { CartCounter } from "@/app/shopping-cart/components/CartCounter";

export const metadata = {
  title: "Counter Page",
  description: "Counter page",
};

const valor = 10;
export default function CounterPage() {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <h1>Counter</h1>
      <CartCounter />
    </section>
  );
}
