import type { MenuVo } from '@raipiot-2f/api'

export function updateMenuChildrenByParentId(
  menus: MenuVo[],
  parentId: string,
  newChildren: MenuVo[]
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
        children: updateMenuChildrenByParentId(menu.children, parentId, newChildren)
      }
    }
    return menu
  })
}
