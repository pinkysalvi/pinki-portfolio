import { useInView } from '../hooks'

// Fades its children up when they scroll into view.
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
