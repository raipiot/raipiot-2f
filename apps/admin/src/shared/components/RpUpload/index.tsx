import type { GetProp, UploadFile, UploadProps } from 'antd'
import type { ImgCropProps } from 'antd-img-crop'
import ImgCrop from 'antd-img-crop'

export interface RpUploadProps extends UploadProps {
  imgCropProps?: ImgCropProps
}

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]

function RpUpload(props: RpUploadProps) {
  const { imgCropProps, ...uploadProps } = props

  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ])

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj as FileType)
        reader.onload = () => resolve(reader.result as string)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }

  return (
    <ImgCrop
      rotationSlider
      {...imgCropProps}
    >
      <AUpload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        {...uploadProps}
      />
    </ImgCrop>
  )
}
export default RpUpload
