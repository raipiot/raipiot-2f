import type { PostPageDto } from '@raipiot-2f/api'

export const POSTS_QK = 'posts'

export const POST_QK = 'post'

export const POST_VALUES_QK = 'post-values'

export const POST_TREE_QK = 'post-tree'

export const postsQK = (params?: PostPageDto) => [POSTS_QK, params]

export const postQK = (id?: string) => [POST_QK, { id }]

export const postValuesQK = (params?: PostPageDto) => [POST_VALUES_QK, params]

export const postTreeQK = () => [POST_TREE_QK]
