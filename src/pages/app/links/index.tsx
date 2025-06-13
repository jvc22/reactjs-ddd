import { LinksTable } from './links-table'
import { Options } from './options'
import { SectionCards } from './section-cards'

export function LinksPage() {
  return (
    <>
      <title>Dashboard | shrink.er</title>

      <div className="@container/main mx-auto flex max-w-[1080px] flex-col gap-6">
        <SectionCards />
        <Options />
        <LinksTable />
      </div>
    </>
  )
}
