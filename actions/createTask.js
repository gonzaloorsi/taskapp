"use server";

import { connectDB } from "@/db/connection";
import { Task } from "@/models/Task";
import { revalidatePath } from "next/cache";
import { sendEmail } from "./sendEmail";

export default async function createTask(formData) {
  const rawData = {
    title: formData.get("title"),
    description: formData.get("description"),
    dueDate: formData.get("date"),
    priority: formData.get("priority"),
  };

  await connectDB();

  const newTask = await Task.create(rawData);
  console.log(newTask);

  await sendEmail(rawData.title);
  console.log("email sent");

  revalidatePath("/");
}
