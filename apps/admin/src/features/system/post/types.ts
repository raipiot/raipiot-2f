import type { PostPageDto } from '@raipiot-2f/api'

export type PostSearchFormModel = Omit<PostPageDto, 'current' | 'size'>
