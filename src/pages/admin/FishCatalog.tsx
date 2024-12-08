import React from 'react';
import FishManager from '../../components/admin/FishManager';

export default function FishCatalog() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Fish Catalog Management
      </h2>
      <FishManager />
    </div>
  );
}