import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_base/dev/edit-table')({
  component: () => (
    <div>
      <RpEditTable title={<h1>Edit Table</h1>} />
    </div>
  ),
  staticData: {
    title: 'Edit Table',
    icon: <MaterialSymbolsTableRowsNarrowOutlineSharp />
  }
})
