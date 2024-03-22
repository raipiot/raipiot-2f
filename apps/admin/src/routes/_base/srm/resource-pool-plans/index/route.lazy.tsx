import type { ResourcePoolPlanVo } from '@raipiot-2f/api'

export const Route = createLazyFileRoute('/_base/srm/resource-pool-plans/')({
  component: Component
})

function Component() {
  const { createModalForm } = useFormCreator<ResourcePoolPlanVo>()

  const items = createModalForm([
    {
      type: 'collapse-item',
      collapseItemProps: {
        label: '测试'
      },
      items: [
        {
          type: 'row',
          items: [
            {
              type: 'input',
              formItemProps: {
                label: '资源池名称',
                name: 'resourcePoolName'
              }
            },
            {
              type: 'input',
              formItemProps: {
                label: '资源池名称',
                name: 'resourcePoolName'
              }
            },
            {
              type: 'input',
              formItemProps: {
                label: '资源池名称',
                name: 'resourcePoolName'
              }
            }
          ]
        }
      ]
    },
    {
      type: 'collapse-item',
      collapseItemProps: { label: '测试' },
      items: [
        {
          type: 'row',
          items: [
            {
              type: 'input',
              formItemProps: {
                label: '资源池名称',
                name: 'resourcePoolName'
              }
            },
            {
              type: 'input',
              formItemProps: {
                label: '资源池名称',
                name: 'resourcePoolName'
              }
            },
            {
              type: 'input',
              formItemProps: {
                label: '资源池名称',
                name: 'resourcePoolName'
              }
            }
          ]
        },
        {
          type: 'collapse-item',
          items: [
            {
              type: 'input'
            }
          ]
        },
        {
          type: 'input'
        },
        {
          type: 'input'
        }
      ]
    }
  ])

  return (
    <RpPageContainer>
      <RpDynamicForm items={items} />
    </RpPageContainer>
  )
}
