import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { ProductCategory } from '../backend';

export interface InquiryFormData {
  name: string;
  email: string;
  phoneNumber: string;
  productInterest: ProductCategory;
  message: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InquiryFormData) => {
      if (!actor) throw new Error('Backend not available');
      await actor.submitInquiry(
        data.name,
        data.email,
        data.phoneNumber,
        data.productInterest,
        data.message
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}
