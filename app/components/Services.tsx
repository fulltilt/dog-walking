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

const times = [
  {
    id: "6-11",
    label: "6am - 11am",
  },
  {
    id: "11-3",
    label: "11am - 3pm",
  },
  {
    id: "3-10",
    label: "3pm - 10pm",
  },
];

const sizes = [
  {
    id: "small",
    label: "0 - 15 lbs",
  },
  {
    id: "medium",
    label: "16 - 40 lbs",
  },
  {
    id: "large",
    label: "41 - 100 lbs",
  },
  {
    id: "xl",
    label: "101+ lbs",
  },
];

const Services = () => {
  const [serviceType, setServiceType] = useState("");
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [walkingFrequency, setWalkingFrequency] = useState("one-time");
  const [daysToWalk, setDaysToWalk] = useState<string[]>([]);
  const [timesToWalk, setTimesToWalk] = useState<string[]>([]);
  const [dogSizes, setDogSizes] = useState<string[]>([]);
  const [age, setAge] = useState("puppy");
  const [open, setOpen] = useState(false);

  async function onSubmit(evt: React.SyntheticEvent) {
    evt.preventDefault();

    const data = {
      address,
      startDate,
      endDate,
      walkingFrequency,
      serviceType,
      daysToWalk,
      timesToWalk,
      dogSizes,
      age,
    };
    console.log(data);
    setOpen(false);
  }

  return (
    <div className="container pt-40" id="services">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl font-bold md:text-6xl">
          Choose a <span className="text-thirdary">Service</span>
        </h2>
        <p className="text-gray-700"></p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around pt-8">
        {servicesData.map((item, index) => {
          return (
            <Dialog key={index} open={open} onOpenChange={setOpen}>
              <DialogTrigger onClick={() => setServiceType(item.type)}>
                <ServicesCard
                  img={item.img}
                  desc={item.desc}
                  title={item.title}
                />
              </DialogTrigger>
              <DialogContent className="overflow-y-scroll max-h-screen">
                <DialogHeader>
                  <DialogTitle>Fit the Service to your Needs</DialogTitle>
                  <DialogDescription>{item.title}</DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit} className="flex flex-col">
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
                      value={address}
                      id="address"
                      placeholder="Zip code or Address"
                      required
                      className="placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
                      style={{ border: "1px solid black" }}
                      onChange={(evt) => setAddress(evt.target.value)}
                    />
                  </div>

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
                            <Label htmlFor="one-time" className="text-gray-500">
                              One Time
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="repeat" id="repeat" />
                            <Label htmlFor="repeat" className="text-gray-500">
                              Repeat
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {walkingFrequency === "repeat" ? (
                        <div>
                          <div className="mb-6">
                            <label
                              htmlFor="address"
                              className="block text-sm mb-2 font-medium"
                            >
                              What days would you like your dog walked?
                            </label>
                            {days.map((day, idx) => (
                              <div key={idx}>
                                <Checkbox
                                  id={day.id}
                                  name={day.id}
                                  onCheckedChange={(add) => {
                                    if (add) {
                                      setDaysToWalk([...daysToWalk, day.label]);
                                    } else {
                                      let idx = daysToWalk.indexOf(day.label);
                                      setDaysToWalk([
                                        ...daysToWalk.slice(0, idx),
                                        ...daysToWalk.slice(idx + 1),
                                      ]);
                                    }
                                  }}
                                />
                                <Label
                                  htmlFor={day.id}
                                  className="text-gray-500"
                                >
                                  &nbsp;&nbsp;{day.label}
                                </Label>
                              </div>
                            ))}

                            <div className="mb-6 mt-6">
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
                          </div>
                        </div>
                      ) : null}
                    </div>
                  )}

                  {(item.type === "boarding" ||
                    item.type === "sitting" ||
                    walkingFrequency === "one-time") && (
                    <div className="mb-6">
                      <label
                        htmlFor="startDate"
                        className="block text-sm mb-2 font-medium"
                      >
                        Which dates?
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
                    <div className="mb-6">
                      <label className="block text-sm mb-2 font-medium">
                        What time(s)?
                      </label>
                      <div>
                        {times.map((time, idx) => (
                          <div key={idx}>
                            <Checkbox
                              id={time.id}
                              name={time.id}
                              onCheckedChange={(add) => {
                                if (add) {
                                  setTimesToWalk([...timesToWalk, time.label]);
                                } else {
                                  let idx = timesToWalk.indexOf(time.label);
                                  setTimesToWalk([
                                    ...timesToWalk.slice(0, idx),
                                    ...timesToWalk.slice(idx + 1),
                                  ]);
                                }
                              }}
                            />
                            <Label htmlFor={time.id} className="text-gray-500">
                              &nbsp;&nbsp;{time.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <label
                      htmlFor="address"
                      className="block text-sm mb-2 font-medium"
                    >
                      What size are your dogs (lbs)?
                    </label>
                    <div className="flex flex-col">
                      {sizes.map((size, idx) => (
                        <div key={idx}>
                          <Checkbox
                            id={size.id}
                            name={size.id}
                            onCheckedChange={(add) => {
                              if (add) {
                                setDogSizes([...dogSizes, size.label]);
                              } else {
                                let idx = dogSizes.indexOf(size.label);
                                setDogSizes([
                                  ...dogSizes.slice(0, idx),
                                  ...dogSizes.slice(idx + 1),
                                ]);
                              }
                            }}
                          />
                          <Label htmlFor={size.id} className="text-gray-500">
                            &nbsp;&nbsp;{size.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor=""
                      className="block text-sm mb-2 font-medium"
                    >
                      How old are your dogs?
                    </label>
                    <RadioGroup
                      defaultValue="one-time"
                      onValueChange={(frequency) => setAge(frequency)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="puppy" id="puppy" />
                        <Label htmlFor="puppy" className="text-gray-500">
                          Puppy (less than 1 year)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="adult" id="adult" />
                        <Label htmlFor="adult" className="text-gray-500">
                          Adult
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button className="bg-thirdary">Submit</Button>
                </form>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
