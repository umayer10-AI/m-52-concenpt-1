"use client"
import React from 'react';
import {Button, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { useForm } from 'react-hook-form';
import { createUser } from '@/lib/action';

const Epage = ({id,p}) => {

    const {register,handleSubmit,formState: { errors },} = useForm()

    const a = async (v) => {
        console.log(v)
        await createUser(v)
    }

    return (
        <div className='flex justify-center mt-10 '>
            <Form onSubmit={handleSubmit(a)} className="flex w-100 p-4 rounded-xl shadow-md shadow-cyan-500 border border-cyan-500 flex-col gap-4 ">

                <TextField
            isRequired
            name="title" defaultValue={p.title}
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Title</Label>
            <Input placeholder="John Doe"  {...register("title")}/>
            <FieldError />
          </TextField>

                <TextField
            isRequired
            name="description" defaultValue={p.description}
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Description</Label>
            <Input placeholder="description...."  {...register("description")}/>
            <FieldError />
          </TextField>

                <TextField
            isRequired
            name="price" type='number' defaultValue={p.price}
          >
            <Label>Price</Label>
            <Input placeholder="Enter price"  {...register("price")}/>
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="image" defaultValue={p.image}
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Image URL</Label>
            <Input placeholder="ImageUrl" {...register("image")}/>
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="stock" type='number' defaultValue={p.stock}
          >
            <Label>Stock</Label>
            <Input placeholder="Enter stock"  {...register("stock")}/>
            <FieldError />
          </TextField>

      
      
      <div className="flex gap-2">
        <Button type="submit">
          Update
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
        </div>
    );
};

export default Epage;