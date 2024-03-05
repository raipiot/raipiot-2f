import type { ModalProps } from 'antd'

export function UserAgreement(props: ModalProps) {
  const { t } = useTranslation(['AUTH'])

  return (
    <AModal
      title={t('THE.USER.AGREEMENT')}
      footer={null}
      {...props}
    >
      <div>爱签不签</div>
    </AModal>
  )
}
