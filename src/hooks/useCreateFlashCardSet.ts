import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';

import { queryClient } from '@/api/client';
import { queryKeys } from '@/api/queryKyes';

import { createFlashCardSet } from '../api/challenges';

export function useCreateFlashCardSet() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (title: string) => {
      return await createFlashCardSet(title);
      // return true;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.sets() });
      router.navigate(`/create?id=${data.id}`);
      // router.navigate(`/create/${data.id}`);
    },
    onError: (error) => {
      console.error('Mutation failed with error:', error);
    },
  });
}
