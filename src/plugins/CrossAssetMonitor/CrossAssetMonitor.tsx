import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAssetData } from './data';

const CrossAssetMonitor: React.FC = () => {
  const { assetData, loading, error } = useAssetData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Cross Asset Monitor</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assetData.map((asset) => (
              <TableRow key={asset.name}>
                <TableCell>{asset.name}</TableCell>
                <TableCell>{asset.price}</TableCell>
                <TableCell className={asset.change > 0 ? 'text-green-600' : 'text-red-600'}>
                  {asset.change > 0 ? '+' : ''}{asset.change}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CrossAssetMonitor;