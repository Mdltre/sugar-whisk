import { Dessert } from '@prisma/client';

export type CreateDessert = Omit<Dessert, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateDessert = Partial<CreateDessert>;
