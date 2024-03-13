/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/UNXVHMOxiYB
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";

export function TaskCard({ title, description, dueDate, priority }) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-0">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm">
          <CalendarIcon className="w-4 h-4 flex-shrink-0" />
          <span className="font-medium">Due {dueDate}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <AlertTriangleIcon className="w-4 h-4 flex-shrink-0" />
          <span className="font-medium">{priority}</span>
        </div>
      </CardContent>
    </Card>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function AlertTriangleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}