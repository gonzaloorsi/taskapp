import { Schema, model, models } from "mongoose";

const taskSchema = new Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  dueDate: { type: Date, required: true },
  priority: { type: String, required: true, enum: ["low", "medium", "high"] },
});

export const Task = models.Task || model("Task", taskSchema);
