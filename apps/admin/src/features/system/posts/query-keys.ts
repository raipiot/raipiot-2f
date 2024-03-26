import type { PostPageDto } from '@raipiot-2f/api'

export const POSTS_QK = 'system:posts'

export const POST_QK = 'system:post'

export const POST_SELECT_QK = 'system:post-select'

export const postsQK = (params?: PostPageDto) => [POSTS_QK, params]

export const postQK = (id?: string) => [POST_QK, { id }]

export const postSelectQK = (tenantId?: string) => [POST_SELECT_QK, { tenantId }]
