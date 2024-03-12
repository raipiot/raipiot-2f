import type { MenuVo } from '@raipiot-2f/api'

export function updateMenuChildrenByParentId(
  parentId: string,
  newChildren: MenuVo[],
  menus: MenuVo[] = []
): MenuVo[] {
  return menus.map((menu) => {
    if (menu.id === parentId) {
      return {
        ...menu,
        children: [...newChildren]
      }
    }
    if (menu.children && menu.children.length > 0) {
      return {
        ...menu,
        children: updateMenuChildrenByParentId(parentId, newChildren, menu.children)
      }
    }
    return menu
  })
}
