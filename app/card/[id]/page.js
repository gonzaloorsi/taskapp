import React from "react";
import { connectDB } from "@/db/connection";
import { Task } from "@/models/Task";
import { TaskCard } from "@/components/task-card";

export default async function Page({ params }) {
  await connectDB();
  const task = await Task.findById(params.id);

  return (
    <div className="flex gap-2">
      <TaskCard
        title={task.title}
        description={task.description}
        priority={task.priority}
      />
    </div>
  );
}
