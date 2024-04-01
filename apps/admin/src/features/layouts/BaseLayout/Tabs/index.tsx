import type { DragEndEvent } from '@dnd-kit/core'
import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core'
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { ComponentPropsWithoutRef, CSSProperties } from 'react'
import { cloneElement } from 'react'

import { getRouterStaticData } from '@/shared/router'

interface DraggableTabPaneProps extends ComponentPropsWithoutRef<'div'> {
  'data-node-key': string
}

// eslint-disable-next-line unused-imports/no-unused-vars
const DraggableTabNode = ({ className, ...props }: DraggableTabPaneProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props['data-node-key']
  })

  const style: CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleX: 1 }),
    transition,
    cursor: 'move'
  }

  return cloneElement(props.children as React.ReactElement, {
    ref: setNodeRef,
    style,
    ...attributes,
    ...listeners
  })
}

export default function Tabs() {
  const { t } = useTranslation()
  const { Layout } = ATheme.useToken().token!
  const tabStore = useTabStore()
  const router = useRouter()
  const navigate = useNavigate()

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove'
  ) => {
    if (action === 'remove' && typeof targetKey === 'string') {
      tabStore.removeRecordByPath(targetKey)
      const historyRecords = tabStore.records
      if (historyRecords.length > 0) {
        const lastRecord = historyRecords.at(-1)
        if (lastRecord) {
          navigate({ to: lastRecord.path })
        }
      }
    }
  }

  const sensor = useSensor(PointerSensor, { activationConstraint: { distance: 50 } })

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      const activeIndex = tabStore.records.findIndex((i) => i.path === active.id)
      const overIndex = tabStore.records.findIndex((i) => i.path === over?.id)
      const newRecords = arrayMove(tabStore.records, activeIndex, overIndex)
      tabStore.setRecords(newRecords)
    }
  }

  return (
    <ATabs
      className="border-b border-gray-300 dark:border-gray-950"
      style={{
        backgroundColor: Layout!.headerBg,
        paddingTop: 4,
        borderBottom: 0
      }}
      tabBarStyle={{
        marginBottom: 0,
        height: 36,
        paddingLeft: 4
      }}
      tabBarGutter={4}
      type="editable-card"
      hideAdd
      activeKey={router.state.location.href}
      onEdit={onEdit}
      size="small"
      items={tabStore.records.map(({ path }) => {
        // 需要将 query 参数去掉才能匹配到路由配置
        const { title, icon } = getRouterStaticData(path.replace(/\?.*$/, ''))
        return {
          label: (
            <ADropdown
              key={path}
              trigger={['contextMenu']}
              menu={{
                items:
                  path === '/'
                    ? []
                    : [
                        {
                          label: t('CLOSE.OTHER.TAGS'),
                          key: 'close-others',
                          onClick: () => {
                            tabStore.clearRecords()
                            tabStore.addRecordByPath(path)
                          }
                        },
                        {
                          label: t('CLOSE.ALL.TAGS'),
                          key: 'close-all',
                          onClick: () => {
                            tabStore.clearRecords()
                            navigate({ to: '/' })
                          }
                        }
                      ]
              }}
            >
              <Link
                className="cursor-pointer !text-inherit"
                to={path}
              >
                <div className="flex items-center space-x-1 text-sm">
                  <div className="mb-0.5">{icon && icon}</div>
                  <span>{I18nUtils.getText(title)}</span>
                </div>
              </Link>
            </ADropdown>
          ),
          key: path,
          closable: path !== '/'
        }
      })}
      renderTabBar={(tabBarProps, DefaultTabBar) => (
        <DndContext
          sensors={[sensor]}
          onDragEnd={onDragEnd}
        >
          <SortableContext
            items={tabStore.records.map((i) => i.path)}
            strategy={horizontalListSortingStrategy}
          >
            <DefaultTabBar {...tabBarProps}>
              {(node) => (
                <DraggableTabNode
                  {...node.props}
                  key={node.key}
                >
                  {node}
                </DraggableTabNode>
              )}
            </DefaultTabBar>
          </SortableContext>
        </DndContext>
      )}
    />
  )
}
