import Counter from "@/app/components/Counter/Counter";
import { myMetaData } from "@/app/components/myMetaData";

// export const metadata = {
//   title: "Counter",
//   description: "This is Counter page",
// };
export const metadata = myMetaData("Counter", "Counter Description");
const CounterPage = () => {
  return (
    <div className="h-screen">
      <h1>Counter</h1>
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default CounterPage;
