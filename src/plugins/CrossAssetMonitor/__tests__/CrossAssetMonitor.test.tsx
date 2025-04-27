import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CrossAssetMonitor from '../CrossAssetMonitor';
import * as dataHook from '../data';

jest.mock('../data', () => ({
  useAssetData: jest.fn(),
}));

describe('CrossAssetMonitor', () => {
  it('renders loading state', () => {
    (dataHook.useAssetData as jest.Mock).mockReturnValue({
      loading: true,
      error: null,
      assetData: [],
    });

    render(<CrossAssetMonitor />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    (dataHook.useAssetData as jest.Mock).mockReturnValue({
      loading: false,
      error: 'Failed to fetch data',
      assetData: [],
    });

    render(<CrossAssetMonitor />);
    expect(screen.getByText('Error: Failed to fetch data')).toBeInTheDocument();
  });

  it('renders asset data correctly', async () => {
    const mockAssetData = [
      { name: 'S&P 500', price: 4500.21, change: 0.75 },
      { name: 'Gold', price: 1890.30, change: -0.25 },
    ];

    (dataHook.useAssetData as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      assetData: mockAssetData,
    });

    render(<CrossAssetMonitor />);

    await waitFor(() => {
      expect(screen.getByText('Cross Asset Monitor')).toBeInTheDocument();
      expect(screen.getByText('S&P 500')).toBeInTheDocument();
      expect(screen.getByText('4500.21')).toBeInTheDocument();
      expect(screen.getByText('+0.75%')).toBeInTheDocument();
      expect(screen.getByText('Gold')).toBeInTheDocument();
      expect(screen.getByText('1890.3')).toBeInTheDocument();
      expect(screen.getByText('-0.25%')).toBeInTheDocument();
    });
  });
});