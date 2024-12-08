import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Upload, X } from 'lucide-react';
import { storage, db } from '../../lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import type { Fish } from '../../types/fish';

interface FishFormProps {
  fish?: Fish;
  onSuccess: () => void;
}

interface FishFormData {
  name: string;
  variety: string;
  price: number;
  description: string;
  stock: number;
  featured: boolean;
  status: 'available' | 'sold_out';
}

export default function FishForm({ fish, onSuccess }: FishFormProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(fish?.imageUrl || '');
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FishFormData>({
    defaultValues: fish || {
      featured: false,
      stock: 0,
      price: 0,
      status: 'available'
    }
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const clearImage = () => {
    setImageFile(null);
    setImagePreview('');
  };

  const onSubmit = async (data: FishFormData) => {
    try {
      setLoading(true);
      let imageUrl = fish?.imageUrl || '';

      if (imageFile) {
        const storageRef = ref(storage, `fish/${Date.now()}-${imageFile.name}`);
        const snapshot = await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      const fishData = {
        ...data,
        imageUrl,
        updatedAt: new Date().toISOString()
      };

      if (fish?.id) {
        await updateDoc(doc(db, 'fish', fish.id), fishData);
      } else {
        await addDoc(collection(db, 'fish'), {
          ...fishData,
          createdAt: new Date().toISOString()
        });
      }

      onSuccess();
    } catch (error) {
      console.error('Error saving fish:', error);
    } finally {
      setLoading(false);
    }
  };

  // Preview data for real-time validation
  const formData = watch();

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Preview</h3>
        <div className="border dark:border-gray-700 p-4 rounded-lg">
          <h4 className="font-medium">{formData.name || 'Fish Name'}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {formData.variety || 'Variety'}
          </p>
          <p className="text-lg font-bold text-blue-600">
            ₹{formData.price || '0'}
          </p>
          <p className="text-sm">{formData.description || 'Description'}</p>
          <div className="mt-2">
            <span className={`px-2 py-1 text-xs rounded-full ${
              formData.status === 'available' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {formData.status === 'available' ? 'Available' : 'Sold Out'}
            </span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Image
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-gray-300 dark:border-gray-600">
            <div className="space-y-1 text-center">
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mx-auto h-32 w-32 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={clearImage}
                    className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600 dark:text-gray-400">
                    <label className="relative cursor-pointer rounded-md font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500">
                      <span>Upload a file</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Variety
            </label>
            <select
              {...register('variety', { required: 'Variety is required' })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="">Select variety</option>
              <option value="Half Black">Half Black</option>
              <option value="full gold">Full Gold</option>
              <option value="Full Black">Full Black</option>
              <option value="Red Tail">Red Tail</option>
              <option value="Blue Moscow">Blue Moscow</option>
            </select>
            {errors.variety && (
              <p className="text-red-500 text-sm mt-1">{errors.variety.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Price (₹)
            </label>
            <input
              type="number"
              {...register('price', {
                required: 'Price is required',
                min: { value: 0, message: 'Price must be positive' }
              })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Stock
            </label>
            <input
              type="number"
              {...register('stock', {
                required: 'Stock is required',
                min: { value: 0, message: 'Stock must be positive' }
              })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            {errors.stock && (
              <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Status
            </label>
            <select
              {...register('status')}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="available">Available</option>
              <option value="sold_out">Sold Out</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Description
          </label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            rows={4}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            {...register('featured')}
            className="h-4 w-4 text-blue-600 rounded border-gray-300"
          />
          <label className="ml-2 text-sm text-gray-700 dark:text-gray-300">
            Featured fish
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 disabled:opacity-50"
        >
          {loading ? 'Saving...' : (fish ? 'Update' : 'Add')} Fish
        </button>
      </form>
    </div>
  );
}