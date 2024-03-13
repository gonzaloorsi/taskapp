"use client";
import createTask from "@/actions/createTask";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function Form() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create task</CardTitle>
        <CardDescription>Add a new task to your to-do list.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" action={createTask}>
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" placeholder="Enter the title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              className="min-h-[100px]"
              id="description"
              name="description"
              placeholder="Enter the description"
            />
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Due date</Label>
              <Input id="date" type="date" name="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Select name="priority">
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <CardFooter className="flex justify-end">
            <Button>Submit</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
