function RpGlobalLoading() {
  return (
    <main className="absolute inset-0 m-auto flex flex-col items-center justify-center">
      <ASpin size="large" />
      <span className="mb-1 mt-4 text-xl">{AppMetadata.appName}</span>
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        Powered by {BrandConfig.companyName}
      </div>
    </main>
  )
}
export default RpGlobalLoading
