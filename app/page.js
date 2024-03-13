import Image from "next/image";
import { Form } from "@/components/form";
import { TaskCard } from "@/components/task-card";
import { connectDB } from "@/db/connection";
import { Task } from "@/models/Task";
import { revalidatePath } from "next/cache";

export default async function Home() {
  await connectDB();
  const tasks = await Task.find({});

  return (
    <div className="w-80">
      <Form />
      <div className="flex gap-2">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            title={task.title}
            description={task.description}
            priority={task.priority}
          />
        ))}
      </div>
    </div>
  );
}
