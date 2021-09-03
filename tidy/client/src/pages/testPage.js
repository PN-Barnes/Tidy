import React from 'react';
import { QUERY_EVENTS } from '../utils/queries';
import { useMutation, useQuery } from '@apollo/client';

const tests = () => {
  const { loading, data } = useQuery(QUERY_EVENTS);
  const events = data?.events || [];
};

export default tests;
