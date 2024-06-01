export const Card = ({children}: {children: React.ReactNode}) => {
  const cardStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '100px',
    margin: '10px',
    border: '1px solid #ddd',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={cardStyle}>
      {children}
    </div>
  )
}