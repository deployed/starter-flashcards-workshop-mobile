import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';

export function useChallenge() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data) => {
      // Tu dodaj logikę mutacji, np. wywołanie API
      return Promise.resolve(data);
    },
    onSuccess: () => {
      router.push('/challenge');
    },
  });
}
