import dynamic from "next/dynamic";
const TestPage = dynamic(() => import("@/pages/TestPage/TestPage"));
export default function Test() {
  return (
    <div>
      <div className=" mt-[3.5rem]">
        <TestPage />
      </div>
    </div>
  );
}
