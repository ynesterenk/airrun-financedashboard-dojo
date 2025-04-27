import { useState, useEffect } from 'react';

interface AssetData {
  name: string;
  price: number;
  change: number;
}

export const useAssetData = () => {
  const [assetData, setAssetData] = useState<AssetData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssetData = async () => {
      try {
        // In a real application, this would be an API call
        const mockData: AssetData[] = [
          { name: 'S&P 500', price: 4500.21, change: 0.75 },
          { name: 'Gold', price: 1890.30, change: -0.25 },
          { name: 'Oil (WTI)', price: 75.80, change: 1.20 },
          { name: 'EUR/USD', price: 1.1850, change: -0.15 },
        ];
        setAssetData(mockData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch asset data');
        setLoading(false);
      }
    };

    fetchAssetData();
  }, []);

  return { assetData, loading, error };
};