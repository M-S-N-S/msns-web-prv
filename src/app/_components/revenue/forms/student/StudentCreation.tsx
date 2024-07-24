"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const formSchema = z.object({
  doa: z.date({ required_error: "Field is required." }),
  studentName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters"),
  dob: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  fatherName: z
    .string()
    .min(2, "Father's name must be at least 2 characters")
    .max(100, "Father's name must not exceed 100 characters"),
  caste: z.optional(z.string()),
  occupation: z
    .string()
    .min(2, "Occupation must be at least 2 characters")
    .max(100, "Occupation must not exceed 100 characters"),
  residence: z
    .string()
    .min(5, "Residence must be at least 5 characters")
    .max(200, "Residence must not exceed 200 characters"),
  admittedClass: z.string({ required_error: "Field is required" }),
  contactNumbers: z.optional(
    z
      .string()
      .regex(/^[0-9,\s]+$/, "Invalid phone number format")
      .min(10, "Contact number must be at least 10 digits"),
  ),
});

export const StudentCreation = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const classes = [
    "Play Group",
    "Nursery",
    "Prep",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];

  const formSubmitted = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(formSubmitted)}
        className="grid grid-cols-3 gap-4"
      >
        <FormField
          control={form.control}
          name="studentName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Hassaan"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fatherName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Azam"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="caste"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tribe or Caste</FormLabel>
              <FormControl>
                <Input
                  placeholder="Caste"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="occupation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gaurdian Occupation</FormLabel>
              <FormControl>
                <Input
                  placeholder="Teacher"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="residence"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Mohallah Shah Jamal"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="admittedClass"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Class</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value ?? ""}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a class" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    classes.map((value,index)=>(
                        <SelectItem value={value} key={index}>{value}</SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="col-span-3 flex justify-center">
            <Button >
                Add Student
            </Button>
        </div>
      </form>
    </Form>
  );
};
