export function CreateFormTabs() {
  // 知道是升级还是降级

  // 读取附件数量

  const [activeKey, setActiveKey] = useState('1')
  const { open, close, openCreate } = useModal()

  return (
    <>
      <ATabs
        tabBarExtraContent={{
          right: (
            <AFlex gap={6}>
              {activeKey === '2' && (
                <AButton
                  onClick={openCreate}
                  type="link"
                >
                  上传附件
                </AButton>
              )}
              <Link to="/">
                <AButton>查看供应商业务关联单据</AButton>
              </Link>
            </AFlex>
          )
        }}
        defaultActiveKey="1"
        onChange={setActiveKey}
        items={[
          {
            key: '1',
            label: '品类情况',
            children: (
              <ATable
                pagination={false}
                columns={[
                  {
                    title: '品类代码',
                    dataIndex: 'categoryCode'
                  },
                  {
                    title: '品类名称',
                    dataIndex: 'categoryName'
                  },
                  {
                    title: '当前状态',
                    dataIndex: 'categoryStatus'
                  }
                ]}
                dataSource={[
                  {
                    key: '1',
                    categoryCode: '1',
                    categoryName: '品类名称',
                    categoryStatus: '品类状态'
                  }
                ]}
              />
            )
          },
          {
            key: '2',
            label: '附件(2)',
            children: (
              <ATable
                scroll={{
                  x: 1600
                }}
                columns={[
                  {
                    title: '文件编号',
                    dataIndex: 'fileCode'
                  },
                  {
                    title: '附件名称',
                    dataIndex: 'fileName'
                  },
                  {
                    title: '附件大小 （MB）',
                    dataIndex: 'fileSize'
                  },
                  {
                    title: '上传人',
                    dataIndex: 'uploader'
                  },
                  {
                    title: '上传时间',
                    dataIndex: 'uploadTime'
                  },
                  {
                    title: '文件类型',
                    dataIndex: 'fileType'
                  },
                  {
                    title: '文件生效日期',
                    dataIndex: 'effectiveDate'
                  },
                  {
                    title: '文件失效日期',
                    dataIndex: 'expiryDate'
                  },
                  {
                    title: '备注',
                    dataIndex: 'remark'
                  }
                ]}
              />
            )
          }
        ]}
      />
      <AModal
        open={open}
        onCancel={close}
        title="上传附件"
      >
        <div className="m-4">
          <AUpload.Dragger
            rootClassName="h-[650px]"
            name="file"
            multiple
            customRequest={({ file, onSuccess }) => {
              console.log(file)
              onSuccess?.(undefined)
            }}
          >
            <MaterialSymbolsDriveFolderUploadOutlineRounded className="mx-auto my-12 text-[86px] opacity-10" />
            <p className="ant-upload-hint">支持单击或拖动附件（50MB以下）到此区域进行上传</p>
          </AUpload.Dragger>
        </div>
      </AModal>
    </>
  )
}
