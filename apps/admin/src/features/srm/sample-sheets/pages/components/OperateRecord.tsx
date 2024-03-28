export default function OperateRecords() {
  const { open, openRead, close } = useModal()
  return (
    <>
      <AButton
        type="link"
        onClick={openRead}
      >
        操作记录
      </AButton>
      <RpModal
        open={open}
        onCancel={close}
        onOk={close}
      >
        <div>操作记录</div>
      </RpModal>
    </>
  )
}
