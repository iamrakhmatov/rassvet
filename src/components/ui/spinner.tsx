import { Loader2Icon } from "lucide-react";

export function Spinner() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2Icon className="h-10 w-10 animate-spin text-indigo-600" />
    </div>
  );
}
