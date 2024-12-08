import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { addFish } from '../../utils/firebase';

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

export function AddFishForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FishFormData>({
    resolver: zodResolver(fishSchema)
  });

  const onSubmit = async (data: FishFormData) => {
    try {
      await addFish(data);
      // Reset form or show success message
    } catch (error) {
      console.error('Error adding fish:', error);
    }
  };

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Add New Fish</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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

            <div>
              <label htmlFor="scientificName" className="block text-sm font-medium text-gray-700">
                Scientific Name
              </label>
              <input
                type="text"
                id="scientificName"
                {...register('scientificName')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.scientificName && (
                <p className="mt-1 text-sm text-red-600">{errors.scientificName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
                Minimum Price
              </label>
              <input
                type="number"
                id="minPrice"
                {...register('price.min', { valueAsNumber: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
                Maximum Price
              </label>
              <input
                type="number"
                id="maxPrice"
                {...register('price.max', { valueAsNumber: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                rows={3}
                {...register('description')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="url"
                id="imageUrl"
                {...register('imageUrl')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.imageUrl && (
                <p className="mt-1 text-sm text-red-600">{errors.imageUrl.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                Size
              </label>
              <input
                type="text"
                id="size"
                {...register('specifications.size')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="color" className="block text-sm font-medium text-gray-700">
                Color
              </label>
              <input
                type="text"
                id="color"
                {...register('specifications.color')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="pattern" className="block text-sm font-medium text-gray-700">
                Pattern
              </label>
              <input
                type="text"
                id="pattern"
                {...register('specifications.pattern')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Availability
              </label>
              <div className="mt-1">
                <input
                  type="checkbox"
                  {...register('availability')}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="ml-2">Available</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isSubmitting ? 'Adding...' : 'Add Fish'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}