"use client";

import { useRouter } from "next/navigation";
import SembleyForm from "./SembleyForm";

export default function SembleyQuoteForm() {
  const router = useRouter();
  return (
    <SembleyForm
      formId="18436"
      token="qHzDadZtGhA"
      showLogo={false}
      onSubmitted={() => router.push("/thank-you")}
    />
  );
}
