interface SettingCardProps {
  children: React.ReactNode
}

const SettingCard = ({ children }: SettingCardProps) => {
  return (
    <div className="bg-gray-200 border-2 border-gray-700 p-2 rounded">
      {children}
    </div>
  )
}

export default SettingCard