import React from 'react';
import { Container } from './style';

interface TooltipProps {
  className?: string;
  title: string;
  children: React.ReactNode;
}

export default function Tooltip({ className, title, children }: TooltipProps) {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
}
