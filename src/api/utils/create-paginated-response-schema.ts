import {z} from 'zod';

export function createPaginatedResponseSchema<ItemType extends z.ZodTypeAny>(
    itemSchema: ItemType,
) {
    return z.object({
        count: z.number(),
        next: z.string().nullable(),
        previous: z.string().nullable(),
        results: z.array(itemSchema),
    });
}