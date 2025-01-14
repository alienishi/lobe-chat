'use client';

import dynamic from 'next/dynamic';
import { FC, memo } from 'react';

import ResponsiveIndex from '@/components/ResponsiveIndex';

import EditPage from '../features/EditPage';
import Layout from './layout.desktop';

const Mobile: FC = dynamic(() => import('../(mobile)')) as FC;

const ChatSettings = memo(() => (
  <ResponsiveIndex Mobile={Mobile}>
    <Layout>
      <EditPage />
    </Layout>
  </ResponsiveIndex>
));

export default ChatSettings;
