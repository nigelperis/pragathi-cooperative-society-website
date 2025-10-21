import { redirect } from "next/navigation";

export default function RootRedirect() {
  // Redirect root path to default locale
  redirect("/en");
}

