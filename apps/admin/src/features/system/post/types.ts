import type { PostPageDto } from '@raipiot-2f/api'

export interface PostSearchFormModel
  extends Pick<PostPageDto, 'category' | 'postCode' | 'postName'> {}
