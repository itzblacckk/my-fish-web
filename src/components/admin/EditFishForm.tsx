import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { ImageUpload } from './ImageUpload';
import { getFish, updateFish, uploadImage } from '../../utils/firebase';
import type { Fish } from '../../types';

const fishSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  scientificName: z.string().min(1, 'Scientific name is required'),
  price: z.object({
    min: z.number().min(0),
    max: z.number().min(0)
  }),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  imageUrl: z.string().url('Must be a valid URL'),
  availability: z.boolean(),
  specifications: z.object({
    size: z.string(),
    color: z.string(),
    pattern: z.string()
  })
});

type FishFormData = z.infer<typeof fishSchema>;

interface EditFishFormProps {
  fishId: string;
  onSuccess: () => void;
}

export function EditFishForm({ fishId, onSuccess }: EditFishFormProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setValue } = 
    useForm<FishFormData>({
      resolver: zodResolver(fishSchema)
    });

  useEffect(() => {
    const loadFish = async () => {
      try {
        const fish = await getFish(fishId);
        reset(fish);
      } catch (error) {
        toast.error('Error loading fish data');
      }
    };

    loadFish();
  }, [fishId, reset]);

  const handleImageUpload = async (file: File) => {
    try {
      const imageUrl = await uploadImage(file);
      setValue('imageUrl', imageUrl);
      toast.success('Image uploaded successfully');
    } catch (error) {
      toast.error('Error uploading image');
    }
  };

  const onSubmit = async (data: FishFormData) => {
    try {
      await updateFish(fishId, data);
      toast.success('Fish updated successfully');
      onSuccess();
    } catch (error) {
      toast.error('Error updating fish');
    }
  };

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Edit Fish</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <ImageUpload
                onImageUpload={handleImageUpload}
                currentImage={register('imageUrl').value}
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Add other form fields similar to AddFishForm */}
            
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}