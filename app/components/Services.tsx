"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Dash from "./Dash";
import ServicesCard from "./ServicesCard";
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    img: "/walking.jpeg",
    title: "Dog Walking",
    desc: "",
    type: "walking",
  },
  {
    img: "/boarding.jpeg",
    title: "Dog Boarding",
    desc: "",
    type: "boarding",
  },
  {
    img: "/sitting.jpeg",
    title: "Dog Sitting",
    desc: "",
    type: "sitting",
  },
];

const days = [
  {
    id: "sun",
    label: "Sunday",
  },
  {
    id: "mon",
    label: "Monday",
  },
  {
    id: "tue",
    label: "Tuesday",
  },
  {
    id: "wed",
    label: "Wednesday",
  },
  {
    id: "thur",
    label: "Thursday",
  },
  {
    id: "fri",
    label: "Friday",
  },
  {
    id: "sat",
    label: "Saturday",
  },
];

const Services = () => {
  const [serviceType, setServiceType] = useState("");
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [walkingFrequency, setWalkingFrequency] = useState("one-time");
  const [open, setOpen] = useState(false);

  return (
    <div className="container pt-40" id="services">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl font-bold md:text-6xl">
          Choose a <span className="text-orange-500">Service</span>
        </h2>
        <p className="text-gray-700"></p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <div className="flex justify-around pt-8">
        {servicesData.map((item, index) => (
          <Dialog key={index}>
            <DialogTrigger>
              <ServicesCard
                img={item.img}
                desc={item.desc}
                title={item.title}
                onClick={() => setServiceType(item.type)}
              />
            </DialogTrigger>
            <DialogContent className="overflow-y-scroll max-h-screen">
              <DialogHeader>
                <DialogTitle>Fit the Service to your Needs</DialogTitle>
                <DialogDescription>{item.title}</DialogDescription>
              </DialogHeader>
              <form
                onSubmit={(evt) => {
                  evt.preventDefault();
                  console.log(evt);
                }}
                className="flex flex-col"
              >
                <div className="mb-6">
                  <label
                    htmlFor="address"
                    className="block text-sm mb-2 font-medium"
                  >
                    What&apos;s your address or cross-streets?
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Zip code or Address"
                    required
                    className="placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
                    style={{ border: "1px solid black" }}
                  />
                </div>

                {(item.type === "boarding" || item.type === "sitting") && (
                  <div className="mb-6">
                    <label
                      htmlFor="address"
                      className="block text-sm mb-2 font-medium"
                    >
                      What Dates
                    </label>
                    <div className="flex justify-between">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-2/5 justify-start text-left font-normal",
                              !startDate && "text-muted-foreground"
                            )}
                            style={{ border: "1px solid black" }}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {startDate ? (
                              format(startDate, "PPP")
                            ) : (
                              <span>Start date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={startDate}
                            onSelect={(day: Date | undefined) =>
                              setStartDate(day)
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-2/5 justify-start text-left font-normal",
                              !startDate && "text-muted-foreground"
                            )}
                            style={{ border: "1px solid black" }}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {endDate ? (
                              format(endDate, "PPP")
                            ) : (
                              <span>End date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={endDate}
                            onSelect={(day: Date | undefined) =>
                              setEndDate(day)
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                )}

                {item.type === "walking" && (
                  <div>
                    <div className="mb-6">
                      <label
                        htmlFor="address"
                        className="block text-sm mb-2 font-medium"
                      >
                        How often do you need Dog Walking
                      </label>
                      <RadioGroup
                        defaultValue="one-time"
                        onValueChange={(frequency) =>
                          setWalkingFrequency(frequency)
                        }
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="one-time" id="one-time" />
                          <Label htmlFor="one-time">One Time</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="repeat" id="repeat" />
                          <Label htmlFor="repeat">Repeat</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="address"
                        className="block text-sm mb-2 font-medium"
                      >
                        What days would you like your dog walked?
                      </label>
                      {days.map((day, idx) => (
                        <div key={idx}>
                          <Checkbox id={day.id} name={day.id} />
                          <Label htmlFor={day.id} />
                          &nbsp;{day.label}
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="address"
                        className="block text-sm mb-2 font-medium"
                      >
                        Start date
                      </label>
                      <div className="flex justify-between">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !startDate && "text-muted-foreground"
                              )}
                              style={{ border: "1px solid black" }}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {startDate ? (
                                format(startDate, "PPP")
                              ) : (
                                <span>Start date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={startDate}
                              onSelect={(day: Date | undefined) =>
                                setStartDate(day)
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="address"
                        className="block text-sm mb-2 font-medium"
                      >
                        What days would you like your dog walked?
                      </label>
                      <div className="flex justify-around">
                        <div>
                          <Checkbox id="6-11" name="6-11" />
                          <Label htmlFor="6-11">&nbsp;6am - 11am</Label>
                        </div>
                        <div>
                          <Checkbox id="11-3" name="11-3" />
                          <Label htmlFor="11-3">&nbsp;11am - 3pm</Label>
                        </div>
                        <div>
                          <Checkbox id="3-10" name="3-10" />
                          <Label htmlFor="3-10">&nbsp;3pm - 10pm</Label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="address"
                        className="block text-sm mb-2 font-medium"
                      >
                        What size are your dogs (lbs)?
                      </label>
                      <div className="flex flex-col">
                        <div>
                          <Checkbox id="small" name="small" />
                          <Label htmlFor="small">&nbsp;Small (0 - 15lbs)</Label>
                        </div>
                        <div>
                          <Checkbox id="medium" name="medium" />
                          <Label htmlFor="medium">
                            &nbsp;Medium (16 - 40lbs)
                          </Label>
                        </div>
                        <div>
                          <Checkbox id="large" name="large" />
                          <Label htmlFor="large">
                            &nbsp;Large (41 - 100lbs)
                          </Label>
                        </div>
                        <div>
                          <Checkbox id="xl" name="xl" />
                          <Label htmlFor="xl">&nbsp;XL (101+ lbs)</Label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="address"
                        className="block text-sm mb-2 font-medium"
                      >
                        How old are your dogs?
                      </label>
                      <RadioGroup
                        defaultValue="one-time"
                        onValueChange={(frequency) =>
                          setWalkingFrequency(frequency)
                        }
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="puppy" id="puppy" />
                          <Label htmlFor="puppy">
                            Puppy (less than 1 year)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="adult" id="adult" />
                          <Label htmlFor="adult">Adult</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                <Button>Submit</Button>
              </form>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Services;
