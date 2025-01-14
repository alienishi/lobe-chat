'use client';

import dynamic from 'next/dynamic';
import { FC, memo } from 'react';

import ResponsiveIndex from '@/components/ResponsiveIndex';

import Common from '../common';
import Layout from './layout.desktop';

const Mobile: FC = dynamic(() => import('../(mobile)')) as FC;

export default memo(() => (
  <ResponsiveIndex Mobile={Mobile}>
    <Layout>
      <Common />
    </Layout>
  </ResponsiveIndex>
));
