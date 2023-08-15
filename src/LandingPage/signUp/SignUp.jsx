import React from 'react';
import { useForm } from "react-hook-form"
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
  } from "@material-tailwind/react";

const SignUp = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(data);
    }

    return (
        <div>
            <h2 className='cursor-pointer' onClick={handleOpen}>Sign Up</h2>
                <Dialog
                    size="xs"
                    open={open}
                    handler={handleOpen}
                    className="bg-transparent shadow-none"
                >
                    <Card className="mx-auto w-full max-w-[32rem]">
                        <CardHeader
                            variant="gradient"
                            color="blue"
                            className="mb-4 grid h-28 place-items-center"
                        >
                            <Typography variant="h3" color="white">
                            Sign Up
                            </Typography>
                        </CardHeader>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <CardBody className="flex flex-col gap-4">
                                <Input className='outline-none' label="Name" {...register("name", { required: true })} size="lg" />
                                {errors.name && <span>Email is Required!</span>}
                                <Input className='outline-none' label="Email" {...register("email", { required: true })} size="lg" />
                                {errors.email && <span>Email is Required!</span>}
                                <Input label="Password" {...register("password", { required: true })} size="lg" />
                                {errors.password && <span>Password is Required!</span>}
                                <div className="-ml-2.5">
                                <Checkbox label="Remember Me" />
                                </div>
                            </CardBody>
                            <div className='px-6'>
                                <Button variant="gradient" onClick={handleOpen} fullWidth>
                                <input className="text-xl cursor-pointer" type="submit" value="Sign Up" />
                                </Button>
                            </div>
                        </form>
                        <CardFooter className="pt-0">
                            <Typography variant="small" className="mt-6 flex justify-center">
                            Already have an account?
                            <Typography
                                as="a"
                                variant="small"
                                color="blue"
                                className="ml-1 font-bold"
                                onClick={handleOpen}
                            >
                                Sign In
                            </Typography>
                            </Typography>
                        </CardFooter>
                    </Card>
                </Dialog>
        </div>
    );
};

export default SignUp;