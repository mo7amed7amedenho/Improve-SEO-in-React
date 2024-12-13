import React from 'react';
import type { ImageOptimizationProps } from '../types';

export const OptimizedImage: React.FC<ImageOptimizationProps> = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  className,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={className}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  );
};