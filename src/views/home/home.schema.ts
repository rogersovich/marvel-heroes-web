import * as Yup from 'yup';
import { FormData } from './home.types';

export const homeSchema = Yup.object<FormData>({
  search: Yup.string().nullable()
});
