export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  return [{ id: '10475' }, { id: '10474' }]
}

async function getQuest(id: string) {
  const res = await fetch(`http://192.168.1.10:8087/api/v1/quests/${id}`, { cache: 'no-store' })
  const quest = await res.json()
 
  return quest
}

export default async function Layout({
  children, params: { id }
}: {
  children: React.ReactNode, params: { id: string }
}) {

  const quest = await getQuest(id);
  

  return (
    <div className="challenge">   
      {children}
    </div>
  )
}