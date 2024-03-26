import { invalidateListQuery } from '../invalidates'
import { useExportUserMutation, useImportUserMutation } from '../mutations'

export function ImportDataModal() {
  const { openCreate, open, close } = useModal()
  const { operateSuccess, message } = useMessage()
  const importMutation = useImportUserMutation()
  const exportMutation = useExportUserMutation()
  const { t } = useTranslation(['COMMON', 'SYSTEM/USERS'])
  const [isCovered, setIsCovered] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const onCancel = () => {
    close()
    setFile(null)
    setIsCovered(false)
  }
  const onOk = () => {
    if (!file) {
      message.warning(t('SYSTEM/USERS:TEMPLATE.UPLOAD'))
      return
    }
    importMutation.mutate(
      { file, isCovered },
      {
        onSuccess: () => {
          operateSuccess()
          invalidateListQuery()
          onCancel()
        }
      }
    )
  }

  return (
    <>
      <RpButton
        variant="import"
        onClick={openCreate}
      />
      <AModal
        open={open}
        onOk={onOk}
        title={t('IMPORT')}
        onCancel={onCancel}
        destroyOnClose
      >
        <AForm
          labelCol={{ span: 5 }}
          initialValues={{ isCovered: false }}
        >
          <AForm.Item
            label={
              <APopover content={t('SYSTEM/USERS:UPLOAD.TIP')}>
                <AFlex>
                  {t('SYSTEM/USERS:TEMPLATE.UPLOAD')}
                  <MaterialSymbolsContactSupportOutlineRounded />
                </AFlex>
              </APopover>
            }
            required
            className="relative"
          >
            <AUpload
              accept=".xlsx,.xls"
              maxCount={1}
              listType="text"
              multiple={false}
              customRequest={(options) => {
                // 直接调用上传接口
                setFile(options.file as File)
              }}
            >
              <RpButton
                variant="import"
                type="primary"
              />
            </AUpload>
          </AForm.Item>
          <AForm.Item label={t('SYSTEM/USERS:DATA.COVER')}>
            <ASwitch
              checkedChildren={t('Y')}
              unCheckedChildren={t('N')}
              checked={isCovered}
              onChange={(checked) => setIsCovered(checked)}
            />
          </AForm.Item>
          <AForm.Item label={t('SYSTEM/USERS:TEMPLATE.DOWNLOAD')}>
            <RpButton
              typeof="export"
              disabled={exportMutation.isPending}
              type="link"
              onClick={() => exportMutation.mutate()}
            >
              <AFlex gap={4}>
                <MaterialSymbolsDocsOutline />
                {t('DOWNLOAD')}
              </AFlex>
            </RpButton>
          </AForm.Item>
        </AForm>
      </AModal>
    </>
  )
}
