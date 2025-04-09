import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  // NextJS는 잘못된 주소에서 app/not-found.tsx에 작성된 컴포넌트를 보여줌.
  return (
    <div>
      <h1>NotFound</h1>
    </div>
  );
}
