import { Title } from "@/components/shared/title";
import { Subtitle } from "@/components/shared/subtitle";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Title name={"Hi"} />
      <Subtitle name={`I'm Manusha!`} />

      {/* <Link href="/" className="font-medium text-blue-600 dark:text-blue-500 ">
        <HomeInfo />
      </Link> */}

      {/* <Card title={"Example 1"}>
        <div>Test 1</div>
        <div>TEST 2</div>
      </Card>


      <Card title={"Example 1"}>
        <div>Test 1</div>
        <div>TEST 2</div>
      </Card>



      <Card title={"Example 1"}>
        <div>Test 1</div>
        <div>TEST 2</div>
      </Card> */}
    </main>
  );
}
