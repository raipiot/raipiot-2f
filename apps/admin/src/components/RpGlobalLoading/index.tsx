export default function RpGlobalLoading() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <ASpin size="large" />
      <span className="mb-1 mt-4 text-xl">{BrandConfig.companyName} SRM</span>
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        Powered by {TeamConfig.teamName}
      </div>
    </main>
  )
}
