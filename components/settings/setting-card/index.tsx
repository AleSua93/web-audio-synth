interface SettingCardProps {
  children: React.ReactNode
  styles?: string
}

const SettingCard = ({ children, styles }: SettingCardProps) => {

  return (
    <div className={`${styles} border-gray-200 p-6 text-white`}>
      {children}
    </div>
  )
}

export default SettingCard